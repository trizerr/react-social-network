import {connect} from "react-redux";
import User from "./User/User";
import {
    follow, setFetching,
    setCurrentPage,
    setTotalCount,
    setUsers,
    unfollow
} from "../../redux/UsersReducer";
import Users from "./Users";
import store from "../../redux/redux-store";
import React from "react";
import * as axios from "axios";
import Loader from "../Common/Loader/Loader";

class UsersAPI extends React.Component{
    componentDidMount() {

        if(this.props.users.length===0){ //setting users to state if not set
            this.props.setFetching(true);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`,
                {withCredentials : true,
                    headers : {  'API-KEY': '960a5064-17c0-4d42-9bc1-fb960b99d4ff' } }).then(
                response =>{
                    this.props.setFetching(false);
                    this.props.setUsers(response.data.items);
                    this.props.setTotalCount(response.data.totalCount);
                }
            );
        }

    }
    pageChanged(p){ // method for changing page
        debugger;
        this.props.setCurrentPage(p);
        this.props.setFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${p}`,
            {withCredentials : true,
                headers : {  'API-KEY': '960a5064-17c0-4d42-9bc1-fb960b99d4ff' } }).then(
            response =>{
                this.props.setFetching(false);
                this.props.setUsers(response.data.items);
            }
        );
    }
    render(){
        return <>
            {this.props.isFetching ? <Loader/> : null}
        <Users currentPage={this.props.currentPage}
                      users={this.props.users}
                      pageChanged={this.pageChanged.bind(this)}
                      follow={this.props.follow}
                        unfollow={this.props.unfollow}/>
        </>
    }
}


let mapStateToProps=(state)=>{
    return {users:state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        key:state.global};
}
/*
let mapDispatchToProps=(dispatch)=>{
    let follow = (id) =>{
        let action = followActionCreator(id);
        dispatch(action);
    }
    let unfollow = (id) =>{
        let action = unfollowActionCreator(id);
        dispatch(action);
    }
    let setUsers = (users) =>{
        dispatch(setUsersAC(users));
    }
    let setTotalCount=(count)=>{
        debugger;
        dispatch(setTotalCountAC(count));
    }
    let setCurrentPage = (page) =>{
        dispatch(setCurrentPageAC(page));
    }
    let setFetching = (fetching) =>{
        dispatch(isFetchingAC(fetching));
    }
    return {follow, unfollow, setUsers, setTotalCount, setCurrentPage,setFetching}
}
*/


let UsersContainerr = connect(mapStateToProps,
    {follow, unfollow, setUsers, setTotalCount, setCurrentPage,setFetching})(UsersAPI); //giving state and action creators to users api
export default UsersContainerr;
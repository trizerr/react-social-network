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
import {usersApi} from "../../api/api";

class UsersAPI extends React.Component{
    componentDidMount() {
        if(this.props.users.length===0){ //setting users to state if not set
            this.props.setFetching(true);
            usersApi.getUsers(this.props.pageSize,this.props.currentPage).then(
                data =>{
                    this.props.setFetching(false);
                    this.props.setUsers(data.items);
                    this.props.setTotalCount(data.totalCount);
                }
            )
        }
    }
    pageChanged(p){ // method for changing page
        debugger;
        this.props.setCurrentPage(p);
        this.props.setFetching(true);
        usersApi.getUsers(this.props.pageSize,p).then(
            data =>{
                this.props.setFetching(false);
                this.props.setUsers(data.items);
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
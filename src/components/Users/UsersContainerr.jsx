import {connect} from "react-redux";
import {
    follow, unfollow, getUsers, usersPageChange
} from "../../redux/UsersReducer";
import Users from "./Users";
import React from "react";
import Loader from "../Common/Loader/Loader";

class UsersAPI extends React.Component{
    componentDidMount() {
      this.props.getUsers(this.props.pageSize, this.props.currentPage) //loading users
    }
    pageChanged(p){ // method for changing page
        this.props.usersPageChange(this.props.pageSize,p)
    }
    render(){
        return <>
            {this.props.isFetching ? <Loader/> : null}
            <Users currentPage={this.props.currentPage}
                users={this.props.users}
                pageChanged={this.pageChanged.bind(this)}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                isFollowingInProgress={this.props.isFollowingInProgress}
            />
        </>
    }
}

let mapStateToProps=(state)=>{
    return {users:state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowingInProgress: state.usersPage.isFollowingInProgress
    };
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
    {follow, unfollow, getUsers, usersPageChange})(UsersAPI); //giving state and callbacks to users api
export default UsersContainerr;
import {connect} from "react-redux";
import User from "./User/User";
import {
    followActionCreator,
    setCurrentPageAC,
    setTotalCountAC,
    setUsersAC,
    unfollowActionCreator
} from "../../redux/UsersReducer";
import Users from "./Users";

let mapStateToProps=(state)=>{
    debugger;
    return {users:state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage};
}
let mapDispatchToProps=(dispatch)=>{
    let follow = (id) =>{
        let action = followActionCreator(id);
        debugger;
        dispatch(action);
    }
    let unfollow = (id) =>{
        let action = unfollowActionCreator(id);
        debugger;
        dispatch(action);
    }
    let setUsers = (users) =>{
        debugger;
        dispatch(setUsersAC(users));
    }
    let setTotalCount=(count)=>{
        dispatch(setTotalCountAC(count));
    }
    let setCurrentPage = (page) =>{
        dispatch(setCurrentPageAC(page));
    }
    return {follow, unfollow, setUsers, setTotalCount, setCurrentPage}
}
let UsersContainerr = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainerr;
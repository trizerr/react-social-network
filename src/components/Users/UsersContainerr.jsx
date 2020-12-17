import {connect} from "react-redux";
import User from "./User/User";
import {followActionCreator, setUsersAC, unfollowActionCreator} from "../../redux/UsersReducer";
import Users from "./Users";

let mapStateToProps=(state)=>{
    debugger;
    return {users:state.usersPage.users};
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
    return {follow, unfollow, setUsers}
}
let UsersContainerr = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainerr;
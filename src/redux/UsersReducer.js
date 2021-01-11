import {usersApi} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const IS_FETCHING = 'IS_FETCHING';
const IS_FOLLOWING_IN_PROGRESS= 'IS_FOLLOWING_IN_PROGRESS';

let initialState = {
  users:[],
  totalCount:0,
  currentPage: 1,
  pageSize:5,
  isFetching:false,
  isFollowingInProgress:[]
}


export let UsersReducer = (state=initialState, action) =>{
    switch(action.type){
        case FOLLOW:
            return {
                ...state,
                users:state.users.map(u => {
                    if(u.id===action.userId){
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users:state.users.map(u => {
                    if(u.id===action.userId){
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return { ...state, users: [ ...action.users ]};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.page};
        case SET_TOTAL_COUNT:
            debugger;
            return {...state, totalCount: action.count};
        case IS_FETCHING:
            return {...state, isFetching: action.isFetching};
        case IS_FOLLOWING_IN_PROGRESS:
            debugger;
                return{
                    ...state,
                    isFollowingInProgress:action.isInProgress ?
                        [...state.isFollowingInProgress, action.id] :
                        state.isFollowingInProgress.filter(id => id !== action.id)
                }
        default:
            return state;
    }
}

//action Creators
export let followSuccess = (userId) =>({type:FOLLOW, userId})
export let unfollowSuccess = (userId) =>({type:UNFOLLOW, userId})
export let setUsers = (users) =>({type:SET_USERS, users})
export let setCurrentPage = (page) =>({type:SET_CURRENT_PAGE, page:page});
export let setTotalCount = (count) =>({type:SET_TOTAL_COUNT, count:count});
export let setFetching = (isFetching) =>({type:IS_FETCHING, isFetching});
let followingProgress = (isInProgress, id) =>({type:IS_FOLLOWING_IN_PROGRESS, isInProgress, id });
//thunk creators
export let getUsers = (pageSize, currentPage) =>{ //thunkCreator
    return (dispatch) =>{ //thunk
        dispatch(setFetching(true)); //thunk is dispatching actions (it gets dispatch from react-redux connect)
        usersApi.getUsers(pageSize,currentPage).then(
            data =>{
                dispatch(setFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalCount(data.totalCount));
            }
        )
    }
}

export let usersPageChange = (pageSize, p) =>{
    return (dispatch) => {
        dispatch(setCurrentPage(p));
        dispatch(setFetching(true));
        usersApi.getUsers(pageSize, p).then(
            data =>{
                dispatch(setFetching(false));
                dispatch(setUsers(data.items));
            }
        );
    }
}

export let unfollow = (id) =>{
    return (dispatch) => {
        dispatch(followingProgress(true, id));
        usersApi.unfollow(id).then(
            data =>{
                if(data.resultCode === 0){
                    dispatch(unfollowSuccess(id));
                    dispatch(followingProgress(false, id));
                }
            }
        );
    }
}

export let follow = (id) =>{
    return (dispatch) => {
        dispatch(followingProgress(true, id));
        usersApi.follow(id).then(
            data =>{
                if(data.resultCode === 0){
                    dispatch(followSuccess(id));
                    dispatch(followingProgress(false, id));
                }
            }
        );
    }
}


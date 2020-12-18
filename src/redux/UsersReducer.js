const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
let initialState = {
  users:[],
  totalCount:0,
  currentPage: 1,
  pageSize:5
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
            return {...state, totalCount: action.count};
        default:
            return state;
    }
}

export let followActionCreator = (id) =>{
    return {
        type:FOLLOW,
        userId:id
    }
}
export let unfollowActionCreator = (id) =>{
    return {
        type:UNFOLLOW,
        userId:id
    }
}
export let setUsersAC = (users) =>{
    debugger;
    return {
        type:SET_USERS,
        users
    }
}
export let setCurrentPageAC = (page) =>({type:SET_CURRENT_PAGE, page});
export let setTotalCountAC = (count) =>({type:SET_TOTAL_COUNT, count});
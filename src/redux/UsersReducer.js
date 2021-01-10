const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const IS_FETCHING = 'IS_FETCHING';
let initialState = {
  users:[],
  totalCount:0,
  currentPage: 1,
  pageSize:5,
  isFetching:false
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
        default:
            return state;
    }
}

export let follow = (id) =>{
    return {
        type:FOLLOW,
        userId:id
    }
}
export let unfollow = (id) =>{
    return {
        type:UNFOLLOW,
        userId:id
    }
}
export let setUsers = (users) =>{
    return {
        type:SET_USERS,
        users
    }
}
export let setCurrentPage = (page) =>({type:SET_CURRENT_PAGE, page:page});
export let setTotalCount = (count) =>({type:SET_TOTAL_COUNT, count:count});
export let setFetching = (isFetching) =>({type:IS_FETCHING, isFetching})
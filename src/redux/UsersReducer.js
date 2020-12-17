const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
let initialState = {
  users:[]
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
            return { ...state, users: [ ...state.users, ...action.users ]}
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
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
let initialState ={
    users:[
        {id:1, name:'Denys', followed:true, description:'Just another person', country:'Ukraine', city:'Kyiv'},
        {id:2, name:'Nazar', followed:false, description:'brother of Denys. Love anime', country:'Ukraine', city:'Lutsk'},
        {id:3, name:'Ben', followed:true, description:'oh sorry I am no real person', country:'Poland', city:'Warsaw'},
        {id:4, name:'Bill', followed:true, description:'Hi! I am Gates. Love this soc. network', country:'USA', city:'Las Vegas'},
    ]
};


export let UsersReducer = (state = initialState, action) =>{
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
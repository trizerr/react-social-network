let SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId : null,
    email : null,
    login : null,
    isLoggedIn : false
}


export let authReducer = (state=initialState, action) =>{
    switch(action.type){
        case SET_USER_DATA:
            return{
                ...state,
                ...action.data,
                isLoggedIn: true
            }
        default:
            return state;
    }
}

export let setUserData = (userId, email, login) =>({type:SET_USER_DATA, data:{userId,email,login}});

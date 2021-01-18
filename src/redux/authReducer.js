import {authApi} from "../api/api";

let SET_USER_DATA = 'SET_USER_DATA';
let LOG_OUT = 'LOG_OUT';
let WRONG_PASSWORD = 'WRONG_PASSWORD';

let initialState = {
    userId : null,
    email : null,
    login : null,
    isLoggedIn : false,
    wrongPassword : false
}

export let authReducer = (state=initialState, action) =>{
    switch(action.type){
        case SET_USER_DATA:
            return{
                ...state,
                ...action.data,
                isLoggedIn: true,
                wrongPassword:false
            }
        case LOG_OUT:
            return{
                ...initialState
            }
        case WRONG_PASSWORD:
            return{
                ...initialState,
                wrongPassword:true
            }
        default:
            return state;
    }
}

export let setUserData = (userId, email, login) =>({type:SET_USER_DATA, data:{userId,email,login}});
let logOut = () =>({type:LOG_OUT});
let wrongPassword = () =>({type:WRONG_PASSWORD})

export let authMe = () =>{
    return (dispatch) =>{
        authApi.authMe().then(
            response =>{
                if(response.resultCode===0){
                    let {id, email, login} = response.data;
                    dispatch(setUserData(id, email, login));
                }else{
                    dispatch(logOut())
                }
            }
        );
    }
}

export let login = (formData) =>{
    return (dispatch) =>{
        authApi.login(formData).then(
            response =>{
                if(response.resultCode === 0){
                    authMe();
                }
                if(response.resultCode === 1){
                    dispatch(wrongPassword());
                }
            }
        )
    }
}

export let logout = () =>{
    return (dispatch) =>{
        authApi.logout().then(
            response =>{
                if(response.resultCode === 0){
                    dispatch(logOut());
                }
            }
        )
    }
}



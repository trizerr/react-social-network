import {profileApi} from "../api/api";

const ADD_POST = 'ADD-POST';
const PAGE_INPUT_CHANGE = 'PAGE-INPUT-CHANGE';
const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    postData : [
        {id: 1, message: "My first post", likesCount: 15},
        {id: 2, message: "Samurai path", likesCount: 11},
        {id: 3, message: "just another post", likesCount: 19}
    ],
    friends:[
        {name: "Denys", id: 1},
        {name: "Andrew", id: 2},
        {name: "ddd", id: 3},
        {name: "Andressaw", id: 4},
        {name: "Andddswrew", id: 5},
        {name: "Bogdan", id: 6}
    ],
    profile:null,
    status:null
}

export let profileReducer = (state = initialState, action) =>{
    switch(action.type) {
        case ADD_POST:{
            let object = {
                message: action.message,
                id: 4,
                likesCount: 1
            };
            let newState =
                {...state,
                 postData:[...state.postData, object]
                };
            newState = profileReducer(newState,{type: 'PAGE-INPUT-CHANGE', text: ''});
            return newState;
        }
        case PAGE_INPUT_CHANGE:{
            return {
                ...state,
                postInput: action.text
            };
        }
        case SET_PROFILE:{

            return {
                ...state,
                profile:action.profile
            }
        }
        case SET_STATUS:{
            return {
                ...state,
                status:action.status
            }
        }
        default:
            return state;

    }

}
export let addPostActionCreator = (message) => ({type:ADD_POST, message})
export let pageInputChangeActionCreator = (text) =>
    ({type:PAGE_INPUT_CHANGE, text:text});
export let setProfileAC = (profile) => ({type:SET_PROFILE, profile})
let setStatus = (status) =>({type:SET_STATUS, status});

export let setProfile = (userId) =>{
    return (dispatch) =>{
        profileApi.setProfile(userId).then(
            data =>{
                dispatch(setProfileAC(data));
            }
        );
        profileApi.getStatus(userId).then(
          data =>{
              dispatch(setStatus(data))
          }
        );
    }
}
export let updateStatus = (status) =>{
    return (dispatch) =>{
        profileApi.updateStatus(status).then(
            data =>{
                dispatch(setStatus(status))
            }
        );
    }
}
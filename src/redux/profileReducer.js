import {profileApi} from "../api/api";

const ADD_POST = 'ADD-POST';
const PAGE_INPUT_CHANGE = 'PAGE-INPUT-CHANGE';
const SET_PROFILE = 'SET_PROFILE';

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
    postInput:'',
    profile:null
}

export let profileReducer = (state = initialState, action) =>{
    switch(action.type) {
        case ADD_POST:{
            let object = {
                message: state.postInput,
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
            debugger;
            return {
                ...state,
                profile:action.profile
            }
        }
        default:
            return state;

    }

}
export let addPostActionCreator = () => ({type:ADD_POST})
export let pageInputChangeActionCreator = (text) =>
    ({type:PAGE_INPUT_CHANGE, text:text});
export let setProfileAC = (profile) => ({type:SET_PROFILE, profile})

export let setProfile = (userId) =>{
    return (dispatch) =>{
        profileApi.setProfile(userId).then(
            data =>{
                dispatch(setProfileAC(data));
            }
        );
    }
}
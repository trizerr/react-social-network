const ADD_POST = 'ADD-POST';
const PAGE_INPUT_CHANGE = 'PAGE-INPUT-CHANGE';

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
    postInput:''
}

export let profileReducer = (state = initialState, action) =>{
    debugger;
    switch(action.type) {
        case ADD_POST:{
            let object = {
                id: 4,
                message: state.postInput,
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
        default:
            return state;

    }

}
export let addPostActionCreator = () => ({type:ADD_POST})
export let pageInputChangeActionCreator = (text) =>
    ({type:PAGE_INPUT_CHANGE, text:text})
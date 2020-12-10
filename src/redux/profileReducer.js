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
    switch(action.type) {
        case ADD_POST:
            let object = {
                id: 4,
                message: state.postInput,
                likesCount: 1
            };
            state.postData.push(object); // add new post
            state = profileReducer(state,{type: 'PAGE-INPUT-CHANGE', text: ''});
            break;
        case PAGE_INPUT_CHANGE:
            state.postInput = action.text; //update input text
            break;
    }
    return state;
}
export let addPostActionCreator = () => ({type:ADD_POST})
export let pageInputChangeActionCreator = (text) =>
    ({type:PAGE_INPUT_CHANGE, text:text})
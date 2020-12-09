const ADD_POST = 'ADD-POST';
const PAGE_INPUT_CHANGE = 'PAGE-INPUT-CHANGE';
export let profileReducer = (state, action) =>{
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
const MESSAGE_INPUT_CHANGE = 'MESSAGE-INPUT-CHANGE';
const ADD_MESSAGE = 'ADD-MESSAGE';
export let messagesReducer = (state, action) =>{
    switch(action.type) {
        case ADD_MESSAGE:
            let MESSAGE ={
                who : 'me',
                id:4,
                text:state.messageInput,
            };
            state.messagesData.push(MESSAGE);
            state = messagesReducer(state,{type:'MESSAGE-INPUT-CHANGE',text:''});
            break;
        case MESSAGE_INPUT_CHANGE:
            state.messageInput=action.text; //update messages input text
            break;
    }
    return state;
}
export let addMessageActionCreator = () => ({type:ADD_MESSAGE})
export let messageInputChangeActionCreator = (text) =>
    ({type:MESSAGE_INPUT_CHANGE, text:text})
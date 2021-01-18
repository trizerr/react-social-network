const MESSAGE_INPUT_CHANGE = 'MESSAGE-INPUT-CHANGE';
const ADD_MESSAGE = 'ADD-MESSAGE';
let initialState = {
    messagesData : [
        {who: "me", id: 1, text: "Hi"},
        {who: "friend", id: 2, text: "Hello"},
        {who: "me", id: 3, text: "Fine, you?"},
        {who: "friend", id: 4, text: "Learning React"}
    ],
    messagesPeopleData : [
        {name: "Denys", id: 1},
        {name: "Andrew", id: 2},
        {name: "Bogdan", id: 3}
    ]
}

export let messagesReducer = (state = initialState, action) =>{
    switch(action.type) {
        case ADD_MESSAGE:{
            let MESSAGE ={
                who : 'me',
                id:4,
                text:action.message,
            };
            let newState =
                {
                    ...state,
                    messagesData:[...state.messagesData, MESSAGE],
                };
            newState = messagesReducer(newState,{type:'MESSAGE-INPUT-CHANGE',text:''});
            return newState;
        }
        case MESSAGE_INPUT_CHANGE:{
            return {
                ...state,
                messageInput: action.text
            };
        }
        default:
            return state;
    }
}
export let addMessageActionCreator = (message) => ({type:ADD_MESSAGE, message})
export let messageInputChangeActionCreator = (text) =>
    ({type:MESSAGE_INPUT_CHANGE, text:text})
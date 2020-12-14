import React from "react";
import {addMessageActionCreator, messageInputChangeActionCreator} from "../../../redux/messagesReducer";
import Input from "./Input";
import {connect} from "react-redux";


/*const InputContainer = (props) => {
    const send = () => {
        let action = addMessageActionCreator();
        props.store.dispatch(action);
    }
    const change = (text) => {
        let action = messageInputChangeActionCreator(text);
        props.store.dispatch(action)
    }
    let input = props.store.getState().messagePage.messageInput;
    return (
       <Input change={change} send={send}  input={input}/>
    );
}*/
let mapStateToProps = (state) => {
    let input = state.messagePage.messageInput;
    return{input};
}
let mapDispatchToProps = (dispatch) => {
    const send = () => {
        let action = addMessageActionCreator();
        dispatch(action);
    }
    const change = (text) => {
        let action = messageInputChangeActionCreator(text);
        dispatch(action)
    }
    return{
        send,
        change
    }
}

let InputContainer = connect(mapStateToProps, mapDispatchToProps)(Input);

export default InputContainer;
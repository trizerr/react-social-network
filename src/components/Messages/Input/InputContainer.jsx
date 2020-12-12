import s from './Input.module.scss';
import React from "react";
import {addMessageActionCreator, messageInputChangeActionCreator} from "../../../redux/messagesReducer";
import Input from "./Input";


const InputContainer = (props) => {
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
}

export default InputContainer;
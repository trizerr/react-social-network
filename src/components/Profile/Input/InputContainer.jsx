import React from "react";
import {addPostActionCreator, pageInputChangeActionCreator} from "../../../redux/profileReducer";
import Input from "./Input";

const InputContainer = (props) => {
    const send = () => {
        let action = addPostActionCreator();
        props.store.dispatch(action);
    }
    const change = (text) => {

        let action = pageInputChangeActionCreator(text);
        props.store.dispatch(action)
    }
    let input = props.store.getState().profilePage.postInput;
    return (
        <Input change={change} send={send} input={input}/>
    );
}
export default InputContainer;
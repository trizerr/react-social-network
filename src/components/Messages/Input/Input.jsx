import s from './Input.module.scss';
import React from "react";
import {addMessageActionCreator, messageInputChangeActionCreator} from "../../../redux/messagesReducer";

let inputElement = React.createRef();

const Input = (props) => {
    debugger;
    const send = () => {
        let action = addMessageActionCreator();
        props.dispatch(action);
    }
    const change = () => {
        let text = inputElement.current.value;
        let action = messageInputChangeActionCreator(text);
        props.dispatch(action)
    }
    return (
        <div className={s.postWrapper}>
            <input type="text" placeholder="Your news" ref={inputElement} onChange={change} value={props.input}/>

            <input type="button" value="Send" onClick={send} />
        </div>
    );
}

export default Input;
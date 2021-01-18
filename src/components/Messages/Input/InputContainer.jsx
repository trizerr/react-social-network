import React from "react";
import {addMessageActionCreator, messageInputChangeActionCreator} from "../../../redux/messagesReducer";
import Input from "./../../Common/Input/Input";
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

}
let mapDispatchToProps = (dispatch) => {
    const send = (message) => {
        let action = addMessageActionCreator(message);
        dispatch(action);
    }
    return{
        send
    }
}

let InputContainer = connect(mapStateToProps, mapDispatchToProps)(Input);

export default InputContainer;
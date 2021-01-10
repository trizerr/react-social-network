import React from "react";
import {addPostActionCreator, pageInputChangeActionCreator} from "../../../redux/profileReducer";
import Input from "./../../Common/Input/Input";
import {connect} from "react-redux";




const mapStateToProps = (state) =>{
    let input = state.profilePage.postInput;
    return{
        input: input
    }
}

const mapDispatchToProps = (dispatch) =>{
    const send = () => {
        let action = addPostActionCreator();
       dispatch(action);
    }
    const change = (text) => {
        let action = pageInputChangeActionCreator(text);
        dispatch(action)
    }
    return{
        send:send,
        change:change
    }
}
const InputContainer = connect(mapStateToProps, mapDispatchToProps)(Input);


export default InputContainer;
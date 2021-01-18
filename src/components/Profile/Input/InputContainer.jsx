import React from "react";
import {addPostActionCreator, pageInputChangeActionCreator} from "../../../redux/profileReducer";
import Input from "./../../Common/Input/Input";
import {connect} from "react-redux";




const mapStateToProps = (state) =>{

}

const mapDispatchToProps = (dispatch) =>{
    const send = (message) => {
        let action = addPostActionCreator(message);
       dispatch(action);
    }
    const change = (text) => {
        let action = pageInputChangeActionCreator(text);
        dispatch(action)
    }
    return{
        send,
        change
    }
}
const InputContainer = connect(mapStateToProps, mapDispatchToProps)(Input);


export default InputContainer;
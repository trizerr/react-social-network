import s from './Input.module.scss';
import React from "react";

let inputElement = React.createRef();

const Input = (props) => {

    const onChange = () => {
        let text = inputElement.current.value;
        props.change(text);
    }
    const onClick = () =>{
        props.send();
    }
    return (
        <div className={s.postWrapper}>
            <input type="text" placeholder="Your news" ref={inputElement} onChange={onChange} value={props.input}/>

            <input type="button" value="Send" onClick={onClick} />
        </div>
    );
};

export default Input;
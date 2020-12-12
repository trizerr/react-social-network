import s from './Input.module.scss';
import React from "react";
let inputElement = React.createRef();

const Input = (props) => {
    let onChange =()=>{
        let text = inputElement.current.value;
        props.change(text);
    }

    return (
        <div className={s.postWrapper}>
            <input type="text" placeholder="Your news" ref={inputElement} onChange={onChange} value={props.input}/>

            <input type="button" value="Send" onClick={props.send} />
        </div>
    );
}

export default Input;
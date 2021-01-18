import s from './Input.module.scss';
import React from "react";
import {Form, Field} from 'react-final-form';
import {composeValidators, maxLengthCreator, required} from "../../../utils/validators";
import {InputField} from "../FormControls/FormControls";




const Input = (props) => {

    let onSubmit = (formData) =>{
        debugger;
        props.send(formData.message);
    }
    return (
        <div className={s.postWrapper}>
            <Form
                onSubmit={onSubmit}
                render={({handleSubmit}) => (
                    <form>
                        <Field type="text" placeholder="Your news"  component={InputField}
                               name={"message"} validate={composeValidators(required, maxLengthCreator(10))}/>
                        <input type="button" value="Send" onClick={handleSubmit} />
                    </form>
                    )}
                />

        </div>
    );
};

export default Input;
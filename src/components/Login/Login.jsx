import s from "./Login.module.scss";
import {Form, Field} from 'react-final-form';
import Input from "../Common/Input/Input";
import {InputField} from "../Common/FormControls/FormControls";
import {required} from "../../utils/validators";

export const Login = (props) => {
    debugger;
    return (
        <div className={s.login}>
            <div className={s.form}>
                <h1>Login</h1>
                <LoginForm {...props}/>
            </div>
        </div>
    );
}


const LoginForm = (props) => {
    debugger;
    let onSubmit = (formData) =>{
        debugger;
        console.log(formData);
        props.login(formData);
    }
    return (
        <Form
            onSubmit={onSubmit}
            render={({handleSubmit}) => (
                <form>
                    <Field placeholder={"Email"} name={"email"} component={InputField} validate={required}/><br/>
                    <Field placeholder={"Password"} name={"password"} component={InputField} validate={required}/><br/>
                    <div>
                        <label className={s.checkboxLabel}>Remember me
                            <Field type={"checkbox"} value={"Remember me"} component={"input"}
                                   className={s.checkbox} name={"rememberMe"}/><br/>
                        </label>
                    </div>
                    <button className={s.submit} onClick={handleSubmit} >Submit</button><br/>
                    {props.wrongPassword &&
                    <label>Password is incorrect</label>
                    }
                </form>
            )}
        />
    );
}
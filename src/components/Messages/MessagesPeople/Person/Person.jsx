
import s from './Person.module.scss'
import avatar from '../../../../img/avatar.png'
import {NavLink} from "react-router-dom";

const Person = (props) => {
    let path="/messages/"+props.id;
    return (
        <NavLink to={path}>
            <div className={s.person}>
                <img src={avatar} className={s.avatar}/>
                <span className={s.name}> {props.name}</span>
            </div>
        </NavLink>
    );
    }

    export default Person;
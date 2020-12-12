import s from './Friends.module.scss';
import avatar from "../../../img/avatar.png";
import {NavLink} from "react-router-dom";
import Friend from "./Friend/Friend";


const Friends = (props) => {
    return (
            <div className={s.friends}>
                {props.friendsElements}
            </div>
    );
}

export default Friends;
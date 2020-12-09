import s from './Friends.module.scss';
import avatar from "../../../img/avatar.png";
import {NavLink} from "react-router-dom";
import Friend from "./Friend/Friend";


const Friends = (props) => {
    let friendsElements = props.friends
        .map(el => <Friend name={el.name} id={el.id}/>);

    return (
            <div className={s.friends}>
                {friendsElements}
            </div>
    );
}

export default Friends;
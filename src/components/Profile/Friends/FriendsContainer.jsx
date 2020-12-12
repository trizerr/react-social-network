import avatar from "../../../img/avatar.png";
import {NavLink} from "react-router-dom";
import Friend from "./Friend/Friend";
import Friends from "./Friends";


const FriendsContainer = (props) => {
    let friendsElements = props.store.getState().profilePage.friends
        .map(el => <Friend name={el.name} id={el.id}/>);

    return (
        <Friends friendsElements={friendsElements}/>
    );
}

export default FriendsContainer;
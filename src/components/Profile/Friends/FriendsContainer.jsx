import avatar from "../../../img/avatar.png";
import {NavLink} from "react-router-dom";
import Friend from "./Friend/Friend";
import Friends from "./Friends";
import {connect} from "react-redux";


/*const FriendsContainer = (props) => {
    let friendsElements = props.store.getState().profilePage.friends
        .map(el => <Friend name={el.name} id={el.id}/>);

    return (
        <Friends friendsElements={friendsElements}/>
    );
}*/

let mapStateToProps = (state) =>{
    let friendsElements = state.profilePage.friends
        .map(el => <Friend name={el.name} id={el.id}/>);
    return {friendsElements}
}

let FriendsContainer = connect(mapStateToProps)(Friends);

export default FriendsContainer;
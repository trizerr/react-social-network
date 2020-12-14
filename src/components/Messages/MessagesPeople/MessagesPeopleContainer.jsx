import  Person from "./Person/Person";
import MessagesPeople from "./MessagesPeople";
import {connect} from "react-redux";

/*const MessagesPeopleContainer = (props) => {

    let messagesPeopleElements = props.store.getState().messagePage.messagesPeopleData
        .map(el => <Person name={el.name} id={el.id}/>);

    return (
       <MessagesPeople messagesPeopleElements={messagesPeopleElements} />
    );
}*/

let mapStateToProps = (state) =>{
    let messagesPeopleElements = state.messagePage.messagesPeopleData
        .map(el => <Person name={el.name} id={el.id}/>);
    return {messagesPeopleElements};
}

let  MessagesPeopleContainer = connect(mapStateToProps)(MessagesPeople);

export default MessagesPeopleContainer;
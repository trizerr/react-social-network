import Message from "./Message/Message";
import Dialog from "./Dialog";
import {connect} from "react-redux";

/*const DialogContainer = (props) => {
    let messagesElements = props.store.getState().messagePage.messagesData
        .map(el => <Message who={el.who} id={el.id} text={el.text}/>);
    return(
        <Dialog messagesElements={messagesElements}/>
    );
}*/
let mapStateToProps = (state) =>{
    let messagesElements = state.messagePage.messagesData
        .map(el => <Message who={el.who} id={el.id} text={el.text}/>);
    return {messagesElements};
}

let  DialogContainer = connect(mapStateToProps)(Dialog);
export default DialogContainer;
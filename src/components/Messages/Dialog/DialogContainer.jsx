import Message from "./Message/Message";
import Dialog from "./Dialog";

const DialogContainer = (props) => {
    let messagesElements = props.store.getState().messagePage.messagesData
        .map(el => <Message who={el.who} id={el.id} text={el.text}/>);
    return(
        <Dialog messagesElements={messagesElements}/>
    );
}

export default DialogContainer;
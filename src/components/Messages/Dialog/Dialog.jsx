import s from './Dialog.module.scss'
import Message from "./Message/Message";

const Dialog = () => {
    let messagesData = [
        {who:"me", id:1, text:"Hi"},
        {who:"friend", id:2, text:"Hello"},
        {who:"me", id:3, text:"Fine, you?"},
        {who:"friend", id:4, text:"Learning React"}
    ]
    let messagesElements = messagesData
        .map(el => <Message who={el.who} id={el.id} text={el.text}/>);
    return(
        <div>
            {messagesElements}
        </div>
    );
}

export default Dialog;
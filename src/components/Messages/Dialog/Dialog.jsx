import s from './Dialog.module.scss'
import Message from "./Message/Message";

const Dialog = (props) => {
    let messagesElements = props.messagesData
        .map(el => <Message who={el.who} id={el.id} text={el.text}/>);
    return(
        <div>
            {messagesElements}
        </div>
    );
}

export default Dialog;
import s from './Dialog.module.scss'
import Message from "./Message/Message";

const Dialog = (props) => {
    return(
        <div>
            {props.messagesElements}
        </div>
    );
}

export default Dialog;
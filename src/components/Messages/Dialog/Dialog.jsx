import s from './Dialog.module.scss'
import Message from "./Message/Message";

const Dialog = () => {
    return(
        <div>
            <Message who="me" text="Hi"/>
            <Message who="friend" text="Hello"/>
            <Message who="me" text="Fine, you?"/>
            <Message who="friend" text="Learning React"/>
        </div>
    );
}

export default Dialog;
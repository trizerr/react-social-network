import s from './Messages.module.scss';
import MessagesPeople from "./MessagesPeople/MessagesPeople";
import Dialog from "./Dialog/Dialog";
import Input from "./Input/Input";


const Messages = (props) => {
    return (
      <div className={s.content}>
          <div className={s.people}>
              <MessagesPeople messagesPeopleData={props.state.messagesPeopleData}/>
          </div>
        <Dialog messagesData={props.state.messagesData}/>
        <div className={s.input}>
            <Input input={props.state.messageInput} dispatch={props.dispatch}/>
        </div>

      </div>
    );
}

export default Messages;
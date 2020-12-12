import s from './Messages.module.scss';
import MessagesPeople from "./MessagesPeople/MessagesPeople";
import Dialog from "./Dialog/Dialog";
import Input from "./Input/Input";
import MessagesPeopleContainer from "./MessagesPeople/MessagesPeopleContainer";
import DialogContainer from "./Dialog/DialogContainer";
import InputContainer from "./Input/InputContainer";


const Messages = (props) => {
    return (
      <div className={s.content}>
          <div className={s.people}>
              <MessagesPeopleContainer store={props.store}/>
          </div>
        <DialogContainer store={props.store}/>
        <div className={s.input}>
            <InputContainer store={props.store}/>
        </div>
      </div>
    );
}

export default Messages;
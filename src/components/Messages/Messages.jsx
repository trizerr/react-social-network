import s from './Messages.module.scss';
import MessagesPeople from "./MessagesPeople/MessagesPeople";
import Dialog from "./Dialog/Dialog";
import MessagesPeopleContainer from "./MessagesPeople/MessagesPeopleContainer";
import DialogContainer from "./Dialog/DialogContainer";
import InputContainer from "./Input/InputContainer";


const Messages = (props) => {
    return (
      <div className={s.content}>
          <div className={s.people}>
              <MessagesPeopleContainer />
          </div>
        <DialogContainer />
        <div className={s.input}>
                <InputContainer />
        </div>
      </div>
    );
}

export default Messages;
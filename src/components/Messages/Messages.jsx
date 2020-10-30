import s from './Messages.module.scss';
import MessagesPeople from "./MessagesPeople/MessagesPeople";
import Dialog from "./Dialog/Dialog";


const Messages = () => {
    return (
      <div className={s.content}>
          <div className={s.people}>
              <MessagesPeople />
          </div>
        <Dialog />
      </div>
    );
}

export default Messages;
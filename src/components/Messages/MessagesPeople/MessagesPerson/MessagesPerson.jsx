import s from './MessagesPerson.module.scss'
import avatar from './../../../../img/avatar.png'
const MessagesPerson = (props) =>{
    return(
      <div className={s.person}>
              <img src={avatar} className={s.avatar}/>
                 <span className={s.name}> {props.name}</span>
      </div>
    );
}
export default MessagesPerson;
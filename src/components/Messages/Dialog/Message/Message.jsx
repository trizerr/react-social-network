import s from './Message.module.scss'
import avatar from './../../../../img/avatar.png'

const Message = (props) => {
    // eslint-disable-next-line eqeqeq
    let position='';
    let timePosition='';
    if(props.who==='me'){
         position = s['right'];
         timePosition=s['time-right'];
    }else{
       position = s['left'];
       timePosition=s['time-left'];
    }

    return(
        <div>
            <div className={s.container}>
                <img src={avatar} alt="Avatar" className={position}/>
                    <p>{props.text}</p>
                    <span className={timePosition}>11:00</span>
            </div>
        </div>

    );
}
export default Message;
import s from './MessagesPeople.module.scss'
import MessagesPerson from "./MessagesPerson/MessagesPerson";

const MessagesPeople = () =>{
    return(
        <div className={s.people}>
            <MessagesPerson name="Denys"/>
            <MessagesPerson name="Andrew"/>
            <MessagesPerson name="Bogdan"/>
        </div>
    );
}
export default MessagesPeople;
import s from './MessagesPeople.module.scss'

const MessagesPeople = (props) => {
    return (
        <div className={s.people}>
          {props.messagesPeopleElements}
        </div>
    );
}

/*
}*/
export default MessagesPeople;
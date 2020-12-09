import s from './MessagesPeople.module.scss'
import  Person from "./Person/Person";

const MessagesPeople = (props) => {


    let messagesPeopleElements = props.messagesPeopleData
        .map(el => <Person name={el.name} id={el.id}/>);

    return (
        <div className={s.people}>
          {messagesPeopleElements}
        </div>
    );
}

/*
}*/
export default MessagesPeople;
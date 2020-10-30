import s from './MessagesPeople.module.scss'
import  Person from "./MessagesPerson/Person";

const MessagesPeople = () => {
    let messagesPeopleData = [
        {name:"Denys", id:1},
        {name:"Andrew", id:2},
        {name:"Bogdan", id:3}
    ]

    let messagesPeopleElements = messagesPeopleData
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
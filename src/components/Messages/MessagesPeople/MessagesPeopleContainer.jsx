import  Person from "./Person/Person";
import MessagesPeople from "./MessagesPeople";

const MessagesPeopleContainer = (props) => {

    let messagesPeopleElements = props.store.getState().messagePage.messagesPeopleData
        .map(el => <Person name={el.name} id={el.id}/>);

    return (
       <MessagesPeople messagesPeopleElements={messagesPeopleElements} />
    );
}

export default MessagesPeopleContainer;
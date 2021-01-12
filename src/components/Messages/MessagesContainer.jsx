import React from "react";
import Messages from "./Messages";

class messagesContainer extends React.Component{
    render(){
        return <Messages/>
    }
}
let withAuthMessagesContainer = withAuthRedirect(messagesContainer);
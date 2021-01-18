import React from "react";
import Messages from "./Messages";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {connect} from "react-redux";

class MessagesContainer extends React.Component{
    render(){
        return <Messages {...this.props}/>
    }
}

let mapStateToProps = (state) =>({
    auth:state.auth.isLoggedIn
});

export default compose(withAuthRedirect, connect(mapStateToProps))(MessagesContainer);
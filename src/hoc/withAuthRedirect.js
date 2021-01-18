import React from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

let mapStateToProps = (state) =>({
    isLoggedIn: state.auth.isLoggedIn
});

export let withAuthRedirect = (Component) =>
{
    class RedirectComponent extends React.Component{
        render() {

           if(!this.props.isLoggedIn){

               return <Redirect to={'/login'}/>
           }else{
               return <Component {...this.props}/>
           }
        }
    }

    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent);
    return ConnectedRedirectComponent;
}
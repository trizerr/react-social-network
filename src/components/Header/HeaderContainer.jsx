import React from "react";
import Header from "./Header";
import {setUserData} from "../../redux/authReducer";
import * as axios from "axios";
import {connect} from "react-redux";
import {authApi} from "../../api/api";

class HeaderContainer extends React.Component{
    componentDidMount() {
        authApi.authMe().then(
            response =>{
                let {id, email, login} = response.data;
                this.props.setUserData(id, email, login);
            }
        );
    }

    render(){
        return <Header {...this.props}/>
    }
}
const mapStateToProps = (state) =>{
    return{
        isLoggedIn: state.auth.isLoggedIn,
        login: state.auth.login
    }
}
export default connect(mapStateToProps, {setUserData})(HeaderContainer);
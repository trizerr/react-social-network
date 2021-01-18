import React from "react";
import Header from "./Header";
import {authMe, logout, setUserData} from "../../redux/authReducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component{
    componentDidMount() {
        this.props.authMe();
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
export default connect(mapStateToProps, {setUserData, authMe, logout})(HeaderContainer);
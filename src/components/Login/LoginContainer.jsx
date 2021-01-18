import {Login} from "./Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";


const LoginContainer = (props) =>{
    debugger;
    return <Login {...props}/>
}

let mapStateToProps = (state) =>({
    wrongPassword: state.auth.wrongPassword
});
export default connect(mapStateToProps,{login})(LoginContainer)
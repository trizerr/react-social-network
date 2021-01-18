import logonew from "./../../img/logo.png";
import './Header.module.scss';
import s from './Header.module.scss';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header>
            <div>
                <img src={logonew}/>
                <h1 className={s.title}>Jar</h1>
                <div className={s.loginInfo}>{props.isLoggedIn ?
                    <div>
                        {props.login}
                        <br/>
                        <NavLink to={"/login"} onClick ={props.logout}>Logout</NavLink>
                    </div> : <span>Login</span>} </div>
            </div>
        </header>
    );
}

export default Header;
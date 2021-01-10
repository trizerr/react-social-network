import logonew from "./../../img/logo.png";
import './Header.module.scss';
import s from './Header.module.scss';

const Header = (props) => {
    return (
        <header>
            <div>
                <img src={logonew}/>
                <h1 className={s.title}>Jar</h1>
                <div className={s.loginInfo}>{props.isLoggedIn ? props.login : <span>Login</span>} </div>
            </div>
        </header>
    );
}

export default Header;
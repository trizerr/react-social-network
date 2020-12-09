import logonew from "./../../img/logo.png";
import './Header.module.scss';
import s from './Header.module.scss';

const Header = () => {
    return (
        <header>
            <div>
                <img src={logonew}/>
                <h1 className={s.title}>Jar</h1>
            </div>

        </header>
    );
}

export default Header;
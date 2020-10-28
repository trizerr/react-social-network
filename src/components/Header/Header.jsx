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

            <img src='https://images.vexels.com/media/users/3/137627/isolated/preview/012f7bd53633f5a6e78e60ea08948c55-minimalist-infinity-logo-by-vexels.png' />
        </header>
    );
}

export default Header;
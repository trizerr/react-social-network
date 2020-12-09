import s from './Sidebar.module.scss'
import {NavLink} from "react-router-dom";

const Sidebar = (props) => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.activeLink}>Profile </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/messages" activeClassName={s.activeLink}>Messages </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/friends" activeClassName={s.activeLink}>Friends </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" activeClassName={s.activeLink} >News </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" activeClassName={s.activeLink}>Music </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" activeClassName={s.activeLink}>Settings </NavLink>
            </div>
        </nav>
    );
}

export default Sidebar;
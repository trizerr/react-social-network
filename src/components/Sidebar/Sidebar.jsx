import s from './Sidebar.module.scss'

const Sidebar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <a href="" >Profile </a>
            </div>
            <div className={s.item}>
                <a href="" >Messages </a>
            </div>
            <div className={s.item}>
                <a href="" >News </a>
            </div>
            <div className={s.item}>
                <a href="" >Music </a>
            </div>
            <div className={s.item}>
                <a href="" >Settings </a>
            </div>
        </nav>
    );
}

export default Sidebar;
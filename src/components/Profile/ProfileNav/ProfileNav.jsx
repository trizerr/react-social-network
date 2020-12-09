import s from "./ProfileNav.module.scss";
import {NavLink} from "react-router-dom";

const ProfileNav = (props) =>{
    return(
            <div className={s.profileNav}>
                <div className={s.buttons}>
                    <NavLink to='/profile'>
                        <div className={s.button}>
                            <span>My Posts</span>
                        </div>
                    </NavLink>
                    <NavLink to='/profile/friends'>
                    <div className={s.button}>
                        <span>Friends</span>
                    </div>
                    </NavLink>
                </div>
            </div>
    );
}
export default ProfileNav;
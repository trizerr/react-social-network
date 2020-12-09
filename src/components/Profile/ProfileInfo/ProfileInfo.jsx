import s from "./ProfileInfo.module.scss";
import avatar from "../../../img/avatar.png";

const ProfileInfo = (props) =>{
    return(
        <div className={s.about}>
            <img src={avatar} className={s.avatar}/>
            <div className={s.info}>
                <span>Denys R.</span>
                <span>City: Kyiv</span>
                <span>Date of birth: 04 March</span>
                <span>Education: KNU Shevchenka</span>
            </div>
        </div>
    );
}
export default ProfileInfo;
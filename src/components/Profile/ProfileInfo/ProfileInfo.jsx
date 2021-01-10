import s from "./ProfileInfo.module.scss";
import avatar from "../../../img/avatar.png";
import Loader from "../../Common/Loader/Loader";

const ProfileInfo = (props) =>{
    if(!props.profile){
        return <Loader/>
    }
    debugger;
    return(
        <div className={s.about}>
            <img src={props.profile.photos.large ? props.profile.photos.large : avatar} className={s.avatar}/>
            <div className={s.info}>
                <span>{props.profile.fullName}</span>
                <span>{props.profile.aboutMe}</span>
                <span>{props.profile.lookingForAJob ? props.profile.lookingForAJobDescription : 'not looking for a job'}</span>
                <span>{props.profile.github ? props.profile.github : ''}</span>
            </div>
        </div>
    );
}
export default ProfileInfo;
import avatar from "./../../img/avatar.png";
import s from './Profile.module.scss';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostInput from "./PostInput/PostInput";


const Profile = () => {
    return (
        <div className={s.profileContent}>
            <div className={s.background}>
                <ProfileInfo />
            </div>
            <PostInput />
            <MyPosts />
        </div>
    );
}

export default Profile;
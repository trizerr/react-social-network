import avatar from "./../../img/avatar.png";
import s from './Profile.module.scss';
import MyPosts from "./MyPosts/MyPosts";
import AboutMe from "./AboutMe/AboutMe";
import PostInput from "./PostInput/PostInput";


const Profile = () => {
    return (
        <div className={s.profileContent}>
            <div className={s.background}>
                <AboutMe />
            </div>
            <PostInput />
            <MyPosts />
        </div>
    );
}

export default Profile;
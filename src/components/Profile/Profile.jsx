import avatar from "./../../img/avatar.png";
import s from './Profile.module.scss';
import MyPosts from "./MyPosts/MyPosts";
import AboutMe from "./AboutMe/AboutMe";


const Profile = () => {
    return (
        <main className={s.content}>
            <div className={s.background}>
                <AboutMe />
            </div>
            <div className={s.postWrapper}>
                <span className={s.postTitle}>My Posts</span>
                <input type="text" placeholder="Your news"/>
                <input type="button" value="Send"/>
            </div>
            <MyPosts />
        </main>
    );
}

export default Profile;
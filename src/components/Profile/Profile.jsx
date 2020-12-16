import avatar from "./../../img/avatar.png";
import s from './Profile.module.scss';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Input from "./Input/Input";
import ProfileNav from "./ProfileNav/ProfileNav";
import {BrowserRouter, Route} from "react-router-dom";
import Friends from "./Friends/Friends";
import InputContainer from "./Input/InputContainer";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import FriendsContainer from "./Friends/FriendsContainer";


const Profile = (props) => {
    return (
        <BrowserRouter>
            <div className={s.profileContent}>
                <div className={s.background}>
                    <ProfileInfo />
                </div>
                <ProfileNav />
                <InputContainer />

                <Route exact path='/profile' render={() =>(
                    <MyPostsContainer />
                )}/>
                <Route exact path='/' render={() =>(
                    <MyPostsContainer />
                )}/>
                <Route path='/profile/friends' render={() =>(
                   <FriendsContainer />
                )}/>
            </div>
        </BrowserRouter>
    );
}

export default Profile;
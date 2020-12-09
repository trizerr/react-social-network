import avatar from "./../../img/avatar.png";
import s from './Profile.module.scss';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Input from "./Input/Input";
import ProfileNav from "./ProfileNav/ProfileNav";
import {BrowserRouter, Route} from "react-router-dom";
import Friends from "./Friends/Friends";


const Profile = (props) => {
    return (
        <BrowserRouter>
            <div className={s.profileContent}>
                <div className={s.background}>
                    <ProfileInfo />
                </div>
                <ProfileNav />
                <Input dispatch={props.dispatch} input={props.state.postInput}/>

                <Route exact path='/profile' render={() =>(
                    <MyPosts postData={props.state.postData}/>
                )}/>
                <Route exact path='/' render={() =>(
                    <MyPosts postData={props.state.postData}/>
                )}/>
                <Route path='/profile/friends' render={() =>(
                   <Friends friends={props.state.friends}/>
                )}/>
            </div>
        </BrowserRouter>
    );
}

export default Profile;
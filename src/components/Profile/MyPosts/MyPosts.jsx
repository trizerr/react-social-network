import s from './MyPosts.module.scss';
import Post from "./Posts/Post";


const MyPosts = (props) => {

    return (
            <div className={s.myPosts}>
                <ul>
                    {props.posts}
                </ul>
            </div>
    );
}

export default MyPosts;
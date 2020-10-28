import s from './MyPosts.module.scss';
import Post from "./Posts/Post";


const MyPosts = () => {
    return (
            <div className={s.myPosts}>
                <ul>
                    <Post message='My first post' />
                    <Post message='Samurai path' />
                    <Post message='just another post' />
                </ul>
            </div>
    );
}

export default MyPosts;
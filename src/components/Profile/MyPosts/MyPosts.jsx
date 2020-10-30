import s from './MyPosts.module.scss';
import Post from "./Posts/Post";


const MyPosts = () => {
    let postData = [
        {id:1, message:"My first post", likesCount:15},
        {id:2, message:"Samurai path", likesCount:11},
        {id:3, message:"just another post", likesCount:19}
    ]
    let postElements = postData
        .map(el => <Post id={el.id} message={el.message} likesCount={el.likesCount}  />);
    return (
            <div className={s.myPosts}>
                <ul>
                    {postElements}
                </ul>
            </div>
    );
}

export default MyPosts;
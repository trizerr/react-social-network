import s from './MyPosts.module.scss';
import Post from "./Posts/Post";


const MyPosts = (props) => {

    let postElements = props.postData
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
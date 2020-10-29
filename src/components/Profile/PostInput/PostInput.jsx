import s from './PostInput.module.scss';


const PostInput = (props) => {
    return (
        <div className={s.postWrapper}>
            <span className={s.postTitle}>My Posts</span>
            <input type="text" placeholder="Your news"/>
            <input type="button" value="Send"/>
        </div>
    );
}

export default PostInput;
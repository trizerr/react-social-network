import s from './Post.module.scss';


const Post = (props) => {
    return (
        <li>{props.message}</li>
    );
}

export default Post;
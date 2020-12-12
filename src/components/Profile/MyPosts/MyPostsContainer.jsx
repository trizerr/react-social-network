import Post from "./Posts/Post";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {

    let postElements = props.store.getState().profilePage.postData
        .map(el => <Post id={el.id} message={el.message} likesCount={el.likesCount}  />);
    return (
           <MyPosts posts = {postElements}/>
    );
}

export default MyPostsContainer;
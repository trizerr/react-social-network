import Post from "./Posts/Post";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


/*const MyPostsContainer = (props) => {

    let postElements = props.store.getState().profilePage.postData
        .map(el => <Post id={el.id} message={el.message} likesCount={el.likesCount}  />);
    return (
           <MyPosts posts = {postElements}/>
    );
}*/

let mapStateToProps = (state) =>{
    let postElements = state.profilePage.postData
        .map(el => <Post id={el.id} message={el.message} likesCount={el.likesCount}  />);
    return {posts: postElements};
}

const MyPostsContainer = connect(mapStateToProps)(MyPosts);

export default MyPostsContainer;
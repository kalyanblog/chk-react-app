import './Post.css';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../../actions/Posts';

const Post = ({ post, setCurrentId }) => {
    const dispatch = useDispatch();
    return(
            <div className='Card'>
                <div>
                   <img src={post.selectedFile} alt='post-image' width='200' height='200'  />
                </div>
                <div>
                    <p>Title: {post.title}</p>
                    <p>message: {post.message}</p>
                    <p>Created By: {post.creator} </p>
                    <p>Tags: {post.tags.map((tag) => `#${tag} `)} </p>
                    <p>Create Date {moment(post.createdAt).fromNow()} </p>
                    <button onClick={() => dispatch(likePost(post._id)) }>Like {post.likeCount}</button> &nbsp;
                    <button onClick={() => setCurrentId(post._id) }>Edit</button> &nbsp;
                    <button onClick={() => dispatch(deletePost(post._id))}>Delete</button>
                </div>
            </div>
    );
};

export default Post;
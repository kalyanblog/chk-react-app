import Post from './post/Post';
import { useSelector } from 'react-redux';

const Posts = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts);
    console.log(posts);
    return(
        !posts.length ? <strong>Loading...</strong> : (
        <div>
            {posts.map((post) => (
               <div key={post._id}>
                  <Post post={post} setCurrentId= {setCurrentId} />
               </div>
            ))}
        </div>
));
};

export default Posts;
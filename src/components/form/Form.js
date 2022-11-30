import { useState, useEffect } from "react";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/Posts";

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    likeCount: "",
    selectedFile: ""
  });
  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }
    clear();
  };
  const clear = () => {
    setCurrentId(null);
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      likeCount: "",
      selectedFile: ""
    });
  };

  return (
    <>
      <div>
        <h3> {currentId ? "Editing" : "Creating"} a Memory</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="creator"
            label="Creator"
            placeholder="Creator"
            value={postData.creator}
            onChange={(e) =>
              setPostData({ ...postData, creator: e.target.value })
            }
          />
          <br />
          <br />
          <input
            type="text"
            name="title"
            label="Title"
            placeholder="Title"
            value={postData.title}
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
          />
          <br />
          <br />
          <input
            type="text"
            name="message"
            label="Message"
            placeholder="Message"
            value={postData.message}
            onChange={(e) =>
              setPostData({ ...postData, message: e.target.value })
            }
          />
          <br />
          <br />
          <input
            type="text"
            name="tags"
            label="Tags"
            placeholder="Tags"
            value={postData.tags}
            onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
          />
          <br />
          <div>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setPostData({ ...postData, selectedFile: base64 })
              }
            />
            <br />
          </div>
          <button type="submit">Submit</button>
          <button onClick={clear}>Clear</button>
        </form>
      </div>
    </>
  );
};

export default Form;

import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from './components/posts/Posts'
import Form from './components/form/Form'
import { useDispatch } from 'react-redux'
import { getPosts } from './actions/Posts'

function App() {
const [currentId, setCurrentId] = useState(null);
const dispatch = useDispatch();

useEffect(() => {
  dispatch(getPosts());
}, [currentId, dispatch]);

  return (
    <>
    <div>
      <h1>Memories App</h1>
    </div>
    <div className="Container">
      <div className='Container__Left'>
          <Posts setCurrentId={setCurrentId} />
      </div>
      <div className='Container__Right'>
          <Form currentId={currentId} setCurrentId={setCurrentId} />
      </div>
    </div>
    </>
  );
}

export default App;

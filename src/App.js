import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import AllPost from './pages/AllPost';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import './App.scss';

function App() {
  const [allPosts, setAllPosts] = useState([]);

  const handeCreatePost = (post) => {
    setAllPosts([...allPosts, post]);
  };

  const updateFormHandler = (post) => {
    let postIndex = allPosts.findIndex((el) => Number(el.id) === Number(post.id));
    if (postIndex !== undefined) {
      let newPosts = [...allPosts];
      newPosts[postIndex] = post;
      setAllPosts(newPosts);
    }
  };

  return (
    <div className='container'>
      <BrowserRouter>
        <nav className='nav-bar'>
          <Link to={`/`}>Home</Link>
          <Link to={`/all-posts`}>All Posts</Link>
          <Link to={`/create-post`}>Create Post</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/all-posts' element={<AllPost allPosts={allPosts} />} />
          <Route path='/create-post' element={<CreatePost onSubmitForm={handeCreatePost} />} />
          <Route
            path='/all-posts/:postID'
            element={<EditPost allPosts={allPosts} onUpdateForm={updateFormHandler} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

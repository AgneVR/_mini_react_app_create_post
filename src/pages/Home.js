import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

const Home = () => {
  return (
    <div className='home-container'>
      <Link to={`/create-post`}>Create Post</Link>
      <Link to={`/all-posts`}>All Posts</Link>
    </div>
  );
};

export default Home;

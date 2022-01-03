import React from 'react';
import { Link } from 'react-router-dom';
import './AllPost.scss';

const AllPost = ({ allPosts }) => {
  return (
    <div className='all-post-container'>
      {allPosts.map((post) => (
        <div
          className='one-post'
          key={post.id}
          style={{
            border: post.cardBorder,
            borderRadius: `${post.borderRadius}px`,
            height: `${post.cardHeight}px`,
            width: `${post.cardWidth}px`,
            color: `${post.textColor}`,
          }}
        >
          <img src={post.imageLink} alt='' />
          <h3>{post.title}</h3>
          <p>{post.description}</p>
          <Link to={`/all-posts/${post.id}`}>Edit post</Link>
        </div>
      ))}
    </div>
  );
};

export default AllPost;

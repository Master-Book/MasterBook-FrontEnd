// src/components/home/PostCardList.js

import React from 'react';
import PostCard from './PostCard';
import './PostCardList.css';

function PostCardList({ posts }) {
  return (
    <div className="post-card-list">
      {posts.map((post) => (
        <PostCard key={post.postId} post={post} />
      ))}
    </div>
  );
}

export default PostCardList;

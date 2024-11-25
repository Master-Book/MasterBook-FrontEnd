// src/components/post/postDetail/PostContent.js

import React from 'react';
import './PostContent.css';

function PostContent({ content }) {
  return (
    <div className="post-detail-content">
      <p>{content}</p>
    </div>
  );
}

export default PostContent;

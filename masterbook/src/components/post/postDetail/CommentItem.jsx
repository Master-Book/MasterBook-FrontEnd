// src/components/post/postDetail/CommentItem.js

import React from 'react';
import './CommentItem.css';

function CommentItem({ author, content, date }) {
  return (
    <li className="comment-item">
      <div className="comment-author">{author}</div>
      <div className="comment-content">{content}</div>
      <div className="comment-date">{new Date(date).toLocaleString()}</div>
    </li>
  );
}

export default CommentItem;

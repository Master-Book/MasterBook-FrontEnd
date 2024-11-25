// src/components/post/postDetail/PostActions.js

import React from 'react';
import { FaThumbsUp, FaRegThumbsUp, FaCommentDots } from 'react-icons/fa';
import './PostActions.css';

function PostActions({ isLiked, likes, commentsCount, onLikeToggle }) {
  return (
    <div className="post-actions">
      <button className="like-button" onClick={onLikeToggle}>
        {isLiked ? <FaThumbsUp /> : <FaRegThumbsUp />} 좋아요 {likes}
      </button>
      <span className="comment-count">
        <FaCommentDots /> 댓글 {commentsCount}
      </span>
    </div>
  );
}

export default PostActions;

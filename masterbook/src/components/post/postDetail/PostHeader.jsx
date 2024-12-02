// src/components/post/postDetail/PostHeader.js

import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import './PostHeader.css';

function PostHeader({ title, author, date, views, isValid }) {
  return (
    <div className="post-detail-header">
      <h1>
        {title}{' '}
        {isValid && (
          <FaCheckCircle className="valid-icon" title="유효한 공략입니다" />
        )}
      </h1>
      <div className="post-info">
        <span>작성자: {author}</span>
        <span>작성일: {new Date(date).toLocaleDateString()}</span>
        <span>조회수: {views}</span>
      </div>
    </div>
  );
}

export default PostHeader;

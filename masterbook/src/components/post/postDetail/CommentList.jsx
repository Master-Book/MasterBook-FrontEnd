// src/components/post/postDetail/CommentList.js

import React from 'react';
import CommentItem from './CommentItem';

function CommentList({ comments }) {
  return (
    <ul className="comment-list">
      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          author={comment.author}
          content={comment.content}
          date={comment.date}
        />
      ))}
    </ul>
  );
}

export default CommentList;

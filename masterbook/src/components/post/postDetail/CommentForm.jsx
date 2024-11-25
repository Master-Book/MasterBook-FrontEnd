// src/components/post/postDetail/CommentForm.js

import React from 'react';
import './CommentForm.css';

function CommentForm({ newComment, setNewComment, onAddComment }) {
  return (
    <div className="comment-form">
      <textarea
        placeholder="댓글을 입력하세요..."
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <button onClick={onAddComment}>댓글 달기</button>
    </div>
  );
}

export default CommentForm;

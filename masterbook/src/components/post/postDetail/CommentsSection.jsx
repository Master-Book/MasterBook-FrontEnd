// src/components/post/postDetail/CommentsSection.js

import React from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import './CommentsSection.css';

function CommentsSection({
  comments,
  newComment,
  setNewComment,
  onAddComment,
}) {
  return (
    <div className="comments-section">
      <h3>댓글</h3>
      <CommentList comments={comments} />
      <CommentForm
        newComment={newComment}
        setNewComment={setNewComment}
        onAddComment={onAddComment}
      />
    </div>
  );
}

export default CommentsSection;

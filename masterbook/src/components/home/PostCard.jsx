// src/components/home/PostCard.js

import React from 'react';
import { Link } from 'react-router-dom';
import './PostCard.css';

function PostCard({ post }) {
  return (
    <div className="post-card">
      <div className="post-card-header">
        <span className="game-id">{post.gameId}</span>|
        <span className="character-id">{post.characterId}</span>
        <img
          src={`/images/${post.gameId}/logo/logo.png`}
          alt={`${post.gameId} Logo`}
          className="game-logo"
        />
      </div>
      <h2 className="post-title">{post.title}</h2>
      <p className="post-author">작성자: {post.author}</p>
      <p className="post-date">
        작성일: {new Date(post.createdAt).toLocaleDateString()}
      </p>
      <div className="post-content">{post.content}</div>
      <button className="read-more-button">
        <Link
          to={`/${post.gameId}/${post.characterId}/${post.postId}`}
          className="read-more-link"
        >
          더 보기
        </Link>
      </button>
    </div>
  );
}

export default PostCard;

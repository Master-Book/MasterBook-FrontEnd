// src/components/home/Main.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Main.css'; // 스타일링을 위한 CSS 파일

function Main() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // 더미 데이터(posts.json)에서 게시글 불러오기
    axios
      .get('/posts.json')
      .then((response) => {
        // // 게시글을 날짜 순으로 정렬 (최신순)
        // const sortedPosts = response.data.sort(
        //   (a, b) => new Date(b.date) - new Date(a.date)
        // );

        // 게시글을 포스트 ID 높은 순으로 정렬 -> 나중에 날짜 순으로 변경 해야 함.
        const sortedPosts = response.data.sort((a, b) => b.id - a.id);

        // 최신 게시글 6개만 선택
        const latestPosts = sortedPosts.slice(0, 6);
        setPosts(latestPosts);
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  return (
    <div className="main-container">
      {/* <h1>Masterbook에 오신 것을 환영합니다!</h1> */}
      {/* <p>원하는 게임을 선택하여 공략 정보를 확인하세요.</p> */}
      <p>최신 글</p>
      <div className="post-card-list">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <div className="post-card-header">
              <span className="game-id">{post.gameId}</span>|
              <span className="character-id">{post.characterId}</span>
              {/* 게임 로고 이미지 추가 */}
              <img
                src={`/images/${post.gameId}/logo/logo.png`}
                alt={`${post.gameId} Logo`}
                className="game-logo"
              />
            </div>
            <h2 className="post-title">{post.title}</h2>
            <p className="post-author">작성자: {post.author}</p>
            <p className="post-date">작성일: {post.date}</p>
            <div className="post-content">{post.content}</div>
            <button className="read-more-button">
              <Link
                to={`/${post.gameId}/${post.characterId}/${post.id}`}
                className="read-more-link"
              >
                더 보기
              </Link>
            </button>
          </div>
        ))}
      </div>
      {/* 글 작성 페이지로 이동하는 링크 */}
      <li>
        <Link to="/postWrite">글 작성</Link>
      </li>
    </div>
  );
}

export default Main;

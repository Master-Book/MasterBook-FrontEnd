// src/components/home/Main.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import GameList from './GameList';
import PostCardList from './PostCardList';
import './Main.css';

const SERVER_IP = process.env.REACT_APP_SERVER_IP;

function Main() {
  const [posts, setPosts] = useState([]);
  const [allGames, setAllGames] = useState([]);

  useEffect(() => {
    // 게시글 데이터 가져오기
    axios
      .get(`${SERVER_IP}/post`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((response) => {
        const postsData = response.data;
        const sortedPosts = postsData.sort((a, b) => b.postId - a.postId);
        const latestPosts = sortedPosts.slice(0, 6);
        setPosts(latestPosts);
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });

    // 게임 데이터 가져오기
    const fetchGamesData = async () => {
      try {
        const response = await fetch('/games.json');
        if (!response.ok) {
          throw new Error('Failed to fetch games data');
        }
        const data = await response.json();
        setAllGames(data);
      } catch (error) {
        console.error('Error fetching games data:', error);
      }
    };

    fetchGamesData();
  }, []);

  // 스폰서 게임과 인기 게임 추출
  const sponsorGames = allGames.filter((game) => game.sponsor).slice(0, 5);
  const popularGames = allGames
    .slice()
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, 5);

  return (
    <div className="main-container">
      {/* 스폰서 게임 */}
      {sponsorGames.length > 0 && (
        <GameList title="스폰서 게임" games={sponsorGames} />
      )}

      {/* 인기 게임 */}
      <GameList title="인기 게임" games={popularGames} />

      {/* 최신 글 */}
      <p>최신 글</p>
      <PostCardList posts={posts} />

      {/* 글 작성 링크 */}
      <li>
        <Link to="/postWrite">글 작성</Link>
      </li>
    </div>
  );
}

export default Main;

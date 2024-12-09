// src/components/home/Main.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import GameList from './GameList';
import PostCardList from './PostCardList';
import './Main.css';

const SERVER_IP = process.env.REACT_APP_SERVER_IP;

function Main() {
  const [latestPosts, setLatestPosts] = useState([]);
  const [popularPosts, setPopularPosts] = useState([]);
  const [allGames, setAllGames] = useState([]);

  useEffect(() => {
    // 최신 글 데이터 가져오기
    axios
      .get(`${SERVER_IP}/main/latest`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((response) => {
        const postsData = response.data;
        if (Array.isArray(postsData)) {
          setLatestPosts(postsData.slice(0, 6));
        } else {
          console.error('Error: postsData is not an array', postsData);
        }
      })
      .catch((error) => {
        console.error('Error fetching latest posts:', error);
      });

    // 인기 글 데이터 가져오기
    axios
      .get(`${SERVER_IP}/main/popular`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((response) => {
        const postsData = response.data;
        if (Array.isArray(postsData)) {
          setPopularPosts(postsData.slice(0, 6));
        } else {
          console.error('Error: postsData is not an array', postsData);
        }
      })
      .catch((error) => {
        console.error('Error fetching popular posts:', error);
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

      {/* 인기 글 */}
      <h3>인기 글</h3>
      <PostCardList posts={popularPosts} />

      {/* 최신 글 */}
      <h3>최신 글</h3>
      <PostCardList posts={latestPosts} />

      {/* 글 작성 링크 */}
      <li>
        <Link to="/postWrite">글 작성</Link>
      </li>
    </div>
  );
}

export default Main;

// src/components/home/Main.js

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GameList from "./GameList";
import PostCardList from "./PostCardList";
import "./Main.css";

const SERVER_IP = process.env.REACT_APP_SERVER_IP;

function Main() {
  const [posts, setPosts] = useState([]);
  const [allGames, setAllGames] = useState([]);

  useEffect(() => {
    // 최신 글 데이터 가져오기
    axios
      .get(`${SERVER_IP}/main/latest`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        const postsData = response.data;
        if (Array.isArray(postsData)) {
          // 최신 게시글 데이터를 상태에 설정
          setPosts(postsData);
        } else {
          console.error('Error: postsData is not an array', postsData);
        }
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });

    // 게임 데이터 가져오기
    const fetchGamesData = async () => {
      try {
        const response = await fetch("/games.json");
        if (!response.ok) {
          throw new Error("Failed to fetch games data");
        }
        const data = await response.json();
        setAllGames(data);
      } catch (error) {
        console.error("Error fetching games data:", error);
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
      <h3>최신 글</h3>
      <PostCardList posts={posts} />

      {/* 마이페이지 링크 */}
      <li>
        <Link to="/mypage">마이페이지</Link>
      </li>
    </div>
  );
}

export default Main;

// src/components/more/Main.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Main.css';

function Main() {
  const [searchTerm, setSearchTerm] = useState('');
  const [allGames, setAllGames] = useState([]);

  useEffect(() => {
    // games.json 데이터를 불러오기
    const fetchGamesData = async () => {
      try {
        const response = await fetch('/games.json'); // games.json 파일의 실제 경로로 변경
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

  const filteredGames = allGames.filter((game) =>
    game.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sponsorGames = filteredGames.filter((game) => game.sponsor);
  const popularGames = filteredGames
    .slice()
    .sort((a, b) => b.popularity - a.popularity);
  const alphabeticalGames = filteredGames
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name));

  const renderGameList = (games) => (
    <div className="game-list">
      {games.map((game) => (
        <Link to={`/${game.id}`} className="game-item" key={game.id}>
          <div className="game-card">
            <img
              src={game.logo}
              alt={game.name}
              onError={(e) => (e.target.src = '/images/default-logo.png')}
            />
            <p>{game.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );

  return (
    <div className="more-container">
      {/* 검색 기능 */}
      <div className="search-container">
        <input
          type="text"
          placeholder="게임 이름을 검색하세요"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      {/* 스폰서 섹션 */}
      <section>
        <h3>스폰서</h3>
        {renderGameList(sponsorGames)}
      </section>
      <hr />

      {/* 인기 순위 섹션 */}
      <section>
        <h3>인기 순위</h3>
        {renderGameList(popularGames)}
      </section>
      <hr />

      {/* 사전 순 섹션 */}
      <section>
        <h3>사전 순</h3>
        {renderGameList(alphabeticalGames)}
      </section>
    </div>
  );
}

export default Main;

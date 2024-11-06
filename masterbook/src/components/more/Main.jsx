// src/components/more/Main.jsx

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Main.css";

function Main() {
  const [searchTerm, setSearchTerm] = useState("");
  const [allGames, setAllGames] = useState([]);

  useEffect(() => {
    const gamesData = [
      {
        id: "league_of_legends",
        name: "League of Legends",
        logo: "/images/league_of_legends/logo/logo.png",
        sponsor: true,
        popularity: 100,
      },
      {
        id: "stardew_valley",
        name: "Stardew Valley",
        logo: "/images/stardew_valley/logo/logo.png",
        sponsor: false,
        popularity: 80,
      },
      // 추가 게임들...
    ];

    setAllGames(gamesData);
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
            <img src={game.logo} alt={game.name} />
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
        <h2>스폰서</h2>
        {renderGameList(sponsorGames)}
      </section>
      <hr />

      {/* 인기 순위 섹션 */}
      <section>
        <h2>인기 순위</h2>
        {renderGameList(popularGames)}
      </section>
      <hr />

      {/* 사전 순 섹션 */}
      <section>
        <h2>사전 순</h2>
        {renderGameList(alphabeticalGames)}
      </section>
    </div>
  );
}

export default Main;

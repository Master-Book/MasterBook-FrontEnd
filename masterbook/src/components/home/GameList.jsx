// src/components/home/GameList.js

import React from 'react';
import { Link } from 'react-router-dom';
import './GameList.css';

function GameList({ title, games }) {
  return (
    <section>
      <h3>{title}</h3>
      <div className="game-list">
        {games.map((game) => (
          <Link to={`/${game.id}`} className="game-item" key={game.id}>
            <div className="game-icon">
              <img
                src={game.logo}
                alt={game.name}
                onError={(e) => (e.target.src = '/images/default-logo.png')}
              />
            </div>
            <p className="main-game-name">{game.name}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default GameList;

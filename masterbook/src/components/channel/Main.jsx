// src/components/home/Channel.js

import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import InitialFilter from './InitialFilter';
import './Main.css';

import PostList from '../post/postList/PostList';
import axios from 'axios';

const SERVER_IP = process.env.REACT_APP_SERVER_IP;

function Channel() {
  const { gameId } = useParams();
  const [characterData, setCharacterData] = useState([]);
  const [selectedInitial, setSelectedInitial] = useState('전체');
  const [searchTerm, setSearchTerm] = useState('');
  const [posts, setPosts] = useState([]); // 모든 게시글 데이터
  const [selectedCharacterId, setSelectedCharacterId] = useState(null);
  const [selectedCharacterName, setSelectedCharacterName] = useState('');
  const [gameName, setGameName] = useState('');
  const characterListRef = useRef(null);

  useEffect(() => {
    const loadCharacterData = async () => {
      setCharacterData([]);
      setSelectedInitial('전체');
      setSearchTerm('');
      setSelectedCharacterId(null);
      setSelectedCharacterName('');

      const gameNames = {
        league_of_legends: 'League of Legends',
        stardew_valley: 'Stardew Valley',
        the_survivalists: 'The Survivalists',
        it_takes_two: 'It Takes Two',
        inside: 'Inside',
      };

      setGameName(gameNames[gameId] || 'Unknown Game');

      try {
        const module = await import(`../../data/${gameId}/character_data.js`);
        setCharacterData(module.default);
        console.log('gameId:', gameId);
        console.log('로드된 캐릭터 데이터:', module.default);
      } catch (error) {
        console.error('캐릭터 데이터를 로드하는 중 오류 발생:', error);
        setCharacterData([]);
      }
    };

    // 게시글 데이터 로드
    const loadPosts = async () => {
      try {
        const response = await axios.get(`${SERVER_IP}/channel/${gameId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setPosts(response.data); // 모든 게시글 저장
        console.log(posts);
      } catch (error) {
        console.error('게시글 데이터를 로드하는 중 오류 발생:', error);
      }
    };

    loadCharacterData();
    loadPosts();
  }, [gameId]);

  const handleSelectInitial = (initial) => {
    setSelectedInitial(initial);
    setSearchTerm('');
    setSelectedCharacterId(null);
    setSelectedCharacterName('');
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setSelectedInitial(null);
    setSelectedCharacterId(null);
    setSelectedCharacterName('');
  };

  const handleCharacterClick = (character) => {
    setSelectedCharacterId(character.id);
    setSelectedCharacterName(character.name);
  };

  const handleWheel = (event) => {
    if (characterListRef.current) {
      const { scrollWidth, clientWidth, scrollLeft } = characterListRef.current;
      const isScrollable = scrollWidth > clientWidth;

      if (isScrollable) {
        event.preventDefault();
        if (
          (event.deltaY > 0 && scrollLeft < scrollWidth - clientWidth) ||
          (event.deltaY < 0 && scrollLeft > 0)
        ) {
          characterListRef.current.scrollLeft += event.deltaY;
        }
      }
    }
  };

  // 필터링 로직
  let displayedCharacters = characterData;

  if (searchTerm) {
    displayedCharacters = characterData.filter((character) =>
      character.name.includes(searchTerm)
    );
  } else if (selectedInitial && selectedInitial !== '전체') {
    displayedCharacters = characterData.filter(
      (character) => character.initial === selectedInitial
    );
  }

  const defaultImagePath = require('../../assets/images/default/characters/default_profile.jpg');

  // 선택된 캐릭터의 게시글 필터링
  const filteredPosts = selectedCharacterId
    ? posts.filter((post) => post.characterId === selectedCharacterId)
    : posts;

  return (
    <div className="channel-container">
      <div className="game-name">{gameName} 채널</div>

      <InitialFilter
        onSelectInitial={handleSelectInitial}
        selectedInitial={selectedInitial}
        onSearch={handleSearch}
      />
      {displayedCharacters.length > 0 ? (
        <div
          className="character-list"
          ref={characterListRef}
          onWheel={handleWheel}
        >
          {displayedCharacters.map((character) => (
            <div
              key={character.id}
              className={`character-item ${
                selectedCharacterId === character.id ? 'selected' : ''
              }`}
              onClick={() => handleCharacterClick(character)}
            >
              <img
                src={`/images/${gameId}/characters/${character.id}.png`}
                alt={character.name}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = defaultImagePath;
                }}
              />
              <p>{character.name}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-characters">
          <p>해당하는 캐릭터가 없습니다.</p>
          <Link to="/contact" className="contact-link">
            캐릭터 추가를 요청하시려면 여기를 클릭하세요.
          </Link>
        </div>
      )}
      {selectedCharacterName && (
        <PostList
          gameId={gameId}
          gameName={gameName}
          characterId={selectedCharacterId}
          characterName={selectedCharacterName}
          posts={filteredPosts} // 필터링된 게시글 전달
        />
      )}
    </div>
  );
}

export default Channel;

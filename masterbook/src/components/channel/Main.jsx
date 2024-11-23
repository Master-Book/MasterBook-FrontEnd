import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import InitialFilter from './InitialFilter';
import './Main.css';

import PostList from '../post/postList/PostList';

function Channel() {
  const { gameId } = useParams();
  const [characterData, setCharacterData] = useState([]);
  const [selectedInitial, setSelectedInitial] = useState('전체'); // 기본값을 "전체"로 설정
  const [searchTerm, setSearchTerm] = useState('');

  const [selectedCharacterId, setSelectedCharacterId] = useState(null);
  const [selectedCharacterName, setSelectedCharacterName] = useState('');
  const [gameName, setGameName] = useState('');
  const characterListRef = useRef(null); // Ref 추가

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
      };

      setGameName(gameNames[gameId] || 'Unknown Game');

      try {
        const module = await import(`../../data/${gameId}/character_data.js`);
        setCharacterData(module.default);
        console.log('gameId:', gameId);
        console.log('로드된 캐릭터 데이터:', module.default); // 데이터 로드 후 로그 출력
      } catch (error) {
        console.error('캐릭터 데이터를 로드하는 중 오류 발생:', error);
        setCharacterData([]);
      }
    };

    loadCharacterData();
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
      const isScrollable = scrollWidth > clientWidth; // 스크롤이 필요한지 확인

      if (isScrollable) {
        event.preventDefault(); // 기본 세로 스크롤 동작 차단
        // 스크롤이 끝에 다다른 경우 세로 스크롤이 허용되도록 조건 추가
        if (
          (event.deltaY > 0 && scrollLeft < scrollWidth - clientWidth) || // 오른쪽으로 스크롤할 수 있을 때
          (event.deltaY < 0 && scrollLeft > 0) // 왼쪽으로 스크롤할 수 있을 때
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
          onWheel={handleWheel} // 마우스 휠 이벤트 추가
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
        <div>캐릭터가 없습니다.</div>
      )}
      {selectedCharacterName && (
        <PostList
          gameId={gameId}
          gameName={gameName}
          characterId={selectedCharacterId}
          characterName={selectedCharacterName}
        />
      )}
    </div>
  );
}

export default Channel;

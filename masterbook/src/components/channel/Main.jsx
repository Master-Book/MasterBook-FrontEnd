// src/components/channel/Main.jsx

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import InitialFilter from "./InitialFilter";
import "./Main.css";

import PostList from "../post/postList/PostList";

function Channel() {
  const { gameId } = useParams();
  const [characterData, setCharacterData] = useState([]);
  const [selectedInitial, setSelectedInitial] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // 선택된 캐릭터와 게임 이름을 저장하는 상태 변수 추가
  const [selectedCharacterId, setSelectedCharacterId] = useState(null);
  const [selectedCharacterName, setSelectedCharacterName] = useState("");
  const [gameName, setGameName] = useState("");

  useEffect(() => {
    // 상태 초기화
    setCharacterData([]);
    setSelectedInitial(null);
    setSearchTerm("");
    setSelectedCharacterId(null);
    setSelectedCharacterName("");

    // 게임 이름 매핑
    const gameNames = {
      league_of_legends: "League of Legends",
      stardew_valley: "Stardew Valley",
      // 다른 게임들도 추가 가능
    };

    setGameName(gameNames[gameId] || "Unknown Game");

    import(`../../data/${gameId}/character_data.js`)
      .then((module) => {
        setCharacterData(module.default);
      })
      .catch((error) => {
        console.error("캐릭터 데이터를 로드하는 중 오류 발생:", error);
        // 에러 발생 시 characterData를 빈 배열로 설정
        setCharacterData([]);
      });
  }, [gameId]);

  const handleSelectInitial = (initial) => {
    setSelectedInitial(initial);
    setSearchTerm("");
    // 이니셜이 변경되면 선택된 캐릭터 초기화
    setSelectedCharacterId(null);
    setSelectedCharacterName("");
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setSelectedInitial(null);
    // 검색어가 변경되면 선택된 캐릭터 초기화
    setSelectedCharacterId(null);
    setSelectedCharacterName("");
  };

  // 캐릭터 선택 핸들러
  const handleCharacterClick = (character) => {
    setSelectedCharacterId(character.id);
    setSelectedCharacterName(character.name);
  };

  // 필터링 로직
  let displayedCharacters = characterData;

  if (searchTerm) {
    displayedCharacters = characterData.filter((character) =>
      character.name.includes(searchTerm)
    );
  } else if (selectedInitial) {
    displayedCharacters = characterData.filter(
      (character) => character.initial === selectedInitial
    );
  }

  // 기본 이미지 경로 설정
  const defaultImagePath = require("../../assets/images/default/characters/default_profile.jpg");

  return (
    <div className="channel-container">
      <div className="game-name">{gameName} 채널</div>

      <InitialFilter
        onSelectInitial={handleSelectInitial}
        selectedInitial={selectedInitial}
        onSearch={handleSearch}
      />
      {displayedCharacters.length > 0 ? (
        <div className="character-list">
          {displayedCharacters.map((character) => (
            <div
              key={character.id}
              className={`character-item ${
                selectedCharacterId === character.id ? "selected" : ""
              }`}
              onClick={() => handleCharacterClick(character)}
            >
              <img
                src={character.imgPath}
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
      {/* {selectedCharacterName && (
        <div className="selected-character-name">
          '{selectedCharacterName}' 공략글
        </div>
      )} */}
      {selectedCharacterName && (
        <PostList game_name={gameName} character_name={selectedCharacterName} />
      )}
    </div>
  );
}

export default Channel;

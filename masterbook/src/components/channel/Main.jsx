import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import InitialFilter from "./InitialFilter";
import "./Main.css";

function Channel() {
  const { gameId } = useParams();
  const [characterData, setCharacterData] = useState([]);
  const [selectedInitial, setSelectedInitial] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // 상태 초기화
    setCharacterData([]);
    setSelectedInitial(null);
    setSearchTerm("");

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
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setSelectedInitial(null);
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
      <InitialFilter
        onSelectInitial={handleSelectInitial}
        selectedInitial={selectedInitial}
        onSearch={handleSearch}
      />
      {displayedCharacters.length > 0 ? (
        <div className="character-list">
          {displayedCharacters.map((character) => (
            <div key={character.id} className="character-item">
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
    </div>
  );
}

export default Channel;

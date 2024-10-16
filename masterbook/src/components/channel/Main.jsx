import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import InitialFilter from "./InitialFilter";
import "./Main.css"; // 스타일을 적용하기 위해 CSS 파일을 임포트합니다.

function Channel() {
  const { gameId } = useParams();
  const [characterData, setCharacterData] = useState([]);
  const [selectedInitial, setSelectedInitial] = useState(null);

  useEffect(() => {
    // 상태 초기화
    setCharacterData([]);
    setSelectedInitial(null);

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
  };

  const displayedCharacters = selectedInitial
    ? characterData.filter((character) => character.initial === selectedInitial)
    : characterData;

  // 기본 이미지 경로 설정
  const defaultImagePath = require("../../assets/images/default/characters/default_profile.jpg");

  return (
    <div className="channel-container">
      <InitialFilter onSelectInitial={handleSelectInitial} />
      {displayedCharacters.length > 0 ? (
        <div className="character-list">
          {displayedCharacters.map((character) => (
            <div key={character.id} className="character-item">
              <img
                src={character.imgPath}
                alt={character.name}
                onError={(e) => {
                  e.target.onerror = null; // 무한 루프 방지
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

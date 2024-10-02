import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import InitialFilter from "./InitialFilter";

function Channel() {
  const { gameId } = useParams();
  const [characterData, setCharacterData] = useState([]);
  const [selectedInitial, setSelectedInitial] = useState(null);

  useEffect(() => {
    import(`../../data/${gameId}/character_data.js`)
      .then((module) => {
        setCharacterData(module.default);
      })
      .catch((error) => {
        console.error("캐릭터 데이터를 로드하는 중 오류 발생:", error);
      });
  }, [gameId]);

  const handleSelectInitial = (initial) => {
    setSelectedInitial(initial);
  };

  const displayedCharacters = selectedInitial
    ? characterData.filter((character) => character.initial === selectedInitial)
    : characterData;

  return (
    <div>
      <InitialFilter onSelectInitial={handleSelectInitial} />
      {displayedCharacters.length > 0 ? (
        displayedCharacters.map((character) => (
          <div key={character.id}>
            <h2>{character.name}</h2>
            <img src={character.imgPath} alt={character.name} />
          </div>
        ))
      ) : (
        <div>캐릭터가 없습니다.</div>
      )}
    </div>
  );
}

export default Channel;

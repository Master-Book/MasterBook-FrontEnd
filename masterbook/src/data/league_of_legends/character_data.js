const characters = {
  Garen: {
    name: "Garen",
    imgPath: "../../assets/images/league_of_legends/characters/Garen.png",
  },
  Gwen: {
    name: "Gwen",
    imgPath: "../../assets/images/league_of_legends/characters/Gwen.png",
  },
};

export default characters;

/*
============================= 사용 예시 =============================

import characters from '../../data/league_of_legends/character_data';

// Garen의 이미지 경로 가져오기
const garenImagePath = characters.Garen.imgPath;

// 또는 구조 분해 할당을 사용하여 가져오기
const { Garen, Gwen } = characters;

console.log(Garen.name); // 출력: 'Garen'
console.log(Garen.imgPath); // 출력: '../../assets/images/league_of_legends/characters/Garen.png'
*/

// src/components/channel/Main.js

/*
============================= 동적 import 사용하기 =============================

import React, { useState, useEffect } from 'react';

function Channel({ selectedGame }) {
  const [characterData, setCharacterData] = useState(null);

  useEffect(() => {
    // selectedGame이 변경될 때마다 실행됩니다.
    import(`../../data/${selectedGame}/character_data.js`)
      .then((module) => {
        setCharacterData(module.default);
      })
      .catch((error) => {
        console.error('캐릭터 데이터를 로드하는 중 오류 발생:', error);
      });
  }, [selectedGame]);

  if (!characterData) {
    return <div>캐릭터 데이터를 불러오는 중...</div>;
  }

  return (
    <div>
      {Object.keys(characterData).map((key) => {
        const character = characterData[key];
        return (
          <div key={key}>
            <h2>{character.name}</h2>
            <img src={character.imgPath} alt={character.name} />
          </div>
        );
      })}
    </div>
  );
}

export default Channel;
*/

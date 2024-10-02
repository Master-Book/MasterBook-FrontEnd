const characters = [
  // ㄱ
  {
    id: "Galio",
    name: "갈리오",
    initial: "ㄱ",
    imgPath: "../../assets/images/league_of_legends/characters/Galio.png",
  },
  {
    id: "Gangplank",
    name: "갱플랭크",
    initial: "ㄱ",
    imgPath: "../../assets/images/league_of_legends/characters/Gangplank.png",
  },
  {
    id: "Garen",
    name: "가렌",
    initial: "ㄱ",
    imgPath: "../../assets/images/league_of_legends/characters/Garen.png",
  },
  {
    id: "Gragas",
    name: "그라가스",
    initial: "ㄱ",
    imgPath: "../../assets/images/league_of_legends/characters/Gragas.png",
  },
  {
    id: "Graves",
    name: "그레이브즈",
    initial: "ㄱ",
    imgPath: "../../assets/images/league_of_legends/characters/Graves.png",
  },
  {
    id: "Gwen",
    name: "그웬",
    initial: "ㄱ",
    imgPath: "../../assets/images/league_of_legends/characters/Gwen.png",
  },
  // ㄴ
  {
    id: "Gnar",
    name: "나르",
    initial: "ㄴ",
    imgPath: "../../assets/images/league_of_legends/characters/Gnar.png",
  },
  {
    id: "Nami",
    name: "나미",
    initial: "ㄴ",
    imgPath: "../../assets/images/league_of_legends/characters/Nami.png",
  },
  {
    id: "Nasus",
    name: "나서스",
    initial: "ㄴ",
    imgPath: "../../assets/images/league_of_legends/characters/Nasus.png",
  },
  {
    id: "Nocturne",
    name: "녹턴",
    initial: "ㄴ",
    imgPath: "../../assets/images/league_of_legends/characters/Nocturne.png",
  },
  {
    id: "Nunu",
    name: "누누와 윌럼프",
    initial: "ㄴ",
    imgPath: "../../assets/images/league_of_legends/characters/Nunu.png",
  },
  {
    id: "Nidalee",
    name: "니달리",
    initial: "ㄴ",
    imgPath: "../../assets/images/league_of_legends/characters/Nidalee.png",
  },
  {
    id: "Neeko",
    name: "니코",
    initial: "ㄴ",
    imgPath: "../../assets/images/league_of_legends/characters/Neeko.png",
  },
  {
    id: "Nilah",
    name: "닐라",
    initial: "ㄴ",
    imgPath: "../../assets/images/league_of_legends/characters/Nilah.png",
  },
  {
    id: "Nautilus",
    name: "노틸러스",
    initial: "ㄴ",
    imgPath: "../../assets/images/league_of_legends/characters/Nautilus.png",
  },
  // ㄷ
  {
    id: "Darius",
    name: "다리우스",
    initial: "ㄷ",
    imgPath: "../../assets/images/league_of_legends/characters/Darius.png",
  },
  {
    id: "Diana",
    name: "다이애나",
    initial: "ㄷ",
    imgPath: "../../assets/images/league_of_legends/characters/Diana.png",
  },
  {
    id: "Draven",
    name: "드레이븐",
    initial: "ㄷ",
    imgPath: "../../assets/images/league_of_legends/characters/Draven.png",
  },
  // ㄹ
  {
    id: "Rammus",
    name: "람머스",
    initial: "ㄹ",
    imgPath: "../../assets/images/league_of_legends/characters/Rammus.png",
  },
  {
    id: "Lux",
    name: "럭스",
    initial: "ㄹ",
    imgPath: "../../assets/images/league_of_legends/characters/Lux.png",
  },
  {
    id: "Rumble",
    name: "럼블",
    initial: "ㄹ",
    imgPath: "../../assets/images/league_of_legends/characters/Rumble.png",
  },
  {
    id: "Renekton",
    name: "레넥톤",
    initial: "ㄹ",
    imgPath: "../../assets/images/league_of_legends/characters/Renekton.png",
  },
  {
    id: "Renata",
    name: "레나타 글라스크",
    initial: "ㄹ",
    imgPath: "../../assets/images/league_of_legends/characters/Renata.png",
  },
  {
    id: "Leona",
    name: "레오나",
    initial: "ㄹ",
    imgPath: "../../assets/images/league_of_legends/characters/Leona.png",
  },
  {
    id: "RekSai",
    name: "렉사이",
    initial: "ㄹ",
    imgPath: "../../assets/images/league_of_legends/characters/RekSai.png",
  },
  {
    id: "Rengar",
    name: "렝가",
    initial: "ㄹ",
    imgPath: "../../assets/images/league_of_legends/characters/Rengar.png",
  },
  {
    id: "Lucian",
    name: "루시안",
    initial: "ㄹ",
    imgPath: "../../assets/images/league_of_legends/characters/Lucian.png",
  },
  {
    id: "Lulu",
    name: "룰루",
    initial: "ㄹ",
    imgPath: "../../assets/images/league_of_legends/characters/Lulu.png",
  },
  {
    id: "Riven",
    name: "리븐",
    initial: "ㄹ",
    imgPath: "../../assets/images/league_of_legends/characters/Riven.png",
  },
  {
    id: "LeeSin",
    name: "리 신",
    initial: "ㄹ",
    imgPath: "../../assets/images/league_of_legends/characters/LeeSin.png",
  },
  {
    id: "Lissandra",
    name: "리산드라",
    initial: "ㄹ",
    imgPath: "../../assets/images/league_of_legends/characters/Lissandra.png",
  },
  {
    id: "Ryze",
    name: "라이즈",
    initial: "ㄹ",
    imgPath: "../../assets/images/league_of_legends/characters/Ryze.png",
  },
  {
    id: "Rell",
    name: "렐",
    initial: "ㄹ",
    imgPath: "../../assets/images/league_of_legends/characters/Rell.png",
  },
  {
    id: "Rakan",
    name: "라칸",
    initial: "ㄹ",
    imgPath: "../../assets/images/league_of_legends/characters/Rakan.png",
  },
  {
    id: "LeBlanc",
    name: "르블랑",
    initial: "ㄹ",
    imgPath: "../../assets/images/league_of_legends/characters/LeBlanc.png",
  },
  {
    id: "Lillia",
    name: "릴리아",
    initial: "ㄹ",
    imgPath: "../../assets/images/league_of_legends/characters/Lillia.png",
  },
  // ㅁ
  {
    id: "Maokai",
    name: "마오카이",
    initial: "ㅁ",
    imgPath: "../../assets/images/league_of_legends/characters/Maokai.png",
  },
  {
    id: "MasterYi",
    name: "마스터 이",
    initial: "ㅁ",
    imgPath: "../../assets/images/league_of_legends/characters/MasterYi.png",
  },
  {
    id: "Malzahar",
    name: "말자하",
    initial: "ㅁ",
    imgPath: "../../assets/images/league_of_legends/characters/Malzahar.png",
  },
  {
    id: "Malphite",
    name: "말파이트",
    initial: "ㅁ",
    imgPath: "../../assets/images/league_of_legends/characters/Malphite.png",
  },
  {
    id: "MissFortune",
    name: "미스 포츈",
    initial: "ㅁ",
    imgPath: "../../assets/images/league_of_legends/characters/MissFortune.png",
  },
  {
    id: "Morgana",
    name: "모르가나",
    initial: "ㅁ",
    imgPath: "../../assets/images/league_of_legends/characters/Morgana.png",
  },
  {
    id: "DrMundo",
    name: "문도 박사",
    initial: "ㅁ",
    imgPath: "../../assets/images/league_of_legends/characters/DrMundo.png",
  },
  // ㅂ
  {
    id: "Bard",
    name: "바드",
    initial: "ㅂ",
    imgPath: "../../assets/images/league_of_legends/characters/Bard.png",
  },
  {
    id: "Varus",
    name: "바루스",
    initial: "ㅂ",
    imgPath: "../../assets/images/league_of_legends/characters/Varus.png",
  },
  {
    id: "Vi",
    name: "바이",
    initial: "ㅂ",
    imgPath: "../../assets/images/league_of_legends/characters/Vi.png",
  },
  {
    id: "Veigar",
    name: "베이가",
    initial: "ㅂ",
    imgPath: "../../assets/images/league_of_legends/characters/Veigar.png",
  },
  {
    id: "Vayne",
    name: "베인",
    initial: "ㅂ",
    imgPath: "../../assets/images/league_of_legends/characters/Vayne.png",
  },
  {
    id: "Vex",
    name: "벡스",
    initial: "ㅂ",
    imgPath: "../../assets/images/league_of_legends/characters/Vex.png",
  },
  {
    id: "Belveth",
    name: "벨베스",
    initial: "ㅂ",
    imgPath: "../../assets/images/league_of_legends/characters/Belveth.png",
  },
  {
    id: "Velkoz",
    name: "벨코즈",
    initial: "ㅂ",
    imgPath: "../../assets/images/league_of_legends/characters/Velkoz.png",
  },
  {
    id: "Brand",
    name: "브랜드",
    initial: "ㅂ",
    imgPath: "../../assets/images/league_of_legends/characters/Brand.png",
  },
  {
    id: "Braum",
    name: "브라움",
    initial: "ㅂ",
    imgPath: "../../assets/images/league_of_legends/characters/Braum.png",
  },
  {
    id: "Vladimir",
    name: "블라디미르",
    initial: "ㅂ",
    imgPath: "../../assets/images/league_of_legends/characters/Vladimir.png",
  },
  {
    id: "Blitzcrank",
    name: "블리츠크랭크",
    initial: "ㅂ",
    imgPath: "../../assets/images/league_of_legends/characters/Blitzcrank.png",
  },
  {
    id: "Viego",
    name: "비에고",
    initial: "ㅂ",
    imgPath: "../../assets/images/league_of_legends/characters/Viego.png",
  },
  {
    id: "Viktor",
    name: "빅토르",
    initial: "ㅂ",
    imgPath: "../../assets/images/league_of_legends/characters/Viktor.png",
  },
  {
    id: "Poppy",
    name: "뽀삐",
    initial: "ㅂ",
    imgPath: "../../assets/images/league_of_legends/characters/Poppy.png",
  },
  {
    id: "Volibear",
    name: "볼리베어",
    initial: "ㅂ",
    imgPath: "../../assets/images/league_of_legends/characters/Volibear.png",
  },
  // ㅅ
  {
    id: "Sion",
    name: "사이온",
    initial: "ㅅ",
    imgPath: "../../assets/images/league_of_legends/characters/Sion.png",
  },
  {
    id: "Samira",
    name: "사미라",
    initial: "ㅅ",
    imgPath: "../../assets/images/league_of_legends/characters/Samira.png",
  },
  {
    id: "Sylas",
    name: "사일러스",
    initial: "ㅅ",
    imgPath: "../../assets/images/league_of_legends/characters/Sylas.png",
  },
  {
    id: "Senna",
    name: "세나",
    initial: "ㅅ",
    imgPath: "../../assets/images/league_of_legends/characters/Senna.png",
  },
  {
    id: "Seraphine",
    name: "세라핀",
    initial: "ㅅ",
    imgPath: "../../assets/images/league_of_legends/characters/Seraphine.png",
  },
  {
    id: "Sejuani",
    name: "세주아니",
    initial: "ㅅ",
    imgPath: "../../assets/images/league_of_legends/characters/Sejuani.png",
  },
  {
    id: "Sett",
    name: "세트",
    initial: "ㅅ",
    imgPath: "../../assets/images/league_of_legends/characters/Sett.png",
  },
  {
    id: "Sona",
    name: "소나",
    initial: "ㅅ",
    imgPath: "../../assets/images/league_of_legends/characters/Sona.png",
  },
  {
    id: "Soraka",
    name: "소라카",
    initial: "ㅅ",
    imgPath: "../../assets/images/league_of_legends/characters/Soraka.png",
  },
  {
    id: "Swain",
    name: "스웨인",
    initial: "ㅅ",
    imgPath: "../../assets/images/league_of_legends/characters/Swain.png",
  },
  {
    id: "Skarner",
    name: "스카너",
    initial: "ㅅ",
    imgPath: "../../assets/images/league_of_legends/characters/Skarner.png",
  },
  {
    id: "Shaco",
    name: "샤코",
    initial: "ㅅ",
    imgPath: "../../assets/images/league_of_legends/characters/Shaco.png",
  },
  {
    id: "Shen",
    name: "쉔",
    initial: "ㅅ",
    imgPath: "../../assets/images/league_of_legends/characters/Shen.png",
  },
  {
    id: "Shyvana",
    name: "쉬바나",
    initial: "ㅅ",
    imgPath: "../../assets/images/league_of_legends/characters/Shyvana.png",
  },
  {
    id: "XinZhao",
    name: "신 짜오",
    initial: "ㅅ",
    imgPath: "../../assets/images/league_of_legends/characters/XinZhao.png",
  },
  {
    id: "Syndra",
    name: "신드라",
    initial: "ㅅ",
    imgPath: "../../assets/images/league_of_legends/characters/Syndra.png",
  },
  {
    id: "Singed",
    name: "신지드",
    initial: "ㅅ",
    imgPath: "../../assets/images/league_of_legends/characters/Singed.png",
  },
  {
    id: "Sivir",
    name: "시비르",
    initial: "ㅅ",
    imgPath: "../../assets/images/league_of_legends/characters/Sivir.png",
  },
  // To Do
  // 2023-10까지의 데이터임. 시비르까지 밖에 안 적어둠. 신캐 및 미작성 캐릭터 추가해야됨.
];

export default characters;

/*
============================= 동적 import =============================
import React, { useState, useEffect } from 'react';

function Channel({ selectedGame }) {
  const [characterData, setCharacterData] = useState([]);

  useEffect(() => {
    import(`../../data/${selectedGame}/character_data.js`)
      .then((module) => {
        setCharacterData(module.default);
      })
      .catch((error) => {
        console.error('캐릭터 데이터를 로드하는 중 오류 발생:', error);
      });
  }, [selectedGame]);
*/

/*
============================= 필터링 구현 =============================
// src/components/channel/InitialFilter.js

import React from 'react';

function InitialFilter({ onSelectInitial }) {
  const initials = ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];

  return (
    <div>
      {initials.map((initial) => (
        <button key={initial} onClick={() => onSelectInitial(initial)}>
          {initial}
        </button>
      ))}
    </div>
  );
}

export default InitialFilter;

// src/components/channel/Main.js

import React, { useState, useEffect } from 'react';
import InitialFilter from './InitialFilter';

function Channel({ selectedGame }) {
  const [characterData, setCharacterData] = useState([]);
  const [selectedInitial, setSelectedInitial] = useState(null);

  useEffect(() => {
    import(`../../data/${selectedGame}/character_data.js`)
      .then((module) => {
        setCharacterData(module.default);
      })
      .catch((error) => {
        console.error('캐릭터 데이터를 로드하는 중 오류 발생:', error);
      });
  }, [selectedGame]);

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
*/

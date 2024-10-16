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
    id: "Gragas",
    name: "그라가스",
    initial: "ㄱ",
    imgPath: "../../assets/images/league_of_legends/characters/Gragas.png",
  },
  {
    id: "Gwen",
    name: "그웬",
    initial: "ㄱ",
    imgPath: "../../assets/images/league_of_legends/characters/Gwen.png",
  },
  {
    id: "Graves",
    name: "그레이브즈",
    initial: "ㄱ",
    imgPath: "../../assets/images/league_of_legends/characters/Graves.png",
  },
  //ㄴ
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
    id: "Naafiri",
    name: "나피리",
    initial: "ㄴ",
    imgPath: "../../assets/images/league_of_legends/characters/Naafiri.png",
  },
  {
    id: "Nautilus",
    name: "노틸러스",
    initial: "ㄴ",
    imgPath: "../../assets/images/league_of_legends/characters/Nautilus.png",
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
  //ㄷ
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
  //ㄹ
  {
    id: "Ryze",
    name: "라이즈",
    initial: "ㄹ",
    imgPath: "../../assets/images/league_of_legends/characters/Ryze.png",
  },
  {
    id: "Rakan",
    name: "라칸",
    initial: "ㄹ",
    imgPath: "../../assets/images/league_of_legends/characters/Rakan.png",
  },
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
    id: "Renata",
    name: "레나타 글라스크",
    initial: "ㄹ",
    imgPath: "../../assets/images/league_of_legends/characters/Renata.png",
  },
  {
    id: "Renekton",
    name: "레넥톤",
    initial: "ㄹ",
    imgPath: "../../assets/images/league_of_legends/characters/Renekton.png",
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
    id: "Rell",
    name: "렐",
    initial: "ㄹ",
    imgPath: "../../assets/images/league_of_legends/characters/Rell.png",
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
    id: "LeBlanc",
    name: "르블랑",
    initial: "ㄹ",
    imgPath: "../../assets/images/league_of_legends/characters/LeBlanc.png",
  },
  {
    id: "LeeSin",
    name: "리 신",
    initial: "ㄹ",
    imgPath: "../../assets/images/league_of_legends/characters/LeeSin.png",
  },
  {
    id: "Riven",
    name: "리븐",
    initial: "ㄹ",
    imgPath: "../../assets/images/league_of_legends/characters/Riven.png",
  },
  {
    id: "Lissandra",
    name: "리산드라",
    initial: "ㄹ",
    imgPath: "../../assets/images/league_of_legends/characters/Lissandra.png",
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
    id: "Mordekaiser",
    name: "모데카이저",
    initial: "ㅁ",
    imgPath: "../../assets/images/league_of_legends/characters/Mordekaiser.png",
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
  {
    id: "MissFortune",
    name: "미스 포츈",
    initial: "ㅁ",
    imgPath: "../../assets/images/league_of_legends/characters/MissFortune.png",
  },
  {
    id: "Milio",
    name: "밀리오",
    initial: "ㅁ",
    imgPath: "../../assets/images/league_of_legends/characters/Milio.png",
  },

  //ㅂ
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
    id: "Volibear",
    name: "볼리베어",
    initial: "ㅂ",
    imgPath: "../../assets/images/league_of_legends/characters/Volibear.png",
  },
  {
    id: "Braum",
    name: "브라움",
    initial: "ㅂ",
    imgPath: "../../assets/images/league_of_legends/characters/Braum.png",
  },
  {
    id: "Briar",
    name: "브라이어",
    initial: "ㅂ",
    imgPath: "../../assets/images/league_of_legends/characters/Briar.png",
  },
  {
    id: "Brand",
    name: "브랜드",
    initial: "ㅂ",
    imgPath: "../../assets/images/league_of_legends/characters/Brand.png",
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
  //ㅅ
  {
    id: "Samira",
    name: "사미라",
    initial: "ㅅ",
    imgPath: "../../assets/images/league_of_legends/characters/Samira.png",
  },
  {
    id: "Sion",
    name: "사이온",
    initial: "ㅅ",
    imgPath: "../../assets/images/league_of_legends/characters/Sion.png",
  },
  {
    id: "Sylas",
    name: "사일러스",
    initial: "ㅅ",
    imgPath: "../../assets/images/league_of_legends/characters/Sylas.png",
  },
  {
    id: "Shaco",
    name: "샤코",
    initial: "ㅅ",
    imgPath: "../../assets/images/league_of_legends/characters/Shaco.png",
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
    id: "Smolder",
    name: "스몰더",
    initial: "ㅅ",
    imgPath: "../../assets/images/league_of_legends/characters/Smolder.png",
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
    id: "Sivir",
    name: "시비르",
    initial: "ㅅ",
    imgPath: "../../assets/images/league_of_legends/characters/Sivir.png",
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
    id: "Thresh",
    name: "쓰레쉬",
    initial: "ㅆ",
    imgPath: "../../assets/images/league_of_legends/characters/Thresh.png",
  },
  //ㅇ
  {
    id: "Ahri",
    name: "아리",
    initial: "ㅇ",
    imgPath: "../../assets/images/league_of_legends/characters/Ahri.png",
  },
  {
    id: "Amumu",
    name: "아무무",
    initial: "ㅇ",
    imgPath: "../../assets/images/league_of_legends/characters/Amumu.png",
  },
  {
    id: "AurelionSol",
    name: "아우렐리온 솔",
    initial: "ㅇ",
    imgPath: "../../assets/images/league_of_legends/characters/AurelionSol.png",
  },
  {
    id: "Ivern",
    name: "아이번",
    initial: "ㅇ",
    imgPath: "../../assets/images/league_of_legends/characters/Ivern.png",
  },
  {
    id: "Azir",
    name: "아지르",
    initial: "ㅇ",
    imgPath: "../../assets/images/league_of_legends/characters/Azir.png",
  },
  {
    id: "Akali",
    name: "아칼리",
    initial: "ㅇ",
    imgPath: "../../assets/images/league_of_legends/characters/Akali.png",
  },
  {
    id: "Akshan",
    name: "아크샨",
    initial: "ㅇ",
    imgPath: "../../assets/images/league_of_legends/characters/Akshan.png",
  },
  {
    id: "Aatrox",
    name: "아트록스",
    initial: "ㅇ",
    imgPath: "../../assets/images/league_of_legends/characters/Aatrox.png",
  },
  {
    id: "Aphelios",
    name: "아펠리오스",
    initial: "ㅇ",
    imgPath: "../../assets/images/league_of_legends/characters/Aphelios.png",
  },
  {
    id: "Alistar",
    name: "알리스타",
    initial: "ㅇ",
    imgPath: "../../assets/images/league_of_legends/characters/Alistar.png",
  },
  {
    id: "Annie",
    name: "애니",
    initial: "ㅇ",
    imgPath: "../../assets/images/league_of_legends/characters/Annie.png",
  },
  {
    id: "Anivia",
    name: "애니비아",
    initial: "ㅇ",
    imgPath: "../../assets/images/league_of_legends/characters/Anivia.png",
  },
  {
    id: "Ashe",
    name: "애쉬",
    initial: "ㅇ",
    imgPath: "../../assets/images/league_of_legends/characters/Ashe.png",
  },
  {
    id: "Yasuo",
    name: "야스오",
    initial: "ㅇ",
    imgPath: "../../assets/images/league_of_legends/characters/Yasuo.png",
  },
  {
    id: "Ekko",
    name: "에코",
    initial: "ㅇ",
    imgPath: "../../assets/images/league_of_legends/characters/Ekko.png",
  },
  {
    id: "Elise",
    name: "엘리스",
    initial: "ㅇ",
    imgPath: "../../assets/images/league_of_legends/characters/Elise.png",
  },
  {
    id: "Wukong",
    name: "오공",
    initial: "ㅇ",
    imgPath: "../../assets/images/league_of_legends/characters/Wukong.png",
  },
  {
    id: "Aurora",
    name: "오로라",
    initial: "ㅇ",
    imgPath: "../../assets/images/league_of_legends/characters/Aurora.png",
  },
  {
    id: "Ornn",
    name: "오른",
    initial: "ㅇ",
    imgPath: "../../assets/images/league_of_legends/characters/Ornn.png",
  },
  {
    id: "Orianna",
    name: "오리아나",
    initial: "ㅇ",
    imgPath: "../../assets/images/league_of_legends/characters/Orianna.png",
  },
  {
    id: "Olaf",
    name: "올라프",
    initial: "ㅇ",
    imgPath: "../../assets/images/league_of_legends/characters/Olaf.png",
  },
  {
    id: "Yone",
    name: "요네",
    initial: "ㅇ",
    imgPath: "../../assets/images/league_of_legends/characters/Yone.png",
  },
  {
    id: "Yorick",
    name: "요릭",
    initial: "ㅇ",
    imgPath: "../../assets/images/league_of_legends/characters/Yorick.png",
  },
  {
    id: "Udyr",
    name: "우디르",
    initial: "ㅇ",
    imgPath: "../../assets/images/league_of_legends/characters/Udyr.png",
  },
  {
    id: "Urgot",
    name: "우르곳",
    initial: "ㅇ",
    imgPath: "../../assets/images/league_of_legends/characters/Urgot.png",
  },
  {
    id: "Warwick",
    name: "워윅",
    initial: "ㅇ",
    imgPath: "../../assets/images/league_of_legends/characters/Warwick.png",
  },
  {
    id: "Yuumi",
    name: "유미",
    initial: "ㅇ",
    imgPath: "../../assets/images/league_of_legends/characters/Yuumi.png",
  },
  {
    id: "Irelia",
    name: "이렐리아",
    initial: "ㅇ",
    imgPath: "../../assets/images/league_of_legends/characters/Irelia.png",
  },
  {
    id: "Evelynn",
    name: "이블린",
    initial: "ㅇ",
    imgPath: "../../assets/images/league_of_legends/characters/Evelynn.png",
  },
  {
    id: "Ezreal",
    name: "이즈리얼",
    initial: "ㅇ",
    imgPath: "../../assets/images/league_of_legends/characters/Ezreal.png",
  },
  {
    id: "Illaoi",
    name: "일라오이",
    initial: "ㅇ",
    imgPath: "../../assets/images/league_of_legends/characters/Illaoi.png",
  },
  //ㅈ
  {
    id: "JarvanIV",
    name: "자르반 4세",
    initial: "ㅈ",
    imgPath: "../../assets/images/league_of_legends/characters/JarvanIV.png",
  },
  {
    id: "Xayah",
    name: "자야",
    initial: "ㅈ",
    imgPath: "../../assets/images/league_of_legends/characters/Xayah.png",
  },
  {
    id: "Zyra",
    name: "자이라",
    initial: "ㅈ",
    imgPath: "../../assets/images/league_of_legends/characters/Zyra.png",
  },
  {
    id: "Zac",
    name: "자크",
    initial: "ㅈ",
    imgPath: "../../assets/images/league_of_legends/characters/Zac.png",
  },
  {
    id: "Janna",
    name: "잔나",
    initial: "ㅈ",
    imgPath: "../../assets/images/league_of_legends/characters/Janna.png",
  },
  {
    id: "Jax",
    name: "잭스",
    initial: "ㅈ",
    imgPath: "../../assets/images/league_of_legends/characters/Jax.png",
  },
  {
    id: "Zed",
    name: "제드",
    initial: "ㅈ",
    imgPath: "../../assets/images/league_of_legends/characters/Zed.png",
  },
  {
    id: "Xerath",
    name: "제라스",
    initial: "ㅈ",
    imgPath: "../../assets/images/league_of_legends/characters/Xerath.png",
  },
  {
    id: "Zeri",
    name: "제리",
    initial: "ㅈ",
    imgPath: "../../assets/images/league_of_legends/characters/Zeri.png",
  },
  {
    id: "Jayce",
    name: "제이스",
    initial: "ㅈ",
    imgPath: "../../assets/images/league_of_legends/characters/Jayce.png",
  },
  {
    id: "Zoe",
    name: "조이",
    initial: "ㅈ",
    imgPath: "../../assets/images/league_of_legends/characters/Zoe.png",
  },
  {
    id: "Ziggs",
    name: "직스",
    initial: "ㅈ",
    imgPath: "../../assets/images/league_of_legends/characters/Ziggs.png",
  },
  {
    id: "Jhin",
    name: "진",
    initial: "ㅈ",
    imgPath: "../../assets/images/league_of_legends/characters/Jhin.png",
  },
  {
    id: "Zilean",
    name: "질리언",
    initial: "ㅈ",
    imgPath: "../../assets/images/league_of_legends/characters/Zilean.png",
  },
  {
    id: "Jinx",
    name: "징크스",
    initial: "ㅈ",
    imgPath: "../../assets/images/league_of_legends/characters/Jinx.png",
  },
  //ㅊ
  {
    id: "Chogath",
    name: "초가스",
    initial: "ㅊ",
    imgPath: "../../assets/images/league_of_legends/characters/Chogath.png",
  },
  //ㅋ
  {
    id: "Karma",
    name: "카르마",
    initial: "ㅋ",
    imgPath: "../../assets/images/league_of_legends/characters/Karma.png",
  },
  {
    id: "Camille",
    name: "카밀",
    initial: "ㅋ",
    imgPath: "../../assets/images/league_of_legends/characters/Camille.png",
  },
  {
    id: "Kassadin",
    name: "카사딘",
    initial: "ㅋ",
    imgPath: "../../assets/images/league_of_legends/characters/Kassadin.png",
  },
  {
    id: "Karthus",
    name: "카서스",
    initial: "ㅋ",
    imgPath: "../../assets/images/league_of_legends/characters/Karthus.png",
  },
  {
    id: "Cassiopeia",
    name: "카시오페아",
    initial: "ㅋ",
    imgPath: "../../assets/images/league_of_legends/characters/Cassiopeia.png",
  },
  {
    id: "Kai'Sa",
    name: "카이사",
    initial: "ㅋ",
    imgPath: "../../assets/images/league_of_legends/characters/Kai'Sa.png",
  },
  {
    id: "Kha'Zix",
    name: "카직스",
    initial: "ㅋ",
    imgPath: "../../assets/images/league_of_legends/characters/Kha'Zix.png",
  },
  {
    id: "Katarina",
    name: "카타리나",
    initial: "ㅋ",
    imgPath: "../../assets/images/league_of_legends/characters/Katarina.png",
  },
  {
    id: "Kalista",
    name: "칼리스타",
    initial: "ㅋ",
    imgPath: "../../assets/images/league_of_legends/characters/Kalista.png",
  },
  {
    id: "Kennen",
    name: "케넨",
    initial: "ㅋ",
    imgPath: "../../assets/images/league_of_legends/characters/Kennen.png",
  },
  {
    id: "Caitlyn",
    name: "케이틀린",
    initial: "ㅋ",
    imgPath: "../../assets/images/league_of_legends/characters/Caitlyn.png",
  },
  {
    id: "Kayn",
    name: "케인",
    initial: "ㅋ",
    imgPath: "../../assets/images/league_of_legends/characters/Kayn.png",
  },
  {
    id: "Kayle",
    name: "케일",
    initial: "ㅋ",
    imgPath: "../../assets/images/league_of_legends/characters/Kayle.png",
  },
  {
    id: "Kog'Maw",
    name: "코그모",
    initial: "ㅋ",
    imgPath: "../../assets/images/league_of_legends/characters/Kog'Maw.png",
  },
  {
    id: "Corki",
    name: "코르키",
    initial: "ㅋ",
    imgPath: "../../assets/images/league_of_legends/characters/Corki.png",
  },
  {
    id: "Quinn",
    name: "퀸",
    initial: "ㅋ",
    imgPath: "../../assets/images/league_of_legends/characters/Quinn.png",
  },
  {
    id: "K'Sante",
    name: "크산테",
    initial: "ㅋ",
    imgPath: "../../assets/images/league_of_legends/characters/K'Sante.png",
  },
  {
    id: "Kled",
    name: "클레드",
    initial: "ㅋ",
    imgPath: "../../assets/images/league_of_legends/characters/Kled.png",
  },
  {
    id: "Qiyana",
    name: "키아나",
    initial: "ㅋ",
    imgPath: "../../assets/images/league_of_legends/characters/Qiyana.png",
  },
  {
    id: "Kindred",
    name: "킨드레드",
    initial: "ㅋ",
    imgPath: "../../assets/images/league_of_legends/characters/Kindred.png",
  },
  //ㅌ
  {
    id: "Taric",
    name: "타릭",
    initial: "ㅌ",
    imgPath: "../../assets/images/league_of_legends/characters/Taric.png",
  },
  {
    id: "Talon",
    name: "탈론",
    initial: "ㅌ",
    imgPath: "../../assets/images/league_of_legends/characters/Talon.png",
  },
  {
    id: "Taliyah",
    name: "탈리야",
    initial: "ㅌ",
    imgPath: "../../assets/images/league_of_legends/characters/Taliyah.png",
  },
  {
    id: "TahmKench",
    name: "탐 켄치",
    initial: "ㅌ",
    imgPath: "../../assets/images/league_of_legends/characters/TahmKench.png",
  },
  {
    id: "Trundle",
    name: "트런들",
    initial: "ㅌ",
    imgPath: "../../assets/images/league_of_legends/characters/Trundle.png",
  },
  {
    id: "Tristana",
    name: "트리스타나",
    initial: "ㅌ",
    imgPath: "../../assets/images/league_of_legends/characters/Tristana.png",
  },
  {
    id: "Tryndamere",
    name: "트린다미어",
    initial: "ㅌ",
    imgPath: "../../assets/images/league_of_legends/characters/Tryndamere.png",
  },
  {
    id: "TwistedFate",
    name: "트위스티드 페이트",
    initial: "ㅌ",
    imgPath: "../../assets/images/league_of_legends/characters/TwistedFate.png",
  },
  {
    id: "Twitch",
    name: "트위치",
    initial: "ㅌ",
    imgPath: "../../assets/images/league_of_legends/characters/Twitch.png",
  },
  {
    id: "Teemo",
    name: "티모",
    initial: "ㅌ",
    imgPath: "../../assets/images/league_of_legends/characters/Teemo.png",
  },
  //ㅍ
  {
    id: "Pyke",
    name: "파이크",
    initial: "ㅍ",
    imgPath: "../../assets/images/league_of_legends/characters/Pyke.png",
  },
  {
    id: "Pantheon",
    name: "판테온",
    initial: "ㅍ",
    imgPath: "../../assets/images/league_of_legends/characters/Pantheon.png",
  },
  {
    id: "Fiddlesticks",
    name: "피들스틱",
    initial: "ㅍ",
    imgPath:
      "../../assets/images/league_of_legends/characters/Fiddlesticks.png",
  },
  {
    id: "Fiora",
    name: "피오라",
    initial: "ㅍ",
    imgPath: "../../assets/images/league_of_legends/characters/Fiora.png",
  },
  {
    id: "Fizz",
    name: "피즈",
    initial: "ㅍ",
    imgPath: "../../assets/images/league_of_legends/characters/Fizz.png",
  },
  //ㅎ
  {
    id: "Heimerdinger",
    name: "하이머딩거",
    initial: "ㅎ",
    imgPath:
      "../../assets/images/league_of_legends/characters/Heimerdinger.png",
  },
  {
    id: "Hecarim",
    name: "헤카림",
    initial: "ㅎ",
    imgPath: "../../assets/images/league_of_legends/characters/Hecarim.png",
  },
  {
    id: "Huwei",
    name: "흐웨이",
    initial: "ㅎ",
    imgPath: "../../assets/images/league_of_legends/characters/Huwei.png",
  },
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

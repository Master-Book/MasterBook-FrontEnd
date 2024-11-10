// src/components/post/postList/PostList.js

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./PostList.css";

function PostList({ gameId, gameName, characterId, characterName }) {
  const [posts, setPosts] = useState([]); // 게시글 목록 상태
  const navigate = useNavigate();

  useEffect(() => {
    console.log(
      "postList 가져온 정보:",
      gameId,
      gameName,
      characterId,
      characterName
    );
    // 컴포넌트가 마운트될 때 API 호출
    axios
      // 일단 public의 json파일로 출력함
      .get("/posts.json") // 게시글 list 백엔드 API 엔드포인트 : /api/posts
      .then((response) => {
        // 게임 ID와 캐릭터 ID를 기반으로 필터링
        const filteredPosts = response.data.filter(
          (post) => post.gameId === gameId && post.characterId === characterId
        );
        setPosts(filteredPosts);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, [gameId, characterId]);

  const handleWritePost = (post) => {
    const data = {
      characterId: characterId,
      gameId: gameId,
      postId: post.id,
    };
    // 글 작성 페이지로 이동
    navigate(`/postWrite`);
  };

  console.log("gameName (POstList):", gameName);

  return (
    <div>
      <div id="PostList">
        <h1>'{characterName}' 공략글</h1>
        <div className="write-button-container">
          <button className="write-button" onClick={handleWritePost}>
            글 작성
          </button>
        </div>
        {posts.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>글번호</th>
                <th>제목</th>
                <th>작성자</th>
                <th>등록일</th>
                <th>조회수</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id}>
                  <td>{post.id}</td>
                  <td>
                    <Link
                      to={`/${gameId}/${characterId}/${post.id}`}
                      state={{ gameName, characterName }} // state를 전달하는 부분
                    >
                      {post.title}
                    </Link>
                  </td>
                  <td>{post.author}</td>
                  <td>{post.date}</td>
                  <td>{post.views}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div>해당 캐릭터의 게시글이 없습니다.</div>
        )}
        <div className="pagination">
          <button>Previous</button>
          {[1, 2, 3, "...", 7].map((page, idx) => (
            <button key={idx}>{page}</button>
          ))}
          <button>Next</button>
        </div>
      </div>
    </div>
  );
}

export default PostList;

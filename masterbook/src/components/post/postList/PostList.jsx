// src/components/post/postList/PostList.js

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./PostList.css";

function PostList({ gameName, characterName }) {
  const [posts, setPosts] = useState([]); // 게시글 목록 상태
  const navigate = useNavigate();

  useEffect(() => {
    // 컴포넌트가 마운트될 때 API 호출
    axios
      // 일단 public의 json파일로 출력함
      .get("/posts.json") // 게시글 list 백엔드 API 엔드포인트 : /api/posts
      .then((response) => {
        setPosts(response.data); // 응답 데이터로 setPosts 설정
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  const handleWritePost = () => {
    // 글 작성 페이지로 이동
    navigate("/postWrite");
  };

  return (
    <div id="PostList">
      <h1>'{characterName}' 공략글</h1>
      <div className="write-button-container">
        <button className="write-button" onClick={handleWritePost}>
          글 작성
        </button>
      </div>
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
                <Link to={`/post/${post.id}`}>{post.title}</Link>
              </td>
              <td>{post.author}</td>
              <td>{post.date}</td>
              <td>{post.views}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button>Previous</button>
        {[1, 2, 3, "...", 7].map((page, idx) => (
          <button key={idx}>{page}</button>
        ))}
        <button>Next</button>
      </div>
    </div>
  );
}

export default PostList;

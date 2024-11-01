// src/components/post/PostList.js

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Link 컴포넌트 임포트

function PostList() {
  const [boardList, setBoardList] = useState([]);

  const getBoardList = async () => {
    try {
      const resp = await axios.get("http://localhost:8080/postList"); // URL 수정 및 요청
      setBoardList(resp.data); // 응답 데이터로 boardList 설정

      const pngn = resp.pagination;
      console.log(pngn);
    } catch (error) {
      console.error("Failed to fetch board list:", error);
    }
  };

  useEffect(() => {
    getBoardList();
  }, []);

  return (
    <div>
      <h1>PostList</h1>
      <table class="table">
        <tr>
          <td colspan="2">
            <h2>게시판</h2>
          </td>
        </tr>
        <tr class="header">
          <td class="num">번호</td>
          <td class="title">제목</td>
          <td>작성자</td>
          <td>작성날짜</td>
        </tr>
      </table>
      <ul>
        {boardList.map((board) => (
          <li key={board.idx}>
            <Link to={`/postList/${board.idx}`}>{board.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;

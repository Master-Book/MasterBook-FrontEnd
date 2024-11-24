// src/components/post/postList/PostList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './PostList.css';
import { FaBook } from 'react-icons/fa';

function PostList({ gameId, gameName, characterId, characterName }) {
  const [posts, setPosts] = useState([]); // 게시글 목록 상태
  const navigate = useNavigate();

  useEffect(() => {
    // 컴포넌트가 마운트될 때 API 호출
    axios
      // 실제 API 엔드포인트로 변경해야 합니다.
      .get('/posts.json')
      .then((response) => {
        // 게임 ID와 캐릭터 ID를 기반으로 필터링
        const filteredPosts = response.data.filter(
          (post) => post.gameId === gameId && post.characterId === characterId
        );
        setPosts(filteredPosts);
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });
  }, [gameId, characterId]);

  const handleWritePost = () => {
    navigate(`/postWrite/${gameId}/${characterId}`);
  };

  return (
    <div id="PostList">
      {/* 헤딩 컨테이너 */}
      <div className="heading-container">
        {/* 아이콘 추가 */}
        <FaBook className="heading-icon" />
        <h1>{characterName} 공략글</h1>
      </div>
      <div className="write-button-container">
        <button className="write-button" onClick={handleWritePost}>
          글 작성
        </button>
      </div>
      {posts.length > 0 ? (
        <div className="table-container">
          <table className="post-table">
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
                  <td className="post-title-cell">
                    <Link
                      to={`/${gameId}/${characterId}/${post.id}`}
                      state={{ gameName, characterName }}
                      title={post.title} /* 툴팁으로 전체 제목 표시 */
                    >
                      {post.title}
                    </Link>
                  </td>
                  <td title={post.author}>{post.author}</td>
                  <td>{post.date}</td>
                  <td>{post.views}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="no-posts">해당 캐릭터의 게시글이 없습니다.</div>
      )}
      <div className="pagination">
        <button>Previous</button>
        {[1, 2, 3, '...', 7].map((page, idx) => (
          <button key={idx}>{page}</button>
        ))}
        <button>Next</button>
      </div>
    </div>
  );
}

export default PostList;

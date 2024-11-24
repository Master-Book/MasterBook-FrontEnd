// src/components/post/postList/PostList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './PostList.css';
import { FaBook, FaSearch } from 'react-icons/fa';
import { debounce } from 'lodash';

function PostList({ gameId, gameName, characterId, characterName }) {
  const [posts, setPosts] = useState([]); // 전체 게시글 목록
  const [searchTerm, setSearchTerm] = useState(''); // 검색어 상태
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

  // 디바운스된 검색어 업데이트 함수
  const handleSearch = debounce((value) => {
    setSearchTerm(value);
  }, 300);

  // 검색어에 따라 게시글 필터링
  const filteredPosts = posts.filter((post) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return (
      post.title.toLowerCase().includes(lowerCaseSearchTerm) ||
      post.author.toLowerCase().includes(lowerCaseSearchTerm)
    );
  });

  return (
    <div id="PostList">
      {/* 헤딩 컨테이너 */}
      <div className="heading-container">
        {/* 아이콘 추가 */}
        <FaBook className="heading-icon" />
        <h1>{characterName} 공략글</h1>
      </div>

      {/* 검색 및 글 작성 버튼 컨테이너 */}
      <div className="actions-container">
        {/* 검색 입력 필드 */}
        <div className="search-container">
          <input
            type="text"
            placeholder="제목 또는 작성자로 검색"
            onChange={(e) => handleSearch(e.target.value)}
          />
          <FaSearch className="search-icon" />
        </div>
        <button className="write-button" onClick={handleWritePost}>
          글 작성
        </button>
      </div>

      {filteredPosts.length > 0 ? (
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
              {filteredPosts.map((post) => (
                <tr key={post.id}>
                  <td>{post.id}</td>
                  <td className="post-title-cell">
                    <Link
                      to={`/${gameId}/${characterId}/${post.id}`}
                      state={{ gameName, characterName }}
                      title={post.title}
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
        <div className="no-posts">검색 결과가 없습니다.</div>
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

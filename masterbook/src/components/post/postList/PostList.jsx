// src/components/post/postList/PostList.js

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './PostList.css';
import { FaBook, FaSearch } from 'react-icons/fa';
import { debounce } from 'lodash';

function PostList({ gameId, gameName, characterId, characterName, posts }) {
  const [searchTerm, setSearchTerm] = useState(''); // 검색어 상태
  const navigate = useNavigate();
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

  // 페이지네이션 관련 계산
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
            placeholder="제목 또는 작성자로 게시글 검색"
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
                <tr key={post.postId}>
                  <td>{post.postId}</td>
                  <td className="post-title-cell">
                    <Link
                      to={`/${gameId}/${characterId}/${post.postId}`}
                      state={{ gameName, characterName }}
                      title={post.title}
                    >
                      {post.title}
                    </Link>
                  </td>
                  <td title={post.author}>{post.author}</td>
                  <td>{new Date(post.date).toLocaleDateString()}</td>
                  <td>{post.views}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="no-posts">검색 결과가 없습니다.</div>
      )}

      {/* 페이지네이션 */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={currentPage === page ? "active" : ""}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}

export default PostList;

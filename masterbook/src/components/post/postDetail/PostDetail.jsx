// src/components/post/postDetail/PostDetail.js

import React, { useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  FaThumbsUp,
  FaRegThumbsUp,
  FaCommentDots,
  FaCheckCircle,
} from 'react-icons/fa';
import './PostDetail.css';

function PostDetail() {
  const { gameId, characterId, postId } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]); // 댓글 목록 상태
  const [newComment, setNewComment] = useState(''); // 새 댓글 입력 상태
  const [likes, setLikes] = useState(0); // 좋아요 수 상태
  const [isLiked, setIsLiked] = useState(false); // 좋아요 여부 상태
  const [validCount, setValidCount] = useState(0); // 유효함 클릭 수
  const [invalidCount, setInvalidCount] = useState(0); // 유효하지 않음 클릭 수
  const location = useLocation();
  const navigate = useNavigate();
  const { gameName, characterName } = location.state || {};

  useEffect(() => {
    // 게시글 데이터 가져오기
    axios
      .get('/posts.json') // 로컬 JSON 파일에서 데이터 가져오기
      .then((response) => {
        // 해당 게시글 찾기
        const postData = response.data.find(
          (item) =>
            item.gameId === gameId &&
            item.characterId === characterId &&
            item.id === parseInt(postId)
        );
        if (postData) {
          setPost(postData);
          setLikes(postData.likes || 0);
          setIsLiked(false); // 로컬 데이터이므로 기본값 설정
          setComments(postData.comments || []);
          setValidCount(postData.validCount || 0);
          setInvalidCount(postData.invalidCount || 0);
        }
      })
      .catch((error) => console.error('Error fetching post:', error));
  }, [gameId, characterId, postId]);

  // 댓글 추가 핸들러
  const handleAddComment = () => {
    if (!newComment.trim()) return;

    // 로컬 데이터에 댓글 추가
    const newCommentData = {
      id: comments.length + 1,
      author: '익명', // 실제로는 로그인한 사용자 이름
      content: newComment,
      date: new Date().toISOString(),
    };
    setComments([...comments, newCommentData]);
    setNewComment('');
  };

  // 좋아요 버튼 핸들러
  const handleLikeToggle = () => {
    // 로컬 데이터이므로 간단하게 상태만 변경
    setIsLiked(!isLiked);
    setLikes((prevLikes) => (isLiked ? prevLikes - 1 : prevLikes + 1));
  };

  // 유효함 버튼 핸들러
  const handleValidClick = () => {
    setValidCount((prevCount) => prevCount + 1);
  };

  // 유효하지 않음 버튼 핸들러
  const handleInvalidClick = () => {
    setInvalidCount((prevCount) => prevCount + 1);
  };

  if (!post) return <p>Loading...</p>; // 데이터가 없을 때 로딩 표시

  // 유효성 검사 결과에 따른 인증 표시
  const isValid = validCount > invalidCount;

  return (
    <div id="PostDetail">
      {/* 게시글 헤더 */}
      <div className="post-detail-header">
        <h1>
          {post.title}{' '}
          {isValid && (
            <FaCheckCircle className="valid-icon" title="유효한 공략입니다" />
          )}
        </h1>
        <div className="post-info">
          <span>작성자: {post.author}</span>
          <span>작성일: {new Date(post.date).toLocaleDateString()}</span>
          <span>조회수: {post.views}</span>
        </div>
      </div>

      {/* 게시글 내용 */}
      <div className="post-detail-content">
        <p>{post.content}</p>
      </div>

      {/* 유효성 검사 섹션 */}
      <div className="validity-section">
        <p>이 공략이 현재 버전에 유효한가요?</p>
        <button className="valid-button" onClick={handleValidClick}>
          유효함 ({validCount})
        </button>
        <button className="invalid-button" onClick={handleInvalidClick}>
          유효하지 않음 ({invalidCount})
        </button>
      </div>

      {/* 좋아요 및 댓글 수 */}
      <div className="post-actions">
        <button className="like-button" onClick={handleLikeToggle}>
          {isLiked ? <FaThumbsUp /> : <FaRegThumbsUp />} 좋아요 {likes}
        </button>
        <span className="comment-count">
          <FaCommentDots /> 댓글 {comments.length}
        </span>
      </div>

      {/* 댓글 섹션 */}
      <div className="comments-section">
        <h3>댓글</h3>
        <ul className="comment-list">
          {comments.map((comment) => (
            <li key={comment.id} className="comment-item">
              <div className="comment-author">{comment.author}</div>
              <div className="comment-content">{comment.content}</div>
              <div className="comment-date">
                {new Date(comment.date).toLocaleString()}
              </div>
            </li>
          ))}
        </ul>

        {/* 댓글 입력 폼 */}
        <div className="comment-form">
          <textarea
            placeholder="댓글을 입력하세요..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button onClick={handleAddComment}>댓글 달기</button>
        </div>
      </div>

      {/* 뒤로가기 버튼 */}
      <div className="back-button-container">
        <button onClick={() => navigate(-1)}>목록으로 돌아가기</button>
      </div>
    </div>
  );
}

export default PostDetail;

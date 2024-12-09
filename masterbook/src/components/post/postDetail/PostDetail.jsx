// src/components/post/postDetail/PostDetail.js

import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import ValiditySection from "./ValiditySection";
import PostActions from "./PostActions";
import CommentsSection from "./CommentsSection";
import "./PostDetail.css";

import { toast } from "react-toastify";

function PostDetail() {
  const { gameId, characterId, postId } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]); // 댓글 목록 상태
  const [newComment, setNewComment] = useState(""); // 새 댓글 입력 상태
  const [likes, setLikes] = useState(0); // 좋아요 수 상태
  const [isLiked, setIsLiked] = useState(false); // 좋아요 여부 상태
  const [validCount, setValidCount] = useState(0); // 유효함 클릭 수
  const [invalidCount, setInvalidCount] = useState(0); // 유효하지 않음 클릭 수
  const location = useLocation();
  const navigate = useNavigate();
  const { gameName, characterName } = location.state || {};

  const SERVER_IP = process.env.REACT_APP_SERVER_IP;

  useEffect(() => {
    // 서버에서 게시글 데이터 가져오기
    axios
      .get(`${SERVER_IP}/post/${postId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((response) => {
        const postData = response.data;
        setPost({
          postId: postData.postId,
          title: postData.title,
          author: postData.author,
          authorId: postData.authorId,
          content: postData.content,
          date: postData.date,
          gameId: postData.gameId,
          characterId: postData.characterId,
        });
        // 초기 값 설정
        setLikes(0); // 초기 좋아요는 0으로 설정
        setComments([]); // 댓글은 별도 API로 가져오지 않으므로 초기 비어 있음
        setValidCount(0); // 초기 유효함 카운트
        setInvalidCount(0); // 초기 유효하지 않음 카운트
      })
      .catch((error) => console.error('Error fetching post:', error));
  }, [postId]);

  // 댓글 추가 핸들러
  const handleAddComment = () => {
    if (!newComment.trim()) return;

    // 로컬 상태에 댓글 추가
    const newCommentData = {
      id: comments.length + 1,
      author: "익명", // 실제로는 로그인한 사용자 이름
      content: newComment,
      date: new Date().toISOString(),
    };
    setComments([...comments, newCommentData]);
    setNewComment("");
  };

  // 좋아요 버튼 핸들러
  const handleLikeToggle = () => {
    setIsLiked(!isLiked);
    setLikes((prevLikes) => (isLiked ? prevLikes - 1 : prevLikes + 1));
  };

  // 유효함 버튼 핸들러
  const handleValidClick = () => {
    setValidCount((prevCount) => prevCount + 1);
    toast.success("유효함에 투표했습니다.");
  };

  // 유효하지 않음 버튼 핸들러
  const handleInvalidClick = () => {
    setInvalidCount((prevCount) => prevCount + 1);
    toast.error("유효하지 않음에 투표했습니다.");
  };

  if (!post) return <p>Loading...</p>;

  // 유효성 검사 결과에 따른 인증 표시
  const isValid = validCount > invalidCount;

  return (
    <div id="PostDetail">
      {/* 게시글 헤더 */}
      <PostHeader
        title={post.title}
        author={post.author}
        date={post.date}
        views={post.views}
        isValid={isValid}
      />

      {/* 게시글 내용 */}
      <PostContent content={post.content} />

      {/* 유효성 검사 섹션 */}
      <ValiditySection
        validCount={validCount}
        invalidCount={invalidCount}
        onValidClick={handleValidClick}
        onInvalidClick={handleInvalidClick}
      />

      {/* 좋아요 및 댓글 수 */}
      <PostActions
        isLiked={isLiked}
        likes={likes}
        commentsCount={comments.length}
        onLikeToggle={handleLikeToggle}
      />

      {/* 댓글 섹션 */}
      <CommentsSection
        comments={comments}
        newComment={newComment}
        setNewComment={setNewComment}
        onAddComment={handleAddComment}
      />

      {/* 뒤로가기 버튼 */}
      <div className="back-button-container">
        <button onClick={() => navigate(-1)}>목록으로 돌아가기</button>
      </div>
    </div>
  );
}

export default PostDetail;

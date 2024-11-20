import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import "./PostDetail.css";

function PostDetail() {
  const { gameId, characterId, postId } = useParams(); // URL에서 gameId, characterId, postId 파라미터 가져오기
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]); // 댓글 목록 상태
  const [newComment, setNewComment] = useState(""); // 새 댓글 입력 상태
  const [likes, setLikes] = useState(0); // 좋아요 수 상태
  const [isLiked, setIsLiked] = useState(false); // 좋아요 여부 상태
  const location = useLocation();
  const { gameName, characterName } = location.state || {}; // state에서 gameName 추출
  console.log("받은 게임 이름:", gameName);

  useEffect(() => {
    console.log("detail page 가져온 정보:", gameId, characterId, postId);
    axios
      // 일단 public의 json파일로 출력함
      .get("/posts.json") // 게시글 list 백엔드 API 엔드포인트 : /api/posts
      .then((response) => {
        // 게임 ID와 캐릭터 ID를 기반으로 필터링
        const filteredPost = response.data.find(
          (post) =>
            post.gameId === gameId &&
            post.characterId === characterId &&
            post.id === parseInt(postId)
        );
        setPost(filteredPost || null); // 없을 경우 null로 설정
      })
      .catch((error) => console.error("Error fetching post:", error));
  }, [gameId, characterId, postId]);

  // 댓글 추가 핸들러
  const handleAddComment = () => {
    if (!newComment.trim()) return;

    axios
      .post(`/api/posts/${postId}/comments`, { content: newComment })
      .then((response) => {
        setComments([...comments, response.data]); // 댓글 목록에 새 댓글 추가
        setNewComment(""); // 입력란 초기화
      })
      .catch((error) => console.error("Error adding comment:", error));
  };

  // 좋아요 버튼 핸들러
  const handleLikeToggle = () => {
    axios
      .post(`/api/posts/${postId}/like`)
      .then(() => {
        setIsLiked(!isLiked);
        setLikes((prevLikes) => (isLiked ? prevLikes - 1 : prevLikes + 1));
      })
      .catch((error) => console.error("Error toggling like:", error));
  };

  if (!post) return <p>Loading...</p>; // 데이터가 없을 때 로딩 표시

  return (
    <div>
      <h1 className="post-detail-gameName">
        {gameName} 채널 - {characterName}
      </h1>

      <div className="post-detail-container">
        {post && (
          <>
            <div className="post-content-title">
              <h1>{post.title}</h1>
              <p>
                <strong>작성자:</strong> {post.author}
              </p>
              <p>
                <strong>작성일:</strong> {post.date}
              </p>
              <p>
                <strong>조회수:</strong> {post.views}
              </p>
            </div>
            <hr />
            <div className="post-content">
              <p>{post.content}</p>
            </div>
          </>
        )}

        {/* 좋아요 기능 */}
        <div className="like-section">
          <button onClick={handleLikeToggle}>
            {isLiked ? "좋아요 취소" : "좋아요"} ({likes})
          </button>
        </div>

        {/* 댓글 섹션 */}
        <div className="comments-section">
          <h3>댓글</h3>
          <ul>
            {comments.map((comment) => (
              <li key={comment.id}>
                <p>
                  <strong>{comment.author}</strong>: {comment.content}
                </p>
              </li>
            ))}
          </ul>
          <input
            type="text"
            placeholder="댓글을 입력하세요..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button onClick={handleAddComment}>댓글 달기</button>
        </div>
      </div>
    </div>
  );
}

export default PostDetail;

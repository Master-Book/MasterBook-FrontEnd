import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./PostDetail.css";

function PostDetail() {
  const { id } = useParams(); // URL에서 ID 파라미터 가져오기
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]); // 댓글 목록 상태
  const [newComment, setNewComment] = useState(""); // 새 댓글 입력 상태
  const [likes, setLikes] = useState(0); // 좋아요 수 상태
  const [isLiked, setIsLiked] = useState(false); // 좋아요 여부 상태

  useEffect(() => {
    axios
      .get(`/api/posts/${id}`) // 백엔드의 게시글 상세 API 엔드포인트
      .then((response) => {
        setPost(response.data.post);
        setComments(response.data.comments);
        setLikes(response.data.likes);
        setIsLiked(response.data.isLiked); // 사용자가 좋아요를 눌렀는지 여부
      })
      .catch((error) => console.error("Error fetching post:", error));
  }, [id]);

  // 댓글 추가 핸들러
  const handleAddComment = () => {
    if (!newComment.trim()) return;

    axios
      .post(`/api/posts/${id}/comments`, { content: newComment })
      .then((response) => {
        setComments([...comments, response.data]); // 댓글 목록에 새 댓글 추가
        setNewComment(""); // 입력란 초기화
      })
      .catch((error) => console.error("Error adding comment:", error));
  };

  // 좋아요 버튼 핸들러
  const handleLikeToggle = () => {
    axios
      .post(`/api/posts/${id}/like`)
      .then(() => {
        setIsLiked(!isLiked);
        setLikes((prevLikes) => (isLiked ? prevLikes - 1 : prevLikes + 1));
      })
      .catch((error) => console.error("Error toggling like:", error));
  };

  if (!post) return <p>Loading...</p>; // 데이터가 없을 때 로딩 표시

  return (
    <div className="post-detail-container">
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
      <hr />
      <div className="post-content">
        <p>{post.content}</p>
      </div>

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
  );
}

export default PostDetail;

import React, { useState, useRef, useEffect } from "react";
import "./PostCreate.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";

function PostWrite({ gameName, characterName }) {
  const [category, setCategory] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [fileName, setFileName] = useState("");
  const [content, setContent] = useState(""); // 에디터의 내용을 저장하는 상태

  const editorRef = useRef();

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCategorySelect = (selectedCategory) => {
    setCategory(selectedCategory);
    setIsDropdownOpen(false);
  };

  const handleFileChange = (e) => {
    setFileName(e.target.files[0]?.name || "");
  };

  useEffect(() => {
    const editorInstance = editorRef.current.getInstance();
    editorInstance.setMarkdown(""); // 에디터 초기 텍스트를 빈 문자열로 설정
  }, []);

  const handleFocus = () => {
    const editorInstance = editorRef.current.getInstance();
    if (editorInstance.getMarkdown() === "") {
      editorInstance.setMarkdown(""); // 포커스 시 빈 문자열로 유지
    }
  };

  const handleContentChange = () => {
    const editorInstance = editorRef.current.getInstance();
    const data = editorInstance.getMarkdown();
    setContent(data); // 에디터 내용 상태 업데이트
  };

  const handleSubmit = (e) => {
    if (!content.trim()) {
      e.preventDefault(); // 내용이 비어 있으면 제출 방지
      alert("내용을 입력해주세요."); // 경고 메시지
    }
  };

  return (
    <div id="PostCreate">
      <div id="write_area">
        <form encType="multipart/form-data" action="/write_ok" method="post">
          <div id="in_category" className="cont-select">
            <button
              type="button"
              className={`btn-select ${isDropdownOpen ? "on" : ""}`}
              onClick={handleDropdownToggle}
            >
              {category || "카테고리를 선택하세요"}
            </button>
            {isDropdownOpen && (
              <ul className="list-category">
                <li>
                  <button
                    type="button"
                    onClick={() => handleCategorySelect("League of Legends")}
                  >
                    League of Legends
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleCategorySelect("Stardew Valley")}
                  >
                    Stardew Valley
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleCategorySelect("기타게임")}
                  >
                    기타게임
                  </button>
                </li>
              </ul>
            )}
          </div>
          <div id="in_title">
            <textarea
              name="title"
              id="utitle"
              rows="1"
              cols="55"
              placeholder="제목"
              maxLength="100"
              required
            ></textarea>
          </div>
          <Editor
            ref={editorRef}
            height="500px"
            language="ko-KR"
            initialEditType="wysiwyg"
            onFocus={handleFocus}
            onChange={handleContentChange} // 에디터 내용이 변경될 때마다 호출
          />
          <button
            type="submit"
            className="btn-submit"
            onClick={handleSubmit} // 제출 버튼 클릭 시 확인
            disabled={!content.trim()} // 내용이 비어 있으면 버튼 비활성화
          >
            글 작성
          </button>
        </form>
      </div>
    </div>
  );
}

export default PostWrite;

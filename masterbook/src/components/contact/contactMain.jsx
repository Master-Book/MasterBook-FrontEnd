// src/components/ContactMain.js

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // 리다이렉트를 위해 추가
import './contactMain.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    comment: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate(); // 리다이렉트를 위해 추가

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        navigate('/'); // 메인 페이지로 리다이렉트
      }, 2000); // 2초 후에 리다이렉트

      return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 클리어
    }
  }, [isSubmitted, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const scriptURL =
      'https://script.google.com/macros/s/AKfycbwM_vyeqXXHJF1oFFvJH8Wzhgh91DBjMsnrExMsALMOniJ2sVqqmIr1T4fgGS60jGqZTQ/exec';

    fetch(scriptURL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        setIsSubmitted(true);
      })
      .catch((error) => {
        console.error('Error!', error.message);
      });
  };

  return (
    <div>
      {!isSubmitted ? (
        <div className="form-contact-container">
          <h2 className="form-contact-title">문의하기</h2>
          <form onSubmit={handleSubmit} className="form-contact">
            <label htmlFor="usr">
              닉네임
              <input
                type="text"
                id="usr"
                name="username"
                placeholder="닉네임을 입력하세요"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </label>

            <label htmlFor="email">
              답변 받을 이메일
              <input
                type="email"
                id="email"
                name="email"
                placeholder="이메일을 입력하세요"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>

            <label htmlFor="comment">
              문의 내용
              <textarea
                id="comment"
                name="comment"
                placeholder="문의 내용을 입력하세요"
                rows="5"
                value={formData.comment}
                onChange={handleChange}
                required
              />
            </label>

            <button type="submit">문의하기</button>
          </form>
        </div>
      ) : (
        <div className="thankyou_message">
          <section>
            <h1>감사합니다!</h1>
            <p>문의가 성공적으로 접수되었습니다.</p>
            <p>2초 후 메인 페이지로 이동합니다.</p>
          </section>
        </div>
      )}
    </div>
  );
}

export default ContactForm;

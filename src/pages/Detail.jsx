import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Detail.module.css";

export default function Detail() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = () => {
    console.log("text = ", text);
    console.log("title = ", title);
  };

  return (
    <div>
      <button
        className={styles.backBtn}
        onClick={() => {
          navigate("/");
        }}
      >
        뒤로 가기
      </button>
      <div className={styles.title}>
        <input
          type="text"
          placeholder="제목을 입력 해주세요."
          value={text}
          onChange={handleChangeText}
        />
      </div>
      <div className={styles.content}>
        <textarea rows="30" placeholder="글을 입력 해주세요."></textarea>
      </div>
      <button className={styles.submitBtn} onClick={handleSubmit}>
        등록
      </button>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "../styles/Detail.module.css";
import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";

export default function Detail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [list, setList] = useState(JSON.parse(localStorage.getItem("list")));
  const [active, setActive] = useState(false);

  useEffect(() => {
    setList(JSON.parse(localStorage.getItem("list")));
    setActive(false);
  }, [active]);

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = () => {
    console.log("title = ", title);
    console.log("text = ", text);
    console.log("uuid =", uuidv4());
    console.log("dayjs = ", dayjs().format("YYYY-MM-DD HH:mm:ss"));

    const _list = [...list];
    _list.unshift({
      title,
      text,
      id: uuidv4(),
      createAt: dayjs().format("YYYY-MM-DD HH:mm:ss"),
      updateAt: "",
    });
    setActive(true);
    localStorage.setItem("list", JSON.stringify(_list));
    navigate("/");
  };

  const handleModify = () => {
    console.log("handleModify");
  };

  const handleDelete = () => {
    console.log("handleDelete");
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
          value={title}
          onChange={handleChangeTitle}
        />
      </div>
      <div className={styles.content}>
        <textarea
          rows="30"
          placeholder="글을 입력 해주세요."
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></textarea>
      </div>

      {id ? (
        <div className={styles.modifyBtnWrap}>
          <button className={styles.modifyBtn} onClick={handleDelete}>
            삭제
          </button>
          <button className={styles.modifyBtn} onClick={handleModify}>
            수정
          </button>
        </div>
      ) : (
        <button className={styles.submitBtn} onClick={handleSubmit}>
          등록
        </button>
      )}
    </div>
  );
}

import React from "react";
import styles from "../styles/ListCard.module.css";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko"; // load on demand
import { useNavigate } from "react-router-dom";
dayjs.extend(relativeTime);
dayjs.locale("ko");
dayjs.extend(duration);

export default function ListCard({ item }) {
  const { id, title, text, createAt, updateAt } = item;
  const navigate = useNavigate();

  const handelDetail = (e) => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className={styles.box} onClick={handelDetail}>
      <div className={styles.title}>{title}</div>
      <div className={styles.time}>
        {dayjs(createAt).fromNow(true)}전 등록 하셨습니다.
      </div>
    </div>
  );
}

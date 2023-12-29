import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Toolbar from "../components/Toolbar";
import styles from "../styles/List.module.css";

export default function List() {
  const navigate = useNavigate();
  const filters = ["All", "ACTIVE", "COMPLITEED"];
  const [filter, setFilter] = useState("ALL");
  return (
    <>
      <Toolbar filters={filters} filter={filter} onFilterChange={setFilter} />
      <div className={styles.search}>
        <input type="text" placeholder="검색을 입력 해주세요." />
        <select>
          <option>최근생성순</option>
          <option>업데이트순</option>
        </select>
      </div>
      <div style={{ height: "calc(100% - 120px", background: "red" }}>
        <div
          style={{
            width: "100%",
            height: "calc(100% - 40px",
            background: "yellow",
            padding: "1rem 1rem",
          }}
        >
          새글...
        </div>
        <div
          onClick={() => {
            navigate("/detail");
          }}
          style={{
            display: "flex",
            justifyContent: "flex-end",
            padding: "0.625rem 1rem",
          }}
        >
          새글쓰기
        </div>
      </div>
    </>
  );
}

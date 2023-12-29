import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ListCard from "../components/ListCard";
import Toolbar from "../components/Toolbar";
import styles from "../styles/List.module.css";

export default function List() {
  const navigate = useNavigate();
  const filters = ["All", "ACTIVE", "COMPLITEED"];
  const [filter, setFilter] = useState("ALL");

  const [list, setList] = useState(JSON.parse(localStorage.getItem("list")));

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("list")) === null) {
      localStorage.setItem("list", JSON.stringify([]));
    }
    console.log("111");
  }, []);

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
      <div style={{ height: "calc(100% - 120px" }}>
        <div
          style={{
            width: "100%",
            height: "calc(100% - 40px",
            padding: "1rem 0rem",
            overflow: "hidden",
            overflowY: "scroll",
          }}
        >
          {list && list.map((ls) => <ListCard key={ls.id} item={ls} />)}
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

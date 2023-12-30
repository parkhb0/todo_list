import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ListCard from "../components/ListCard";
import Toolbar from "../components/Toolbar";
import styles from "../styles/List.module.css";

export default function List() {
  const navigate = useNavigate();
  const filters = ["All", "ACTIVE", "COMPLITEED"];
  const [filter, setFilter] = useState("ALL");
  const [search, setSearch] = useState("");

  const [list, setList] = useState(JSON.parse(localStorage.getItem("list")));
  const getList = JSON.parse(localStorage.getItem("list"));

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("list")) === null) {
      localStorage.setItem("list", JSON.stringify([]));
    }
    console.log("111");
  }, []);

  const handleListSearch = (e) => {
    const searText = e.target.value;
    setSearch(searText);
    // console.log("searText = ", searText);
    const _list = [...getList];

    if (searText != "") {
      const result = _list.filter((item) => {
        console.log(item.title.toUpperCase());
        console.log("searText.toUpperCase() = ", searText.toUpperCase());
        if (item.title.toUpperCase().includes(searText.toUpperCase())) {
          return item;
        }
      });
      setList(result);
    } else {
      setList(getList);
    }
  };

  //   useEffect(() => {
  //     if (localStorage.getItem("list") != null){

  //     } console.log("search = ", search);
  //   }, [search]);

  return (
    <>
      <Toolbar filters={filters} filter={filter} onFilterChange={setFilter} />
      <div className={styles.search}>
        <input
          type="text"
          placeholder="검색을 입력 해주세요."
          onChange={handleListSearch}
        />
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

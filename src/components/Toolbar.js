import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeDarkMode } from "../store/them";

export default function Toolbar() {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.them);
  console.log("isDarkMode = ", isDarkMode);

  const handleToggleIsDarkMode = () => {
    const _mode = localStorage.setItem("them", isDarkMode);
    if (_mode == false) {
      dispatch(changeDarkMode(true));
    } else {
      dispatch(changeDarkMode(false));
    }
  };

  return (
    <div>
      <button onClick={handleToggleIsDarkMode}>배경변경</button>
    </div>
  );
}

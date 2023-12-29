import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../store/them";
import { FaMoon, FaSun } from "react-icons/fa";
import { ButtonToggle } from "../styles/button";
import styles from "../styles/Toobar.module.css";

export default function Toolbar({ filters, filter, onFilterChange }) {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.isDarkMode);
  console.log("isDarkMode = ", isDarkMode);

  const handleToggleDarkMode = () => {
    const _mode = localStorage.setItem("them", isDarkMode);
    if (_mode == false) {
      dispatch(toggleDarkMode(true));
    } else {
      dispatch(toggleDarkMode(false));
    }
  };

  return (
    <header className={styles.header}>
      <ButtonToggle onClick={handleToggleDarkMode}>
        {isDarkMode ? <FaMoon /> : <FaSun />}
      </ButtonToggle>
      <div className={styles.filters}>
        <ul>
          {filters.map((value, index) => (
            <li key={index}>
              <button
                className={`${styles.filter} ${
                  filter === value && styles.selected
                }`}
                onClick={() => onFilterChange(value)}
              >
                {value}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

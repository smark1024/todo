import React from "react";
import styles from "./Header.module.css";
import { useDarkMode } from "../../context/DarkModeContext.jsx";
import { HiMoon, HiSun } from "react-icons/hi";

export default function Header({ filters, filter, onFilterChange }) {
    const { darkMode, toggleDarkMode } = useDarkMode();
    return (
        <header className={styles.header}>
            <button onClick={toggleDarkMode}>
                {!darkMode && <HiMoon />}
                {darkMode && <HiSun />}
            </button>
            <ul>
                {filters.map((value, index) => (
                    <li key={index}>
                        <button className={filter === value ? styles.selected : undefined} onClick={() => onFilterChange(value)}>
                            {value}
                        </button>
                    </li>
                ))}
            </ul>
        </header>
    );
}

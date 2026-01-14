import React from "react";
import styles from "./Header.module.css";
import { CiSearch } from "react-icons/ci";

export default function Header() {
  return (
    <nav className={styles.header}>
      <a href="/" className={styles.headerLogoWrapper}>
        <img
          className={styles.headerLogo}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1024px-YouTube_Logo_2017.svg.png"
          alt="YouTube Logo"
        />
      </a>
      <div className={styles.headerSearch}>
        <input
          className={styles.headerSearchInput}
          type="text"
          placeholder="검색어를 입력해주세요"
        />
        <button>
          <CiSearch />
        </button>
      </div>
    </nav>
  );
}

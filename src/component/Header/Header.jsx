import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./Header.module.css";
import { CiSearch } from "react-icons/ci";

export default function Header() {
  const [inputText, setInputText] = useState("");
  const navigate = useNavigate(); // 훅 호출

  function handleSubmit(e) {
    e.preventDefault(); // 추가 필요
    navigate(`/?q=${inputText}`);
  }
  return (
    <nav className={styles.header}>
      <Link to="/" className={styles.headerLogoWrapper}>
        <img
          className={styles.headerLogo}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1024px-YouTube_Logo_2017.svg.png"
          alt="YouTube Logo"
        />
      </Link>
      <div className={styles.headerSearch}>
        <form action="" onSubmit={handleSubmit}>
          <input
            className={styles.headerSearchInput}
            type="text"
            onChange={(e) => {
              setInputText(e.target.value);
            }}
            placeholder="검색어를 입력해주세요"
          />
          <button type="submit" className={styles.headerSearchButton}>
            <CiSearch />
          </button>
        </form>
      </div>
    </nav>
  );
}

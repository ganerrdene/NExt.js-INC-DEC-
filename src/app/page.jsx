"use client";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <a href="/sudo" className={styles.openSudoBtn}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 48 48"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.5 5.5v37m13-37v37m-25-12h37m-37-13h37"
          />
          <rect
            width="37"
            height="37"
            x="5.5"
            y="5.5"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            rx="4"
            ry="4"
          />
        </svg>
        Open Sudo
      </a>
    </div>
  );
}
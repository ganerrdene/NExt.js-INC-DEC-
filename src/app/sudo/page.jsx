"use client";
import SudoBoard from "./sudo-component/sudoBoard";
import styles from "../sudo/page.module.css";

const Sudo = () => {
  return (
    <div className={styles.sudoPage}>
      <SudoBoard />
    </div>
  );
};
export default Sudo;

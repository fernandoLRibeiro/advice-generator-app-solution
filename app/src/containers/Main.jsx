import React from "react";
import styles from "../styles/Main.module.css";

function Main() {
  return (
    <>
      <main className={styles.Main}>
        <h1 className={styles.adviceId}> ADVICE #117 </h1>
        <p className={styles.quote}>
          “It is easy to sit up and take notice, what's difficult is getting up
          and taking action.”
        </p>
        <img
          src="./assets/images/pattern-divider-desktop.svg"
          alt="divider"
          className={styles.divider}
        />
      </main>
      <button className={styles.button}>
        <img src="./assets/images/icon-dice.svg" alt="dice" />
      </button>
    </>
  );
}

export default Main;

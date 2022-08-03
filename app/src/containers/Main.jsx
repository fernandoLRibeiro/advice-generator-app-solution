import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../styles/Main.module.css";

function Main() {
  const [isMobile, setIsMobile] = useState(false);
  const [data, setData] = useState({
    id: "",
    advice: "",
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth < 550) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    console.log("called");
    axios
      .get(`https://api.adviceslip.com/advice?t=${Math.random()}`)
      .then((res) => {
        setData(res.data.slip);
      });
  };

  return (
    <>
      <main className={styles.Main}>
        <h1 className={styles.adviceId}> ADVICE #{data.id}</h1>
        <p className={styles.quote}>{`"${data.advice}"`}</p>
        <img
          src={
            isMobile
              ? "./assets/images/pattern-divider-mobile.svg"
              : "./assets/images/pattern-divider-desktop.svg"
          }
          alt="divider"
          className={styles.divider}
        />
      </main>
      <button className={styles.button} onClick={() => fetchData()}>
        <img src="./assets/images/icon-dice.svg" alt="dice" />
      </button>
    </>
  );
}

export default Main;

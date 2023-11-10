import React from "react";
import styles from "./noResult.module.css";
import img from "../assets/sorry-no-results-found.png";
export const NoResult = () => {
  return (
    <div className={styles.noResult_container}>
      <img src={img} alt="" />
    </div>
  );
};

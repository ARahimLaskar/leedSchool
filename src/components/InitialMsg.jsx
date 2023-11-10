import React from "react";
import styles from "./initialMsg.module.css";
export const InitialMsg = () => {
  return (
    <div className={styles.resetContainer}>
      <h1>We Just need you zip</h1>
      <p>
        In order to find the postal address please enter your Postal Code above
      </p>
      <span class="material-symbols-outlined">travel_explore</span>
    </div>
  );
};

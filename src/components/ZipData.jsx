import React from "react";
import { useSelector } from "react-redux";
import styles from "./zipData.module.css";

export const ZipData = () => {
  const { isReset, zipData } = useSelector((store) => {
    return store;
  });

  if (isReset) {
    return <h1>Reset</h1>;
  }

  return (
    <div className={styles.result_container}>
      <div className={styles.heading}>
        <p>
          <span class="material-symbols-outlined">globe_asia</span>
          {zipData.country} ({zipData["country abbreviation"]})
        </p>
        <p>
          <span class="material-symbols-outlined">location_on</span>
          Post Code: {zipData["post code"]}
        </p>
      </div>
      <div className={styles.card_container}>
        {zipData.places.map((e, i) => {
          return (
            <div className={styles.card}>
              <p>
                <span class="material-symbols-outlined">home_pin</span>Name:{" "}
                {e["place name"]}
              </p>
              <p>
                <span class="material-symbols-outlined">location_city</span>
                State: {e.state} ({e["state abbreviation"]})
              </p>
              <p>
                <span class="material-symbols-outlined">explore</span>Latitude:{" "}
                {e.latitude}
              </p>
              <p>
                <span class="material-symbols-outlined">explore</span>Longitude:{" "}
                {e.longitude}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

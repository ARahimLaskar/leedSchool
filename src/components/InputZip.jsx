import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData, resetData } from "../Redux/action";
import styles from "./inputZip.module.css";
// import { ResetBtn } from "./ResetBtn";

export const InputZip = () => {
  const [zipInput, setZipInput] = useState("");

  const dispatch = useDispatch();
  const { zipData } = useSelector((store) => {
    return store;
  });
  const handleInput = (e) => {
    setZipInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getData(zipInput));
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };
  const handleReset = () => {
    dispatch(resetData());
  };
  return (
    <div className={styles.input_container}>
      <form
        onSubmit={handleSubmit}
        onKeyPress={handleKeyPress}
        className={styles.inputBox}
      >
        <input
          type="text"
          id="zipInput"
          pattern="[0-9]{6}"
          title="Please enter a 6-digit number."
          value={zipInput}
          required
          onChange={handleInput}
        />
        <span id={styles.span}>Enter Zip Code</span>
        <button type="submit">
          <span class="material-symbols-outlined">search</span>
        </button>
      </form>
      <button id={styles.reset_btn} onClick={handleReset}>
        Clear Data
      </button>
      {/* <ResetBtn /> */}
    </div>
  );
};

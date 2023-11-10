import {
  GET_ZIPDATA_FAILURE,
  GET_ZIPDATA_REQUEST,
  GET_ZIPDATA_SUCCESS,
  RESET_DATA,
  RESET_DATA_REQUEST,
} from "./actionType";
import axios from "axios";

export const getData = (inputValue) => {
  return function (dispatch, getState) {
    dispatch({
      type: GET_ZIPDATA_REQUEST,
    });

    let url = `https://api.zippopotam.us/in/${inputValue}`;

    axios
      .get(url)
      .then((res) => {
        dispatch({
          type: GET_ZIPDATA_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log("err");
        dispatch({
          type: GET_ZIPDATA_FAILURE,
        });
      });
  };
};

export const resetData = () => {
  return function (dispatch, getState) {
    dispatch({
      type: RESET_DATA_REQUEST,
    });
    dispatch({
      type: RESET_DATA,
    });
  };
};

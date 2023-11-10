import {
  GET_ZIPDATA_REQUEST,
  GET_ZIPDATA_SUCCESS,
  GET_ZIPDATA_FAILURE,
  RESET_DATA,
  RESET_DATA_REQUEST,
} from "./actionType";

const initialState = {
  isLoading: false,
  isError: false,
  isReset: false,
  zipData: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ZIPDATA_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
        isReset: false,
      };
    }
    case GET_ZIPDATA_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isReset: false,
        zipData: action.payload,
      };
    }
    case GET_ZIPDATA_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        isReset: true,
      };
    }
    case RESET_DATA_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
        isReset: false,
      };
    }
    case RESET_DATA: {
      return {
        ...state,
        isLoading: false,
        isReset: true,
      };
    }
    default:
      return state;
  }
};

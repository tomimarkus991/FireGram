import { SET_FILE, SET_ERROR, SET_SELECTED_IMG, SET_LOADING } from "../types";

export default (state, action) => {
  switch (action.type) {
    case SET_FILE:
      return {
        ...state,
        file: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case SET_SELECTED_IMG:
      return {
        ...state,
        selectedImg: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      break;
  }
};

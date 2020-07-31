import { SET_FILE, SET_ERROR } from "../types";

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
    default:
      break;
  }
};

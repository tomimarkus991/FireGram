import React, { useReducer } from "react";
import { SET_FILE, SET_ERROR } from "../types";
import FiregramContext from "./firegramContext";
import FiregramReducer from "./firegramReducer";

const FiregramState = ({ children }) => {
  const initialState = {
    file: null,
    error: null,
  };
  const [state, dispatch] = useReducer(FiregramReducer, initialState);
  const { file, error } = state;

  const uploadChangeHandler = (e) => {
    const imageTypes = ["image/png", "image/jpeg"];
    let selected = e.target.files[0];
    if (selected && imageTypes.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile("");
      setError("Please select an image file(png or jpeg");
    }
  };
  const setFile = (file) => dispatch({ type: SET_FILE, payload: file });

  const setError = (error) => dispatch({ type: SET_ERROR, payload: error });

  return (
    <FiregramContext.Provider
      value={{ file, setFile, error, uploadChangeHandler }}
    >
      {children}
    </FiregramContext.Provider>
  );
};

export default FiregramState;

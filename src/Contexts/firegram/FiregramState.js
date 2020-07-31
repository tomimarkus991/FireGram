import React, { useReducer } from "react";
import { SET_FILE, SET_ERROR, SET_SELECTED_IMG, SET_LOADING } from "../types";
import FiregramContext from "./firegramContext";
import FiregramReducer from "./firegramReducer";

const FiregramState = ({ children }) => {
  const initialState = {
    file: null,
    error: null,
    selectedImg: null,
    isLoading: false,
  };
  const [state, dispatch] = useReducer(FiregramReducer, initialState);
  const { file, error, selectedImg, isLoading } = state;

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
  const setLoading = (loading) => {
    dispatch({ type: SET_LOADING, payload: loading });
  };
  const setSelectedImg = (imgUrl) => {
    dispatch({ type: SET_SELECTED_IMG, payload: imgUrl });
  };
  const checkImageClick = (e) => {
    if (e.target.tagName !== "IMG") {
      setSelectedImg(null);
    }
  };
  const setFile = (file) => dispatch({ type: SET_FILE, payload: file });

  const setError = (error) => dispatch({ type: SET_ERROR, payload: error });

  return (
    <FiregramContext.Provider
      value={{
        file,
        setFile,
        error,
        selectedImg,
        isLoading,
        setLoading,
        setSelectedImg,
        uploadChangeHandler,
        checkImageClick,
      }}
    >
      {children}
    </FiregramContext.Provider>
  );
};

export default FiregramState;

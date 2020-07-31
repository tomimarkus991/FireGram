import React, { useContext } from "react";
import FiregramContext from "../../contexts/firegram/firegramContext";

const Modal = () => {
  const { selectedImg, checkImageClick } = useContext(FiregramContext);
  return (
    <div className="backdrop" onClick={checkImageClick}>
      <img src={selectedImg} alt="enlarged pic"></img>
    </div>
  );
};

export default Modal;

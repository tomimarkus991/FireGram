import React, { useContext } from "react";
import FiregramContext from "../../contexts/firegram/firegramContext";
import { motion } from "framer-motion";

const Modal = () => {
  const { selectedImg, checkImageClick } = useContext(FiregramContext);
  return (
    <motion.div
      className="backdrop"
      onClick={checkImageClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={selectedImg}
        alt="enlarged pic"
        initial={{ y: "-100vh" }}
        animate={{ y: "0vh" }}
      ></motion.img>
    </motion.div>
  );
};

export default Modal;

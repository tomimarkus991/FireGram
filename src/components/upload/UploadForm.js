import React, { useContext } from "react";
import FiregramContext from "../../contexts/firegram/firegramContext";
import ProgressBar from "../upload/ProgressBar";
import { motion } from "framer-motion";

const UploadForm = () => {
  const { file, setFile, error, uploadChangeHandler } = useContext(
    FiregramContext
  );
  return (
    <form>
      <motion.label
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        drag
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }}
      >
        <input type="file" onChange={uploadChangeHandler} />
        <span>+</span>
      </motion.label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div className="my-2">{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;

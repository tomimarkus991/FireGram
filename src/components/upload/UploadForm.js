import React, { useContext } from "react";
import FiregramContext from "../../contexts/firegram/firegramContext";
import ProgressBar from "../upload/ProgressBar";

const UploadForm = () => {
  const { file, setFile, error, uploadChangeHandler } = useContext(
    FiregramContext
  );
  return (
    <form>
      <label>
        <input type="file" onChange={uploadChangeHandler} />
        <span>+</span>
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;

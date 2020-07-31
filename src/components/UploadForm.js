import React, { useContext } from "react";
import FiregramContext from "../contexts/firegram/firegramContext";

const UploadForm = () => {
  const { error, file, uploadChangeHandler } = useContext(FiregramContext);
  return (
    <form>
      <input type="file" onChange={uploadChangeHandler} />
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
      </div>
    </form>
  );
};

export default UploadForm;

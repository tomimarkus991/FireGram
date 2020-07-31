import React, { useContext } from "react";
import useFirestore from "../../hooks/useFirestore";
import FiregramContext from "../../contexts/firegram/firegramContext";

const ImageGrid = () => {
  const { docs } = useFirestore("images");
  const { setSelectedImg } = useContext(FiregramContext);
  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <div
            className="img-wrap"
            key={doc.id}
            onClick={() => setSelectedImg(doc.url)}
          >
            <img src={doc.url} alt="uploaded" />
          </div>
        ))}
    </div>
  );
};

export default ImageGrid;

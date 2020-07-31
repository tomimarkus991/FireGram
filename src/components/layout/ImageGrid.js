import React, { useContext, Fragment } from "react";
import useFirestore from "../../hooks/useFirestore";
import FiregramContext from "../../contexts/firegram/firegramContext";
import { motion } from "framer-motion";
import Spinner from "./Spinner";

const ImageGrid = () => {
  const { docs } = useFirestore("images");
  const { setSelectedImg, isLoading } = useContext(FiregramContext);
  return (
    <Fragment>
      {isLoading && <Spinner />}
      {docs && (
        <div className="img-grid">
          {docs.map((doc) => (
            <motion.div
              className="img-wrap"
              key={doc.id}
              onClick={() => setSelectedImg(doc.url)}
              layout
              whileHover={{ opacity: 1, scale: 1.2 }}
              whileTap={{
                scale: 0.8,
                borderRadius: "100%",
              }}
            >
              <motion.img
                src={doc.url}
                alt="uploaded"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              />
            </motion.div>
          ))}
        </div>
      )}
    </Fragment>
  );
};

export default ImageGrid;

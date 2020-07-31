import React from "react";
import { motion } from "framer-motion";

const Title = () => {
  return (
    <div className="title">
      <motion.h1
        className="my-2"
        drag
        dragConstraints={{
          top: 20,
          left: -150,
          right: 150,
          bottom: 150,
        }}
      >
        FireGram
      </motion.h1>
      <motion.h2
        drag
        dragConstraints={{
          top: 20,
          left: -150,
          right: 150,
          bottom: 150,
        }}
        whileHover={{ scale: 1.4 }}
      >
        Your Pictures
      </motion.h2>
      <motion.p
        drag
        dragConstraints={{
          top: 20,
          left: -150,
          right: 150,
          bottom: 150,
        }}
        whileHover={{ scale: 1.4 }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </motion.p>
    </div>
  );
};

export default Title;

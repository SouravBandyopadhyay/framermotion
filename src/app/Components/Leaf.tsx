import React from "react";
import { motion } from "framer-motion";
import { leaf, leafWrapper } from "../variants";
const Leaf = ({ className, imageUrl,animationSpeed }) => {
  return (
    <motion.div variants={leafWrapper} className={className}>
      <motion.img
        custom={animationSpeed}
        variants={leaf}
        src={imageUrl}
        alt="imageLink_Broken"
        className="leaf object-contain w-20 h-28"
      />
    </motion.div>
  );
};

export default Leaf;

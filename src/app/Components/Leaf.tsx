import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { leaf, leafWrapper } from "../variants";
interface Props {
  children?: ReactNode;
  // any props that come into the component
  className: string;
  imageUrl: string;
  animationSpeed: number;
}
const Leaf = ({ className, imageUrl, animationSpeed }: Props) => {
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

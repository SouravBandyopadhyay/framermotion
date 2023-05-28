'use client'
import React from "react";
import {motion} from "framer-motion"
import { bottle, bottleWrapper } from "../variants";
const BottleContainer = () => {
  return (
    <motion.div variants={bottleWrapper} initial="initial" animate="animate" className="bottleWrapper absolute top-0 left-0 grid w-full text-center place-items-center">
      <motion.img
      variants={bottle}
        src="/images/juice.png"
        className="bottle h-[400px] w-[250px] md:w-[550px] md:h-[500px] object-contain"
      />
    </motion.div>
  );
};

export default BottleContainer;

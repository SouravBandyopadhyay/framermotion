"use client";
import React from "react";
import Leaf from "./Leaf";
import { motion } from "framer-motion";
import { leavesContainer } from "../variants";
const LeavesContainer = () => {
  return (
    <motion.div variants={leavesContainer} initial="initial" animate="animate">
      <Leaf
        animationSpeed={1.7}
        className="leafWrapper-1 absolute top-52 left-[30%]"
        imageUrl="./images/leaf01.png"
      />
      <Leaf
        animationSpeed={1.9}
        className="leafWrapper-2 absolute top-1/2 right-72"
        imageUrl="./images/leaf02.png"
      />
      <Leaf
        animationSpeed={1.6}
        className="leafWrapper-3 absolute top-10 right-[40%]"
        imageUrl="./images/leaf03.png"
      />
      <Leaf
        animationSpeed={1.8}
        className="leafWrapper-4 absolute top-[36%] right-1/3"
        imageUrl="./images/leaf04.png"
      />
      <Leaf
        animationSpeed={1.5}
        className="leafWrapper-5 absolute top-[75%] left-1/4"
        imageUrl="./images/leaf05.png"
      />
    </motion.div>
  );
};

export default LeavesContainer;

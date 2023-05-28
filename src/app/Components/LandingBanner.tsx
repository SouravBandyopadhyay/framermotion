"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../variants";
const LandingBanner = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="textContainer flex flex-col h-full px-2 py-28 md:px:52"
    >
      {/* //tap */}
      <div className="textContainer-top flex items-center justify-between text-lg md:text-2xl">
        <motion.span variants={fadeIn()} className="text-green-600">
          Find Your Clean Juice
        </motion.span>
        <motion.span variants={fadeIn()} className="first-letter:text-5xl">
          2/4
        </motion.span>
      </div>
      {/* middle */}
      <motion.div
        variants={fadeIn()}
        initial="initial"
        animate="animate"
        className="textContainer-middle grid flex-1 place-items-center"
      >
        <span className="text-5xl font-black tracking-wider md:text-9xl">
          ORANGE
        </span>
      </motion.div>
      {/* bottom */}
      <div className="textContainer-bottom flex items-center justify-between">
        <motion.button
          variants={fadeIn()}
          className="p-2 text-base tracking-wide text-white capitalize bg-gray-900 rounded-lg md:px-6 md:py-3 md:text-lg"
        >
          Show All the Juices
        </motion.button>
        <motion.p
          variants={fadeIn()}
          className="text-sm font-semibold md:text-2xl"
        >
          Your Healthy <span className="text-green-600">life</span> <br />{" "}
          starts here with us!
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LandingBanner;

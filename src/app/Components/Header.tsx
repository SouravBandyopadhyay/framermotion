'use client'
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const Header = () => {
  const headerLinks = [
    { id: 1, name: "SHOP" },
    { id: 2, name: "STORY" },
    { id: 3, name: "MENU" },
    { id: 4, name: "CONTACT" },
    { id: 5, name: "ALL JUICE" },
  ];
  return (
    <motion.nav variants={fadeIn()} animate="animate" initial="initial" className="header h-100vh flex items-center px-10 py-4 md:px-20 text-lg justify-between">
      <span className="header-logo font-black md:text-2xl">CLEAN JUICE</span>
      <ul className="justify-center flex-1 hidden space-x-5 md:flex ">
        {headerLinks.map((el) => (
          <li key={el.id}>{el.name}</li>
        ))}
      </ul>
      <span className="header-account hidden font-medium md:block">
        My Account
      </span>
      <span className="header-user block md:hidden">😋</span>
    </motion.nav>
  );
};

export default Header;

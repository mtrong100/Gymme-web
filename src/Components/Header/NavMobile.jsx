import React, { useState } from "react";
import { navLinks } from "../../Data";
import logo from "../../images/icons/logo.svg";

import { motion } from "framer-motion";
import { HiMenuAlt3 } from "react-icons/hi";
import { HiX } from "react-icons/hi";

const NavMobile = () => {
  const menuVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 50,
      transition: {
        type: "tween",
        duration: 0.5,
      },
    },
  };
  const navLinkVariants = {
    hidden: {
      display: "none",
      opacity: 0,
    },
    visible: {
      opacity: 1,
      y: -30,
      transition: {
        delay: 0.3,
      },
    },
  };

  const [toggle, setToggle] = useState(false);
  return (
    <>
      <HiMenuAlt3
        onClick={() => setToggle(!toggle)}
        className="lg:hidden text-3xl font-bold"
      ></HiMenuAlt3>

      <motion.div
        className="closeMenu"
        variants={menuVariants}
        initial="hidden"
        animate={toggle ? "visible" : "hidden"}
      ></motion.div>

      <motion.div
        variants={navLinkVariants}
        animate={toggle ? "visible" : "hidden"}
        className="fixed left-0 top-[2rem] h-screen w-full flex flex-col items-center justify-center z-10"
      >
        {/* Logo */}
        <a
          className="absolute w-[100px] md:w-[200px] top-5 left-5"
          href="#home"
        >
          <img className="w-full h-full object-cover" src={logo} alt="logo" />
        </a>
        <HiX
          className="text-3xl absolute top-5 right-5 md:text-5xl"
          onClick={() => setToggle(!toggle)}
        ></HiX>

        <ul className="flex flex-col gap-8 items-center justify-center">
          {navLinks.map((item, id) => (
            <li className="" key={id}>
              <a
                onClick={() => setToggle(!toggle)}
                className="text-2xl md:text-4xl"
                href={item.href}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex flex-col w-full md:max-w-[500px] px-8 gap-4 mt-8">
          <button className="style-btn-2 border border-solid border-white text-center">
            Log in
          </button>
          <button className="style-btn-2 text-center bg-primary">
            Sign up
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default NavMobile;

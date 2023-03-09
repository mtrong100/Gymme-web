import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Navlinks from "./Navlinks";
import NavMobile from "./NavMobile";

const Header = () => {
  const [isTop, setIsTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsTop(window.scrollY > 20);
    });
  }, []);

  return (
    <header
      className={`${
        isTop ? "bg-[#18122B] shadow-white" : ""
      } fixed top-0 left-0 right-0 z-20 bg-secondary py-6 text-white transition-all duration-300`}
    >
      <div className="wrapper">
        <div className="flex justify-between items-center">
          <Logo></Logo>
          <Navlinks></Navlinks>
          <div className="hidden lg:flex items-center gap-8">
            <button className="uppercase hidden md:flex font-semibold">
              Log in
            </button>
            <button className="relative style-btn overflow-hidden isolate btn hidden md:flex bg-primary">
              Sign up
            </button>
          </div>

          {/* mobile menu */}
          <NavMobile></NavMobile>
        </div>
      </div>
    </header>
  );
};

export default Header;

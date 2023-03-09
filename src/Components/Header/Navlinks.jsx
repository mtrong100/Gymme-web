import React from "react";
import { navLinks } from "../../Data";

const Navlinks = () => {
  return (
    <ul className="flex items-center gap-8">
      {navLinks.map((item, id) => (
        <li key={id}>
          <a
            className="links hidden hover:text-primary transition-all duration-300 lg:flex font-medium relative text-white"
            href={item.href}
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Navlinks;

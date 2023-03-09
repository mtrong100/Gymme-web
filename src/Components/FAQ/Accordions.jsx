import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const Accordions = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#F7F1E5] rounded-md">
      {/* title */}
      <div
        onClick={() => setOpen(!open)}
        className="flex p-5 rounded-md justify-between items-center"
      >
        <h1 className="text-sm md:text-lg font-semibold">{question}</h1>
        <IoIosArrowUp
          className={`text-xl transition-all duration-500 ${
            open ? "rotate-180" : ""
          }`}
        ></IoIosArrowUp>
      </div>

      {/* content */}
      <div
        className={`overflow-hidden max-h-0 transition-all duration-500 ${
          open ? "h-full max-h-[300px] md:max-h-[150px]" : ""
        }`}
      >
        <p className="text-sm md:text-base p-5 border-t border-primary">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default Accordions;

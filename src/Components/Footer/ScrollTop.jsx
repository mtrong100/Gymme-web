import React, { useEffect, useState } from "react";
import { IoMdArrowRoundUp } from "react-icons/io";

const ScrollTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setShow(window.scrollY > 400);
    });
  }, []);

  return (
    <div>
      {show && (
        <a
          href="#home"
          className="fixed w-[50px] h-[50px] z-10 bottom-5 right-5 bg-primary rounded-full flex justify-center items-center"
        >
          <IoMdArrowRoundUp className="text-xl"></IoMdArrowRoundUp>
        </a>
      )}
    </div>
  );
};

export default ScrollTop;

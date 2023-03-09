import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Heading = ({ children, image }) => {
  return (
    <div
      data-aos="zoom-in"
      data-aos-easing="linear"
      data-aos-duration="200"
      className="flex items-center justify-center -space-x-20"
    >
      <div className="w-[120px] h-[120px]">
        <img
          className="w-full h-full object-cover"
          src={image}
          alt="heading-img"
        />
      </div>
      <div className="text-3xl md:text-5xl font-bold -space-x-48">
        {children}
      </div>
    </div>
  );
};

export default Heading;

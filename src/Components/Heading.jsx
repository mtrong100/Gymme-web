import React from "react";

const Heading = ({ children, image }) => {
  return (
    <div className="flex items-center justify-center -space-x-20">
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

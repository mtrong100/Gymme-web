import React from "react";
import Heading from "../Heading";
import userIcon from "../../images/icons/users-icn.svg";
import { about } from "../../Data";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
const Misson = () => {
  const { title, subtitle1, subtitle2, link, image } = about;

  return (
    <section id="about" className="my-16">
      <div className="wrapper">
        <Heading image={userIcon}>{title}</Heading>
        <div className="mt-10 grid md:grid-cols-2 gap-4 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl text-third font-bold mb-5 md:mb-10">
              Make yourself proud.
            </h1>
            <h3>{subtitle1}</h3>
            <br />
            <h3>{subtitle2}</h3>
            <div className="style-btn inline-flex mt-8 relative overflow-hidden isolate btn items-center gap-3  bg-secondary text-white ">
              <button>{link}</button>
              <BsFillArrowRightCircleFill></BsFillArrowRightCircleFill>
            </div>
          </div>
          <div className="img-wrapper group mt-8">
            <img className="img-cover" src={image} alt="img-1" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Misson;

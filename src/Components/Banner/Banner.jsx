import React from "react";
import { banner } from "../../Data";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Banner = () => {
  const { titlePart1, titlePart2, subtitle, textBtn, image } = banner;

  return (
    <section id="home" className="bg-secondary text-white py-20 lg:py-36">
      <div className="wrapper">
        <div className="grid md:grid-cols-2 place-items-center gap-7">
          <div
            className="max-w-[450px]"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <h1 className="text-center md:text-start text-4xl md:text-5xl font-bold text-white">
              {titlePart1}
            </h1>
            <h1 className="text-center md:text-start text-4xl md:text-5xl mt-2 font-bold text-primary">
              {titlePart2}
            </h1>
            <p className="text-lg mt-6">{subtitle}</p>
            <button className="style-btn btn-shinny relative overflow-hidden mt-8 border border-solid border-white">
              {textBtn}
            </button>
          </div>
          <div
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="500"
            className="img-wrapper group"
          >
            <img className="img-cover" src={image} alt="banner" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

import React from "react";
import { join } from "../../Data";

const Contact = () => {
  const { image, title, subtitle, btnText } = join;
  return (
    <section className="bg-secondary text-white py-10">
      <div className="wrapper">
        <h1 className="text-center mb-10 text-4xl md:text-5xl font-bold">
          Contact us
        </h1>
        <div className="grid md:grid-cols-2 gap-8 md:gap-2 place-items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold text-primary">
              {title}
            </h1>
            <p className="mt-5">{subtitle}</p>
            <button className="btn-shinny relative overflow-hidden border border-solid border-white style-btn mt-10">
              {btnText}
            </button>
          </div>
          <div className="img-wrapper-2 group">
            <img className="img-cover" src={image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

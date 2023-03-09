import React from "react";
import { footer } from "../../Data";
import ScrollTop from "./ScrollTop";

const Footer = () => {
  const { copyrightText } = footer;
  return (
    <section className="bg-secondary text-white pt-16 pb-5 ">
      <div className="wrapper flex justify-center items-center gap-2">
        <h3 className=" md:text-xl font-semibold">{copyrightText}</h3>
        <ScrollTop></ScrollTop>
      </div>
    </section>
  );
};

export default Footer;

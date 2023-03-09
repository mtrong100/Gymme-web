import React from "react";
import calendar from "../../images/icons/calendar.svg";
import { workouts } from "../../Data";
import Heading from "../Heading";
import Slider from "./Slider";

const Training = () => {
  const { title } = workouts;
  return (
    <section id="workouts">
      <div className="wrapper">
        <Heading image={calendar}>{title}</Heading>
        <Slider></Slider>
      </div>
    </section>
  );
};

export default Training;

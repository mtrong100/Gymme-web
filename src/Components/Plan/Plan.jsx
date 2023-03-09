import React from "react";
import { pricing } from "../../Data";
import Heading from "../Heading";
import price from "../../images/icons/price.svg";
import PlanList from "./PlanList";

const Plan = () => {
  const { title, plans } = pricing;
  return (
    <section id="pricing" className="my-16">
      <div className="wrapper">
        <Heading image={price}>{title}</Heading>
        <PlanList plans={plans}></PlanList>
      </div>
    </section>
  );
};

export default Plan;

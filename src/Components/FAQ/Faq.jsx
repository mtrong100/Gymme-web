import React from "react";
import Heading from "../Heading";
import { faq } from "../../Data";
import question from "../../images/icons/question-mark.svg";
import Accordions from "./Accordions";

const Faq = () => {
  const { title, accordions } = faq;

  return (
    <section id="faq" className="my-10">
      <div className="wrapper">
        <Heading image={question}>{title}</Heading>
        <div className="md:mt-10 mx-auto w-full max-w-[700px] flex flex-col gap-5">
          {accordions.map((item, id) => {
            const { question, answer } = item;
            return (
              <div key={id}>
                <Accordions question={question} answer={answer}></Accordions>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;

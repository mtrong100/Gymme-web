import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const PlanList = ({ plans }) => {
  return (
    <div className="m-10 grid lg:grid-cols-3 gap-3">
      {plans.map((item, id) => {
        const { name, price, list } = item;
        return (
          <div className="rounded-md md:max-w-[600px] w-full mx-auto" key={id}>
            <div
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="500"
              className="flex py-8 gap-5 relative z-[1] overflow-hidden bg-slate-50 group rounded-md card transition-all duration-500 flex-col items-center justify-center "
            >
              {/* top */}
              <div>
                <h1 className="text-2xl group-hover:text-primary px-8 py-2 font-bold rounded-md mb-6">
                  {name}
                </h1>
                <div className="text-center">
                  <h1 className="text-5xl font-bold">{`${price}$`}</h1>
                  <span>/month</span>
                </div>
              </div>
              {/* mid */}
              <div className="flex flex-col gap-5 min-h-[200px]">
                {list.map((item, id) => {
                  const { name } = item;
                  return (
                    <div className="flex items-center gap-2" key={id}>
                      <AiFillCheckCircle></AiFillCheckCircle>
                      <p>{name}</p>
                    </div>
                  );
                })}
              </div>
              {/* bottom */}
              <button className="mt-8 group-hover:bg-primary style-btn bg-secondary text-white">
                Buy now
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PlanList;

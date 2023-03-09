import React from "react";
import { workouts } from "../../Data";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./style-slider.css";
// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper";

const Slider = () => {
  const { programs } = workouts;
  return (
    <div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
          600: {
            slidesPerView: 2,
          },
          400: {
            slidesPerView: 1,
          },
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {programs.map((item, id) => (
          <SwiperSlide key={id}>
            <div
              className=" relative overflow-hidden mx-auto rounded-md group"
              key={id}
            >
              {/* overlay */}
              <div className="overlay"></div>

              {/* main image */}
              <img
                className="w-full h-full object-cover shadow-md"
                src={item.image}
                alt="program-img"
              />

              {/* content */}
              <div className="slider-content">
                <h1 className="text-primary text-3xl font-bold">{item.name}</h1>
                <p className="text-white text-center text-sm mt-2">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos,
                  odit totam quos quis dolorum laboriosam sequi tenetur fugiat
                  asperiores sint quasi earum deserunt! Libero quasi natus
                  obcaecati voluptates eligendi error.
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;

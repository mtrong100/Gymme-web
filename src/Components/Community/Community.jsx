import React, { useState } from "react";
import { community } from "../../Data";
import { GiStrongMan } from "react-icons/gi";

const Community = () => {
  /* destruct */
  const { title, slogan, testimonials } = community;
  const [selectedImage, setSelectedImage] = useState(null);
  const [index, setIndex] = useState(1);

  /* get specific image when clicking */
  const handleImageClick = (item) => {
    setSelectedImage(item);
  };

  return (
    <section id="community" className="bg-secondary text-white">
      <div className="py-10 px-4 md:px-10">
        <div className="flex items-center justify-center mb-10 lg:mb-0">
          <GiStrongMan className="text-5xl md:text-8xl"></GiStrongMan>
          <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
        </div>

        <div className="relative grid lg:grid-cols-2 gap-10 place-items-center">
          {/* content */}
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-third">
              {slogan}
            </h1>
            <p className="mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              consequatur labore aliquid culpa rerum temporibus dicta, autem
              soluta earum, perferendis eaque doloremque maxime? Doloremque
              quidem eos odio error? Cumque, aliquid?
            </p>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-5 place-items-center">
              {testimonials.map((item, id) => {
                return (
                  <div
                    onClick={() => {
                      handleImageClick(item);
                      setIndex(id);
                    }}
                    className={`${
                      index === id ? "border-primary" : "opacity-50"
                    } rounded-full w-[150px] h-[150px] transition-all duration-300 border-[4px] border-solid bg-[#282A3A] hover:opacity-100`}
                    key={id}
                  >
                    <img
                      className="rounded-full w-full h-full object-contain"
                      src={item.image}
                      alt="community-img"
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* display image */}
          <div className="h-[500px] md:h-[700px] w-full img-wrapper-2 group">
            {/* render image */}
            {(selectedImage && (
              <img
                className="img-cover-2 group-hover:bg-green-600"
                src={selectedImage.image}
                alt="community-img"
              />
            )) || (
              <img
                className="img-cover-2 group-hover:bg-green-600"
                src={testimonials[4].image}
                alt=""
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;

import React from "react";
import { cards } from "../data/About";

const About = () => {
  return (
    <div className="flex flex-col items-center w-11/12 mx-auto max-w-maxContent  justify-center ">
      <div className=" mb-10 font-semibold text-center text-4xl md:text-[52px] capitalize text-[#313bac]">
        <p className=" dark:text-richblue-100 mb-5">
          {" "}
          I Know That <span className="text-[#073B4C]">Good Design</span>{" "}
        </p>
        <p className=" dark:text-richblue-100">
          means <span className="text-[#073B4C]">Good Buisness</span>
        </p>
      </div>
      <div className=" flex-col sm:flex-row mb-10 flex gap-28 mt-14">
        {cards.map((card, index) => (
          <div
            key={index}
            className=" flex flex-col items-start gap-4 w-[300px] "
          >
            <img
              alt={card.name}
              src={card.image}
              className=" shadow-2xl object-cover w-[300px] h-[270px] rounded-2xl"
            />
            <h1 className=" dark:text-richblack-50 text-xl font-semibold text-richblue-400">
              {card.name}
            </h1>
            <p className=" dark:text-richblue-100 text-base text-richblack-600">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;

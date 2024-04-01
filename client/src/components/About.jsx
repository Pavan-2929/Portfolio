import React from "react";
import { cards } from "../data/About";
import { motion } from "framer-motion";
import { fadeIn } from "../varients";

const About = () => {
  return (
    <div id="about" className="flex flex-col items-center w-11/12 mx-auto max-w-7xl   justify-center mt-20">
      <div className="  font-semibold text-center text-4xl md:text-[52px] capitalize text-[#313bac] mb-10">
        <motion.p
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className=" dark:text-richblue-100 mb-5"
        >
          I Know That <span className="text-[#073B4C]">Good Design</span>{" "}
        </motion.p>
        <motion.p
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className=" dark:text-richblue-100"
        >
          means <span className="text-[#073B4C]">Good Buisness</span>
        </motion.p>
      </div>
      <div className=" flex-col md:flex-row md:mb-10 justify-center flex gap-12  md:gap-28 md:mt-14 flex-wrap">
        {cards.map((card, index) => (
          <motion.div
            variants={fadeIn("down", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 1 }}
            key={index}
            className=" flex flex-col items-start gap-4 w-[300px] bg-gray-200 text-center p-4 rounded-md"
          >
            <img
              alt={card.name}
              src={card.image}
              className=" shadow-xl object-cover w-[300px] h-[270px] rounded-2xl"
            />
            <div className="text-center w-full text-xl">
              <h1 className="font-bold">{card.name}</h1>
            </div>
            <h1>{card.description}</h1>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;

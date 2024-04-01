import React from "react";
import HeroImage from "../assets/Hero.png";
import { motion } from "framer-motion";
import { fadeIn } from "../varients";

const Hero = () => {
  return (
    <div
      id="hero"
      className="sm:ml-20 relative flex flex-1  p-2 items-center flex-wrap-reverse h-[90vh]"
    >
      <div className="z-20 mb-5 justify-center md:w-[50vw]">
        <div className="mb-10 font-semibold">
          <motion.p
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-[25px]"
          >
            Hello,
          </motion.p>
          <motion.p
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="md:text-[50px] text-[30px]"
          >
            I'm Pavan Kapadiya
          </motion.p>
        </div>
        <div className="mb-3 relative flex flex-col">
          <span className="text-[32px]">MERN Stack Developer</span>
        </div>
        <p className="text-md text-bold w-[90%]">
          I am Pavan Kapadiya, a MERN Stack Developer currently pursuing my
          degree in Computer Engineering at Gandhinagar University. I am
          currently in my second year, enrolled in the batch of 2022-2026,
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="h-[80%] md:my-0 my-10"
      >
        <img src={HeroImage} alt="Hero" />
      </motion.div>
    </div>
  );
};

export default Hero;

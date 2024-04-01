import React from "react";
import HeroImage from "../assets/Hero.png";

const Hero = () => {
  return (
    <div className="sm:ml-20 relative flex flex-1  p-2 items-center flex-wrap-reverse h-[90vh]">
      <div className="z-20 mb-5 justify-center md:w-[50vw]">
        <div className="mb-10 font-semibold">
          <p className="text-[25px]">Hello,</p>
          <p className="md:text-[50px] text-[30px]">I'm Pavan Kapadiya</p>
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
      <div className="h-[80%] md:my-0 my-10">
        <img src={HeroImage} alt="Hero" />
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import { skills } from "../data/Skills.js";
import { Achievements } from "../data/Achivements.js";

const Skills = () => {
  return (
    <div className="w-full sm:w-11/12 max-w-7xl mx-auto flex flex-col items-center mt-32 mb-20">
      <h1 className="dark:text-richblack-900 text-4xl md:text-[52px] text-center font-semibold mb-14">
        Skills and <span className="text-[#073B4C]">Achievements</span>
      </h1>
      <div className="gap-[27px] sm:flex-row flex-col flex my-10 items-center justify-between">
        <div className="items-center justify-center flex w-full flex-wrap gap-6 sm:w-[40%]">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="cursor-pointer bg-lightgrey hover:shadow-2xl hover:scale-105 p-4 shadow-xl dark:shadow-md shadow-richblack-50 rounded-full">
                <img
                  width={40}
                  height={45}
                  src={skill.image}
                  alt={skill.name}
                />
              </div>
              <p className="text-[15px] mt-5">{skill.name}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:p-4 p-2 md:w-[40vw] w-full">
          {Achievements.map((item, index) => (
            <div
              key={index}
              className="items-baseline flex-col sm:flex-row my-5 flex gap-2 sm:gap-5 bg-gray-200 p-4 rounded-md border border-gray-300"
            >
              <div className="w-full text-sm ">
                <p className="w-full sm:w-[80%] mb-4 text-2xl font-semibold">
                  {item.title}
                </p>
                <p className=" text-md font-medium">{item.description}</p>
                <p className="text-md font-semibold">Year: {item.year}</p>
              </div>
              <a
                className="text-secondary cursor-pointer underline"
                href={item.certificate}
                target="_blank"
                rel="noopener noreferrer"
              >
                Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

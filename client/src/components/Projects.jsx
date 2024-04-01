import React, { useState } from "react";
import { projectLinks } from "../data/Projects";
import {
  RxEyeClosed,
  RxEyeOpen,
  RxGithubLogo,
  RxPencil1,
} from "react-icons/rx";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "FullStack", "UI/UX", "Hackathon", "Mini"];

  const handleCategory = (category) => {
    setSelectedCategory(category);
  };

  const filteredProjects =
    selectedCategory === "All"
      ? projectLinks
      : projectLinks.filter((project) => project.category === selectedCategory);

  return (
    <div className="mt-20 items-center flex flex-col  ">
      <div className=" h-[0px] sm:h-[10vh]"></div>
      <div className="mx-auto items-center flex flex-col">
        <h1 className="dark:text-richblack-100 pb-10 font-semibold text-4xl  md:text-[52px]">
          <p>Portfolio seciton</p>
        </h1>
        <p className=" text-left md:text-center text-richblack-400 my-5 w-[95%] md:w-7/12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          voluptatem repudiandae eos suscipit deserunt, dolores ut quas, est
          maxime, consequatur minus? Ducimus perferendis porro quis ullam, earum
          provident dolorum qui.
        </p>

        <div className=" flex-wrap items-center justify-center flex gap-7 my-10 ">
          {categories?.map((link, index) => (
            <div
              className={`  px-3 ${
                link === selectedCategory ? " bg-gray-200" : "  "
              } p-2 rounded-xl cursor-pointer hover:bg-gray-200 hover:scale-95 hover:shadow-lg`}
              key={index}
              onClick={() => setSelectedCategory(link)}
            >
              {link}
            </div>
          ))}
        </div>
        <div className=" justify-center items-start  gap-14 flex flex-wrap max-w-7xl mx-auto mb-14">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className=" dark:bg-richblue-900 group relative flex flex-col items-center p-3 gap-4 w-[320px] h-[450px] bg-gray-200 rounded-lg "
            >
              <img
                alt={project.name}
                src={project.imagelink}
                className=" hover:opacity-90 opacity-80  cursor-pointer shadow-xl object-cover w-[300px] h-[270px] rounded-2xl"
                loading="lazy"
              />
              <p className=" z-10 -mt-9 bg-gray-200 p-2 shadow-lg rounded-lg">
                {project.category}
              </p>
              <div className=" py-5 flex items-center flex-col justify-between ">
                <h1 className=" text-xl font-semibold ">{project.name}</h1>
                <p className="">{project.description}</p>
              </div>
              <div className=" px-5 absolute top-10  pb-2 w-full justify-between flex ">
                <span>
                  <RxPencil1
                    className=" cursor-pointer hover:scale-110"
                    fontSize={24}
                  />
                </span>
                <span>
                  <RxGithubLogo
                    className=" cursor-pointer hover:scale-110"
                    fontSize={24}
                  />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

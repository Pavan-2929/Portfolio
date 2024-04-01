import React, { useState } from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { SiGeeksforgeeks } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../varients";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const contactfunc = async () => {
    try {
      const userInfo = await fetch(
        "https://portfolio-backend-a09y.onrender.com/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, message }),
        }
      );
      if (userInfo.ok) {
        alert("Message sent successfully");
        setEmail("");
        setMessage("");
        setName("");
      } else {
        alert("Something went wrong");
        setEmail("");
        setMessage("");
        setName("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      id="contact"
      className="md:p-6 p-2 rounded-lg shadow-md h-[90vh] mt-10 mb-24 "
    >
      <motion.div
        variants={fadeIn("down", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 1 }}
        className=" mb-10 font-semibold text-center text-4xl md:text-[40px] capitalize text-[#313bac]"
      >
        <p className="mb-5">
          Feel Free to <span className="text-[#073B4C]">Contact Me</span>{" "}
        </p>
      </motion.div>
      <div className="flex flex-col md:flex-row pt-8 justify-center bg-gray-200 rounded-md border border-gray-300 pb-8 items-center ">
        <div className="w-full md:w-1/2 md:border-r-2 border-gray-400">
          <div className="text-center mb-6">
            <h1 className="text-[2.2em] font-bold mt-6 mb-10 text-[#313bac]">
              Contact Me
            </h1>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full md:w-[80%] p-3 rounded-md bg-gray-300 focus:outline-none border border-gray-400"
            />
            <input
              type="text"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-6 w-full md:w-[80%] p-3 rounded-md bg-gray-300 focus:outline-none border border-gray-400"
            />
            <textarea
              placeholder="Message"
              value={message}
              rows={6}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-6 w-full md:w-[80%] p-3 rounded-md bg-gray-300 focus:outline-none border border-gray-400"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="btn bg-[#313bac] text-white px-6 py-2 rounded-md hover:bg-[#333ccc] focus:outline-none focus:bg-[#333ccc]"
              onClick={contactfunc}
            >
              Submit
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 md:pr-6 md:mt-0 mt-6">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-semibold mt-6 mb-2 text-[#313bac]">
              Social Media Links
            </h1>
            <div className="flex justify-center gap-14">
              <motion.a
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                href="https://www.linkedin.com/in/pavan-kapadiya-6b7789273/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#313bac] hover:text-bg-[#333ccc]"
              >
                <AiFillLinkedin className="text-5xl" />
              </motion.a>
              <motion.a
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                href="https://github.com/Pavan-2929"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#313bac] hover:text-bg-[#333ccc]"
              >
                <AiFillGithub className="text-5xl" />
              </motion.a>
              <motion.a
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                href="https://auth.geeksforgeeks.org/user/kapadiya_pavan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#313bac] hover:text-bg-[#333ccc]"
              >
                <SiGeeksforgeeks className="text-5xl" />
              </motion.a>
            </div>
          </div>
          <div className="text-center mb-6 md:mt-20 mt-10">
            <h1 className="text-3xl font-semibold  mb-2 text-[#313bac]">
              Direct Contact me
            </h1>
            <div className="flex flex-col items-center md:text-[1.4rem] text-[1rem]">
              <a
                href="mailto:kapadiyapavan14@gmail.com"
                className="flex items-center text-[#313bac] hover:text-bg-[#333ccc]"
              >
                <MdEmail className="text-3xl" />
                <h2 className="text-gray-600 ml-2">
                  kapadiyapavan3218@gmail.com
                </h2>
              </a>
              <a
                href="tel:+917574808971"
                className="flex items-center text-[#313bac] hover:text-bg-[#333ccc]"
              >
                <BiSolidPhoneCall className="text-3xl" />
                <h2 className="text-gray-600 ml-2">(+91) 7574808971</h2>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

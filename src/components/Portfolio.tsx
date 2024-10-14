"use client";
import Image from "next/image";
import {motion} from'framer-motion';
import project1 from "../assets/project.jpeg"
import project2 from "../assets/proj1.jpg"
import project3 from "../assets/proj2.jpeg"



import React from 'react'
const projects = [
    {
    title:"Infinity Wings Airline Website" ,
    desc: "Infinity Wings is a dynamic airline booking website developed using the MERN stack (MongoDB, Express.js, React, Node.js). ",
    devStack:" React.js, Node.js, Express.js , MongoDB",
    git:"https://github.com/amnaahad/infinitywingsairline",
    src:project1,
    },
    {
      title:" Safar.com Tourism Website" ,
      desc: "Safar.com is a travel platform developed using React and JSON, designed to streamline the travel booking and management process. ",
      devStack:" React.js, JSON",
      git:"https://github.com/amnaahad/tourismwebsite",
      src:project2,
      },
      {
        title:" Celestial Charms e-Eommerce Website" ,
        desc: "Designed a comprehensive e-commerce platform integrating front-end/back-end technologies for a seamless shopping experience.",
        devStack:"HTML, CSS, Bootstrap, Weebly",
        git:"https://github.com/amnaahad",
        src:project3,
      },
]
const Portfolio = () => {
  return (
    <div className="text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-24" id="portfolio">
     <h1 className="text-white text-6xl text-center mx-auto font-semibold p-4 mb-4">
   Recent<span className="text-orange-400"> Projects</span></h1>
    
    <div className="max-w-[1000px] mx-auto mt-17 space-y-24">
{projects.map((project, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0,y: 75}}
    whileInView={{ opacity: 1, y: 0}}
    viewport={{once:true}}
    transition={{duration: 0.5, delay:0.25}}
    className={`mt-12 flex ${index % 2 === 1 ? "flex-col-reverse md:flex-row-reverse gap-12" : "flex-col md:flex-row"}`}
   >
    <div className="space-y-2 max-w-[550px]">
    <h2 className="text-7xl my-4 text-white/70">{`0${index + 1}`} </h2>
    <h2 className="text-4xl">{project.title}</h2>
    <p className="text-lg text-white/70 break-words ">{project.desc}</p>
    <p className="text-xl text-orange-400 font-semibold">{project.devStack}</p>
    <div className="w-64 h-[1px] bg-gray-400 my-4">
  <a href={project.git} className="text-blue-500 underline hover:text-blue-700 flex items-center">
    Git
    <span className="ml-2 transform rotate-140">→</span>
  </a>
</div>

    </div>
    <div className="flex justify-center items-center">
      <Image 
      src= {project.src} 
      alt={project.title}
      className=" mt-20 h-auto w-auto object-cover border-rounded border-gray-700"

             />
    </div>
    </motion.div>
) )}
      </div>
    </div>
  )
}

export default Portfolio

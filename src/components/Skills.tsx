import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare, FaNodeJs, FaGithub } from 'react-icons/fa'
import { SiCplusplus, SiC, SiMongodb, SiNextdotjs, SiExpress, SiMysql } from 'react-icons/si'
import { DiJava } from 'react-icons/di'

const skillIcons = [
    { icon: <FaHtml5 size={140} />, label: "HTML5" },
    { icon: <FaCss3Alt size={140} />, label: "CSS" },
    { icon: <FaJsSquare size={140} />, label: "JavaScript" },
    { icon: <FaReact size={140} />, label: "React" },
    { icon: <FaNodeJs size={140} />, label: "Node.js" },
    { icon: <SiExpress size={140} />, label: "Express.js" },
    { icon: <SiNextdotjs size={140} />, label: "Next.js" },
    { icon: <SiCplusplus size={140} />, label: "C++" },
    { icon: <DiJava size={140} />, label: "Java" },
    { icon: <SiMongodb size={140} />, label: "MongoDB" },
    { icon: <SiMysql size={140} />, label: "SQL" },
    { icon: <FaGithub size={140} />, label: "GitHub" }
]

const Skills = () => {
  const controls = useAnimation()
  const { ref, inView } = useInView({
    threshold: 0.4,
  })

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1 })
    } else {
      controls.start({ opacity: 0 })
    }
  }, [controls, inView])

  return (
    <div 
      className="bg-[linear-gradient(to_top,#000,#381a5f_80%)] py-12 sm:py-24" 
      ref={ref}
    >
      <div className='text-white w-full max-w-[400px] md:max-w-[950px] mx-auto p-4 text-center md:p-8'>
        <h1 className="text-white text-6xl text-center mx-auto font-semibold p-2 ">
          My <span className="text-orange-400"> Skills</span>
        </h1>
        <div className='grid grid-cols-4 sm:grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 mt-32'>
          {skillIcons.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }} 
              animate={controls} 
              transition={{ duration: 0.8, ease: "easeOut" }} 
              className='h-[100px] w-[100px] sm:h-[140px] sm:w-[140px] md:h-[200px] md:w-[220px] flex flex-col justify-between items-center bg-white/10 p-2 rounded-xl mr-2 mb-4' // Added right margin and bottom margin
            >
              {skill.icon}
              <p className='mt-1 text-sm sm:text-base'>{skill.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills

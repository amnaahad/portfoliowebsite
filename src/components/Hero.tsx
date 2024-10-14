"use client"
import React, { useRef } from 'react'
import Image from 'next/image'
import cursor from "../assets/icon1.png"
import lightning from "../assets/icon2.png"
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'
import profilepic from "../assets/pfp.png"
import About from './About'
import Portfolio from './Portfolio'

const Hero = () => {
  // Controls animation when the About section is in view
  const controls = useAnimation()
  const { ref, inView } = useInView({
    threshold: 0.3, // Trigger when 30% of the About section is visible
  })

  // Start animation when the About section comes into view
  if (inView) {
    controls.start({ opacity: 1, y: 0 })
  }

  return (
    <div className="py-24 relative overflow-clip" 
         style={{ background: "linear-gradient(to bottom, #000, #2B1942 35%, #8F5C55 60%, #DBAF6E 80%)" }}>
      <div
        className="absolute rounded-[50%] w-[3000px] h-[1300px] top-[550px] left-[50%] -translate-x-1/2"
        style={{ background: "radial-gradient(closest-side, #000 80%, #2B1942)" }}>
      </div>

      <div className="relative">
        <div className="text-8xl font-bold text-center ">
          <h1 className="text-[#98B4CE]">Hi, I am</h1>
          <h1 className="text-[#E48A57]">Amna Ahad</h1>
        </div>
        <motion.div
          className="absolute left-[280px] top-[170px]"
          drag
        >
          <Image
            src={cursor}
            height="190"
            width="190"
            alt="cursor" 
            draggable="false"
          />
        </motion.div>

        <motion.div
          className="absolute left-[220px] top-[20px]"
          drag
        >
          <Image
            src={lightning}
            height="120"
            width="120"
            alt="lightning" 
            draggable="false"
          />
        </motion.div>
      
        <p className="text-center text-xl max-w-[500px] mx-auto mt-8 text-white/80">
          I'm a full-stack developer passionate about crafting seamless, user-centric websites that deliver exceptional experiences.
        </p>
        
        <Image
          src={profilepic}
          alt="profile picture"
          className="h-200 w-190 mx-auto mb-[-20px]"
        />
      </div>

      {/* About section with scroll-triggered animation */}
      <motion.div
        ref={ref} // Link the ref to the About section to detect when it is in view
        className="mt-[-80px]"
        initial={{ opacity: 0, y: 100 }} // Initial state before it enters view
        animate={controls} // Controls animation when in view
        transition={{ duration: 1.2, ease: "easeOut" }} // Duration and easing
      >
        <About />
        <Portfolio/>
      </motion.div>
    </div>
  )
}

export default Hero

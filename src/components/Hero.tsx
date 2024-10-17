"use client"
import React from 'react'
import Image from 'next/image'
import cursor from "../assets/icon1.png"
import lightning from "../assets/icon2.png"
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'
import profilepic from "../assets/pfp.png"
import About from './About'
import Portfolio from './Portfolio'
import Skills from './Skills'
import Contact from './Contact'
import Footer from './Footer'

const Hero = () => {
  // Controls animation when the About section is in view
  const controls = useAnimation()
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger when 10% of the About section is visible
  })

  // Start animation when the About section comes into view
  if (inView) {
    controls.start({ opacity: 1, y: 0 })
  }

  return (
    <div className="min-h-screen py-24 relative overflow-clip" 
         style={{ background: "linear-gradient(to bottom, #000, #2B1942 35%, #3A3A3A 60%, #4B4B4B 80%)" }}>
      {/* Radial gradient background */}
      <div
        className="absolute rounded-[50%] w-[3000px] h-[1300px] top-[550px] left-[50%] -translate-x-1/2"
        style={{ background: "radial-gradient(closest-side, #000 80%, #2B1942)" }}>
      </div>

      <div className="relative">
        {/* Heading */}
        <div className="text-8xl font-bold text-center">
          <h1 className="text-[#98B4CE]">Hi, I am</h1>
          <h1 className="text-[#E48A57]">Amna Ahad</h1>
        </div>
        
        {/* Draggable cursor image */}
        <motion.div
          className="hidden md:block absolute left-[280px] top-[170px]"
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

        {/* Draggable lightning image */}
        <motion.div
          className="hidden md:block absolute left-[280px] top-[170px] z-50"
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
      
        {/* Description text */}
        <p className="text-center text-xl max-w-[500px] mx-auto mt-8 text-white/80">
          I am a full-stack developer passionate about crafting seamless, user-centric websites that deliver exceptional experiences.
        </p>
        
        {/* Profile picture */}
        <Image
          src={profilepic}
          alt="profile picture"
          className="h-200 w-190 mx-auto mb-[-20px]"
        />
      </div>

      {/* About, Portfolio, and Skills sections with scroll-triggered animation */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }} // Less distance to travel for faster entry
        animate={controls}
        transition={{ duration: 0.8, ease: "easeOut" }} // Slightly shorter duration for quicker animation
      >
        <About />
        <Portfolio />
        <Skills />
        <Contact />
        <Footer/>
      </motion.div>
    </div>
  )
}

export default Hero

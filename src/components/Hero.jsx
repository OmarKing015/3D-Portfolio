import React from "react";
import { motion } from "framer-motion"
import { styles } from "../style";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-fill h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="felx flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#ff5e5e]" />
          <div className="ml-2 w-1 sm:h-80 h-40 bg-[#ff5e5e] gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm <span className="text-[#ff5e5e]">Omar</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 `}>
            "Experienced full-stack web developer proficient in React.js, Node.js, and MongoDB, delivering seamless user experiences through end-to-end web application development."
          </p>
        </div>
      </div>
      <ComputersCanvas />
    <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
      <a href="#about">
        <div  className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 ">
          <motion.div animate={{y:[0,24,0]}} transition={{duration:1.5, repeat:Infinity, repeatType:'loop'}}
          className=""w-3 h-3 rounded-full bg-secondary mb-1/>
        </div>
      </a>
    </div>
    </section>

  );
};

export default Hero;

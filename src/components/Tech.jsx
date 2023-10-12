import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constans";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../style";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      <motion.div variants={textVariant()}>
        
        <h3 className={`${styles.sectionHeadText} text-center `}>Some of Important technologies I use often</h3>
      </motion.div>
      {technologies.map((technoloy) => (
        <div className="w-28 h-28" key={technoloy.name}>
          <BallCanvas icon={technoloy.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech);

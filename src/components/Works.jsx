import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constans'
import { fadeIn, textVariant } from '../utils/motion'

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
return()
}

const Works = () => {
  return (
    <>

      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>

      </motion.div>

      <div className='w-full flex'>
        <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-3 text-secondary text-[17px] mac-w-3xl leading-[30px]'>
          In every project I undertake, I bring a meticulous and detail-oriented approach to ensure the highest quality deliverables. I begin by thoroughly understanding the project requirements, user needs, and business objectives. This helps me to create a solid foundation and roadmap for the development process.

          I believe in the power of effective communication and collaboration. I actively engage with stakeholders, clients, and team members to gather insights, share progress, and seek feedback throughout the project lifecycle. This ensures that everyone is aligned and that the end product meets or exceeds expectations.

        </motion.p>
      </div>
      <div className='mt-20 flex flex-wrap gap-7'>{projects.map((project, index) => (
        <ProjectCard key={`project-${index}`}
          {...project}
          index={index}
        />
      ))}</div>
    </>
  )
}

export default SectionWrapper(Works, "")
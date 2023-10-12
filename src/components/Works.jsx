import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constans'
import { fadeIn, textVariant } from '../utils/motion'

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt option={{ max: 45, scale: 1, speed: 450 }} className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">

        <div className='relative w-full h-[230px]'>

          <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl' />

          <div className='absolute inset-0 flex justify-end m-3 card_img_hover'>
            <div onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
              <img src={github} alt="github" className='w-1/2 h-1/2 object-contain' />
            </div>
          </div>
        </div>

        <div className='mt-5 '>

          <h3 className="text-white-100 shadow font-bold text-[24px]">{name}</h3>
          <h3 className="text-secondary shadow  text-[14px]">{description}</h3>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
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
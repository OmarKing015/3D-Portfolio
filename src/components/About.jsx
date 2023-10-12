import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { services } from '../constans'
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc'



const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className='2-full green-pink-gradient p-[1px] rounded-[20px] shadow-cared'>
        <div options={{
          max: 45,
          scale: 1,
          speed: 450
        }} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[290px] flex justify-evenly items-center flex-col'>

<img src={icon} alt={title} className='w-14 h-14 object-contain '/>
<h3 className='text-white text-[20px] font-bold text-center' >{title}</h3>
        </div>

      </motion.div>
    </Tilt >
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] flex text-ellipsis'>
        As a highly skilled web developer with expertise in React.js,
        Firebase, and Node.js, I possess a proven track record of delivering exceptional web applications with seamless user experiences. 
        With a deep understanding of front-end development using React.js,
        I have successfully created interactive and dynamic user interfaces,
        leveraging reusable components and state management for efficient development.
        My proficiency in Firebase allows me to seamlessly integrate real-time databases,
        authentication, and cloud functions into web applications, enhancing their functionality and performance.
        Additionally, my expertise in Node.js enables me to develop robust back-end systems, creating RESTful APIs,
        handling server-side logic, and ensuring efficient data communication. With a strong problem-solving mindset
        and a passion for clean code, I consistently strive to deliver high-quality, scalable, and maintainable solutions.
        As a dedicated team player, I excel in collaborating with cross-functional teams and effectively communicating complex
        technical concepts. With my strong foundation in web development and expertise in React.js, Firebase, and Node.js,
        I am confident in my ability to contribute to the success of any software company in building innovative and cutting-edge web
        applications.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">


        {services.map((service, index) => (
          <ServiceCard key={service.title}
            index={index} {...service} />
        ))}

      </div>

    </>
  )
}

export default SectionWrapper(About, "about")
import React from 'react'
import {BallCanvas} from './canvas'
import {SectionWrapper} from '../hoc'
import { technologies } from '../constans'

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>

      {technologies.map((technoloy,index)=>(
        <div className='w-28 h-28' key={technoloy.name}><BallCanvas icon={technoloy.icon}/></div>
      ))}

    </div>
  )
}

export default SectionWrapper(Tech)
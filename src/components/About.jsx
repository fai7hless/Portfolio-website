import React from 'react'
import Tilt from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ( { index, title, icon } ) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options = {{
            max: 45,
            scale: 1,
            speed: 450
        }} className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Въведение</p>
        <h2 className={styles.sectionHeadText}>За мен.</h2>
      </motion.div>
      <motion.p 
      variants={fadeIn("","", 0.1, 1)}
      className='mt-4 text-secondary text-[18px] max-w-3xl leading-[30px]'
      >
        Уча компютърно и софтуерно инженерство в Технически университет София. Целта ми е да си намеря работа в IT сектора по време на обучението ми.
        <br />
        <br />
        Обичам да решавам технически проблеми, да проучвам и използвам нови технологии. Обичам да се срещам с хора и да работя с тях в екипна среда. Имам умения в общуването с клиенти, бързо се уча и се отличавам със способността си да работя под напрежение и да се справям много добре със стресови ситуации.
        <br />
        <br />
        Уменията, които притежавам, ще бъдат от полза за всяка компания в сферата на информационните технологии.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index=
          {index} {...service}/>
        ))}

      </div>
    </>
  )
}

export default SectionWrapper(About, "about")
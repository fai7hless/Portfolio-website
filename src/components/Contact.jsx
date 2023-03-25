import React from 'react'
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
//Lc2_k_bBEioz2VpDJ
//service_cekqj54
//template_1ts36lb

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    
    setForm({...form, [name]: value})
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send(
      'service_cekqj54', 
      'template_1ts36lb', 
      {
        from_name: form.name,
        to_name: "Vasil",
        from_email: form.email,
        to_email: "contactvasilpopov@gmail.com",
        message: form.message,
      },
      'Lc2_k_bBEioz2VpDJ'
      )
      .then(
        () => {
        setLoading(false);
        alert('Благодаря Ви. Ще се свържа възможно най-скоро с Вас.')

        setForm({
          name: "",
          email: "",
          message: "",
        })
      }, 
      (error) => {
        setLoading(false)
        console.log(error)
        alert('Something went wrong')
      }
    )
  }

  return (
    <div className='xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left','tween',0.2,1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl]"
      >
        <p className={styles.sectionSubText}>Свържете се</p>
        <h3 className={styles.sectionHeadText}>Контакт.</h3>

        <form 
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className='flex flex-col'>
            <span className='text-white text-[18px] mb-4'>Вашето име</span>
            <input 
            type="text" 
            name="name" 
            value={form.name} 
            onChange={handleChange}
            placeholder="Вашето име?" 
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg 
            outlined-none border-none font-medium' 
          />
          </label>

          <label className='flex flex-col'>
            <span className='text-white text-[18px] mb-4'>Вашият имейл</span>
            <input 
            type="email" 
            name="email" 
            value={form.email}
            onChange={handleChange}
            placeholder="Вашият имейл адрес?" 
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg 
            outlined-none border-none font-medium' 
          />
          </label>

          <label className='flex flex-col'>
            <span className='text-white text-[18px] mb-4'>Вашето съобщение</span>
            <textarea 
            rows="7" 
            name="message" 
            value={form.message} 
            onChange={handleChange}
            placeholder="Какво искате да кажете?" 
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg 
            outlined-none border-none font-medium' 
          />
          </label>

          <button
            type="submit"
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md
          shadow-primary rounded-xl'
          >
            {loading ? 'Изпращане...' : 'Изпрати'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")
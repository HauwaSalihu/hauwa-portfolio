import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { motion } from "motion/react"

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>

   
            <motion.h3   initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1}}
        transition={{ duration: 0.6, delay: 0.3 }}
       className='flex items-end gap-2 text-3xl md:text-5xl mb-3 font-Ovo'>
                Hi, I am Hauwa Salihu <Image src={assets.hand_icon} alt='' className='w-6'/>
            </motion.h3>
            <motion.h1   initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >Full Stack Developer Based in Abuja, Nigeria</motion.h1>
            <motion.p   initial={{ opacity: 0 }}
        whileInView={{ opacity:  1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
       className='max-w-2xl mx-auto font-Ovo'>I have over five years experience as a developer with knowledge in several frontend and backend frameworks and an extensive portfolio of projects accross several fields, i.e ecommerce, document mangement, etc</motion.p>
    <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <motion.a initial={{y: 30,  opacity: 0 }}
        whileInView={{y: 0 , opacity:  1 }}
        transition={{ duration: 0.6, delay: 1}}  href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent'> Contact me <Image src={assets.right_arrow_white} alt='' className='w-4'/></motion.a>
        <motion.a initial={{y: 30,  opacity: 0 }}
        whileInView={{y: 0 , opacity:  1 }}
        transition={{ duration: 0.6, delay: 1.2}}  href="/hauwa salihu-env.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black'>my resume <Image src={assets.download_icon} alt='' className='w-4'/></motion.a>

    </div>
    </div>
  )
}

export default Header
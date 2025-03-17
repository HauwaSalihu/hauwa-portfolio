"use client"

import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { motion } from 'motion/react'

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event: any) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "57e853b0-bff9-4a2a-a7ca-e85be5a2e415");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <motion.div initial={{ opacity: 0}} whileInView={{ opacity: 1 }} transition={{ duration: 1}} id='contact' className='w-full px-[12%] py-10 scroll-mt-20 ' >
    <motion.h4 initial={{ y: -20, opacity: 0}} whileInView={{ y: 0,  opacity: 1 }} transition={{ delay: 0.3,  duration: 0.5}}  className='text-center mb-2 text-lg font-Ovo'>Connect With me</motion.h4>
    <motion.h2 initial={{ y: -20, opacity: 0}} whileInView={{ y: 0,  opacity: 1 }} transition={{ delay: 0.5,  duration: 0.5}} className='text-center text-5xl font-Ovo'>Get In Touch</motion.h2>
<motion.p initial={{opacity: 0}} whileInView={{ opacity: 1 }} transition={{ delay: 0.7,  duration: 0.5}} className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'> 
    Get in Touch

Have a project in mind or need expert IT solutions? Feel free to reach out, and let’s build something great together!
</motion.p>

<motion.form initial={{ opacity: 0}} whileInView={{ opacity: 1 }} transition={{ delay: 0.9,  duration: 0.5}} className='max-w-2xl mx-auto' onSubmit={onSubmit} >
    <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
        <motion.input initial={{ x: -50, opacity: 0}} whileInView={{ x: 0,  opacity: 1 }} transition={{ delay: 1.1,  duration: 0.6}} type="text" name='name'  placeholder='Enter your Name' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90' />
        <motion.input initial={{ x: 50, opacity: 0}} whileInView={{ x: 0,  opacity: 1 }} transition={{ delay: 1.2,  duration: 0.6}} type="email" name='email' placeholder='Enter your Email' className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90'  required/>
    </div>
    <motion.textarea initial={{ y: 100, opacity: 0}} whileInView={{ y: 0,  opacity: 1 }} transition={{ delay: 1.3,  duration: 0.6}}  rows={6} placeholder='Enter Your Message' name='message' required className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90' ></motion.textarea>

<motion.button whileHover={{scale: 1.05}} transition={{ duration: 0.3}} type='submit' className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover'>Submit now <Image src={assets.right_arrow_white} alt='' className='w-4'/> </motion.button>

<p className='mt-'>{result}</p>

</motion.form>
    </motion.div>
  )
}

export default Contact
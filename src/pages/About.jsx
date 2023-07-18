import React from 'react'
import { motion } from 'framer-motion'
function About() {
  return (
    <motion.div 
      initial={{ scaleY:0 }}
      animate={{ scaleY:1 }}
      // exit={{ scaleY:0 }}
      transition={{ duration:0.3}}

    >
      <h2>About</h2>
      <p>
      Hello, I am Bhavana Lanjewar, I have done B.E. in CSE from Nagpur University.<br/>  
      My proficiency in  FrontEnd  programming language.<br/>

      My technical skills are :<br/>
      •	Good  Understanding of HTML5 , CSS3 , JavaScript<br/> 
      •	Familiarity with React.js , Redux Toolkit.<br/>
      •	Proficient in version control system like Git.<br/>
      •	Familiarity with React UI libraries include MaterialUI, Framer Motion, Bootstrap and
        Modern development tools like Visual Studio Code , Babel .
      </p>
    </motion.div>
  )
}

export default About
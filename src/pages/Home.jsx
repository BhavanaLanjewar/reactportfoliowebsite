import React from 'react';
import {motion} from "framer-motion";

const Home = () => {
  return (
    <div className="home">
      <motion.div 
        className='name'
        initial={{x:-200 , scale:0.5}}
        animate={{x:0 , scale:1}}
        transition={{duration: 0.5}}
        >
        Bhavana <font>Lanjewar</font>
      </motion.div>
      <motion.div 
        className='desc'
        initial={{x:200 , scale:0.5}}
        animate={{x:0 , scale:1}}
        transition={{duration: 1}}
      >
       <font> Web Devloper </font> as <font>React Devloper</font>
      </motion.div>
    </div>
  );
};

export default Home
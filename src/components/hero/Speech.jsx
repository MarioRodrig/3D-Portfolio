import { TypeAnimation } from 'react-type-animation';
import { motion } from "motion/react";

const Speech = () => {
    return (
        <motion.div animate={{opacity: [0,1]}} 
        transition={{duration: 1}}
        className="bubbleContainer" >
            <div className="bubble">
            <TypeAnimation
      sequence={[
        1000,
        'Pursuing the ever-evolving world of technology!',
        1000,
        'Creating solutions, building relationships, and helping others',
        1000
      ]}
      wrapper="span"
      speed={50}
      deletionSpeed={60}
      repeat={Infinity}
    />    
                
            </div>

            <img src="/man.png" alt="" />

        </motion.div>
    )
}

export default Speech 
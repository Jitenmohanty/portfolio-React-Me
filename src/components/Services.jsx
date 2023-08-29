import React from 'react';
import {motion} from 'framer-motion';
import {AiFillIeCircle,AiFillAndroid,AiFillWindows} from 'react-icons/ai';

const Services = () => {
  return (
    <div id='services'>
        <h2>Services</h2>
        <section>
            <motion.div className="serviceBox1">
                <h3>1+</h3>
                <p>Year of experince</p>
            </motion.div>
            <motion.div className="serviceBox2">
                <AiFillIeCircle/>
                <span>Web Development</span>
            </motion.div>
            <motion.div className="serviceBox3">
            <AiFillAndroid/>
                <span>Software Development</span>
            </motion.div>
            <motion.div className="serviceBox4">
            <AiFillWindows/>
                <span>Desktop Devlopment</span>
            </motion.div>
        </section>
    </div>
  )
}

export default Services

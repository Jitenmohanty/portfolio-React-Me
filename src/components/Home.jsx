import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import TypeWriter from "typewriter-effect";
import { BsArrowUpRight,BsChevronDown } from "react-icons/bs";
import me from '../assets/logo1.png'
const Home = () => {

  const clientRef = useRef(null);
  const projectCountRef = useRef(null);

  const animationClientCount = ()=>{
    animate(0,10,{
      duration:1,
      onUpdate:(v)=>(clientRef.current.textContent = v.toFixed(0)),
    })
  }
  const animationProjectCount = ()=>{
    animate(0,50,{
      duration:1,
      onUpdate:(v)=>(projectCountRef.current.textContent = v.toFixed()),
    })
  }

  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };

  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I Am <br /> Jiten Mohanty.
          </motion.h1>
         <h2>
         <TypeWriter
            options={{
              strings: ["A Developer", "A Designer", "A Creator", "A Backend Developer", "A System Designer", "A Fullstack Developer", "An AWS Enthusiast"],
              autoStart: true,
              loop: true,
              wrapperClassName: "typewriterpara",
            }}
          />
         </h2>
          <div>
            <a href="mailto:jitenmohatyay@gmail.com">Colaborate With Me</a>
            <a href="#work">
              {" "}
              Projects <BsArrowUpRight />
            </a>
          </div>
          <article>
            <p>+
              <motion.span ref={clientRef} whileInView={animationClientCount}>

              </motion.span>
            </p>
            <span>Clients Worldwide</span>
          </article>
          <aside>
            <article>
              <p>+ 
                <motion.span ref={projectCountRef} whileInView={animationProjectCount}></motion.span>
              </p>
              <span>Projects Done</span>
            </article>

            <article data-special>
              <p>Contact</p>
              <span>jitenmohantyaz@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img src={me} alt="Jiten" />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;

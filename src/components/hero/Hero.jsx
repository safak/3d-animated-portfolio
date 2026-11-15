import "./hero.css";
import { motion } from "motion/react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from 'react';
import Shape from "./Shape";

const awardVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const followVariants = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const Hero = () => {
  return <div className="hero">
  <div className="hSection left">
          {/* TITLE */}
          <motion.h1 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="hTitle">
            Hey There,
            <br/>
            <span>I'm Hennie!</span>
          </motion.h1>

        {/* AWARDS */}
        <motion.div           
          variants={awardVariants}
          initial="initial"
          animate="animate"
          className="awards">
          <motion.h2 variants={awardVariants}>I am a Software Engineer</motion.h2>
          <motion.p variants={awardVariants}>Bla Bla bla</motion.p>
          <motion.div variants={awardVariants} className="awardList">
            <img src="/award1.png" alt="" />
            <img src="/award2.png" alt="" />
            <img src="/award3.png" alt="" />
          </motion.div>
        </motion.div>

        {/* SCROLL SVG */}
        <motion.a
          animate={{ y: [0, 5], opacity: [0, 1, 0] }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
          }}
          href="#services"
          className="scroll"
        >
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
              stroke="white"
              strokeWidth="1"
            />
            <path
              d="M12 5VB"
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
        </motion.a>
      </div>
    
    <div className="hSection right">
      {/* FOLLOW */}
      <motion.div 
          variants={followVariants}
          initial="initial"
          animate="animate"
          className="follow">
        <motion.a href="/">
          <img src="/instagram.png" alt="" />
        </motion.a>
        <motion.a href="/">
          <img src="/facebook.png" alt="" />
        </motion.a>
        <motion.a href="/">
          <img src="/youtube.png" alt="" />
        </motion.a>
        <div className="followTextContainer">
          <div className="followText">  FOLLOW ME</div>
        </div>
      </motion.div>
      
      {/* SCROLL DOWN BUTTON */}
        <motion.a
          href="/#contact"
          className="contactLink"
          animate={{
            x: [200, 0],
            opacity: [0, 1],
          }}
          transition={{
            duration: 2,
          }}
        >
          <motion.div
            className="contactButton"
            animate={{ rotate: [0, 360] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <svg viewBox="0 0 200 200" width="150" height="150">
              <circle cx="100" cy="100" r="90" fill="pink" />
              <path
                id="innerCirclePath"
                fill="none"
                d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
              />
              <text className="circleText">
                <textPath href="#innerCirclePath">Scroll Down •</textPath>
              </text>
              <text className="circleText">
                <textPath href="#innerCirclePath" startOffset="44%">
                  Scroll Down •
                </textPath>
              </text>            
            </svg>
            <div className="arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="50"
                height="50"
                fill="none"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="6" y1="18" x2="18" y2="6" />
                <polyline points="9 6 18 6 18 15" />
              </svg>
            </div>
        </motion.div>
      </motion.a>
    </div>

    {/* 3D Blob */}
    <div className="bg">
      <div className="hImg">
        <img src="/hero.png" alt="main photo" />
      </div>
    <Canvas>
      <Suspense fallback="loading...">
        <Shape />
      </Suspense>
    </Canvas>
    </div>
  </div>
};

export default Hero;
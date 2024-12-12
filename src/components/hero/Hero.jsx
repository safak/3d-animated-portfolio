import "./hero.css";
import Speech from "./Speech";
import { motion } from "motion/react";

//NOTE - to animate the Left Section's components.
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
  return (
    <div className="hero">
      {/* //IMP - hSection LEFT */}
      <div className="hSection left">
        {/* //NOTE - TITLE */}
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="hTitle"
        >
          Hey There,
          <br />
          <span>I'm Siddharth!</span>
        </motion.h1>
        {/* //NOTE - AWARDS */}
        <motion.div
          variants={awardVariants}
          initial="initial"
          animate="animate"
          className="awards"
        >
          <motion.h2 variants={awardVariants}>Top Rated Designer</motion.h2>
          <motion.p variants={awardVariants}>
            Lorem ipsum dolor sit amet, consectuetur adiipsiccimg elit.
          </motion.p>
          <motion.div variants={awardVariants} className="awardList">
            <motion.img variants={awardVariants} src="/award2.png" alt="" />
            <motion.img variants={awardVariants} src="/award1.png" alt="" />
            <motion.img variants={awardVariants} src="/award3.png" alt="" />
          </motion.div>
        </motion.div>
        {/* //NOTE - SCROLL SVG */}
        <motion.a
          animate={{ y: [0, 5], opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
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
            <motion.path
              animate={{ y: [0, 5] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              d="M12 5V8"
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
        </motion.a>
      </div>
      {/* //IMP - hSection RIGHT */}
      <div className="hSection right">
        {/* //SECTION - FOLLOW SECTION */}
        <motion.div
          variants={followVariants}
          initial="initial"
          animate="animate"
          className="follow"
        >
          <motion.a variants={followVariants} href="/">
            <img src="/instagram.png" alt="" />
          </motion.a>
          <motion.a variants={followVariants} href="/">
            <img src="/youtube.png" alt="" />
          </motion.a>
          <motion.a variants={followVariants} href="/">
            <img src="/facebook.png" alt="" />
          </motion.a>
          <motion.div variants={followVariants} className="followTextContainer">
            <div className="followText">Follow Me</div>
          </motion.div>
        </motion.div>
        {/* //SECTION - SPEECH BUBBLE */}
        <Speech />
        {/* //SECTION - CERTIFICATE DIV */}
        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className="certificate"
        >
          <img src="/certificate.png" alt="" />
          LMA CERTIFIED
          <br />
          PROFESSIONAL
          <br />
          UI DESIGNER
          <br />
        </motion.div>
        {/* //SECTION - CONTACT BUTTON */}
        <motion.a
          animate={{ x: [200, 0], opacity: [0, 1] }}
          transition={{ duration: 2 }}
          href="#contact"
          className="contactLink"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="contactButton"
          >
            <svg viewBox="0 0 200 200" width="150" height="150">
              <circle cx="100" cy="100" r="90" fill="pink" />
              <path
                id="innerCirclePath"
                fill="none"
                d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
              />
              <text className="circleText">
                <textPath href="#innerCirclePath">* Hire Now *</textPath>
              </text>
              <text className="circleText">
                <textPath href="#innerCirclePath" startOffset="50%">
                  * Contact Me *
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
              >
                <line x1="6" y1="18" x2="18" y2="6" />
                <polyline points="9 6 18 6 18 15" />
              </svg>
            </div>
          </motion.div>
        </motion.a>
      </div>
      {/* //IMP - Middle Section Profile img */}
      <div className="bg">
        {/* 3d */}
        <div className="hImg">
          <img src="/siddharth.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

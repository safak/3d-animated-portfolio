import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";
import { animate } from "motion";

const Speech = () => {
  return (
    <motion.div
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
      className="bubbleContainer"
    >
      <div className="bubble">
        <TypeAnimation
          sequence={[
            1000,
            "Hello Recruiters, I'm Siddharth a Full Stack Web Developer",
            1000,
            "Lorem ipsum dolor sit amet lerimat consectetur adipisicing.",
            1000,
          ]}
          wrapper="span"
          speed={40}
          deletionSpeed={60}
          repeat={Infinity}
        />
      </div>
      <img src="/man.png" alt="" />
    </motion.div>
  );
};

export default Speech;

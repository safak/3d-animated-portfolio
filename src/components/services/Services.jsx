import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";

import "./services.css";
import LogoTimelineDemo from "@/components/services/demo";

const textVariants = {
  initial: { x: -100, y: -100, opacity: 0 },
  animate: { x: 0, y: 0, opacity: 1, transition: { duration: 1 } },
};

const listVariants = {
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 1, staggerChildren: 0.5 } },
};

const services = [
  { id: 1, img: "/service1.png", title: "Programming Languages", list: "HTML, CSS, Javascript, Typescript, Python" },
  { id: 2, img: "/service2.png", title: "Frameworks & Libraries", list: "React, NodeJS, Next.js, Tailwind CSS" },
  { id: 3, img: "/service3.png", title: "Tools & Technologies", list: "Git, Github, VS Code, MongoDB, Supabase"},
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentServiceId, setCurrentServiceId] = useState(null);

  return (
    <div className="services" ref={ref}>
      <div className="section left">
        <motion.h1
          variants={textVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="sTitle"
        >
          Technical Skills
        </motion.h1>

        <motion.div
          variants={listVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="serviceList"
        >
          {services.map((service) => (
            <motion.div
              variants={listVariants}
              key={service.id}
              className={`service${service.id === currentServiceId ? " active" : ""}`}
              onMouseEnter={() => setCurrentServiceId(service.id)}
              onMouseLeave={() => setCurrentServiceId(null)}
            >
              <div className="serviceIcon">
                <img src={service.img} alt={service.title} />
              </div>
              <div className="serviceInfo">
                <h2>{service.title}</h2>
                <h3>{service.list}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="section right">
        <div className="timelineWrap">
          <LogoTimelineDemo activeServiceId={currentServiceId} />
        </div>
      </div>
    </div>
  );
};

export default Services;
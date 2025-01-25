import { useEffect, useRef, useState } from "react";
import "./portfolio2.css";
import { motion, useInView, useScroll, useTransform } from "motion/react";

const items = [
  {
    id: 1,
    img: "code-smith.png",
    title: "CodeSmith - SAAS Code Editor",
    desc: "A Full Stack Code Editor with features like code execution, Adding/Sharing Snippets, multiple Programming languages support, User Authentication with clerk, Convex DB, Webhooks, Zustand, Framer Motion, TailwindCSS, Piston API, Payment with Lemon Squeezy, etc.",
    link: "https://code-smith-saas-code-editor-a6esi973v.vercel.app/",
  },
  {
    id: 2,
    img: "Hi-Me.png",
    title: "Modern Social Media Application",
    desc: "Next Gen Social Media Application with create posts, likes, comment, Upload image, updating profile, signup, signin functionality. Tech used NextJs, Neon, Postgres, TailwindCSS, Typescript, Shadcn, etc.",
    link: "https://next-social-media-app-rho.vercel.app/",
  },
  {
    id: 3,
    img: "HeartSwipe.png",
    title: "HeartSwipe",
    desc: "Tinder Clone: A responsive mobile app featuring JWT auth, user Signup/Login/Logout, Zustand, Tailwind, Profile image upload, Swipe Right/Left, Real-time chat (socket.io), notifications, matching algorithm, and mobile-friendly design.",
    link: "https://heart-swipe.onrender.com",
  },
  {
    id: 4,
    img: "/p4.jpg",
    title: "ChatBuzz",
    desc: "Realtime Chat App with Signup, Login and Logout facilities, Multiple themes, Profile Picture update, Online users toggle switch, MongoDB, Cloudinary, CORS, TailwindCSS, DaisyUI, Axios, Lucid-react & Socket.io",
    link: "https://fullstack-chat-app-hiww.onrender.com",
  },
  {
    id: 5,
    img: "Anime_Webpage.png",
    title: "Anime_Gaming_Webpage",
    desc: "This responsive webpage is build using React, Vite, Tailwind, react-icons, GSAP. It is a clone of Award Winning Website Zentry.",
    link: "https://anime-gaming-website.netlify.app/",
  },
];

const imgVariants = {
  initial: {
    x: -500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const textVariants = {
  initial: {
    x: 500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.05,
    },
  },
};

const ListItem = ({ item }) => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className="pItem" ref={ref}>
      <motion.div
        variants={imgVariants}
        animate={isInView ? "animate" : "initial"}
        className="pImg"
      >
        <img src={item.img} alt="" />
      </motion.div>
      <motion.div
        variants={textVariants}
        animate={isInView ? "animate" : "initial"}
        className="pText"
      >
        <motion.h1 variants={textVariants}>{item.title}</motion.h1>
        <motion.p variants={textVariants}>{item.desc}</motion.p>
        <motion.a variants={textVariants} href={item.link}>
          <button>View Project</button>
        </motion.a>
      </motion.div>
    </div>
  );
};

const Portfolio = () => {
  const [containerDistance, setContainerDistance] = useState(0);
  const ref = useRef(null);

  // useEffect(() => {
  //   if (ref.current) {
  //     const rect = ref.current.getBoundingClientRect();
  //     setContainerDistance(rect.left);
  //   }
  // }, []);

  // FIX: Re-calculate when screen size changes
  useEffect(() => {
    const calculateDistance = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setContainerDistance(rect.left);
      }
    };

    calculateDistance();

    window.addEventListener("resize", calculateDistance);

    return () => {
      window.removeEventListener("resize", calculateDistance);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: ref });

  const xTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -window.innerWidth * items.length]
  );

  return (
    <div className="portfolio" ref={ref}>
      <motion.div className="pList" style={{ x: xTranslate }}>
        <div
          className="empty"
          style={{
            width: window.innerWidth - containerDistance,
            // backgroundColor: "pink",
          }}
        />
        {items.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </motion.div>
      <section />
      <section />
      <section />
      <section />
      <section />
      <div className="pProgress">
        <svg width="100%" height="100%" viewBox="0 0 160 160">
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#ddd"
            strokeWidth={20}
          />
          <motion.circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#dd4c62"
            strokeWidth={20}
            style={{ pathLength: scrollYProgress }}
            transform="rotate(-90 80 80)"
          />
        </svg>
      </div>
    </div>
  );
};

export default Portfolio;

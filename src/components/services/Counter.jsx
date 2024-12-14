import { animate } from "motion";
import { useInView } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

const Counter = ({ from, to, text }) => {
  const [count, setCount] = useState(from);

  const ref = useRef();

  const isInView = useInView(ref);

  useEffect(() => {
    const animation = animate(from, to, {
      duration: 4,
      ease: "easeOut",
      onUpdate: (prev) => {
        setCount(Math.floor(prev));
      },
    });

    return () => animation.cancel();
  }, [isInView, from, to]);

  return (
    <div className="counter" ref={ref}>
      <h1>{count}+</h1>
      <p>{text}</p>
    </div>
  );
};

export default Counter;

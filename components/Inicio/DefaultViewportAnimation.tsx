import React from "react";
import { motion } from "framer-motion";


export function DefaultViewportAnimation(props: { children: React.ReactNode; delay?: number}) {
  return (
    <motion.div
      whileInView={{
        // !
        offsetDistance: 500,
        // *
        opacity: 1,
        scale: 1,
        transform: `translateY(0px)`,
        // dealy
        transition: {
          duration: 0.6,
          threshoold: 1,
          delay: props.delay || 0,
        },
      }}
      viewport={{
        once: true,
      }}
      initial={{
        opacity: 0,
        scale: 0.9,
        transform: `translateY(20px)`,
      }}
      transition={{
        duration: 0.6,
        threshoold: 1,
        delay: 0.2,
      }}
    >
      {props.children}
    </motion.div>
  );
}

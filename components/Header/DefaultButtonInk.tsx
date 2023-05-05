import { motion } from "framer-motion";
import React from "react";
import { Button } from "rsuite";

export function DefaultButtonInk(props) {
  const [hover, setHover] = React.useState(false);
  return (
    <motion.div
      // beaultiful hover and shadow
      whileHover={{
        scale: 1.05,
        background: "transparent",
      }}
      whileTap={{
        scale: 1,
        background: "transparent",
      }}
    >
      <Button
        onClick={props.onClick}
        style={{
          backgroundColor: hover ? "#e8e8e8" : "transparent",
          padding: 0,
          margin: 0,
          cursor: "pointer",
          ...props.style,
        }}
        className={props.className}
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      >
        {props.children}
      </Button>
    </motion.div>
  );
}

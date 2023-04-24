import React from "react";
import { Button } from "rsuite";


export function DefaultButtonInk(props) {
  return (
    <Button
      style={{
        backgroundColor: "transparent",
        padding: 0,
        ...props.style,
      }}
      className={props.className + ' hover:cursor-pointer'}
    >
      {props.children}
    </Button>
  );
}

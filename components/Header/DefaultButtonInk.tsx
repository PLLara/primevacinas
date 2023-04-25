import React from "react";
import { Button } from "rsuite";

export function DefaultButtonInk(props) {
  return (
    <Button
      onClick={props.onClick}
      style={{
        backgroundColor: "transparent",
        padding: 0,
        cursor: "pointer",
        ...props.style,
      }}
      className={props.className}
    >
      {props.children}
    </Button>
  );
}

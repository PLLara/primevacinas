import { DefaultButtonInk } from "components/global/DefaultButtonInk";
import React, { useState } from "react";

interface ButtonGroupProps {
  buttonLabels: string[];
}

function ButtonGroup({ buttonLabels }: ButtonGroupProps) {
  const [selectedButton, setSelectedButton] = useState(0);

  function handleButtonClick(buttonIndex: number) {
    setSelectedButton(buttonIndex);
  }

  return (
    <div className="flex ">
      {buttonLabels.map((label, index) => (
        <DefaultButtonInk key={index} style={{
            display: "inline-flex",
            width: "100%",
            padding: "0px",
            margin: "5px",

        }}>
          <button
            style={{
              backgroundColor:
                selectedButton === index ? "#FF5955" : "transparent",
              color: selectedButton === index ? "#FFFFFF" : "#FF5955",
              padding: "10px",
              borderRadius: "5px",
              cursor: "pointer",
              display: "inline-flex",
              border:
                selectedButton === index
                  ? "1px solid #FF5955"
                  : "1px solid #FF5955",
              justifyContent: "center",
              alignItems: "center",
              width: "187px",
              height: "54px",
              fontWeight: "bold",
              fontFamily: "Roboto",
              fontStyle: "Black",
              fontSize: "14px",
              lineHeight: "22px",
              textAlign: "center",
              verticalAlign: "top",
            }}
            onClick={() => handleButtonClick(index)}
          >
            {label}
          </button>
        </DefaultButtonInk>
      ))}
    </div>
  );
}

export default ButtonGroup;

import React from "react";
import { operators } from "../../../data";

const OperatorButton = (props) => {
  // console.log(props)
  return (
    
      <button className="operatorButton">
        {props.operators.value}
      </button>
    
  );
};

export default OperatorButton;
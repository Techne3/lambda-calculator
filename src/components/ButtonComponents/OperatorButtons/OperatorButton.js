import React from "react";
// import { operators } from "../../../data";

const OperatorButton = (props) => {
  // console.log(props.operators.value)
  return (
    
    

      <button className="operatorButton" onClick={() => {props.selectOperator(props.operators.value)}}>
        {props.operators.value}
      </button>
        
    
  );
};

export default OperatorButton;
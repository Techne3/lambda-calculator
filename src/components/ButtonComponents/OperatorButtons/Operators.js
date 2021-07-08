import React, {useState} from "react";
import {operators} from '../../../data'
import OperatorButton from './OperatorButton'
//import any components needed

//Import your array data to from the provided data file

const Operators = (props) => {
  // STEP 2 - add the imported data to state
  // const [operatorsArray] = useState( [operators] )
  return (
    // const [operatorState, setOperatorState] = useState(operator);
    <div className="operatorContainer">
       {
        operators.map((operators,index) => (
          <OperatorButton key ={index}
          operators= {operators}
          selectOperator= {props.selectOperator}/>
        ))
  
       }

    </div>
  );
};

export default Operators;
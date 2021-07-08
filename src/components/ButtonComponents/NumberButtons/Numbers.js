import React,{useState} from "react";
import {numbers} from '../../../data'
import NumberButton from './NumberButton'
// import NumberButton from '../../../components/ButtonComponents/NumberButtons/NumberButton';

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file


const Numbers = (propsNum) => {
  return (
    <div className="numberContainer">
       {
       numbers.map((numbers,index) => (
         <NumberButton
            key ={index}
            numbers= {numbers}
            selectNumber= {propsNum.selectNumber}/>
       ))
       }
    </div>
  );
};


export default Numbers;



import React, {useState} from "react";
import {specials} from '../../../data'
import SpecialButton from './SpecialButton'

//import any components needed

//Import your array data to from the provided data file
// import {numbers} from '../../../../src/data'

const Specials = () => {
  // STEP 2 - add the imported data to state

  return (

    <div className="specialContainer">
     {
          specials.map((specials,index) => (
            <SpecialButton  key ={index} specials= {specials} />
          ))
     }
    </div>
  );
};

export default Specials;
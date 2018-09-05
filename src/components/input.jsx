import React from 'react';
import '../style/index.css';


const Input = ({desc})=>{
  return(

  	 <div className="Input">
  	    <p>{desc}</p><br/>
      <input type="text" />
     </div>
  )
};

export default Input;
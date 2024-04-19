import React from 'react'
import { useState } from 'react'
const Hook = () => {
    const {number,setNumber}= useState(0);
    function handleChange(e){
setNumber(e.targert.value);
    }
  return (
    <div>
        <div>
      <input type="range" value={number} onChange={handleChange} />
      <input type="range" value={number} onChange={handleChange} />
      </div>
      <div>
        <p>mumber: {number}</p>
      </div>
    </div>
  )
}

export default Hook

import React, { useState } from 'react'
import  UsePrevious  from './UsePrevious';

function Examples() {
    const [count, setCount]=useState(0);
    const prevCount=UsePrevious(count)
  return (
    <div>
      <h1>Current Count is:{count}</h1>
      <h1>Previous Count is:{prevCount!==undefined? prevCount:'N/A'}</h1>
      <button onClick={()=>setCount(count+1)}>Increment Count</button>
    </div>
  )
}

export default Examples

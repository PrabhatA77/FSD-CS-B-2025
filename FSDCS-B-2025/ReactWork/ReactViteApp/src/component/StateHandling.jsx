import React,{useState} from 'react';
import './StateHandling.css';

const StateHandling = () => {

    const [count,setCount] = useState(0);

    const increaseValue = () => {
        setCount(count+1);
    }

    const deccreaseValue = () => {
        setCount(count-1);
    }


  return (
    <div className='stateHandlingContainer'>
        <h2>Counter Value = {count}</h2>
        <button onClick={increaseValue}>Increase Value</button>
        <button onClick={deccreaseValue}>Decrease Value</button>
        <button onClick={()=>setCount(count+4)}>Increase by 4</button>
    </div>
  )
}

export default StateHandling
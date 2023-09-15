import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { decreament, increament } from '../redux/Slices/CounterSlice';

function Counter() {

    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

  return (
      <div>
          <button onClick={() => dispatch(increament())}>increament</button>
          <br />
          <br />

          <div>{count}</div>

          <br />
          <br />
          
          <button onClick={() => dispatch(decreament())}>Decreament</button>

    </div>
  )
}

export default Counter;
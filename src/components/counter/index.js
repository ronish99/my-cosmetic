import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../../redux/slice/CounterSlice";
function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [lastName, setLastName] = useState("");
  const handleChange = (e) => {
    setLastName(e.target.value);
  };
  console.log(typeof lastName);
  return (
    <>
      <button onClick={() => dispatch(increment())}>+</button>
      <span>{count}</span>
      <button onClick={() => dispatch(decrement())}>-</button>
      <input type="number" value={lastName} onChange={handleChange} />
      <button onClick={() => dispatch(incrementByAmount(parseFloat(lastName)))}>
        add
      </button>
    </>
  );
}
export default Counter;

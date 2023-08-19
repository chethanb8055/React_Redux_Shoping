import React from "react";
import { increment, decrement } from "../redux/Slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
const Counter = () => {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(increment())}>+</button>
      <div>{counter}</div>
      <button onClick={() => dispatch(decrement())}>-</button>
    </>
  );
};

export default Counter;

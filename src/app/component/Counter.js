
"use client"
import { state, useReducer } from "react";
function counterReducer(state, action){
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      throw new Error(`Unhandled action type:${action.type}`);
  }
}

export default function Counter() {
  const [count, dispatch] = useReducer(counterReducer, 0);
  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button>Decrement</button>
    </div>
  );
}

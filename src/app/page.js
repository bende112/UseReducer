"use client";
import { useState } from "react"

export default function Home() {
  const [ count, setCount] = useState(0);
  return (
    <div>
      <h1>Using useState</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <button onClick={() => setCount(count - 1)}>Click</button>
    </div>
  );
}

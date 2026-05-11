import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function Counter({ name }) {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };

  useEffect(() => {}, []);
  return (
    <>
      <h1 className="title">{count}</h1>
      <button
        className="btn btn-danger"
        disabled={!count}
        onClick={() => setCount(count - 1)}>-</button>
      <button className="btn btn-success" onClick={increase}>+</button>
    </>
  );
}

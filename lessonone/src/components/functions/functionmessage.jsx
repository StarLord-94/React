import React from "react";
import { useState } from "react";
import "./function.css";

export const Functionmessage = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="functionContainer">
        <h1 className="functionHeading"> You have clicked {count} times</h1>
        <button onClick={() => setCount(count + 1)} className="functionButton">
          <p className="functionHeading__text">click me</p>
        </button>
      </div>
    </>
  );
};

import React from "react";
import "./App.css";
import { Functionform } from "./components/functions/functionform";
import { Classform } from "./components/classes/classform";

export const App = () => {
  return (
    <div className="container">
      <Classform />
      <Functionform />
    </div>
  );
};

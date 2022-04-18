import React from "react";
import { render, screen } from "@testing-library/react";
import {Classform} from './classform';

describe("Classform", () => {
  it("render component Classform", () => {
    render(<Classform />);
  });
});

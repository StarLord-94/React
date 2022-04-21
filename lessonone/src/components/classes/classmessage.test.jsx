import React from "react";
import { render, screen } from "@testing-library/react";
import {Classmessage} from './classmessage';
import '@testing-library/jest-dom';

describe("Classmessage", () => {
  it("render component Classform", () => {
    render(<Classmessage />);
  });
  it("Classmessage component ", () => {
    render(<Classmessage/>);
    expect (screen.getByRole('button')).toBeInTheDocument();
  });
});

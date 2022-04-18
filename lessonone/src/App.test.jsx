import { render, screen } from "@testing-library/react";
import { Classform } from "./components/classes/classform";
import { Functionform } from "./components/functions/functionform";

describe("Classform", () => {
  it("render component Classform", () => {
    render(<Classform />);
  });
  it("render component Classform", () => {
    render(<Functionform />);
  });
});

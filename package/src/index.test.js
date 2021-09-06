import React from "react";
import { render, screen } from "@testing-library/react";
import Message from "./";

describe("Message", () => {
  it("renders a label", () => {
    render(<Message label="Hello, world!" />);

    expect(screen.getByText("Hello, world!")).toBeInTheDocument();
  });
});

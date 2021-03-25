import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button Component", () => {
  it("should render the button with no errors", () => {
    render(<Button />);

    screen.getByRole("text");
  });
});

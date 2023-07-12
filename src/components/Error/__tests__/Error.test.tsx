import { render, screen } from "@testing-library/react";
import Error from "../index";

describe("<Error/>", () => {
  it("User should be able to see the error message", () => {
    render(<Error errorMessage="Something went wrong" />);
    expect(screen.getByText("Something went wrong")).toBeInTheDocument();
  });
});

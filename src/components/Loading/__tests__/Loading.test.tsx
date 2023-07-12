import { render, screen } from "@testing-library/react";
import Loading from "../index";

describe("<Loading/>", () => {
  it("User should be able to see loading message", () => {
    render(<Loading text="Loading content...!" />);
    expect(screen.getByText("Loading content...!")).toBeInTheDocument();
  });
});

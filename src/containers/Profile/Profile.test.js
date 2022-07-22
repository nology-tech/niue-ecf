import {screen} from "@testing-library/react";
import {customRender} from "../../test-utilities/test-utilities";
import Profile from "./Profile";

describe("Initial tests for Profile page", () => {
  it("Should render the Sign Out button", () => {
    customRender(<Profile />);
    const button = screen.getByTestId("button");
    expect(button).toBeInTheDocument();
  });
});

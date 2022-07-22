import { customRender } from "../../test-utilities/test-utilities";
import { screen } from "@testing-library/react";
import MarketplaceIndex from "./MarketplaceIndex";
import marketData from "../../assets/data/dummyMarketData";
import userProfile from "../../assets/data/dummyUserData";
import amazonLogo from "./../../assets/images/amazon-logo.png"

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ marketplaceId: 1 }),
}));

describe("Initial test for marketplace index heading data", () => {
  it("should render heading from first marketplace dummy data", () => {
    customRender(
      <MarketplaceIndex marketData={marketData} userProfile={userProfile} />
    );
    const heading = screen.getByTestId("heading");
    expect(heading).toBeInTheDocument();
    expect(heading.innerHTML).toEqual("Earn a £5 Amazon Voucher");
    expect(heading).not.toBeFalsy();
  });

  it("should render image from first marketplace dummy data", () => {
    customRender(
      <MarketplaceIndex marketData={marketData} userProfile={userProfile} />
    );
    const image = screen.getByTestId("image");
    expect(image).toBeInTheDocument();
    expect(image).not.toBeFalsy();
  });

  it("should render a lock when the marketcard is locked", () => {
    customRender(
      <MarketplaceIndex marketData={
        [
          {
            image: amazonLogo,
            heading: "Earn a £5 Amazon Voucher",
            overview:
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic placeat quis blanditiis. Debitis placeat sunt, sapiente, a iste repudiandae hic necessitatibus natus inventore maxime, perspiciatis sed distinctio praesentium blanditiis ipsa? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic placeat quis blanditiis. Debitis placeat sunt, sapiente, a iste repudiandae hic necessitatibus natus inventore maxime, perspiciatis sed distinctio praesentium blanditiis ipsa? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic placeat quis blanditiis. Debitis placeat sunt, sapiente, a iste repudiandae hic necessitatibus natus inventore maxime, perspiciatis sed distinctio praesentium blanditiis ipsa?",
            id: 1,
            skillPoints: 400,
            trophies: 1,
            isLocked: true
          }
        ]
      } userProfile={userProfile} />
    );
    const lock = screen.getByTestId("marketplace-card-lock");
    expect(lock).toBeInTheDocument();
    expect(lock).not.toBeFalsy();
  });
});

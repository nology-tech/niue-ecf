import React from "react";
import { useParams } from "react-router-dom";
import BackButton from "../../components/BackButton/BackButton";
import TrophyStats from "../../components/TrophyStats/TrophyStats";
import Button from "../../components/Button/Button";
import "./MarketplaceIndex.scss";
import MarketplaceIndexOverview from "../../components/MarketplaceIndexOverview/MarketplaceIndexOverview";
import MarketplaceIndexRequirements from "../../components/MarketplaceIndexRequirements/MarketplaceIndexRequirements";
import lock from "./../../assets/images/lock.svg";

// path: /marketplace/:marketplaceId

const MarketplaceIndex = (props) => {
  const { marketData, userProfile } = props;
  const { marketplaceId } = useParams();
  const pickedMarketCard = marketData.find(
    ({ id }) => id === parseInt(marketplaceId)
  );
  return (
    <div className="marketplace-index">
      <header className="marketplace-index__header">
        <div className="marketplace-index__back-button">
          <BackButton linkTo="/marketplace" />
        </div>
        <TrophyStats userProfile={userProfile} />
      </header>
      <img
        data-testid="image"
        src={pickedMarketCard.image}
        alt={pickedMarketCard.heading}
      />
      <h1 data-testid="heading" className="marketplace-index__heading">
        {pickedMarketCard.heading}
      </h1>
      <MarketplaceIndexRequirements marketData={marketData} />
      <MarketplaceIndexOverview marketData={marketData} />
      <div className="marketplace-index__button-container">
        {pickedMarketCard.isLocked && (
          <div className="marketplace-index__button-container__overlay">
            <img
              data-testid="marketplace-card-lock"
              src={lock}
              alt="lock"
              className="marketplace-index__button-container__overlay__lock"
            />
          </div>
        )}
        <Button buttonText="Purchase" />
      </div>
    </div>
  );
};

export default MarketplaceIndex;

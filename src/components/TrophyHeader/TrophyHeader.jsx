import React from "react";
import UserIcon from "../UserIcon/UserIcon";
import TrophyStats from "../TrophyStats/TrophyStats";
import "./TrophyHeader.scss";

const TrophyHeader = ({ userProfile}) => {
  const { userIcon } = userProfile;
  return (
    <header className="trophy-header">
      <div className="trophy-header__user-profile">
        <UserIcon userIcon={userIcon} />
      </div>
      <TrophyStats userProfile={userProfile} />
      
    </header>
  );
};

export default TrophyHeader;

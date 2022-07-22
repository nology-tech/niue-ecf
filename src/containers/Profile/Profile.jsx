import React from "react";
import "./Profile.scss";
import Button from "../../components/Button/Button";

// path: /profile

const Profile = () => {
  return (
    <div className="profile-page">
      <Button className="profile-page__sign-out" buttonText="SIGN OUT" />
    </div>
  );
};

export default Profile;

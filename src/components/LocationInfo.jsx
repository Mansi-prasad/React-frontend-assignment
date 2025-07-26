import React from "react";
import { assets } from "../assets/images";
const LocationInfo = () => {
  return (
    <div className="d-none d-md-block">
      <div className="d-flex justify-content-between py-2 mb-2 border-bottom">
        <div className="d-flex align-items-center gap-2">
          <img src={assets.locationIcon} alt="location-icon" height={16} />
          <p className="mb-0">Noida, India</p>
        </div>
        <div>
          <img src={assets.editIcon} alt="edit-icon" />
        </div>
      </div>
      <div className="d-flex gap-1 align-items-center ">
        <img src={assets.infoIcon} alt="info-icon" height={16} />
        <p className="mb-0">
          Your location will help us serve better and extend a personalised
          experience.
        </p>
      </div>
    </div>
  );
};

export default LocationInfo;

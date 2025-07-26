import React from "react";
import { assets } from "../assets/images";
const HeroSection = () => {
  return (
    <>
      <div className="position-relative w-100">
        {/* Desktop Image */}
        <img
          src={assets.desktopBannerImage}
          alt="desktop-banner"
          className="w-100 d-none d-md-block"
          style={{ height: "440px", objectFit: "cover" }}
        />

        {/* Mobile Image */}
        <img
          src={assets.mobileBannerImage}
          alt="mobile-banner"
          className="w-100 d-block d-md-none"
          style={{}}
        />
        {/* for mobile screen */}
        <div
          className="position-absolute d-block d-md-none"
          style={{ top: "16px", right: "16px" }}
        >
          <button className="border border-white p-1 bg-transparent text-white">
            Join Group
          </button>
        </div>
        <div
          className="position-absolute text-white px-3 px-md-5 px-lg-6"
          style={{ bottom: "50px" }}
        >
          <h2 className="mb-1 fw-bold">Computer Engineering</h2>
          <p className="mb-0 fs-6 fs-md-5">
            142,765 Computer Engineers follow this
          </p>
        </div>
      </div>
    </>
  );
};

export default HeroSection;

import React from "react";
import { assets } from "../assets/images";
const PostInfo = ({ profileImage, userName }) => {
  return (
    <div className="d-flex justify-content-between mt-2">
      <div className="d-flex align-items-center gap-2">
        <div>
          <img src={profileImage} alt="profile-icon" />
        </div>
        <div>
          <p className=" mb-0 fw-bold">{userName}</p>
        </div>
      </div>
      <div className="d-flex align-items-center gap-4">
        <div className="d-flex gap-1">
          <div>
            <img src={assets.show} alt="show-icon" height={16} />
          </div>
          <div>
            <p className="mb-0">1.4K views</p>
          </div>
        </div>
        <div>
          <button className="bg-light px-2 py-1 border-0 rounded-1">
            <img src={assets.shareIcon} alt="share-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostInfo;

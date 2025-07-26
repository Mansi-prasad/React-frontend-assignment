import React from "react";
import { assets } from "../assets/images";
const PostCard = ({ post, id }) => {
  return (
    <div className="w-md-75 border mt-2" id={id}>
      <div>
        <img src={post.Image} alt="image" className="w-100" />
      </div>
      <div className="p-4">
        <div className="d-flex">
          <img src={post.CateImage} alt="article-writing-icon" height={16} />
          <p>{post.Category}</p>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <p className="fw-bold">{post.Title}</p>
          <img src={assets.moreIcon} alt="more" height={16} />
        </div>
        <div>
          <p>{post.Desc}</p>
        </div>
        <div className="d-flex justify-content-between">
          <div className="d-flex gap-2">
            <div>
              <img src={post.UserProfile} alt="profile-icon" />
            </div>
            <div>
              <p className="fw-bold">{post.UserName}</p>
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
      </div>
    </div>
  );
};

export default PostCard;

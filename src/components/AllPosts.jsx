import React from "react";
import { assets } from "../assets/images/index";
import PostCard from "./PostCard";
import LocationInfo from "./LocationInfo";
import PostInfo from "./PostInfo";
const posts = [
  {
    id: 1,
    Category: "Article",
    CateImage: assets.articleWritingIcon,
    Image: assets.Image2,
    Title: "What if famous brands had regular fonts? Meet RegulaBrands!",
    Desc: "I've worked in UX for the better part of a decade. From now on, I plan to rei...",
    UserProfile: assets.profileImage1,
    UserName: "Sarthak Kamra",
  },
  {
    id: 2,
    Category: "Education",
    CateImage: assets.EducationIcon,
    Image: assets.Image3,
    Title:
      "Tax Benefits for Investment under National Pension Schema launched by Government",
    Desc: "I've worked in UX for the better part of a decade. From now on, I plan to rei...",
    UserProfile: assets.profileImage2,
    UserName: "Sarah West",
  },
];
const AllPosts = () => {
  return (
    <div className="container-fluid container-md d-flex flex-wrap align-items-start gap-4">
      <div className="row gx-4 gy-4 align-items-start">
        {/* posts */}
        <div className="col-12 col-md-8">
          {posts.map((post) => {
            return <PostCard post={post} key={post.id} />;
          })}
          <div className="border my-2">
            <div>
              <img src={assets.Image4} alt="" className="w-100" />
            </div>
            <div className="p-4">
              <div className="d-flex align-items-center gap-1">
                <div>
                  <img src={assets.meetUpIcon} alt="meetup" />
                </div>
                <div>
                  <p className="mb-0">MeetUp</p>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center my-2">
                <div>
                  <p className="mb-0 fw-bold">
                    Finance & Investment Elite Social Mixer @Lujiazui
                  </p>
                </div>
                <div>
                  <img src={assets.moreIcon} alt="more" height={16} />
                </div>
              </div>
              <div className="d-flex gap-4 my-2">
                <div className="d-flex gap-1 align-items-center">
                  <img src={assets.calendarIcon} alt="cal" height={16} />
                  <p className="mb-0">Fri, 12 Oct, 2018</p>
                </div>
                <div className="d-flex gap-1 align-items-center">
                  <img src={assets.locationIcon} alt="location" height={16} />
                  <p className="mb-0">Ahmedabad, India</p>
                </div>
              </div>
              <div className="">
                <button className="border my-2 rounded-2 p-2 w-100 bg-transparent text-danger fw-semibold text-center">
                  visit Website
                </button>
              </div>
              <PostInfo
                profileImage={assets.profileImage3}
                userName="Ronal Jones"
              />
            </div>
          </div>
          {/* last post */}
          <div className="border p-4">
            <div className="d-flex align-items-center gap-1">
              <img src={assets.jobIcon} alt="job-icon" height={16} />
              <p className="mb-0 fw-semibold">Job</p>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <h4 className="fw-bold">Software Developer</h4>
              <img src={assets.moreIcon} alt="more-icon" height={16} />
            </div>
            <div className="d-flex gap-4 text-black">
              <div className="d-flex gap-1 align-items-center">
                <img src={assets.icon} alt="icon" height={14} />
                Innovaccer Analytics Private Ltd.
              </div>
              <div className="d-flex gap-1 align-items-center">
                <img
                  src={assets.locationIcon}
                  alt="location-icon"
                  height={14}
                />
                Noida, India
              </div>
            </div>
            <div>
              <button className="border my-2 fw-semibold text-success rounded-2 p-2 bg-transparent w-100">
                Apply on TimesJobs
              </button>
            </div>
            <PostInfo
              profileImage={assets.profileImage4}
              userName="Joseph Gray"
            />
          </div>
        </div>

        {/* location */}
        <div className="col-12 col-md-4">
          <LocationInfo />
        </div>
      </div>
    </div>
  );
};

export default AllPosts;

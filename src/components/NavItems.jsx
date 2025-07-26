import React, { useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/images/index";
const NavItems = () => {
  const [activeTab, setActiveTab] = useState("All Posts");

  const tabs = ["All Posts", "Article", "Event", "Education", "Job"];
  return (
    <div className="d-none d-md-block mt-4">
      <div className="container d-flex justify-content-between align-items-center border-bottom border-secondary ps-0 mb-4">
        <div>
          <ul className="list-inline mb-0">
            {tabs.map((tab) => (
              <li
                key={tab}
                className={`list-inline-item px-1 py-2 pb-3 cursor-pointer ${
                  activeTab === tab ? "active-tab" : ""
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab} {tab === "All Posts" && "(32)"}
              </li>
            ))}
          </ul>
        </div>
        <div className="d-flex gap-2">
          <div className="d-flex gap-1 align-items-center border-0 rounded-2 bg-light px-2">
            <button className="bg-transparent border-0 fw-semibold p-1">
              Write a Post
            </button>
            <img src={assets.downArrowIcon} alt="arrow" height={18} />
          </div>
          <div className="d-flex gap-1 align-items-center bg-primary rounded-2 px-2">
            <img src={assets.joinGroup} alt="joinIcon" height={14} />
            <button className="bg-transparent border-0 text-white p-1">
              Join Group
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavItems;

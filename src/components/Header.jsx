import React, { useState } from "react";
import { assets } from "../assets/images";
import { Link } from "react-router-dom";
import Signup from "./SignUp.jsx";
import Signin from "./SignIn.jsx";
const Header = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const toggleForm = () => setIsSignUp(!isSignUp);
  return (
    <div className="d-none d-md-block container py-2">
      <div className="d-flex justify-content-between align-items-center ">
        {/* logo */}
        <div className="cursor-pointer" style={{ cursor: "pointer" }}>
          <img src={assets.logo} alt="app-logo" height="24" />
        </div>
        {/* Search box */}
        <div
          className="d-flex align-items-center gap-2 px-4 py-2 rounded-5"
          style={{ backgroundColor: "#F2F2F2", width: "28%" }}
        >
          <div>
            <img src={assets.search} alt="search-icon" height="20" />
          </div>
          <div className="w-100">
            <input
              type="text"
              name="input"
              id="input"
              className="form-control border-0 shadow-none bg-transparent p-0"
              placeholder="Search for your favorite groups in ATG"
            />
          </div>
        </div>
        {/* Create account */}
        <div className="d-flex align-items-center gap-2">
          <p className="mb-0 fw-bold">Create account.</p>
          <div>
            <span
              className="text-decoration-none fw-bold text-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              It's free!
              <img src={assets.downArrowIcon} alt="arrow" height="12" />
            </span>
          </div>
        </div>
      </div>
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl position-relative">
          <button
            type="button"
            className="btn btn-sm bg-light text-gray fw-bold rounded-circle position-absolute top-0 end-0 translate-middle-x translate-middle-y z-1"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            X
          </button>
          <div className="modal-content">
            {/* Swap SignUp and SignIn  */}
            {isSignUp ? (
              <Signup onToggleForm={toggleForm} />
            ) : (
              <Signin onToggleForm={toggleForm} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

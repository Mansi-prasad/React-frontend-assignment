import React from "react";
import { assets } from "../assets/images";
import { Link } from "react-router-dom";
const SignIn = ({ onToggleForm }) => {
  return (
    <div className="container p-0">
      <div className="p-1" style={{ backgroundColor: "#effff4" }}>
        <p className="mb-0 p-2 text-success fw-semibold text-center">
          Let's learn, share & inspire each other with our passion for computer
          engineering. Sign up now 🤘🏼
        </p>
      </div>
      <div className="p-4">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <div>
            <h2 className="fw-bold">Sign In </h2>
          </div>
          <div className="">
            <p className="d-flex gap-1">
              Don't have an account yet?
              <span
                onClick={onToggleForm}
                className="text-decoration-none fw-bold text-primary"
              >
                Create new for free!
              </span>
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="w-50">
            <form action="#">
              <div className="w-100 p-2 border bg-light">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="border-0 bg-transparent"
                  placeholder="Email"
                />
              </div>
              <div className="d-flex align-items-center justify-content-between w-100 border bg-light p-2">
                <input
                  type="password"
                  name="pass"
                  id="pass"
                  className="border-0 bg-transparent"
                  placeholder="Password"
                />
                <img src={assets.show} alt="show-icon" height={16} />
              </div>
              <div className="m-2">
                <button
                  type="submit"
                  className="text-white fw-bold bg-primary border-0 rounded-5 w-100 p-2"
                >
                  Sign In
                </button>
              </div>
              <div className="">
                <button className="d-flex align-items-center justify-content-center gap-2 border bg-transparent w-100 p-2">
                  <img
                    src={assets.facebookIcon}
                    alt="facebook-icon"
                    height={16}
                  />
                  <p className="mb-0">Sign up with Facebook</p>
                </button>
              </div>
              <div className="mt-2">
                <button className="d-flex align-items-center justify-content-center gap-2 border bg-transparent w-100 p-2">
                  <img src={assets.googleIcon} alt="google-icon" height={16} />
                  <p className="mb-0">Sign up with Google</p>
                </button>
              </div>
              <div className="text-center mt-3">
                <p className="fw-semibold">Forgot Password?</p>
              </div>
            </form>
          </div>
          <div className="w-50 d-flex justify-content-center">
            <img src={assets.signupBannerImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

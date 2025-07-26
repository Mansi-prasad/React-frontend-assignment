import React from "react";
import { assets } from "../assets/images";
import { Link } from "react-router-dom";
const SignUp = ({ onToggleForm }) => {
  return (
    <div className="container p-0">
      <div className="p-1 m-0" style={{ backgroundColor: "#effff4" }}>
        <p className="mb-0 p-2 text-success fw-semibold text-center">
          Let's learn, share & inspire each other with our passion for computer
          engineering. Sign up now 🤘🏼
        </p>
      </div>
      <div className="p-4">
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <h2 className="fw-bold">Create Account</h2>
          </div>
          <div className="">
            <p className="d-flex gap-1">
              Already have an account?
              <span
                onClick={onToggleForm}
                className="text-decoration-none fw-bold text-primary"
              >
                Sign In
              </span>
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="w-50">
            <form action="#">
              <div className="d-flex w-100 border bg-light">
                <input
                  type="text"
                  name="fname"
                  id="fname"
                  className="flex-grow-1 border-0 border-end p-2 bg-transparent"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  name="lname"
                  id="lname"
                  className="flex-grow-1 border-0 bg-transparent p-2"
                  placeholder="Last Name"
                />
              </div>
              <div className="w-100 p-2 border bg-light">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="border-0 bg-transparent"
                  placeholder="Email"
                />
              </div>
              <div className="d-flex justify-content-between align-items-center w-100 p-2 border bg-light">
                <input
                  type="password"
                  name="pass"
                  id="pass"
                  className="border-0 bg-transparent"
                  placeholder="Password"
                />
                <img src={assets.show} alt="show-icon" height={16} />
              </div>
              <div className="w-100 p-2 border bg-light">
                <input
                  type="password"
                  name="conpass"
                  id="conpass"
                  className="border-0 bg-transparent"
                  placeholder="Confirm Password"
                />
              </div>
              <div className="m-2">
                <button
                  type="submit"
                  className="text-white fw-bold bg-primary border-0 rounded-5 w-100 p-2"
                >
                  Create Account
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
              <div className="w-100 mt-2">
                <button className="d-flex align-items-center justify-content-center gap-2 border bg-transparent w-100 p-2">
                  <img src={assets.googleIcon} alt="google-icon" height={16} />
                  <p className="mb-0">Sign up with Google</p>
                </button>
              </div>
            </form>
          </div>
          <div className="w-50 d-flex justify-content-center">
            <div>
              <img src={assets.signupBannerImage} alt="" />
              <p className="mb-0">
                By signing up, you agree to our Terms & conditions, Privacy
                policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

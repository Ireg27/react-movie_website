import React from "react";
import { Link } from "react-router-dom";

// Images
import SquareLogo from "../images/filma.png";
import LogInImg from "../images/login-img1.jpg";

const passwordReset = ({ loggedIn }) => {
  return (
    <div className="container">
      {/* <Nav /> */}
      <div className="login-container">
        <div className="login__left">
          <img src={LogInImg} alt="" />
        </div>

        <form className="login-form">
          <div className="squareLogo">
            <img src={SquareLogo} width="105px" alt="" />
          </div>
          <div className="form-group field login-username">
            <input
              type="email"
              name="email"
              id="email"
              className="form-field"
              placeholder="email"
              autocomplete="off"
            />
            <label htmlFor="email" className="form-label">
              Email
            </label>
          </div>

          <div className="form-btn">
            <input type="submit" value="Reset" className="login-btn" />
          </div>

          <h2>
            Back to{" "}
            <Link to="/">
              <span className="joinus-login">Log In</span>
            </Link>
          </h2>
        </form>
      </div>
    </div>
  );
};

export default passwordReset;

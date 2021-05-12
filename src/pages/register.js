import React from "react";
import "../css/login.css";
import { Link } from "react-router-dom";


// Images
import SquareLogo from "../images/filma.png";
import LogInImg from "../images/login-img1.jpg";

const Register = ({loggedIn}) => {
 
  return (
    <div className="container">
      {/* <Nav /> */}
      <div className="login-container">

      
      <div className="login__left">
        <img src={LogInImg} alt=""/>
      </div>
      <form className="login-form">
        <div className="squareLogo">
        <img src={SquareLogo} width="105px" alt="" />
        </div>
        <h1 className="register-title">Register Now!</h1>
     
        <div className="form-group field mt">
          <input
            type="text"
            name="username"
            id="username"
            className="form-field"
            placeholder="Username"
            autocomplete="off"
          />
          <label htmlFor="username" className="form-label">
            Username
          </label>
        </div>

        <div className="form-group field mt">
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

        <div className="form-group field mt" >
        <input
          type="password"
          name="password"
          id="password"
          className="form-field"
          placeholder="Password"
        />
        <label htmlFor="password" className="form-label">
            Password
          </label>
        </div>

        <div className="form-group field mt">
        <input
          type="password"
          name="password"
          id="password"
          className="form-field"
          placeholder="Password"
        />
        <label htmlFor="password" className="form-label">
            Confirm Password
          </label>
        </div>

        <div className="incorrect">
        <h2>Password must be 8 characters long, contain at least 1 uppercase letter, and a number.</h2>
      </div>

      <div className="form-btn">
        <input type="submit" value="register" className="login-btn"/>
      </div>


      <h2>Already have an account? <Link to="/">
          <span className="joinus-login">Log In</span>
        </Link></h2>        
        
      </form>
      </div>
    </div>
  );
};

export default Register;

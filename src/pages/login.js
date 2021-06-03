import React, { useState } from "react";
import "../css/register.css";
import { Link, useHistory } from "react-router-dom";

// Images
import SquareLogo from "../images/filma.png";
import LogInImg from "../images/login-img1.jpg";

const Login = ({ user, loggedIn, signIn, signOut }) => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");


  const onSubmit = (e) => {
    e.preventDefault();
    // let history = useHistory();

    
  };

  function checkDetails() {
    if (user.username === username && user.password === password) {
      document.querySelector(".incorrect").style.display = "none";
      signIn();
      // checkDetails = true;
      return true;
      
    } else {
      document.querySelector(".incorrect").style.display = "block";
      return false;
    }
  }


  function HomeButton() {
    let history = useHistory();

    function handleClick() {
      if (checkDetails()) {
        history.push("/home");
      }
    }

    return (
      <div className="form-btn">
        <input
          type="submit"
          value="log in"
          className="login-btn"
          onClick={handleClick}
        />
      </div>
    );
  }

  return (
    <div className="container">
      {/* <Nav loggedIn={loggedIn} signOut={signOut} /> */}
      <div className="login-container">
        <div className="login__left">
          <img src={LogInImg} alt="" />
        </div>
        <form className="login-form" onSubmit={onSubmit}>
          <div className="squareLogo">
            <img src={SquareLogo} width="105px" alt="" />
          </div>
          <h1>Log In</h1>
          <div className="form-group field login-username">
            <input
              type="text"
              name="username"
              id="username"
              className="form-field"
              placeholder="Username"
              value={username}
              autocomplete="off"
              onChange={(e) => setusername(e.target.value)}
            />
            <label htmlFor="username" className="form-label">
              Username
            </label>
          </div>
          <div className="form-group field login-password">
            <input
              type="password"
              name="password"
              id="password"
              className="form-field"
              placeholder="Password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <Link to="/pwreset">
              <span className="forgotPw">Forgot Password?</span>
            </Link>
          </div>

          <div className="incorrect">
            <h2>Incorrect username or password.</h2>
          </div>
          {HomeButton()}
          <h2>
            Don't have an account?{" "}
            <Link to="/register">
              <span className="joinus-login">Join Us</span>
            </Link>{" "}
            now for free!
          </h2>
        </form>
      </div>
    </div>
  );
};

export default Login;

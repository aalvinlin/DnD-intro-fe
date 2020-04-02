import React from "react";
import { Link } from "react-router-dom";

import logo from "../images/logo.png";

const Home = () => {

  return (
    <div className="content">
      <h1>Welcome to D&amp;D Intro!</h1>
        <div className="img-container">
            <img className="logo" src={logo}></img>
        </div>
      <h2>Learn the basics to start playing.</h2>
      <div className="login-signup-container">
        <Link to="/signup">
            <button className="large-button signup">Sign Up</button>
        </Link>
        <Link to="/login">
            <button className="large-button login">Log In</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
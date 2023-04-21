import React, { useEffect, useState } from "react";
import Nav from "../NavBar/Nav";
import { Link } from "react-router-dom";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Footer from "../FooterScreen/Footer";
import "../LoginScreen/Login.css";
import "./SignUp.css";

const SignUp = () => {
  return (
    <>
      <div className="fitin">
        <div className="bg">
          <Nav />
          <div className="sectionn">
            <div className="form-boxx">
              <div className="form-value">
                <form action="">
                  <h2>SignUp</h2>
                  <div className="inputbox">
                    <i>
                      <AccountCircleIcon />
                    </i>
                    <input type="text" required />
                    <label>Name</label>
                  </div>
                  <div className="inputbox">
                    <i>
                      <EmailOutlinedIcon />
                    </i>
                    <input type="text" required />
                    <label>Email</label>
                  </div>
                  <div className="inputbox">
                    <i>
                      <LockOutlinedIcon />
                    </i>
                    <input type="password" required />
                    <label>Password</label>
                  </div>
                  <div className="inputbox">
                    <i>
                      <LockOutlinedIcon />
                    </i>
                    <input type="password" required />
                    <label>Forgot Password</label>
                  </div>
                  <button>Log In</button>
                  <div className="register">
                    <p>
                      Already Hvae An Account?<Link to={"/login"}>Login</Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SignUp;

import React, { useEffect, useState } from "react";
import Nav from "../NavBar/Nav";
import { Link } from "react-router-dom";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Footer from "../FooterScreen/Footer";
import "./Login.css";
// import { TextField, Button } from "@mui/material";

const Login = () => {
  //   const [password, setPassword] = useState("");
  //   const [email, setEmail] = useState("");

  //   const handleLogin = () => {
  //     console.log(email, password);
  //   };

  return (
    <>
      <div className="fitin">
        <div className="bg">
          <Nav />
          <div className="section">
            <div className="form-box">
              <div className="form-value">
                <form action="">
                  <h2>Login</h2>
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
                  <div className="forget">
                    <input type="checkbox" />
                    <label>
                      <span>Remember Me</span>
                      <Link to={"/forgotpassword"}>Forget Password?</Link>
                    </label>
                  </div>
                  <button>Log In</button>
                  <div className="register">
                    <p>
                      Don't Have an account?<Link to={"/signup"}>Sign Up</Link>
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

export default Login;

import React from "react";
import { Link } from "react-router-dom";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import Nav from "../NavBar/Nav";
import Footer from "../FooterScreen/Footer";
import "./Form.css";

const Form = () => {
  return (
    <div>
      <div className="bg">
        <Nav />
        <div className="section">
          <div className="form-box">
            <div className="form-value">
              <h2>Book a Ride</h2>
              <form action="">
                <div className="inputbox">
                  <i>
                    <LocationOnOutlinedIcon />
                  </i>
                  <input type="text" required />
                  <label>Pickup Location</label>
                </div>
                <div className="inputbox">
                  <i>
                    <LocationOnOutlinedIcon />
                  </i>
                  <input type="text" required />
                  <label>Drop Location</label>
                </div>
                <div className="inputbox">
                  <i>
                    <CalendarMonthOutlinedIcon />
                  </i>
                  <input type="date" required />
                  <label className="opa">Pickup Date</label>
                </div>
                <div className="inputbox">
                  <i>
                    <TimerOutlinedIcon />
                  </i>
                  <input type="time" />
                  <label className="opa">Select Pickup Time</label>
                </div>
                <button>Book</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Form;

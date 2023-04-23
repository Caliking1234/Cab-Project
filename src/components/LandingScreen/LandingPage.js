import React from "react";
import "./LandingPage.css";
import MainContent from "./MainContent";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import HailIcon from "@mui/icons-material/Hail";
import Footer from "../FooterScreen/Footer";
import bgImg from "../../images/bg-img8.png";
import { useNavigate } from "react-router-dom";
// import Nav from "../NavBar/Nav";
// import Form from "./Form"

const LandingPage = () => {
  const navigate = useNavigate();
  const form = () => {
    navigate("/form");
  };
  const loginn = () => {
    navigate("/login");
  };
  const signup = () => {
    navigate("/signup");
  };
  return (
    <>
      <div className="fitin">
        <div className="bgg">
          <div className="tempClass">
            <div className="landingPageHeading">
              <h1>TERMINAL</h1>
              <div className="headingIcons">
                <i>
                  <HailIcon
                    fontSize="large"
                    style={{
                      marginTop: 15,
                      marginLeft: 15,
                      marginRight: -10,
                      fontSize: 50,
                      color: "aliceblue",
                    }}
                  />
                </i>
                <i>
                  <LocalTaxiIcon
                    fontSize="large"
                    style={{
                      marginTop: 15,
                      marginLeft: 10,
                      fontSize: 70,
                      color: "aliceblue",
                    }}
                  />
                </i>
                <i>
                  <EmojiPeopleIcon
                    fontSize="large"
                    style={{
                      marginTop: 15,
                      marginLeft: -10,
                      fontSize: 50,
                      color: "aliceblue",
                    }}
                  />
                </i>
              </div>
            </div>
            <div className="intoText">
              <div className="margins">
                <h1>India's First Cab Sharing Platform</h1>
                <p>Divided by Apps United By Us</p>
              </div>
              <div className="btns">
                <button className="btn1" onClick={form}>
                  Book Ride
                </button>
                <button className="btn2" onClick={loginn}>
                  Log In
                </button>
              </div>
            </div>
          </div>
          <div className="introSubHeading">
            <h1>Why You Should Choose Us</h1>
            <div className="SubheadingLists">
              <h3>No Return Fare</h3>
              <h3>No Extra Costs</h3>
              <h3>Friendly Staff</h3>
              <h3>Flexible Rentals</h3>
              <h3>Easy to Make Book Taxi</h3>
            </div>
            {/* <div className="SubheadingLists">
            </div>
            <div className="SubheadingLists">
            </div> */}
          </div>
        </div>
      </div>
      <MainContent />
      <Footer />
    </>
  );
};

export default LandingPage;

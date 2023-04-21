import React from "react";
import Groups2Icon from "@mui/icons-material/Groups2";
import GradeIcon from "@mui/icons-material/Grade";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import NoCrashIcon from "@mui/icons-material/NoCrash";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import "./MainContent.css";
const MainContent = () => {
  return (
    <div className="outterMainContent">
      <div className="setbg">
        <div className="bigtext">
          <span>
            <h1>Why You'll Love Terminal</h1>
          </span>
        </div>
      </div>
      <div className="cards">
        <div className="box-container">
          <div className="box">
            <div>
              <i>
                <Groups2Icon fontSize="large" />
              </i>
            </div>
            <div>
              <i>
                <GradeIcon />
                <GradeIcon />
                <StarHalfIcon />
              </i>
            </div>
          </div>
          <div className="cardText">
            <h3>Best User Experience</h3>
          </div>
          <div className="cardPara">
            <p>
              Verified member profiles and ratings mean you know exactly who
              you're travelling with.
            </p>
          </div>
        </div>
        <div className="box-container">
          <div className="box">
            <div>
              <i>
                <CheckCircleIcon fontSize="large" />
              </i>
            </div>
            <div style={{ opacity: 0 }}>
              <i>
                <GradeIcon />
                <GradeIcon />
                <StarHalfIcon />
              </i>
            </div>
          </div>
          <div className="cardText">
            <h3>Verified Services</h3>
          </div>
          <div className="cardPara">
            <p>
              Verified member profiles and ratings mean you know exactly who
              you're travelling with.
            </p>
          </div>
        </div>
        <div className="box-container">
          <div className="box">
            <div>
              <i>
                <NoCrashIcon fontSize="large" />
              </i>
            </div>
            <div style={{ opacity: 0 }}>
              <i>
                <GradeIcon />
                <GradeIcon />
                <StarHalfIcon />
              </i>
            </div>
          </div>
          <div className="cardText">
            <h3>Secured Rides</h3>
          </div>
          <div className="cardPara">
            <p>
              Your ride is fully secured with GTC Cabs. Our first priority to
              provide safe and secure ride.
            </p>
          </div>
        </div>
        <div className="box-container">
          <div className="box">
            <div>
              <i>
                <AccountBalanceIcon fontSize="large" />
              </i>
            </div>
            <div>
              <i>
                <MonetizationOnIcon />
                <AttachMoneyIcon />
                <MonetizationOnIcon />
              </i>
            </div>
          </div>
          <div className="cardText">
            <h3>Cost Effective</h3>
          </div>
          <div className="cardPara">
            <p>
              Your rides will be cost effective with best user Experience.most
              puntual and value for money Services
            </p>
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <h1
          style={{ marginTop: "40px", color: "aliceblue", fontWeight: "900" }}
        >
          Services That We Offer
        </h1>
        <div className="cardGrid">
          <div className="card">
            <input type="checkbox" id="checked" />
            <h3>1. Sharing Taxi</h3>
            <p>
              So, you need not worry about the peak traffic hours, massive
              queues as petrol pumps and weather updates, as with us you are our
              responsibility and all you ......
            </p>
            <div className="contentt">
              <p>
                need is to enjoy your commute with our shared cab facilitiesOur
                shared taxi services in India along with other metropolitan
                cities in India, are not only economically but ecologically
                friendly and ensure your complete safety and security by
                providing rides with only top-rated, experienced, and trusted
                drivers. Our share taxi website enables you to find your ride
                and make your bookings in a matter of seconds. Furthermore, you
                can even book to travel from one state to another such as Delhi
                to Dehradun, Dehradun to Meerut and more and avail yourself of
                the best sharing taxi services. Always remember, with GTC cabs,
                the far you will go, the more you will save.
              </p>
              <label for="checked">Read Less</label>
            </div>
            <label for="checked">Read More</label>
          </div>
          <div className="card">
            <input type="checkbox" id="checkedd" />
            <h3>2. Outstation Cabs</h3>
            <p>
              At GTC Cabs, we ensure that you don’t face any issues while
              finding a can for Airport as we understand that our clients cannot
              compromise with punctuality in this case.......
            </p>
            <div className="contentt">
              <p>
                Whether it is day or night, we are on our toes to serve our
                customers who are seeking a cab to the airport. We have multiple
                options available to choose from, so get what you want at
                competitive prices. So, book one-way cabs or two-way cabs as per
                your needs and requirements, and get the best cab service at
                your doorstep.
              </p>
              <label for="checkedd">Read Less</label>
            </div>
            <label for="checkedd">Read More</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;

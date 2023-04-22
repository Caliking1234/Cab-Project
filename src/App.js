import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingScreen/LandingPage";
import Login from "./components/LoginScreen/Login";
import Form from "./components/LandingScreen/Form";
import SignUp from "./components/SignupScreen/SignUp";
import { ThreeCircles } from "react-loader-spinner";
function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="placeLoader">
          <ThreeCircles
            height="100"
            width="100"
            color="white"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="three-circles-rotating"
            outerCircleColor=""
            innerCircleColor=""
            middleCircleColor=""
          />
        </div>
      ) : (
        <Router>
          <Routes>
            <Route path="/Cab-Project" element={<LandingPage />} exact />
            <Route path="/pricing" element={<h1>Pricing Page</h1>} />
            <Route path="/services" element={<h1>Services Page</h1>} />
            <Route path="/about" element={<h1>About Us Page</h1>} />
            <Route path="/contact" element={<h1>Contact US Page</h1>} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgotpassword" element={<h1>Forgot Password</h1>} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/form" element={<Form />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;

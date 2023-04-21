import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingScreen/LandingPage";
import Login from "./components/LoginScreen/Login";
import Form from "./components/LandingScreen/Form";
import SignUp from "./components/SignupScreen/SignUp";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} exact />
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
    </div>
  );
}

export default App;

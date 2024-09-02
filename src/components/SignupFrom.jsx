import { useState } from "react";
import "./LoginForm.css";
import { FaUser, FaLock } from "react-icons/fa";
import x from "../assets/home_illus.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3005/auth/register", {
        username: userName,
        mobile: number,
        password,
      });

      navigate("/login"); // Redirect to the dashboard or home page
    } catch (error) {
      setError("Invalid email or password");
    }
  };
  return (
    <div className="login-container">
      <div className="login-image">
        <img src={x} alt="photo" />
      </div>
      <div className="login-form-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <div className="input-group">
            <FaUser className="icon" />
            <input
              type="text"
              placeholder="Username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <FaUser className="icon" />
            <input
              type="text"
              placeholder="Mobile"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <FaLock className="icon" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <FaLock className="icon" />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Sign Up</button>
          <div className="register-link">
            <p>
              Already have an account?{" "}
              <a href="http://localhost:5173/logIn">Login</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;

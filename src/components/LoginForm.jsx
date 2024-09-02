/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useState } from "react";
import "./LoginForm.css";
import { FaUser, FaLock } from "react-icons/fa";
import x from "../assets/home_illus.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ setUser , setToken }) => {
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3005/auth/login", {
        mobile: number,
        password,
      });
      console.log(response.data);
      navigate("/dashboard"); // Redirect to the dashboard or home page
      const { token, username, mobile } = response.data;
      setToken(token) ;
      setUser({ token, username, mobile });
    } catch (error) {
      setError("Invalid mobile number or password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-image">
        <img src={x} alt="photo" />
      </div>
      <div className="login-form-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h1>Login</h1>
          {error && <div className="error-message">{error}</div>}
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
          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit">Login</button>
          <div className="register-link">
            <p>
              Don't have an account?{" "}
              <a href="http://localhost:5173/signUp">Register</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

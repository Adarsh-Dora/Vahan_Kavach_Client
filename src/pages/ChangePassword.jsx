import { useState } from "react";
import axios from "axios";
import "./changePassword.css";

// eslint-disable-next-line react/prop-types
const ChangePassword = ({token ,user}) => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  console.log(token) ;
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (newPassword !== confirmPassword) {
      setError("New password and confirm password do not match.");
      return;
    }

    try {
      await axios.post("http://localhost:3005/auth/changePassword", {
        // eslint-disable-next-line react/prop-types
        mobile : user.mobile ,
       password :  currentPassword,
        newPassword,
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setSuccess("Password changed successfully!");
    } catch (error) {
      setError("Error changing password. Please try again.");
    }
  };

  return (
    <div className="change-password-container">
      <h2>Change Password</h2>
      <form className="change-password-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="current-password">Current Password</label>
          <input
            type="password"
            id="current-password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="new-password">New Password</label>
          <input
            type="password"
            id="new-password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="confirm-password">Confirm New Password</label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
        <button type="submit" className="button">Change Password</button>
      </form>
    </div>
  );
};

export default ChangePassword;

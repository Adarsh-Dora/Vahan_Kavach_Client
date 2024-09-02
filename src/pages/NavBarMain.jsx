/* eslint-disable react/prop-types */
import { useState } from "react";
import "./DashBoard.css";
import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import userImage from "../assets/profile.jpeg";

const NavBarMain = ({ user, setUser }) => {
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [menuDropdownOpen, setMenuDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleUserDropdown = () => {
    setUserDropdownOpen(!userDropdownOpen);
  };

  const toggleMenuDropdown = () => {
    setMenuDropdownOpen(!menuDropdownOpen);
  };

  const handleMenuClick = (path) => {
    navigate(path);
    setMenuDropdownOpen(false);
  };

  const handleLogout = () => {
    // Clear user state and redirect to login
    setUser(null);
    navigate("/login");
  };

  return (
    <div className="navbar">
      <div className="menu-button" onClick={toggleMenuDropdown}>
        <FaBars />
      </div>
      {menuDropdownOpen && (
        <div className="menu-dropdown">
          <a onClick={() => handleMenuClick("/map")}>Location</a>
          <a onClick={() => handleMenuClick("/history")}>History</a>
         
          <a onClick={() => handleMenuClick("/add-contact")}>Add Contact</a>
          <a onClick={() => handleMenuClick("/change-password")}>
            Change Password
          </a>
        </div>
      )}
      <div className="user-options">
        <img src={userImage} alt="User" onClick={toggleUserDropdown} />
        {userDropdownOpen && (
          <div className="user-dropdown">
            <p>{user?.username}</p>
            <a onClick={handleLogout}>Logout</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBarMain;

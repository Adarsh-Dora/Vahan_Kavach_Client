import styles from "./navBar.module.css";
import logo from "../assets/app_logo.png";
import { useNavigate } from "react-router-dom";
import "./DashBoard.css"

function NavBar() {
  const navigate = useNavigate();

  const navigateToSignup = () => {
    navigate("/signUp");
  };

  const navigateToLogIn = () => {
    navigate("/logIn");
  };

  return (
    <div className={styles.navbar}>
      <img src={logo} alt="logo" />

      <div>
        <button onClick={navigateToLogIn}>Login</button>
        <button onClick={navigateToSignup}>Sign Up</button>
      </div>
    </div>
  );
}

export default NavBar;

import styles from "./HomePage.module.css";
import NavBar from "./NavBar";
import car from "../assets/car-1.gif";

function HomePage() {
  return (
    <div className={styles.homepage}>
      <NavBar />
      <img src={car} alt="homepage" className={styles.img} />
    </div>
  );
}

export default HomePage;

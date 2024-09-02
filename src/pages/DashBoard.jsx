/* eslint-disable react/prop-types */
import NavBarMain from "./NavBarMain";
import "./DashBoard.css";
import CarStatusPage from "../components/CarStatusPage";

const Dashboard = ({ user, setUser }) => {
  return (
    <div className="dashboard-container">
      <NavBarMain user={user} setUser={setUser} />
      <div className="dashboard">
        <CarStatusPage />
      </div>
    </div>
  );
};

export default Dashboard;

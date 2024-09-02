import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import LoginForm from "./components/LoginForm.jsx";
import SignupForm from "./components/SignupFrom.jsx";
import Dashboard from "./pages/DashBoard.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import MapPage from "./pages/MapPage.jsx";
import ChangePassword  from  "./pages/ChangePassword.jsx"
import ContactForm from "./pages/ContactFrom.jsx";


const App = () => {
  const [user, setUser] = useState(null);
  const [token,setToken] = useState("");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm setUser={setUser}  setToken={setToken} />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route
          path="/dashboard"
          element={
            user ? <Dashboard user={user} setUser={setUser} /> : <HomePage />
          }
        />
        <Route path="/map" element={<MapPage />} />
        <Route path="/change-password" element={<ChangePassword token={token} user={user}/>}  />
        <Route path="/add-contact" element={<ContactForm user={user}/>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;

import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation";
import LoginPage from "./Pages/LoginPage";
import RegistrationPage from "./Pages/RegistrationPage";
import RegisterComplaint from "./Pages/RegisterComplaint";
import ComplaintDashboard from "./Pages/ComplaintDashboard";
import ProfilePage from "./Pages/ProfilePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function App() {
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const response = await axios.get("http://localhost:3000/user-role", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserRole(response.data.role);
      } catch (error) {
        console.error("Error fetching user role:", error);
      }
    };

    fetchUserRole();
  }, []);

  return (
    <BrowserRouter>
      <Navigation userRole={userRole} />
      <Routes>
        <Route path="/" element={<RegistrationPage />} />
        <Route path="/sign-up" element={<RegistrationPage />} />
        <Route path="/sign-in" element={<LoginPage />} />
        {/* {userRole === "student" && ( */}
          <Route path="/register-complaint" element={<RegisterComplaint />} />
        {/* // )}
        {(userRole === "warden" || userRole === "admin") && ( */}
          <Route path="/complaint-dashboard" element={<ComplaintDashboard />} />
        // )}
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
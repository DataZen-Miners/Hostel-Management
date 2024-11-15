import React, { useState } from "react";
import Register from "../Components/Register";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    password: "",
    role: "student", // Default role to student
    rollNumber: "",
    hostel: "",
    roomNumber: "",
    confirmPassword: ""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/register", formData);
      if (response.data.jwtToken) {
        navigate("/sign-in");
      }
    } catch (error) {
      console.error("Registration error:", error.response.data);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-blue-100 flex items-center justify-center px-8 py-12">
      <div className="bg-white rounded-lg shadow-2xl p-10 w-full max-w-lg flex-1 ml-12">
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Get Started</h2>
          <p className="text-gray-600">Create your account now!</p>
        </div>
        <div className="mb-6 border-t border-gray-200"></div>
        <form onSubmit={handleSubmit}>
          <Register handleChange={handleChange} formData={formData} />
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600 mt-4">
              Already have an account?{" "}
              <Link to="/sign-in" className="text-blue-500 hover:underline">
                Login Here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
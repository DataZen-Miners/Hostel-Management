import { useState } from "react";
import { Button, Checkbox, FloatingLabel, Label } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
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
      const response = await axios.post("http://localhost:3000/login", formData);
      if (response.data.jwtToken) {
        toast.success("Login successful!", {
          onClose: () => navigate("/register-complaint")
        });
      }
    } catch (error) {
      toast.error("Login failed. Please check your credentials.");
      console.error("Login error:", error.response.data);
    }
  };

  return (
    <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
      <div>
        <div className="mb-2 block">
          <FloatingLabel variant="outlined" label="Email" type="email" name="email" onChange={handleChange} required />
        </div>
      </div>
      <div>
        <div className="mb-2 block">
          <FloatingLabel variant="outlined" label="Password" type="password" name="password" onChange={handleChange} required />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Accept the terms and conditions</Label>
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Login;
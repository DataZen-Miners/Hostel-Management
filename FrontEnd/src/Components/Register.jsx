import { useState } from "react";
import { FloatingLabel, Label, Select, Checkbox, Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = ({ handleChange, formData }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const navigate = useNavigate();

  const handleValidation = () => {
    // Reset errors
    setPhoneNumberError('');
    setErrorMessage('');
    setEmailError('');

    // Custom email validation for the pattern "name.name@iiits.in"
    const emailPattern = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*@iiits\.in$/;
    if (!formData.email.match(emailPattern)) {
      setEmailError('Please use your COLLEGE MAIL');
      return false;
    }

    // Password validation
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return false;
    }

    if (formData.password.length < 6) {
      setErrorMessage('Password must be at least 6 characters.');
      return false;
    }

    if (formData.contact.length !== 10) {
      setPhoneNumberError('Invalid Phone Number');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (handleValidation()) {
      try {
        const response = await axios.post("http://localhost:3000/register", formData);
        if (response.data.jwtToken) {
          navigate("/sign-in");
        }
      } catch (error) {
        console.error("Registration error:", error.response.data);
      }
    }
  };

  return (
    <>
      <div className="flex gap-4">
        {/* Name Field */}
        <div className="flex-1">
          <div className="mb-2 block">
            <FloatingLabel variant="outlined" label="Name" type="text" name="name" onChange={handleChange} required />
          </div>
        </div>

        {/* Roll Number Field */}
        <div className="flex-1">
          <div className="mb-2 block">
            <FloatingLabel variant="outlined" label="Roll Number" type="text" name="rollNumber" onChange={handleChange} required />
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        {/* Email Field */}
        <div className="flex-1">
          <div className="mb-2 block">
            <FloatingLabel variant="outlined" label="Email" type="email" name="email" onChange={handleChange} required />
            {emailError && <p className="text-red-500">{emailError}</p>}
          </div>
        </div>

        {/* Phone Number Field */}
        <div className="flex-1">
          <div className="mb-2 block">
            <FloatingLabel variant="outlined" label="Phone Number" type="phone" name="contact" onChange={handleChange} required />
            {phoneNumberError && <p className="text-red-500">{phoneNumberError}</p>}
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        {/* Password */}
        <div className="flex-1">
          <div className="mb-2 block">
            <FloatingLabel variant="outlined" label="Password" type="password" name="password" onChange={handleChange} required />
          </div>
        </div>

        {/* Confirm Password */}
        <div className="flex-1">
          <div className="mb-2 block">
            <FloatingLabel variant="outlined" label="Confirm Password" type="password" name="confirmPassword" onChange={handleChange} required />
            {errorMessage && (<p className="text-red-500">{errorMessage}</p>)}
          </div>
        </div>
      </div>

      {/* Drop Down Field For hostel */}
      <div className="flex gap-4">
        <div className="flex-1">
          <Select id="hostels" name="hostel" onChange={handleChange} required>
            <option value="">Your Hostel</option>
            <option value="BH1">BH1</option>
            <option value="BH2">BH2</option>
            <option value="BH3">BH3</option>
            <option value="BH4">BH4</option>
            <option value="B3 (Girls Hostel)">B3 (Girls Hostel)</option>
          </Select>
        </div>

        <div className="flex-1">
          <div className="mb-2 block">
            <FloatingLabel variant="outlined" label="Room Number" type="text" name="roomNumber" onChange={handleChange} required />
          </div>
        </div>
      </div>

      <div className="flex max-w-md flex-col gap-4" id="checkbox">
        <div className="flex items-center gap-2">
          <Checkbox id="accept" defaultChecked />
          <Label htmlFor="accept" className="flex">
            I agree with the&nbsp;
            <a href="#" className="text-cyan-600 hover:underline dark:text-cyan-500">
              terms and conditions
            </a>
          </Label>
        </div>
      </div>
      <div>&nbsp;</div>
      {/* Submit Button */}
      <Button type="submit" className="align-middle" onClick={handleSubmit}>Register</Button>
    </>
  );
};

export default Register;
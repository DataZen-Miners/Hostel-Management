import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';  // Make sure to style appropriately

const Register = () => {
  const [name, setName] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [hostel, setHostel] = useState('');
  const [roomNumber, setRoomNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [PhoneNumberError, invalidPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset errors
    invalidPhoneNumber('');
    setErrorMessage('');
    setEmailError('');

    // Custom email validation for the pattern "name.name@iiits.in"
    const emailPattern = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*@iiits\.in$/;
    if (!email.match(emailPattern)) {
      setEmailError('Please use your COLLEGE MAIL');
    }

    // Password validation
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters.');
      return;
    }

    if(phoneNumber.length !== 10){
        invalidPhoneNumber('Invalid Phone Number');
        return;
    }
    // Submit logic (for now, log the values)
    console.log({
      name,
      rollNumber,
      email,
      phoneNumber,
      password,
      hostel,
      roomNumber
    });
  };

  return (
    <div className="register-container">
      <form className="row g-3 register-form" onSubmit={handleSubmit}>

      <p className="h4">Get Started</p>
                <div id="RegisterNow" className="form-text">
                    Create your Account Now
                </div>

        {/* Name Field */}
        <div className="col-md-6">
          <label htmlFor="inputName" className="form-label">Name</label>
          <input 
            type="text" 
            className="form-control" 
            id="inputName" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>

        {/* Roll Number Field */}
        <div className="col-md-6">
          <label htmlFor="inputRollNumber" className="form-label">Roll Number</label>
          <input 
            type="text" 
            className="form-control" 
            id="inputRollNumber" 
            value={rollNumber} 
            onChange={(e) => setRollNumber(e.target.value)} 
            required 
          />
        </div>

        {/* Email Field */}
        <div className="col-md-6">
          <label htmlFor="inputEmail" className="form-label">Email</label>
          <input 
            type="email" 
            className="form-control" 
            id="inputEmail" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          {emailError && <p className="text-danger">{emailError}</p>}
        </div>

        {/* Phone Number Field */}
        <div className="col-md-6">
          <label htmlFor="inputPhoneNumber" className="form-label">Phone Number</label>
          <input 
            type="tel" 
            className="form-control" 
            id="inputPhoneNumber" 
            value={phoneNumber} 
            onChange={(e) => setPhoneNumber(e.target.value)} 
            required 
          />
          {PhoneNumberError && (
          <div className="col-12">
            <p className="text-danger">{PhoneNumberError}</p>
          </div>
        )}
        </div>


        {/* Password Field */}
        <div className="col-md-6">
          <label htmlFor="inputPassword" className="form-label">Password</label>
          <input 
            type="password" 
            className="form-control" 
            id="inputPassword" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>

        {/* Confirm Password Field */}
        <div className="col-md-6">
          <label htmlFor="inputConfirmPassword" className="form-label">Confirm Password</label>
          <input 
            type="password" 
            className="form-control" 
            id="inputConfirmPassword" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            required 
          />
        </div>

        {/* Display Password Mismatch Error */}
        {errorMessage && (
          <div className="col-12">
            <p className="text-danger">{errorMessage}</p>
          </div>
        )}

        {/* Hostel Selection */}
        <div className="col-md-6">
          <label htmlFor="inputHostel" className="form-label">Hostel</label>
          <select 
            id="inputHostel" 
            className="form-select" 
            value={hostel} 
            onChange={(e) => setHostel(e.target.value)} 
            required
          >
            <option defaultValue>Select your Hostel</option>
            <option>BH1</option>
            <option>BH2</option>
            <option>BH3</option>
            <option>BH4</option>
            <option>B3 (Girls Hostel)</option>
          </select>
        </div>

        {/* Room Number */}
        <div className="col-md-6">
          <label htmlFor="inputRoomNumber" className="form-label">Room Number</label>
          <input 
            type="text" 
            className="form-control" 
            id="inputRoomNumber" 
            value={roomNumber} 
            onChange={(e) => setRoomNumber(e.target.value)} 
            required 
          />
        </div>

        {/* Confirmation Checkbox */}
        <div className="col-12">
          <div className="form-check">
            <input 
              className="form-check-input" 
              type="checkbox" 
              id="gridCheck" 
              required 
            />
            <label className="form-check-label" htmlFor="gridCheck">
              I confirm that the above details entered are true and correct.
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="col-12 d-grid">
          <button type="submit" className="btn btn-primary">REGISTER</button>
        </div>

        {/* Link to Login */}
        <div id="RegisterNow" className="form-text mt-3">
          Already have an account? <Link to="/sign-in">Login Here</Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
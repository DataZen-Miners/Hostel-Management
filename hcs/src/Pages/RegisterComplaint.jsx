import React, { useState } from 'react';

const RegisterComplaint = () => {
  const [name, setName] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [hostel, setHostel] = useState('');
  const [roomNumber, setRoomNumber] = useState('');
  const [category, setCategory] = useState('');
  const [priority, setPriority] = useState('');
  const [complaint, setComplaint] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset errors
    setPhoneNumberError('');
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

    if (phoneNumber.length !== 10) {
      setPhoneNumberError('Invalid Phone Number');
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
      roomNumber,
      category,
      priority,
      complaint,
    });
  };

  return (
    <div className="register-container">
      <form className="row g-3 register-form" onSubmit={handleSubmit}>
        <p className="h1">Register Complaint</p>
        <div id="RegisterNow" className="form-text">
          Register Your Complaint Here
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
          {phoneNumberError && <p className="text-danger">{phoneNumberError}</p>}
        </div>

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

        {/* Complaint Category */}
        <div className="col-md-6">
          <label htmlFor="inputCategory" className="form-label">Category</label>
          <select 
            id="inputCategory" 
            className="form-select" 
            value={category} 
            onChange={(e) => setCategory(e.target.value)} 
            required
          >
            <option defaultValue>Complaint Category</option>
            <option>Room Maintenance</option>
            <option>Washroom Facilities</option>
            <option>Laundry Facilities</option>
            <option>Mess and Food</option>
            <option>Internet/Wi-Fi</option>
            <option>Lift/Elevator</option>
            <option>Other</option>
          </select>
        </div>

        {/* Complaint Priority */}
        <div className="col-md-6">
          <label htmlFor="inputPriority" className="form-label">Priority</label>
          <select 
            id="inputPriority" 
            className="form-select" 
            value={priority} 
            onChange={(e) => setPriority(e.target.value)} 
            required
          >
            <option defaultValue>Priority</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>

        {/* Complaint Description */}
        <div className="col-12">
          <label htmlFor="inputComplaint" className="form-label">Complaint</label>
          <textarea 
            id="inputComplaint" 
            className="form-control" 
            rows="4" 
            value={complaint} 
            onChange={(e) => setComplaint(e.target.value)} 
            required
            placeholder="Describe your complaint here..."
          />
        </div>

        {/* Submit Button */}
        <div className="col-12 d-grid">
          <button type="submit" className="btn btn-primary">Submit Complaint</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterComplaint;

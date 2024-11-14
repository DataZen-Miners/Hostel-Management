import { useState } from "react";
import { Button, FloatingLabel, Label, Select, Checkbox} from "flowbite-react";

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
    <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex gap-4">
            {/* Name Field */}
            <div className="flex-1">
              <div className="mb-2 block">
                <FloatingLabel variant="outlined" label="Name" type="text"  onChange={(e) => setName(e.target.value)} required />
              </div>
            </div>
            
            {/* Roll Number Field */}
            <div className="flex-1">
              <div className="mb-2 block">
                <FloatingLabel variant="outlined" label="Roll Number" type="text" onChange={(e) => setRollNumber(e.target.value)} required />
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            {/* Email Field */}
            <div className="flex-1">
              <div className="mb-2 block">
                <FloatingLabel variant="outlined" label="Email" type="email" onChange={(e) => setEmail(e.target.value)} required />
                {emailError && <p className="text-red-500">{emailError}</p>}
              </div>
            </div>

            {/* Phone Number Field */}
            <div className="flex-1">
              <div className="mb-2 block">
                <FloatingLabel variant="outlined" label="Phone Number" type="phone" onChange={(e) => setPhoneNumber(e.target.value)} required />
                {PhoneNumberError && <p className="text-red-500">{PhoneNumberError}</p>}
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            {/* Password */}
            <div className="flex-1">
              <div className="mb-2 block">
                <FloatingLabel variant="outlined" label="Password" type="password" onChange={(e) => setPassword(e.target.value)} required />
              </div>
            </div>

            {/* Confirm Password*/}
            <div className="flex-1">
              <div className="mb-2 block">
                <FloatingLabel variant="outlined" label="Confirm Password" type="password" onChange={(e) => setConfirmPassword(e.target.value)} required />
                {errorMessage && (<p className="text-red-500">{errorMessage}</p>)}
              </div>
            </div>
            </div>

          {/*Drop Down Field For hostel*/}
          <div className="flex gap-4">
              <div className="flex-1">
              <Select id="hostels" onChange={(e) => setHostel(e.target.value)} required>
              <option>Your Hostel</option>
              <option>BH1</option>
              <option>BH2</option>
              <option>BH3</option>
              <option>BH4</option>
              <option>B3 (Girls Hostel)</option>
              </Select>
              </div>

              <div className="flex-1">
            <div className="mb-2 block">
              <FloatingLabel variant="outlined" label="Room Number" type="text" onChange={(e) => setRoomNumber(e.target.value)} required />
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
                <div className="flex items-center gap-2">
                  <Checkbox id="age" />
                  <Label htmlFor="age">I am 18 years or older</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="promotion" />
                  <Label htmlFor="promotion">I hereby confirm that the details entered are true and correct.</Label>
                </div>
              </div>

          {/* Submit Button */}
          <Button type="submit">Register</Button>
    </form>
  )
}

export default Register
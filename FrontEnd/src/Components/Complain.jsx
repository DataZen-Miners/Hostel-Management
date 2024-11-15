import { useState } from "react";
import { Button, FloatingLabel, Textarea, Label, Select } from "flowbite-react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Complain = () => {
  const [formData, setFormData] = useState({
    name: "",
    rollNumber: "",
    email: "",
    contact: "",
    hostel: "",
    roomNumber: "",
    category: "",
    priority: "",
    complaint: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/complaints", formData);
      if (response.status === 200) {
        toast.success("Complaint registered successfully!", {
          onClose: async () => {
            try {
              await axios.post("http://localhost:3000/send-email", { 
                email: formData.email, 
                complaintId: response.data._id,
                username: formData.name,
                description: formData.complaint
              });
            } catch (emailError) {
              console.error("Error sending email:", emailError);
            }
          }
        });
      }
    } catch (error) {
      toast.error("Failed to register complaint. Please try again.");
      console.error("Complaint registration error:", error.response.data);
    }
  };

  return (
    <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
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
          </div>
        </div>

        {/* Phone Number Field */}
        <div className="flex-1">
          <div className="mb-2 block">
            <FloatingLabel variant="outlined" label="Phone Number" type="phone" name="contact" onChange={handleChange} required />
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

      <div className="flex gap-4">
        <div className="flex-1">
          <Select id="complaint" name="category" onChange={handleChange} required>
            <option value="">Complaint Category</option>
            <option value="Room Maintenance">Room Maintenance</option>
            <option value="Washroom Facilities">Washroom Facilities</option>
            <option value="Laundry Facilities">Laundry Facilities</option>
            <option value="Mess and Food">Mess and Food</option>
            <option value="Internet/Wi-Fi">Internet/Wi-Fi</option>
            <option value="Lift/Elevator">Lift/Elevator</option>
            <option value="Other">Other</option>
          </Select>
        </div>

        <div className="flex-1">
          <Select id="priority" name="priority" onChange={handleChange} required>
            <option value="">Priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </Select>
        </div>
      </div>

      {/* Complaint Box */}
      <div className="max-w-md">
        <div className="mb-2 block">
          <Label htmlFor="comment" value="Your Issue" />
        </div>
        <Textarea
          id="comment"
          name="complaint"
          placeholder="Explain the Issue you are facing..."
          onChange={handleChange}
          required
          rows={4}
        />
      </div>

      {/* Submit Button */}
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Complain;
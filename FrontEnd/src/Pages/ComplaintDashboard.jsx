import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Select } from "flowbite-react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ComplaintDashboard = () => {
  const [complaints, setComplaints] = useState([]);
  const [filteredComplaints, setFilteredComplaints] = useState([]);
  const [hostelFilter, setHostelFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const response = await axios.get("http://localhost:3000/complaints", {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        });
        setComplaints(response.data);
        setFilteredComplaints(response.data);
      } catch (error) {
        console.error("Error fetching complaints:", error);
      }
    };

    fetchComplaints();
  }, []);

  const handleHostelFilterChange = (e) => {
    setHostelFilter(e.target.value);
    filterComplaints(e.target.value, categoryFilter, statusFilter);
  };

  const handleCategoryFilterChange = (e) => {
    setCategoryFilter(e.target.value);
    filterComplaints(hostelFilter, e.target.value, statusFilter);
  };

  const handleStatusFilterChange = (e) => {
    setStatusFilter(e.target.value);
    filterComplaints(hostelFilter, categoryFilter, e.target.value);
  };

  const filterComplaints = (hostel, category, status) => {
    let filtered = complaints;
    if (hostel) {
      filtered = filtered.filter((complaint) => complaint.hostel === hostel);
    }
    if (category) {
      filtered = filtered.filter((complaint) => complaint.category === category);
    }
    if (status) {
      filtered = filtered.filter((complaint) => complaint.status === status);
    }
    setFilteredComplaints(filtered);
  };

  const handleStatusChange = async (id, status) => {
    try {
      await axios.put(`http://localhost:3000/complaints/${id}`, { status }, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      toast.success("Complaint status updated successfully!");
      setComplaints((prevComplaints) =>
        prevComplaints.map((complaint) =>
          complaint._id === id ? { ...complaint, status } : complaint
        )
      );
      setFilteredComplaints((prevComplaints) =>
        prevComplaints.map((complaint) =>
          complaint._id === id ? { ...complaint, status } : complaint
        )
      );
    } catch (error) {
      console.error("Error updating complaint status:", error);
      toast.error("Failed to update complaint status.");
    }
  };

  const handleDeleteComplaint = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/complaints/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      toast.success("Complaint deleted successfully!");
      setComplaints((prevComplaints) =>
        prevComplaints.filter((complaint) => complaint._id !== id)
      );
      setFilteredComplaints((prevComplaints) =>
        prevComplaints.filter((complaint) => complaint._id !== id)
      );
    } catch (error) {
      console.error("Error deleting complaint:", error);
      toast.error("Failed to delete complaint.");
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Open":
        return "bg-red-400 text-white";
      case "In Progress":
        return "bg-yellow-200 text-black";
      case "Resolved":
        return "bg-green-400 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };
  

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-blue-100 flex flex-col items-center justify-center px-8 py-12">
      <div className="bg-white rounded-lg shadow-2xl p-10 w-full max-w-4xl flex-1 ml-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-3">Complaint Dashboard</h2>
        <div className="flex gap-4 mb-6">
          <Select id="hostelFilter" value={hostelFilter} onChange={handleHostelFilterChange}>
            <option value="">All Hostels</option>
            <option value="BH1">BH1</option>
            <option value="BH2">BH2</option>
            <option value="BH3">BH3</option>
            <option value="BH4">BH4</option>
            <option value="B3 (Girls Hostel)">B3 (Girls Hostel)</option>
          </Select>
          <Select id="categoryFilter" value={categoryFilter} onChange={handleCategoryFilterChange}>
            <option value="">All Categories</option>
            <option value="Room Maintenance">Room Maintenance</option>
            <option value="Washroom Facilities">Washroom Facilities</option>
            <option value="Laundry Facilities">Laundry Facilities</option>
            <option value="Mess and Food">Mess and Food</option>
            <option value="Internet/Wi-Fi">Internet/Wi-Fi</option>
            <option value="Lift/Elevator">Lift/Elevator</option>
            <option value="Other">Other</option>
          </Select>
          <Select id="statusFilter" value={statusFilter} onChange={handleStatusFilterChange}>
            <option value="">All Statuses</option>
            <option value="Open">Open</option>
            <option value="In Progress">In Progress</option>
            <option value="Resolved">Resolved</option>
          </Select>
        </div>
        <div className="grid grid-cols-1 gap-6">
          {filteredComplaints.map((complaint) => (
            <div key={complaint._id} className={`rounded-lg shadow-md p-6 ${getStatusColor(complaint.status)}`}>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">{complaint.hostel} - {complaint.category}</h3>
                <div>
                  <Button
                    size="sm"
                    color="red"
                    onClick={() => handleDeleteComplaint(complaint._id)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
              <p><strong>Date Registered:</strong> {new Date(complaint.date).toLocaleDateString()}</p>
              {complaint.status === "Resolved" && (
                <p><strong>Completion Date:</strong> {new Date(complaint.completionDate).toLocaleDateString()}</p>
              )}
              <p><strong>Description:</strong> {complaint.complaint}</p>
              <div className="mt-4">
                <Select
                  id="status"
                  value={complaint.status}
                  onChange={(e) => handleStatusChange(complaint._id, e.target.value)}
                >
                  <option value="Open">Open</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Resolved">Resolved</option>
                </Select>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComplaintDashboard;
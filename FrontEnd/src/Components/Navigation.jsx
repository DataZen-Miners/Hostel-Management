import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Navigation = ({ userRole }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("token"));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/sign-in");
  };

  return (
    <Navbar className="bg-gradient-to-r from-blue-50 via-white to-blue-100">
      <NavbarBrand>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Hostel Complaint
        </span>
      </NavbarBrand>
      <div className="flex md:order-4">
        {!isLoggedIn ? (
          <Link to="/sign-up">
            <Button>Join Now!</Button>
          </Link>
        ) : (
          <Button onClick={handleLogout}>Logout</Button>
        )}
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href="/" active>
          Home
        </NavbarLink>
        <NavbarLink href="#">About Us</NavbarLink>
        {isLoggedIn && userRole === "student" && (
          <NavbarLink href="/register-complaint">Register Complaint</NavbarLink>
        )}
        {/* {isLoggedIn && (userRole === "warden" || userRole === "admin") && ( */}
          <NavbarLink href="/complaint-dashboard">Complaint Dashboard</NavbarLink>
        {/* )} */}
        {isLoggedIn && (
          <NavbarLink href="/profile">View Profile</NavbarLink>
        )}
      </NavbarCollapse>
    </Navbar>
  );
};

export default Navigation;
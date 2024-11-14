import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar className="bg-gradient-to-r from-blue-50 via-white to-blue-100">
    <NavbarBrand>
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        Hostel Complaint
      </span>
    </NavbarBrand>
    <div className="flex md:order-4">
      <Link to="/sign-up">
        <Button>Join Now!</Button>
      </Link>
      <NavbarToggle />
    </div>
    <NavbarCollapse>
      <NavbarLink href="/" active>
        Home
      </NavbarLink>
      <NavbarLink href="#">About Us</NavbarLink>
      <Link to="/register-complaint">
        <NavbarLink>Register Complaint</NavbarLink>
      </Link>
    </NavbarCollapse>
  </Navbar>
  )
}

export default Navigation

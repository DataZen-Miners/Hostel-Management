import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const links = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About Us",
      link: "/about-us",
    },
    {
      title: "Contact Us",
      link: "/contact-us",
    },
    {
      title: "All Books",
      link: "/all-books",
    },
  ];
  return (
    <div className="text-white my-5">
      <div className="container">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-semibold text-zinc-100">ComplaintEase</h2>
        <div className="flex flex-col md:flex-row">
          {links.map((items, i) => (
            <Link
              to={items.link}
              key={i}
              className="ms-4 text-zinc-300 hover:text-zinc-100"
            >
              {items.title}{" "}
            </Link>
          ))}
        </div>
      </div>
      <hr className="my-4" />
      <p className="text-center p-0 text-zinc-200">
        © 2024 ComplaintEase. All Rights Reserved.
      </p>
    </div>
      </div>
  );
};

export default Footer;
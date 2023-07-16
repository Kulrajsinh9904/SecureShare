import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" bg-[#3D00B7] h-16 flex items-center justify-between px-6 rounded-md">
      <div className="text-white text-2xl font-bold">SecureShare</div>
      <ul className="flex space-x-6">
        <li>
          <NavLink
            className="text-gray-300 hover:text-white"
            activeClassName="text-white"
            to="#home"
            offset={-70}
            duration={500}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className="text-gray-300 hover:text-white"
            activeClassName="text-white"
            to="about"
            offset={-70}
            duration={500}
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            className="text-gray-300 hover:text-white"
            activeClassName="text-white"
            to="features"
            offset={-70}
            duration={500}
          >
            Features
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

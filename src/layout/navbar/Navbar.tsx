import React from "react";
import { NavLink } from "react-router-dom";
import { FONT, COLORS } from "../../constant/Constant";

import logo from "../../assets/navbar/Container (1).png";
import loginIcon from "../../assets/navbar/Icon (1).png";
import registerIcon from "../../assets/navbar/Icon (2).png";
import searchicon from"../../assets/navbar/search icon.png";
const Navbar: React.FC = () => {
  const activeClass =
    "bg-white text-blue-600 font-semibold rounded-xl px-2 py-1 flex items-center gap-2";

  const normalClass =
    "hover:text-blue-600 flex items-center gap-2 px-2 py-1 rounded-xl";

  return (
    <div
      className=" border border-gray-200 bg-white p-4 flex flex-nowrap  gap-6 overflow-x-auto scrollbar-hide "
      // bg-gray-200 py-3 px-8 m-6 rounded-2xl md:rounded-full w-auto flex flex-nowrap gap-6 overflow-x-auto scrollbar-hide "
      style={{ fontFamily: FONT.f1 }}>
      <div className="flex items-center gap-3">
        <img src={logo} alt="logo"  />
        <span className="font-semibold text-lg">City Central Library</span>
      </div>
    <div>
      <img src={searchicon} alt=""  className="h-5 w-5"/>
    </div>
  <div className="flex gap-4 items-center flex  crollbar-hide ">
        <NavLink to="/" className={({ isActive }) => (isActive ? activeClass : normalClass)}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? activeClass : normalClass)}>About Us</NavLink>
        <NavLink to="/collection" className={({ isActive }) => (isActive ? activeClass : normalClass)}>Collections</NavLink>
        <NavLink to="/services" className={({ isActive }) => (isActive ? activeClass : normalClass)}>Services</NavLink>
        <NavLink to="/event" className={({ isActive }) => (isActive ? activeClass : normalClass)}>Events</NavLink>
        <NavLink to="/membership" className={({ isActive }) => (isActive ? activeClass : normalClass)}>Membership</NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? activeClass : normalClass)}>Contact</NavLink>

        <NavLink to="/login" className={({ isActive }) => (isActive ? activeClass : normalClass)}>
          <img src={loginIcon} className="h-4" />
          Login
        </NavLink>

        <NavLink to="/register" className={({ isActive }) => (isActive ? activeClass : normalClass)}
          style={{background: `linear-gradient(90deg, ${COLORS.header.h1} 0%, ${COLORS.header.h2} 50%)`,}}>
          <img src={registerIcon} className="h-4" />
          Register
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;

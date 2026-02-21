import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FONT, COLORS } from "../../constant/Constant";

import logo from "../../assets/navbar/Container (1).png";
import loginIcon from "../../assets/navbar/Icon (1).png";
import registerIcon from "../../assets/navbar/Icon (2).png";
import searchicon from "../../assets/navbar/search icon.png";
import Register from "../../models/regitermodal/registerpopup";
import Login from "../../models/loginmodal/loginpopup";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Collections", path: "/collection" },
    { label: "Services", path: "/services" },
    { label: "Events", path: "/event" },
    { label: "Membership", path: "/membership" },
    { label: "Contact", path: "/contact" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div
      className="sticky top-0 z-50 bg-white border-b border-gray-200"
      style={{ fontFamily: FONT.f1 }}
    >
      <div className="flex items-center justify-between px-4 lg:px-8 xl:px-10 py-0 h-[76px] gap-2 lg:gap-3">

        {/* Left Section — Logo */}
        <div
          className="flex items-center gap-2 flex-shrink-0 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src={logo} alt="logo" className="h-10 w-10 object-contain" />
          <span className="font-semibold text-[17px] text-gray-900 whitespace-nowrap">
            City Central Library
          </span>
        </div>

        {/* Search Bar — hidden on mobile */}
        <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-3 py-[8px] gap-2 w-[150px] xl:w-[190px] flex-shrink-0">
          <img src={searchicon} alt="search" className="h-[18px] w-[18px] opacity-50" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent text-[15px] text-gray-500 outline-none w-full placeholder-gray-400"
          />
        </div>

        {/* Center Nav Links */}
        <nav className="hidden lg:flex items-center gap-0 flex-1 justify-center min-w-0">
          {navLinks.map(({ label, path }) => {
            const isActive = location.pathname === path;
            return (
              <div
                key={path}
                onClick={() => navigate(path)}
                className="relative px-1.5 xl:px-2 py-[22px] cursor-pointer text-[13px] xl:text-[14px] whitespace-nowrap transition-colors duration-150"
                style={{
                  color: isActive ? "#6d28d9" : "#374151",
                  fontWeight: isActive ? 600 : 400,
                }}
              >
                {label}
                {isActive && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-[3px] rounded-t-full"
                    style={{
                      background: `linear-gradient(90deg, ${COLORS.header.h1} 0%, ${COLORS.header.h2} 100%)`,
                    }}
                  />
                )}
              </div>
            );
          })}
        </nav>

        {/* Right Section — Login + Register (desktop) + Hamburger (mobile/tablet) */}
        <div className="flex items-center gap-2 flex-shrink-0 ml-auto lg:ml-0">
          {/* Login — hidden on mobile/tablet */}
          <div
            className="hidden lg:flex items-center gap-1 xl:gap-1.5 text-[13px] xl:text-[15px] text-gray-700 cursor-pointer hover:text-purple-700 transition-colors duration-150 whitespace-nowrap px-1 xl:px-2"
            onClick={() => setShowLogin(true)}
          >
            <img src={loginIcon} alt="login" className="h-5 w-5" />
            <span>Login</span>
          </div>

          {/* Register — hidden on mobile/tablet */}
          <div
            onClick={() => setShowRegister(true)}
            className="hidden lg:flex items-center gap-1 xl:gap-1.5 text-[13px] xl:text-[15px] text-white cursor-pointer whitespace-nowrap px-3 xl:px-5 py-[7px] xl:py-[9px] rounded-full transition-opacity duration-150 hover:opacity-90"
            style={{
              background: `linear-gradient(90deg, ${COLORS.header.h1} 0%, ${COLORS.header.h2} 100%)`,
            }}
          >
            <img src={registerIcon} alt="register" className="h-5 w-5" />
            <span>Register</span>
          </div>

          {/* Hamburger — visible on mobile/tablet only */}
          <button
            className="lg:hidden flex flex-col justify-center items-center gap-[5px] w-9 h-9 rounded-lg hover:bg-gray-100 transition-colors duration-150 flex-shrink-0"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span
              className="block h-[2px] w-5 bg-gray-700 rounded-full transition-all duration-300"
              style={{
                transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none",
              }}
            />
            <span
              className="block h-[2px] w-5 bg-gray-700 rounded-full transition-all duration-300"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block h-[2px] w-5 bg-gray-700 rounded-full transition-all duration-300"
              style={{
                transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
              }}
            />
          </button>
        </div>

      </div>

      {/* Mobile/Tablet Dropdown Menu — only renders when toggled, hidden on lg+ */}
      {menuOpen && (
        <div className="block lg:hidden bg-white border-t border-gray-100 shadow-md px-6 py-4 flex flex-col gap-1">
          {/* Search bar inside mobile menu */}
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-[9px] gap-2 mb-2">
            <img src={searchicon} alt="search" className="h-[18px] w-[18px] opacity-50" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent text-[15px] text-gray-500 outline-none w-full placeholder-gray-400"
            />
          </div>
          {navLinks.map(({ label, path }) => {
            const isActive = location.pathname === path;
            return (
              <div
                key={path}
                onClick={() => { navigate(path); setMenuOpen(false); }}
                className="px-3 py-3 cursor-pointer text-[15px] rounded-lg transition-colors duration-150"
                style={{
                  color: isActive ? "#6d28d9" : "#374151",
                  fontWeight: isActive ? 600 : 400,
                  background: isActive ? "#f5f3ff" : "transparent",
                }}
              >
                {label}
              </div>
            );
          })}

          {/* Login & Register inside menu */}
          <div className="border-t border-gray-100 mt-2 pt-3 flex flex-col gap-2">
            <div
              className="flex items-center gap-2 px-3 py-3 cursor-pointer text-[15px] text-gray-700 hover:text-purple-700 rounded-lg hover:bg-gray-50 transition-colors duration-150"
              onClick={() => { setShowLogin(true); setMenuOpen(false); }}
            >
              <img src={loginIcon} alt="login" className="h-5 w-5" />
              <span>Login</span>
            </div>
            <div
              onClick={() => { setShowRegister(true); setMenuOpen(false); }}
              className="flex items-center gap-2 px-3 py-3 cursor-pointer text-[15px] text-white rounded-lg transition-opacity duration-150 hover:opacity-90"
              style={{
                background: `linear-gradient(90deg, ${COLORS.header.h1} 0%, ${COLORS.header.h2} 100%)`,
              }}
            >
              <img src={registerIcon} alt="register" className="h-5 w-5" />
              <span>Register</span>
            </div>
          </div>
        </div>
      )}

      {/* Modals */}
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
      {showRegister && <Register onClose={() => setShowRegister(false)} />}
    </div>
  );
};

export default Navbar;
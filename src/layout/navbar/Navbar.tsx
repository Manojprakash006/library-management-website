import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FONT, COLORS, FONTSIZE, FONTWEIGHT } from "../../constant/Constant";

import logo from "../../assets/navbar/Container (1).png";
import loginIcon from "../../assets/navbar/Icon (1).png";
import registerIcon from "../../assets/navbar/Icon (2).png";
import searchicon from "../../assets/navbar/search icon.png";
import Register from "../../models/registerpopup/registerForm";
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
      style={{ font: FONT.f1 }}
    >
      <div className="flex items-center justify-between px-4 lg:px-8 xl:px-10 py-3 gap-2 lg:gap-6">

        <div
          className="flex items-center gap-2 shrink-0 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src={logo} alt="logo" className="h-10 w-10 object-contain" />
          <span className={`font-semibold whitespace-nowrap ${FONTSIZE[16]} leading-7 bg-linear-to-r from-[#4F39F6] to-[#9810FA] bg-clip-text text-transparent`} style={{...FONTWEIGHT[700]}}>
            City Central Library
          </span>
        </div>

        <div className="hidden xl:flex items-center bg-gray-100 rounded-full px-3 py-2 gap-2 max-w-45 w-full shrink-0">
          <img src={searchicon} alt="search" className="h-4.5 w-4.5 opacity-50" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent text-[15px] text-gray-500 outline-none w-full placeholder-gray-400"
          />
        </div>

        <nav className="hidden xl:flex items-center gap-0 flex-1 justify-center min-w-0">
          {navLinks.map(({ label, path }) => {
            const isActive = location.pathname === path;
            return (
              <div
                key={path}
                onClick={() => navigate(path)}
                className={`relative px-1 xl:px-2 py-5.5 cursor-pointer ${FONTSIZE[14]} leading-5 whitespace-nowrap transition-colors duration-150`}
                style={{
                  color: isActive ? "#6d28d9" : "#364153",
                  fontWeight: isActive ? 700 : 400,
                }}
              >
                {label}
                {isActive && (
                  <span
                    className="absolute bottom-4 left-2 right-2 h-0.75 rounded-t-full"
                    style={{
                      background: `linear-gradient(90deg, ${COLORS.header.h1} 0%, ${COLORS.header.h2} 100%)`,
                    }}
                  />
                )}
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 shrink-0 ml-auto lg:ml-0">
          <div
            className="hidden xl:flex items-center gap-1 xl:gap-1.5 text-[13px] xl:text-[15px] text-gray-700 cursor-pointer hover:text-purple-700 transition-colors duration-150 whitespace-nowrap px-1 xl:px-2"
            onClick={() => setShowLogin(true)}
          >
            <img src={loginIcon} alt="login" className="h-5 w-5" />
            <span>Login</span>
          </div>

          <button
            onClick={() => setShowRegister(true)}
            className={`hidden xl:flex items-center gap-1 xl:gap-1.5 text-[13px] xl:text-[15px] text-white cursor-pointer shadow-[0px_10px_20px_-3px_rgba(198,210,255,0.9)]
                        whitespace-nowrap px-3 xl:px-5 py-1.75 xl:py-2.25 rounded-full transition-opacity duration-150 hover:opacity-90 `}
            style={{
              background: `linear-gradient(90deg, ${COLORS.header.h1} 0%, ${COLORS.header.h2} 100%)`,
            }}
          >
            <img src={registerIcon} alt="register" className="h-5 w-5" />
            <span>Register</span>
          </button>

          <button
            className="xl:hidden flex flex-col justify-center items-center gap-1.25 w-9 h-9 rounded-lg hover:bg-gray-100 transition-colors duration-150 shrink-0"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span
              className="block h-0.5 w-5 bg-gray-700 rounded-full transition-all duration-300"
              style={{
                transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none",
              }}
            />
            <span
              className="block h-0.5 w-5 bg-gray-700 rounded-full transition-all duration-300"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block h-0.5 w-5 bg-gray-700 rounded-full transition-all duration-300"
              style={{
                transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
              }}
            />
          </button>
        </div>

      </div>

      {menuOpen && (
        <div className=" xl:hidden bg-white border-t border-gray-100 shadow-md px-6 py-4 flex flex-col gap-1">
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2.25 gap-2 mb-2">
            <img src={searchicon} alt="search" className="h-4.5 w-4.5 opacity-50" />
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
              className={`flex items-center gap-2 px-3 py-3 cursor-pointer text-[15px] text-white rounded-lg transition-opacity duration-150 hover:opacity-90
                shadow-[0_6px_12px_-2px_rgba(198,210,255,0.8),0_12px_24px_-4px_rgba(198,210,255,0.9)]`}
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

      {showLogin && <Login onClose={() => setShowLogin(false)} />}
      {showRegister && <Register onClose={() => setShowRegister(false)} />}
    </div>
  );
};

export default Navbar;
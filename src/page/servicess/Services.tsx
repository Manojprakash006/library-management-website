import React from "react";
import { FONT, COLORS } from "../../constant/Constant";
import Footer from "../../layout/footer/Footer";
import {
  FaBookOpen,
  FaWifi,
  FaDesktop,
  FaCoffee,
  FaPrint,
  FaUsers,
  FaVideo,
  FaWheelchair,
} from "react-icons/fa";

const Services = () => {
  const facilities = [
    {
      icon: <FaBookOpen size={24} color="#4F39F6" />,
      title: "Reading Room",
      desc: "Spacious reading hall with 100+ comfortable seats, natural lighting, and air conditioning for a perfect reading environment.",
      bg: "#E0E7FF",
    },
    {
      icon: <FaWifi size={24} color="#155DFC" />,
      title: "Free Wi-Fi",
      desc: "High-speed wireless internet access available throughout the library for all members to use on their devices.",
      bg: "#DBEAFE",
    },
    {
      icon: <FaDesktop size={24} color="#00A63E" />,
      title: "Computer Lab",
      desc: "20 computers with latest software, internet access, and printing facilities available for member use.",
      bg: "#DCFCE7",
    },
    {
      icon: <FaCoffee size={24} color="#D97706" />,
      title: "Cafeteria",
      desc: "Small cafeteria serving tea, coffee, and light snacks. Provides a relaxing space for breaks between study sessions.",
      bg: "#FEF3C7",
    },
    {
      icon: <FaPrint size={24} color="#9810FA" />,
      title: "Printing & Scanning",
      desc: "Printing, photocopying, and scanning services available at minimal charges for all library members.",
      bg: "#F3E8FF",
    },
    {
      icon: <FaUsers size={24} color="#E60076" />,
      title: "Discussion Rooms",
      desc: "Bookable discussion rooms for group study, meetings, and collaborative projects with 6-8 person capacity.",
      bg: "#FCE7F3",
    },
    {
      icon: <FaVideo size={24} color="#CA8A04" />,
      title: "Audio-Visual Room",
      desc: "Equipped with projector and sound system for presentations, film screenings, and educational programs.",
      bg: "#FEF9C3",
    },
    {
      icon: <FaWheelchair size={24} color="#0D9488" />,
      title: "Accessibility Features",
      desc: "Wheelchair ramps, accessible restrooms, elevators, and reserved parking spaces for differently-abled visitors.",
      bg: "#CCFBF1",
    },
  ];

  return (
    <>
      {/* Header Section */}
      <div
        className="px-6 py-8 sm:px-10 sm:py-4 md:px-12"
        style={{ background: COLORS.services.header.bg }}
      >
        <h1
          className="text-2xl sm:text-3xl mb-2"
          style={{
            color: COLORS.services.header.text,
            fontFamily: FONT.f1,
          }}
        >
          Library Facilities
        </h1>

        <p
          className="text-sm sm:text-base"
          style={{
            color: COLORS.services.header.subText,
            fontFamily: FONT.f1,
          }}
        >
          Modern amenities designed to enhance your learning experience
        </p>
      </div>

      {/* Facilities Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 px-4 sm:px-8 md:px-12 py-8 sm:py-10"
        style={{ backgroundColor: COLORS.services.section.bg }}
      >
        {facilities.map((item, index) => (
          <div
            key={index}
            className="rounded-xl p-4 sm:p-6 flex items-start gap-3 sm:gap-4"
            style={{
              backgroundColor: COLORS.services.card.bg,
              border: `1px solid ${COLORS.services.card.border}`,
            }}
          >
            <div
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: item.bg }}
            >
              {item.icon}
            </div>

            <div>
              <h3
                className="text-sm sm:text-base mb-1"
                style={{
                  color: COLORS.services.card.title,
                  fontFamily: FONT.f1,
                  fontWeight: 600,
                }}
              >
                {item.title}
              </h3>

              <p
                className="text-xs sm:text-sm leading-relaxed"
                style={{
                  color: COLORS.services.card.desc,
                  fontFamily: FONT.f1,
                }}
              >
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Services */}
      <div className="px-4 sm:px-8 md:px-12 pb-10 sm:pb-12">
        <h2
          className="text-lg sm:text-xl mb-5 sm:mb-6"
          style={{
            color: COLORS.services.section.title,
            fontFamily: FONT.f1,
            fontWeight: 700,
          }}
        >
          Additional Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <div>
            <h4
              className="text-sm mb-1.5"
              style={{
                color: COLORS.services.card.title,
                fontFamily: FONT.f1,
                fontWeight: 600,
              }}
            >
              Book Reservation
            </h4>
            <p
              className="text-sm"
              style={{
                color: COLORS.services.card.desc,
                fontFamily: FONT.f1,
              }}
            >
              Reserve books online and collect them at your convenience.
            </p>
          </div>

          <div>
            <h4
              className="text-sm mb-1.5"
              style={{
                color: COLORS.services.card.title,
                fontFamily: FONT.f1,
                fontWeight: 600,
              }}
            >
              Inter-Library Loan
            </h4>
            <p
              className="text-sm"
              style={{
                color: COLORS.services.card.desc,
                fontFamily: FONT.f1,
              }}
            >
              Access books from partner libraries across the region.
            </p>
          </div>

          <div>
            <h4
              className="text-sm mb-1.5"
              style={{
                color: COLORS.services.card.title,
                fontFamily: FONT.f1,
                fontWeight: 600,
              }}
            >
              Reference Service
            </h4>
            <p
              className="text-sm"
              style={{
                color: COLORS.services.card.desc,
                fontFamily: FONT.f1,
              }}
            >
              Expert librarians available to assist with research queries.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Services;
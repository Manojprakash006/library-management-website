import React from "react";
import { FONT, COLORS, FONTWEIGHT, FONTSIZE } from "../../constant/Constant";
import searchicon from "../../assets/navbar/search icon.png";

import icon1 from "../../assets/home/Icon (1).png";
import icon2 from "../../assets/home/Icon (2).png";
import icon3 from "../../assets/home/Icon (3).png";
import Footer from "../../layout/footer/Footer";
import hoursIcon from "../../assets/aboutus/Hours Icon.png";
import locatioIcon from "../../assets/aboutus/Location Icon.png";
import DarklocationIcon from "../../assets/aboutus/location icon black.png";
import rightarrIcon from "../../assets/events/Right Arrow Icon.png";
import { useNavigate } from "react-router";
import { useState } from "react";
import Register from "../../models/registerpopup/registerForm";

const HomeAboutPage: React.FC = () => {

  const navigate = useNavigate();

  const HandleCollections = () => {
    navigate("/collection");
  }

  


const [showRegister, setShowRegister] = useState(false);

const HandleRegister = (e: any) => {
  e.preventDefault();
  setShowRegister(true);
};



  return (
    <>
      <div style={{ font: FONT.f1 }}>
        <div className="w-full flex flex-col items-center justify-center bg-linear-to-br from-[#f5f3ff] to-[#fff1f8] px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 text-center">
          <div className="bg-white shadow px-4 py-2 rounded-full text-xs sm:text-sm mb-6 sm:mb-8 flex items-center gap-2">
            <img src={icon1} alt="icon" className="h-3 w-3 sm:h-4 sm:w-4" />
            <span
              style={{ ...FONTWEIGHT[700] }}
              className={`${FONTSIZE[14]} leading-5 bg-linear-to-r from-[#4F39F6] to-[#9810FA] bg-clip-text text-transparent`}
            >
              Welcome to City Central Library
            </span>
          </div>

          <div className="space-y-2 sm:space-y-3 max-w-5xl mx-auto">
            <h1
              className=" sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight text-[#101828]"
              style={{ ...FONTWEIGHT[700] }}
            >
              Explore Thousands of{" "}
              <span
                style={{
                  background: `linear-gradient(90deg, ${COLORS.home.color.h1} 0%, ${COLORS.home.color.h2} 50%)`,
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Books
              </span>
            </h1>

            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
              style={{
                background: `linear-gradient(90deg, ${COLORS.home.color.h1} 0%, ${COLORS.home.color.h2} 50%)`,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              & Resources
            </h2>
          </div>

          <p className="text-gray-600 mt-6 sm:mt-8 max-w-2xl px-4 text-sm sm:text-base md:text-lg">
            Your gateway to knowledge with over{" "}
            <span className="text-[#4F39F6] font-semibold">10,000 books</span>,
            digital resources, and world-class facilities. Join our community
            today!
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 sm:mt-10 w-full sm:w-auto px-4">
            <button
              onClick={HandleCollections}
              className="w-full sm:w-auto px-6 py-2.5 sm:py-2 rounded-lg text-white hover:opacity-90 flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer"
              style={{
                background: `linear-gradient(90deg, ${COLORS.home.color.h1} 0%, ${COLORS.home.color.h2} 50%, ${COLORS.home.color.h3} 100%)`,
              }}
            >
              <img src={icon2} alt="icon" className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>Explore Collection →</span>
            </button>

            <button
              onClick={HandleRegister}
              className="w-full sm:w-auto px-6 py-2.5 sm:py-3 rounded-lg border border-[#C6D2FF] text-[#4F39F6] hover:bg-purple-50 flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer"
            >
              <img src={icon3} alt="icon" className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>Become a Member</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-12 w-full max-w-4xl px-4">
            <div className="bg-white shadow rounded-xl p-6 sm:p-8 text-center">
              <h3
                className={`text-2xl sm:text-3xl font-bold bg-linear-to-r from-[#615FFF] to-[#4F39F6] bg-clip-text text-transparent`}
              >
                10,000+
              </h3>
              <p
                className={`text-[#4A5565] text-sm sm:text-base mt-1 ${FONTSIZE[14]} leading-5`}
                style={{ ...FONTWEIGHT[700] }}
              >
                Books
              </p>
            </div>

            <div className="bg-white shadow rounded-xl p-6 sm:p-8 text-center">
              <h3 className="text-2xl sm:text-3xl font-bold bg-linear-to-r from-[#AD46FF] to-[#9810FA] bg-clip-text text-transparent">
                5,000+
              </h3>
              <p
                className={`text-[#4A5565] text-sm sm:text-base mt-1 ${FONTSIZE[14]} leading-5`}
                style={{ ...FONTWEIGHT[700] }}
              >
                Members
              </p>
            </div>

            <div className="bg-white shadow rounded-xl p-6 sm:p-8 text-center sm:col-span-2 lg:col-span-1">
              <h3 className="text-2xl sm:text-3xl font-bold bg-linear-to-r from-[#F6339A] to-[#E60076] bg-clip-text text-transparent">
                28+
              </h3>
              <p
                className={`text-[#4A5565] text-sm sm:text-base mt-1 ${FONTSIZE[14]} leading-5`}
                style={{ ...FONTWEIGHT[700] }}
              >
                Years
              </p>
            </div>
          </div>
        </div>

        <div className="w-full bg-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 justify-center items-center">
              <div className="flex flex-col justify-center">
                <div className="bg-[#EEF2FF] px-4 py-1 rounded-full text-xs sm:text-sm w-fit">
                  <span className=" bg-linear-to-r from-[#4F39F6] to-[#9810FA] bg-clip-text text-transparent ">
                    About Us
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4 text-gray-900">
                  Serving the Community
                </h1>

                <h2
                  className={`mt-6 py-2 rounded-lg w-fit ${FONTSIZE[26]} leading-10 bg-linear-to-r from-[#4F39F6] to-[#9810FA] bg-clip-text text-transparent`}
                  style={{ ...FONTWEIGHT[700] }}
                >
                  Since 2026
                </h2>

                <p className="text-gray-600 mt-4 text-sm sm:text-base leading-relaxed">
                  City Central Library has been a cornerstone of knowledge and
                  learning for over 28 years. We're dedicated to providing free
                  access to information, resources, and educational
                  opportunities for everyone.
                </p>

                <div className="flex items-start gap-4 mt-6">
                  <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center shrink-0">
                    <img
                      src="src/assets/aboutus/Container (1).png"
                      alt=""
                      className="w-8 h-8"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg">
                      Our Mission
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      To promote literacy and lifelong learning through
                      accessible resources and community engagement.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 mt-4">
                  <div className="w-10 h-10 bg-pink-100 rounded-xl flex items-center justify-center shrink-0">
                    <img
                      src="src/assets/aboutus/Container (2).png"
                      alt=""
                      className="w-8 h-8"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg">
                      Our Vision
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      To be the leading community library, fostering innovation
                      and knowledge in the digital age.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => navigate("/about")}
                  className="mt-6 sm:mt-8 px-6 py-2.5 cursor-pointer text-white rounded-lg w-fit text-sm sm:text-base"
                  style={{
                    background: `linear-gradient(90deg, ${COLORS.home.color.h1} 0%, ${COLORS.home.color.h2} 50%)`,
                  }}
                >
                  Learn More About Us →
                </button>
              </div>

              <div className="flex flex-col gap-6 mt-8 lg:mt-0">
                <div className="border border-gray-200 rounded-xl p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-purple-600 text-white rounded-lg flex items-center justify-center shrink-0">
                      <img
                        src={hoursIcon}
                        alt="Hours Icon"
                        className="w-6 h-6"
                      />
                    </div>
                    <h3 className="font-semibold text-base sm:text-lg">
                      Opening Hours
                    </h3>
                  </div>

                  <div className="space-y-3 text-sm sm:text-base text-gray-600">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="font-semibold text-[#101828]">
                        9:00 AM - 8:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday - Sunday</span>
                      <span className="font-semibold text-[#101828]">
                        10:00 AM - 6:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Public Holidays</span>
                      <span className="text-red-600">Closed</span>
                    </div>
                  </div>
                </div>

                <div className="border flex gap-3 items-start border-gray-200 rounded-xl p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-pink-500 text-white rounded-lg flex items-center justify-center shrink-0">
                      <img src={locatioIcon} alt="" className="w-6 h-6" />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-base sm:text-lg">
                      Location
                    </h3>

                    <p className="text-gray-600 text-sm sm:text-base">
                      123 Library Street City Center, State - 600001 India
                    </p>

                    <button className="mt-4 px-4 py-2 border cursor-pointer flex gap-2 border-[#0000001A] rounded-lg text-sm w-fit hover:bg-gray-50 transition">
                      <img
                        src={DarklocationIcon}
                        alt="Location icon"
                        className="w-4 h-4 "
                      />
                      Get Directions
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-blue-50 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 flex-col items-center flex text-center">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <div className="p-2 bg-[#FFFFFF] rounded-2xl shadow-2xl w-fit">
              <span
                className={`${FONTSIZE[14]} leading-5 items-center bg-linear-to-r from-[#4F39F6] to-[#9810FA] bg-clip-text text-transparent`}
                style={{ ...FONTWEIGHT[700] }}
              >
                Quick Search
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4 leading-tight">
              Find Your <span className="text-purple-600">Perfect Book</span>
            </h2>

            <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-sm sm:text-base px-4">
              Search through our extensive collection by book name, author,
              category, or ISBN
            </p>
          </div>
          <div className="bg-white border flex flex-col gap-3 border-gray-200 w-[80%] rounded-xl mt-8 mx-4 sm:mx-6 p-4 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3 bg-gray-100 border border-gray-200 rounded-lg px-4 py-2.5 sm:py-3">
              <img
                src={searchicon}
                alt=""
                className="h-4 w-4 sm:h-5 sm:w-5 shrink-0"
              />
              <input
                type="text"
                placeholder="Search by book name, author, category, or ISBN..."
                className="w-full bg-transparent text-sm sm:text-base outline-none"
              />
            </div>

            <div className="flex flex-wrap gap-2 mt-4 items-center text-xs sm:text-sm">
              <span className="px-3 py-1 text-purple-800 whitespace-nowrap">
                Quick Filter :
              </span>
              <span className="px-3 py-1 border border-gray-300 rounded-full whitespace-nowrap hover:bg-gray-50 cursor-pointer transition">
                Available
              </span>
              <span className="px-3 py-1 border border-gray-300 rounded-full whitespace-nowrap hover:bg-gray-50 cursor-pointer transition">
                New Arrivals
              </span>
              <span className="px-3 py-1 border border-gray-300 rounded-full whitespace-nowrap hover:bg-gray-50 cursor-pointer transition">
                Popular
              </span>
              <span className="px-3 py-1 border border-gray-300 rounded-full whitespace-nowrap hover:bg-gray-50 cursor-pointer transition">
                Best Sellers
              </span>
            </div>

            <button
              className="w-full mt-6 py-2.5 sm:py-3 cursor-pointer rounded-lg text-white flex items-center justify-center gap-2 text-sm sm:text-base hover:opacity-90 transition"
              style={{
                background: `linear-gradient(90deg, ${COLORS.home.color.h1} 0%, ${COLORS.home.color.h2} 100%)`,
              }}
            >
              <img src={searchicon} alt="" className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>Search Collections</span>
            </button>
          </div>
        </div>

        <div className="w-full bg-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 text-center">
          <div className="max-w-7xl mx-auto">
            <div className=" sm:mb-10 lg:mb-12 flex flex-col items-start gap-2">
              <div className="w-fit bg-linear-to-r from-[#FAF5FF] to-[#FDF2F8] p-2 gap-2.5 rounded-2xl">
                <span
                  className={`bg-linear-to-r from-[#9810FA] to-[#E60076] bg-clip-text text-transparent ${FONTSIZE[14]} leading-5 `}
                  style={{ ...FONTWEIGHT[700] }}
                >
                  Featured Collections
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4">
                Discover Our{" "}
                <span className="text-purple-600">Collections</span>
              </h2>
              <p className="text-gray-500 mt-2 text-sm sm:text-base">
                Carefully curated collections to suit every reader
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="border border-gray-300 rounded-xl overflow-hidden shadow-2xl">
                <div className="h-2 bg-orange-500"></div>
                <div className="bg-white p-4 sm:p-6">
                  <div className="flex gap-3 sm:gap-4">
                    <img
                      src="src/assets/collection/EnhancedLandingPage.png"
                      alt=""
                      className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
                    />
                    <div className="text-left">
                      <h3 className="font-semibold text-base sm:text-lg">
                        New Arrivals
                      </h3>
                      <p className="text-gray-500 text-xs sm:text-sm">
                        Latest additions to our collection
                      </p>
                      <span className="inline-block mt-2 px-2.5 py-1 text-xs border border-gray-200 rounded-full">
                        250+ books
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-gray-300 rounded-xl overflow-hidden shadow-2xl">
                <div className="h-2 bg-linear-to-r from-green-400 to-green-500"></div>
                <div className="bg-white p-4 sm:p-6">
                  <div className="flex gap-3 sm:gap-4">
                    <img
                      src="src/assets/collection/EnhancedLandingPage (3).png"
                      alt=""
                      className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
                    />
                    <div className="text-left">
                      <h3 className="font-semibold text-base sm:text-lg">
                        Best Sellers
                      </h3>
                      <p className="text-gray-500 text-xs sm:text-sm">
                        Most borrowed books this month
                      </p>
                      <span className="inline-block mt-2 px-2.5 py-1 text-xs border border-gray-200 rounded-full">
                        180+ books
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-gray-300 rounded-xl overflow-hidden shadow-2xl">
                <div className="h-2 bg-linear-to-r from-blue-400 to-blue-500"></div>
                <div className="bg-white p-4 sm:p-6">
                  <div className="flex gap-3 sm:gap-4">
                    <img
                      src="src/assets/collection/EnhancedLandingPage (1).png"
                      alt=""
                      className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
                    />
                    <div className="text-left">
                      <h3 className="font-semibold text-base sm:text-lg">
                        Reference Books
                      </h3>
                      <p className="text-gray-500 text-xs sm:text-sm">
                        Academic and research materials
                      </p>
                      <span className="inline-block mt-2 px-2.5 py-1 text-xs border border-gray-200 rounded-full">
                        1,000+ books
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-gray-300 rounded-xl overflow-hidden shadow-2xl">
                <div className="h-2 bg-linear-to-r from-pink-400 to-pink-500"></div>
                <div className="bg-white p-4 sm:p-6">
                  <div className="flex gap-3 sm:gap-4">
                    <img
                      src="src/assets/collection/EnhancedLandingPage (5).png"
                      alt=""
                      className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
                    />
                    <div className="text-left">
                      <h3 className="font-semibold text-base sm:text-lg">
                        Children's Books
                      </h3>
                      <p className="text-gray-500 text-xs sm:text-sm">
                        Engaging stories for young readers
                      </p>
                      <span className="inline-block mt-2 px-2.5 py-1 text-xs border border-gray-200 rounded-full">
                        1,200+ books
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-gray-300 rounded-xl overflow-hidden shadow-2xl">
                <div className="h-2 bg-linear-to-r from-purple-400 to-purple-500"></div>
                <div className="bg-white p-4 sm:p-6">
                  <div className="flex gap-3 sm:gap-4">
                    <img
                      src="src/assets/collection/EnhancedLandingPage (2).png"
                      alt=""
                      className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
                    />
                    <div className="text-left">
                      <h3 className="font-semibold text-base sm:text-lg">
                        Academic Books
                      </h3>
                      <p className="text-gray-500 text-xs sm:text-sm">
                        Educational resources
                      </p>
                      <span className="inline-block mt-2 px-2.5 py-1 text-xs border border-gray-200 rounded-full">
                        2,500+ books
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-xl overflow-hidden shadow-2xl">
                <div className="h-2 bg-purple-400"></div>
                <div className="bg-white p-4 sm:p-6">
                  <div className="flex gap-3 sm:gap-4">
                    <img
                      src="src/assets/collection/EnhancedLandingPage (6).png"
                      alt=""
                      className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
                    />
                    <div className="text-left">
                      <h3 className="font-semibold text-base sm:text-lg">
                        E-Books
                      </h3>
                      <p className="text-gray-500 text-xs sm:text-sm">
                        Digital library resources
                      </p>
                      <span className="inline-block mt-2 px-2.5 py-1 text-xs border border-gray-200 rounded-full">
                        500+ titles
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
          style={{
            background:
              "linear-gradient(90deg, " +
              COLORS.ourservices.primary +
              " 0%, " +
              COLORS.ourservices.secondry +
              " 50%, " +
              COLORS.ourservices.third +
              " 100%)",
          }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="mb-8 sm:mb-10 lg:mb-12 flex flex-col items-start gap-2">
              <div className="w-fit bg-[white] p-2 gap-2.5 rounded-2xl -mb-2 shadow-2xl">
                <span
                  className={` bg-linear-to-r from-[#4F39F6] to-[#9810FA] bg-clip-text text-transparent ${FONTSIZE[14]} leading-5 `}
                  style={{ ...FONTWEIGHT[700] }}
                >
                  Our Services
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4">
                Everything You <span className="text-purple-600">Need</span>
              </h2>
              <p className="text-gray-500 mt-2 text-sm sm:text-base">
                Comprehensive services designed for your success
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="bg-white shadow-lg rounded-xl p-4 sm:p-6 flex items-center gap-3 sm:gap-4 hover:shadow-xl transition">
                <div className="w-14 h-14">
                  <img
                    src="src/assets/ourservices/Container (1).png"
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <h3
                    className={`font-semibold ${FONTSIZE[18]} leading-7 text-[#101828]`}
                    style={{ ...FONTWEIGHT[700] }}
                  >
                    Book Borrowing
                  </h3>
                  <p
                    className={`${FONTSIZE[14]} leading-5 text-[#4A5565]`}
                    style={{ ...FONTWEIGHT[400] }}
                  >
                    Borrow physical books for home reading
                  </p>
                </div>
              </div>

              <div className="bg-white shadow-lg rounded-xl p-4 sm:p-6 flex items-center gap-3 sm:gap-4 hover:shadow-xl transition">
                <div className="w-14 h-14">
                  <img
                    src="src/assets/ourservices/Container (4).png"
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <h3
                    className={`font-semibold ${FONTSIZE[18]} leading-7 text-[#101828]`}
                    style={{ ...FONTWEIGHT[700] }}
                  >
                    Reading Room
                  </h3>
                  <p
                    className={`${FONTSIZE[14]} leading-5 text-[#4A5565]`}
                    style={{ ...FONTWEIGHT[400] }}
                  >
                    Quiet spaces for focused reading
                  </p>
                </div>
              </div>

              <div className="bg-white shadow-lg rounded-xl p-4 sm:p-6 flex items-center gap-3 sm:gap-4 hover:shadow-xl transition">
                <div className="w-14 h-14">
                  <img
                    src="src/assets/ourservices/Container (2).png"
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <h3
                    className={`font-semibold ${FONTSIZE[18]} leading-7 text-[#101828]`}
                    style={{ ...FONTWEIGHT[700] }}
                  >
                    Digital Library
                  </h3>
                  <p
                    className={`${FONTSIZE[14]} leading-5 text-[#4A5565]`}
                    style={{ ...FONTWEIGHT[400] }}
                  >
                    Access e-books and online resources
                  </p>
                </div>
              </div>

              <div className="bg-white shadow-lg rounded-xl p-4 sm:p-6 flex items-center gap-3 sm:gap-4 hover:shadow-xl transition">
                <div className="w-14 h-14">
                  <img
                    src="src/assets/ourservices/Container (5).png"
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <h3
                    className={`font-semibold ${FONTSIZE[18]} leading-7 text-[#101828]`}
                    style={{ ...FONTWEIGHT[700] }}
                  >
                    E-Books
                  </h3>
                  <p
                    className={`${FONTSIZE[14]} leading-5 text-[#4A5565]`}
                    style={{ ...FONTWEIGHT[400] }}
                  >
                    Download digital books to your device
                  </p>
                </div>
              </div>

              <div className="bg-white shadow-lg rounded-xl p-4 sm:p-6 flex items-center gap-3 sm:gap-4 hover:shadow-xl transition">
                <div className="w-14 h-14">
                  <img
                    src="src/assets/ourservices/Container (3).png"
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <h3
                    className={`font-semibold ${FONTSIZE[18]} leading-7 text-[#101828]`}
                    style={{ ...FONTWEIGHT[700] }}
                  >
                    Study Rooms
                  </h3>
                  <p
                    className={`${FONTSIZE[14]} leading-5 text-[#4A5565]`}
                    style={{ ...FONTWEIGHT[400] }}
                  >
                    Private rooms for group study
                  </p>
                </div>
              </div>

              <div className="bg-white shadow-lg rounded-xl p-4 sm:p-6 flex items-center gap-3 sm:gap-4 hover:shadow-xl transition">
                <div className="w-14 h-14">
                  <img
                    src="src/assets/ourservices/Container (6).png"
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <h3
                    className={`font-semibold ${FONTSIZE[18]} leading-7 text-[#101828]`}
                    style={{ ...FONTWEIGHT[700] }}
                  >
                    Online Reservations
                  </h3>
                  <p
                    className={`${FONTSIZE[14]} leading-5 text-[#4A5565]`}
                    style={{ ...FONTWEIGHT[400] }}
                  >
                    Request books online, collect easily
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <span className="bg-green-100 text-green-600 px-4 py-1 rounded-full text-xs sm:text-sm inline-block">
                  Membership
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4 text-gray-900">
                  Join Our <span className="text-purple-600">Community</span>
                </h2>
                <p className="text-gray-500 mt-4 text-sm sm:text-base max-w-lg">
                  Become a member today and unlock access to thousands of books,
                  exclusive events, and premium facilities. Membership is
                  completely free!
                </p>

                <div className="mt-6 space-y-3">
                  {[
                    "Access to 10,000+ books across all categories",
                    "Online book reservations and renewals",
                    "Free Wi-Fi and computer lab access",
                    "Exclusive member events and workshops",
                    "E-book and digital resource access",
                    "Priority booking for study rooms",
                  ].map((text, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <span className="w-4 h-4 sm:w-5 sm:h-5 shrink-0">
                        <img
                          src="src/assets/communtity/Container (2).png"
                          alt=""
                          className="w-full h-full"
                        />
                      </span>
                      <p className="text-gray-600 text-sm sm:text-base">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => navigate("/register")}
                  className=" cursor-pointer mt-6 sm:mt-8 px-6 py-2.5 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition flex items-center gap-2 text-sm sm:text-base"
                >
                  <img
                    src={icon3}
                    alt="icon"
                    className="h-3 w-3 sm:h-4 sm:w-4"
                  />
                  Register Now - Free
                </button>
              </div>

              <div className="flex justify-center mt-8 lg:mt-0">
                <div className="shadow-xl border border-gray-200 rounded-2xl p-6 sm:p-8 w-full max-w-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0">
                      <img
                        src="src/assets/communtity/Container (1).png"
                        alt=""
                        className="w-full h-full"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-base sm:text-lg">
                        Free Membership
                      </h3>
                      <p className="text-gray-500 text-xs sm:text-sm">
                        No hidden fees, completely free
                      </p>
                    </div>
                  </div>
                  <hr className="my-4" />
                  <div className="space-y-3 text-xs sm:text-sm">
                    {[
                      { label: "Registration Fee", value: "FREE" },
                      { label: "Annual Membership", value: "FREE" },
                      { label: "Book Borrowing", value: "FREE" },
                      { label: "Wi-Fi Access", value: "FREE" },
                    ].map((item, index) => (
                      <div key={index} className="flex justify-between">
                        <span className="text-gray-600">{item.label}</span>
                        <span className="text-green-600 font-semibold">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
          style={{
            background: `linear-gradient(90deg, ${COLORS.ourservices.primary} 0%, ${COLORS.ourservices.secondry} 50%, ${COLORS.ourservices.third} 100%)`,
          }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="mb-8 sm:mb-10 lg:mb-12 flex flex-col items-start gap-2">
              <div className="w-fit bg-[white] p-2 gap-2.5 rounded-2xl -mb-2 shadow-2xl">
                <span
                  className={` bg-linear-to-r from-[#4F39F6] to-[#9810FA] bg-clip-text text-transparent ${FONTSIZE[14]} leading-5 `}
                  style={{ ...FONTWEIGHT[700] }}
                >
                  Events & News
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4">
                Upcoming <span className="text-[#4F39F6]">Events</span>
              </h2>
              <p className="text-gray-500 mt-2 text-sm sm:text-base">
                Join us for exciting events, workshops, and community programs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 flex gap-3 sm:gap-4 shadow-sm hover:shadow-md transition">
                <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0">
                  <img
                    src="src/assets/events/Container (1).png"
                    alt="Book Fair"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-sm sm:text-base lg:text-lg text-gray-900">
                    Book Fair 2025
                  </h3>
                  <p className="text-blue-600 text-xs sm:text-sm mt-1">
                    February 15-20, 2025
                  </p>
                  <p className="text-gray-500 text-xs sm:text-sm mt-2">
                    Annual book fair featuring publishers and authors
                  </p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 flex gap-3 sm:gap-4 shadow-sm hover:shadow-md transition">
                <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0">
                  <img
                    src="src/assets/events/Container (2).png"
                    alt="Author Meet"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-sm sm:text-base lg:text-lg text-gray-900">
                    Author Meet &amp; Greet
                  </h3>
                  <p className="text-blue-600 text-xs sm:text-sm mt-1">
                    March 5, 2025
                  </p>
                  <p className="text-gray-500 text-xs sm:text-sm mt-2">
                    Interactive session with bestselling authors
                  </p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 flex gap-3 sm:gap-4 shadow-sm hover:shadow-md transition md:col-span-2 lg:col-span-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0">
                  <img
                    src="src/assets/events/Container (3).png"
                    alt="Workshop"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-sm sm:text-base lg:text-lg text-gray-900">
                    Reading Workshop
                  </h3>
                  <p className="text-blue-600 text-xs sm:text-sm mt-1">
                    Every Saturday
                  </p>
                  <p className="text-gray-500 text-xs sm:text-sm mt-2">
                    Workshops for children and young readers
                  </p>
                </div>
              </div>
            </div>

            <div
              onClick={() => navigate("/event")}
              className="text-center mt-8 sm:mt-10 "
            >
              <button className="px-6 py-2.5 bg-white border cursor-pointer border-[#C6D2FF] text-[#4F39F6] rounded-lg inline-flex items-center gap-2 text-sm sm:text-base hover:bg-purple-50 transition">
                View All Events <img src={rightarrIcon} />
              </button>
            </div>
          </div>
        </div>

        <div className="w-full bg-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-10 lg:mb-12">
              <span className="inline-block bg-yellow-100 text-orange-500 px-4 py-1 rounded-full text-xs sm:text-sm">
                Testimonials
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4 text-gray-900">
                What Our <span className="text-purple-600">Members Say</span>
              </h2>
              <p className="text-gray-500 mt-2 text-sm sm:text-base">
                Real feedback from our community members
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="border border-blue-200 rounded-xl p-4 sm:p-6 hover:shadow-lg transition">
                <div className="text-yellow-400 text-sm sm:text-base">
                  ⭐⭐⭐⭐⭐
                </div>
                <p className="text-gray-600 mt-4 text-sm sm:text-base">
                  "The online book reservation system is fantastic! I can easily
                  request books and collect them at my convenience."
                </p>
                <div className="flex items-center gap-3 sm:gap-4 mt-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0">
                    <img
                      src="src/assets/testiminols/Container (1).png"
                      alt=""
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">
                      Priya Sharma
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500">Student</p>
                  </div>
                </div>
              </div>

              <div className="border border-blue-200 rounded-xl p-4 sm:p-6 hover:shadow-lg transition">
                <div className="text-yellow-400 text-sm sm:text-base">
                  ⭐⭐⭐⭐⭐
                </div>
                <p className="text-gray-600 mt-4 text-sm sm:text-base">
                  "Excellent collection of reference materials and a perfect
                  quiet environment for research work."
                </p>
                <div className="flex items-center gap-3 sm:gap-4 mt-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0">
                    <img
                      src="src/assets/testiminols/Container (2).png"
                      alt=""
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">
                      Rajesh Kumar
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500">
                      Researcher
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-blue-200 rounded-xl p-4 sm:p-6 hover:shadow-lg transition md:col-span-2 lg:col-span-1">
                <div className="text-yellow-400 text-sm sm:text-base">
                  ⭐⭐⭐⭐⭐
                </div>
                <p className="text-gray-600 mt-4 text-sm sm:text-base">
                  "The children's section is wonderful! My students love the
                  reading programs offered here."
                </p>
                <div className="flex items-center gap-3 sm:gap-4 mt-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0">
                    <img
                      src="src/assets/testiminols/Container (3).png"
                      alt=""
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">
                      Anita Desai
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500">Teacher</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div
            className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 flex justify-center items-center"
            style={{
              background:
                "linear-gradient(90deg, #6D28D9 30%, #9333EA 60%, #DB2777 100%)",
            }}
          >
            <div className="max-w-3xl w-full text-center text-white">
              <img
                src="src/assets/updated/Container (1).png"
                alt=""
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-4 sm:mb-6"
              />

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                Stay Updated
              </h2>

              <p className="text-white/80 mt-2 text-sm sm:text-base px-4">
                Subscribe to our newsletter for the latest book arrivals,
                events, and library news
              </p>

              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto px-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-white/30 outline-none bg-white/10 text-white placeholder-white/60 text-sm sm:text-base"
                />
                <button className="bg-white text-purple-600 cursor-pointer px-6 sm:px-7 py-2.5 sm:py-2 rounded-lg inline-flex items-center justify-center gap-2 font-medium shadow hover:bg-gray-100 transition text-sm sm:text-base whitespace-nowrap">
                  <img
                    src="src/assets/updated/Icon (1).png"
                    alt=""
                    className="h-3 w-3 sm:h-4 sm:w-4"
                  />
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      {showRegister && <Register onClose={() => setShowRegister(false)} />}
    </>
  );
};

export default HomeAboutPage;
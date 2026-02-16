import React from "react";
import { FONT, COLORS } from "../../constant/Constant";
import searchicon from "../../assets/navbar/search icon.png";

import icon1 from "../../assets/home/Icon (1).png";
import icon2 from "../../assets/home/Icon (2).png";
import icon3 from "../../assets/home/Icon (3).png";
import Footer from "../../layout/footer/Footer";

const HomeAboutPage: React.FC = () => {
  return (
    <>
      <div style={{ fontFamily: FONT.f1 }}>
        <div
          className="w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#f5f3ff] to-[#fff1f8] px-4 text-center"
          style={{ background: COLORS.home.color.bg }}     >
          {/* Welcome badge */}
          <div className="bg-white shadow px-4 py-2 rounded-full text-sm mb-6 flex items-center gap-2">
            <img src={icon1} alt="icon" className="h-4 w-4" />
            <span>Welcome to City Central Library</span>
          </div>

          {/* Heading */}
          <div style={{ fontSize: COLORS.home.fontweight.fw1 }}>
            <h1 className="text-4xl md:text-6xl text-gray-900">
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
              className="text-4xl md:text-6xl font-bold mt-2"
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

          {/* Description */}
          <p className="text-gray-600 mt-6 max-w-xl">
            Your gateway to knowledge with over{" "}
            <span className="text-blue-600 font-semibold">10,000 books</span>,
            digital resources, and world-class facilities. Join our community
            today!
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">
            <button
              className="px-6 py-3 rounded-lg text-white hover:opacity-90 flex items-center gap-2"
              style={{
                background: `linear-gradient(90deg, ${COLORS.home.color.h1} 0%, ${COLORS.home.color.h2} 50%, ${COLORS.home.color.h3} 100%)`,
              }}
            >
              <img src={icon2} alt="icon" className="h-4 w-4" />
              <span>Explore Collection →</span>
            </button>

            <button className="px-6 py-3 rounded-lg border border-purple-400 text-purple-600 hover:bg-purple-50 flex items-center gap-2">
              <img src={icon3} alt="icon" className="h-4 w-4" />
              <span>Become a Member</span>
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-6 mt-12 flex-wrap justify-center">
            <div className="bg-white shadow rounded-xl px-8 py-4 text-center">
              <h3
                className="text-2xl font-bold"
                style={{
                  background: `linear-gradient(90deg, ${COLORS.home.color.h1} 0%, ${COLORS.home.color.h2} 50%)`,
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                10,000+
              </h3>
              <p className="text-gray-500">Books</p>
            </div>

            <div className="bg-white shadow rounded-xl px-8 py-4 text-center">
              <h3
                className="text-2xl font-bold"
                style={{
                  background: `linear-gradient(90deg, ${COLORS.home.color.h1} 0%, ${COLORS.home.color.h2} 50%)`,
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                5,000+
              </h3>
              <p className="text-gray-500">Members</p>
            </div>

            <div className="bg-white shadow rounded-xl px-8 py-4 text-center">
              <h3
                className="text-2xl font-bold"
                style={{
                  background: `linear-gradient(90deg, ${COLORS.home.color.h1} 0%, ${COLORS.home.color.h2} 50%)`,
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                28+
              </h3>
              <p className="text-gray-500">Years</p>
            </div>
          </div>
        </div>
        <div className="w-full   p-5 bg-white px-15 py-15">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

            {/* Left */}
            <div className="">
              <span className="bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-sm">
                About Us
              </span>

              <h1 className="text-3xl font-bold mt-4 text-gray-900">
                Serving the Community
              </h1>

              <h2 className="mt-6 px-6 py-2  text-white rounded-lg" style={{ background: `linear-gradient(90deg, ${COLORS.home.color.h1} 5%, ${COLORS.home.color.h2} 50%)`, }} >
                Since 2026
              </h2>

              <p className="text-gray-600 mt-4 max-w-md">
                City Central Library has been a cornerstone of knowledge and
                learning for over 28 years. We're dedicated to providing free
                access to information, resources, and educational opportunities
                for everyone.
              </p>

              {/* Mission */}
              <div className="flex items-start gap-3 mt-6">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <img src="src\assets\aboutus\Container (1).png" alt="" />
                </div>
                <div>
                  <h3 className="font-semibold">Our Mission</h3>
                  <p className="text-gray-600 text-sm">
                    To promote literacy and lifelong learning through accessible
                    resources and community engagement.
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="flex items-start gap-3 mt-4">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                  <img src="src\assets\aboutus\Container (2).png" alt="" />
                </div>
                <div>
                  <h3 className="font-semibold">Our Vision</h3>
                  <p className="text-gray-600 text-sm">
                    To be the leading community library, fostering innovation and
                    knowledge in the digital age.
                  </p>
                </div>
              </div>

              <button className="mt-6 px-6 py-2  text-white rounded-lg" style={{ background: `linear-gradient(90deg, ${COLORS.home.color.h1} 0%, ${COLORS.home.color.h2} 50%)`, }}>
                Learn More About Us →
              </button>
            </div>

            {/* Right */}
            <div className="flex flex-col gap-6">

              <div className="border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 bg-purple-600 text-white rounded-lg flex items-center justify-center">
                    <img src="src\assets\aboutus\Container (3).png" alt="" />                </div>
                  <h3 className="font-semibold">Opening Hours</h3>
                </div>

                <p className="text-sm text-gray-600">
                  Monday - Friday
                  <span className="float-right font-semibold">9:00 AM - 8:00 PM</span>
                </p>

                <p className="text-sm text-gray-600 mt-1">
                  Saturday - Sunday
                  <span className="float-right font-semibold">10:00 AM - 6:00 PM</span>
                </p>

                <p className="text-sm text-gray-600 mt-1">
                  Public Holidays
                  <span className="float-right text-red-600">Closed</span>
                </p>
              </div>

              <div className="border border-gray-200  rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 bg-pink-500 text-white rounded-lg flex items-center justify-center">
                    <img src="src\assets\aboutus\Container (4).png" alt="" />
                  </div>
                  <h3 className="font-semibold">Location</h3>
                </div>

                <p className="text-gray-600 text-sm">
                  123 Library Street City Center, State - 600001 India
                </p>

                <button className="mt-4 px-4 py-2 border rounded-lg text-sm">
                  Get Directions
                </button>
              </div>

            </div>
          </div>
        </div>
        <div className="w-full bg-blue-50 py-20 px-4 text-center">

          {/* Badge */}
          <span className="text-purple-600 px-4 py-1 border border-blue-100 rounded-full text-sm inline-block">
            Quick Search
          </span>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            Find Your{" "}
            <span className="text-purple-600">Perfect Book</span>
          </h2>

          {/* Description */}
          <p className="text-gray-500 mt-2">
            Search through our extensive collection by book name, author,
            category, or ISBN
          </p>

          {/* Search Box */}
          <div className="bg-white border border-gray-300 rounded-xl mt-8 max-w-3xl mx-auto p-6">

            {/* Input */}
            <div className="flex items-center gap-2 bg-gray-100 border border-gray-300 rounded-lg px-4 py-3">
              <img src={searchicon} alt="" className="h-5 w-5" />
              <input
                type="text"
                placeholder="Search by book name, author, category, or ISBN..."
                className="w-full bg-transparent text-sm outline-none"
              />
            </div>

            {/* Filters */}
            <div className="flex gap-2 mt-4 flex-wrap items-center text-sm">
              <span className="px-3 py-1 text-purple-800">Quick Filter :</span>

              <span className="px-3 py-1 border border-gray-300 rounded-full">
                Available
              </span>
              <span className="px-3 py-1 border border-gray-300 rounded-full">
                New Arrivals
              </span>
              <span className="px-3 py-1 border border-gray-300 rounded-full">
                Popular
              </span>
              <span className="px-3 py-1 border border-gray-300 rounded-full">
                Best Sellers
              </span>
            </div>

            {/* Button */}
            <button
              className="w-full mt-6 py-3 rounded-lg text-white flex items-center justify-center gap-2"
              style={{
                background: `linear-gradient(90deg, ${COLORS.home.color.h1} 0%, ${COLORS.home.color.h2} 100%)`,
              }}
            >
              <img src={searchicon} alt="" className="h-5 w-5  rounded-full" />
              <span>Search Collections</span>
            </button>

          </div>
        </div>

        <div className="w-full bg-white py-20 px-4 text-center">

          {/* Header */}
          <div className="max-w-6xl mx-auto mb-10">
            <span className="text-purple-600 px-4 py-1 rounded-full bg-purple-100 text-sm inline-block">
              Featured Collections
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-4">
              Discover Our <span className="text-purple-600">Collections</span>
            </h2>

            <p className="text-gray-500 mt-2">
              Carefully curated collections to suit every reader
            </p>
          </div>

          {/* Cards */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Card 1 */}
            <div className="border border-gray-300 rounded-xl">
              <div className="h-2 bg-orange-500 rounded-t-xl"></div>

              <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200">
                <div className="flex gap-4 mt-4">
                  <img src="src/assets/collection/EnhancedLandingPage.png" alt="" className="h-12 w-12" />

                  <div>
                    <h3 className="font-semibold text-lg">New Arrivals</h3>
                    <p className="text-gray-500 text-sm">Latest additions to our collection</p>
                    <span className="inline-block mt-2 px-3 py-1 text-xs border border-gray-200 rounded-full">
                      250+ books
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="border border-gray-300 rounded-xl">
              <div className="h-2 bg-gradient-to-r from-green-400 to-green-500 rounded-t-xl"></div>

              <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200">
                <div className="flex gap-4 mt-4">
                  <img src="src/assets/collection/EnhancedLandingPage (3).png" alt="" className="h-12 w-12" />

                  <div>
                    <h3 className="font-semibold text-lg">Best Sellers</h3>
                    <p className="text-gray-500 text-sm">Most borrowed books this month</p>
                    <span className="inline-block mt-2 px-3 py-1 text-xs border border-gray-200 rounded-full">
                      180+ books
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="border border-gray-300 rounded-xl">
              <div className="h-2 bg-gradient-to-r from-blue-400 to-blue-500 rounded-t-xl"></div>

              <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200">
                <div className="flex gap-4 mt-4">
                  <img src="src/assets/collection/EnhancedLandingPage (1).png" alt="" className="h-12 w-12" />

                  <div>
                    <h3 className="font-semibold text-lg">Reference Books</h3>
                    <p className="text-gray-500 text-sm">Academic and research materials</p>
                    <span className="inline-block mt-2 px-3 py-1 text-xs border border-gray-200 rounded-full">
                      1,000+ books
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="border border-gray-300 rounded-xl">
              <div className="h-2 bg-gradient-to-r from-pink-400 to-pink-500 rounded-t-xl"></div>

              <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200">
                <div className="flex gap-4 mt-4">
                  <img src="src/assets/collection/EnhancedLandingPage (5).png" alt="" className="h-12 w-12" />

                  <div>
                    <h3 className="font-semibold text-lg">Children's Books</h3>
                    <p className="text-gray-500 text-sm">Engaging stories for young readers</p>
                    <span className="inline-block mt-2 px-3 py-1 text-xs border border-gray-200 rounded-full">
                      1,200+ books
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="border border-gray-300 rounded-xl">
              <div className="h-2 bg-gradient-to-r from-purple-400 to-purple-500 rounded-t-xl"></div>

              <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200">
                <div className="flex gap-4 mt-4">
                  <img src="src/assets/collection/EnhancedLandingPage (2).png" alt="" className="h-12 w-12" />

                  <div>
                    <h3 className="font-semibold text-lg">Academic Books</h3>
                    <p className="text-gray-500 text-sm">Educational resources</p>
                    <span className="inline-block mt-2 px-3 py-1 text-xs border border-gray-200 rounded-full">
                      2,500+ books
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="border border-gray-200 rounded-xl">
              <div className="h-2 bg-purple-400 rounded-t-xl"></div>

              <div className="bg-white shadow-lg rounded-xl p-6">
                <div className="flex gap-4 mt-4">
                  <img src="src/assets/collection/EnhancedLandingPage (6).png" alt="" className="h-12 w-12" />

                  <div>
                    <h3 className="font-semibold text-lg">E-Books</h3>
                    <p className="text-gray-500 text-sm">Digital library resources</p>
                    <span className="inline-block mt-2 px-3 py-1 text-xs border border-gray-200 rounded-full">
                      500+ titles
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="w-full  py-20 px-6" style={{ background: "linear-gradient(90deg, " + COLORS.ourservices.primary + " 0%, " + COLORS.ourservices.secondry + " 50%, " + COLORS.ourservices.third + " 100%)" }}>

          {/* Header */}
          <div className="max-w-6xl mx-auto mb-12">
            <span className="bg-white shadow px-4 py-1 rounded-full text-sm text-purple-600 inline-block">
              Our Services
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-4 text-gray-900">
              Everything You <span className="text-purple-600">Need</span>
            </h2>

            <p className="text-gray-500 mt-2">
              Comprehensive services designed for your success
            </p>
          </div>

          {/* Cards */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Card 1 */}
            <div className="bg-white shadow-lg rounded-xl p-6 flex items-center gap-4">
              <div className="w-12 h-12">
                <img src="src\assets\ourservices\Container (1).png" alt="" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Book Borrowing</h3>
                <p className="text-gray-500 text-sm">Borrow physical books for home reading</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-lg rounded-xl p-6 flex items-center gap-4">
              <div className="w-12 h-12">
                <img src="src\assets\ourservices\Container (4).png" alt="" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Reading Room</h3>
                <p className="text-gray-500 text-sm">Quiet spaces for focused reading</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-lg rounded-xl p-6 flex items-center gap-4">
              <div className="w-12 h-12">
                <img src="src\assets\ourservices\Container (2).png" alt="" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Digital Library</h3>
                <p className="text-gray-500 text-sm">Access e-books and online resources</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white shadow-lg rounded-xl p-6 flex items-center gap-4">
              <div className="w-12 h-12 ">
                <img src="src\assets\ourservices\Container (5).png" alt="" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">E-Books</h3>
                <p className="text-gray-500 text-sm">Download digital books to your device</p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-white shadow-lg rounded-xl p-6 flex items-center gap-4">
              <div className="w-12 h-12 ">
                <img src="src\assets\ourservices\Container (3).png" alt="" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Study Rooms</h3>
                <p className="text-gray-500 text-sm">Private rooms for group study</p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-white shadow-lg rounded-xl p-6 flex items-center gap-4">
              <div className="w-12 h-12 ">
                <img src="src\assets\ourservices\Container (6).png" alt="" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Online Reservations</h3>
                <p className="text-gray-500 text-sm">Request books online, collect easily</p>
              </div>
            </div>

          </div>
        </div>
        <div className="w-full bg-white py-20 px-4" >

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

            {/* Left Section */}
            <div>

              <span className="bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm inline-block">
                Membership
              </span>

              <h2 className="text-3xl md:text-4xl font-bold mt-4 text-gray-900">
                Join Our <span className="text-purple-600">Community</span>
              </h2>

              <p className="text-gray-500 mt-4 max-w-lg">
                Become a member today and unlock access to thousands of books,
                exclusive events, and premium facilities. Membership is completely free!
              </p>

              <div className="mt-6 space-y-3">

                <div className="flex items-center gap-3">
                  <span className="w-5 h-5 ">
                    <img src="src\assets\communtity\Container (2).png" alt="" />

                  </span>
                  <p className="text-gray-600">Access to 10,000+ books across all categories</p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="w-5 h-5 ">
                    <img src="src\assets\communtity\Container (2).png" alt="" />

                  </span>
                  <p className="text-gray-600">Online book reservations and renewals</p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="w-5 h-5 ">
                    <img src="src\assets\communtity\Container (2).png" alt="" />

                  </span>
                  <p className="text-gray-600">Free Wi-Fi and computer lab access</p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="w-5 h-5 ">
                    <img src="src\assets\communtity\Container (2).png" alt="" />

                  </span>
                  <p className="text-gray-600">Exclusive member events and workshops</p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="w-5 h-5 ">
                    <img src="src\assets\communtity\Container (2).png" alt="" />

                  </span>
                  <p className="text-gray-600">E-book and digital resource access</p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="w-5 h-5 ">
                    <img src="src\assets\communtity\Container (2).png" alt="" />
                  </span>
                  <p className="text-gray-600">Priority booking for study rooms</p>
                </div>

              </div>

              <button className="mt-8 px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 flex items-center gap-2">
                <img src={icon3} alt="icon" className="h-4 w-4    " />

                Register Now - Free
              </button>

            </div>

            {/* Right Card */}
            <div className="flex justify-center">

              <div className="shadow-xl border border-gray-200 rounded-2xl p-8 w-full max-w-sm">

                <div className="flex items-center gap-4 mb-4" >
                  <div className="w-14 h-14 ">
                    <img src="src\assets\communtity\Container (1).png" alt="" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Free Membership</h3>
                    <p className="text-gray-500 text-sm">No hidden fees, completely free</p>
                  </div>
                </div>

                <hr className="my-4" />

                <div className="space-y-3 text-sm">

                  <div className="flex justify-between">
                    <span className="text-gray-600">Registration Fee</span>
                    <span className="text-green-600 font-semibold">FREE</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-600">Annual Membership</span>
                    <span className="text-green-600 font-semibold">FREE</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-600">Book Borrowing</span>
                    <span className="text-green-600 font-semibold">FREE</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-600">Wi-Fi Access</span>
                    <span className="text-green-600 font-semibold">FREE</span>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        <div className="w-full py-5 px-6" style={{ background: `linear-gradient(90deg, ${COLORS.ourservices.primary} 0%, ${COLORS.ourservices.secondry} 50%, ${COLORS.ourservices.third} 100%)`, }}>
          <div className=" m-4">
            <div>

              <span className="bg-white text-purple-600 px-4 py-1 rounded-full shadow text-sm inline-block">
                Events & News
              </span>

              <h2 className="text-3xl md:text-4xl font-bold mt-4 text-gray-900">
                Upcoming <span className="text-purple-600">Events</span>
              </h2>

              <p className="text-gray-500 mt-2">
                Join us for exciting events, workshops, and community programs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-10">

              <div className="bg-white border  gap-3 border-gray-200 rounded-xl p-6 m-5 flex  shadow-sm">

                <div >
                  <img
                    src="src/assets/events/Container (1).png"
                    alt="Book Fair"
                    className="w-12 h-12"
                  />
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">Book Fair 2025</h3>
                  <p className="text-blue-600 text-sm mt-1">February 15-20, 2025</p>
                  <p className="text-gray-500 text-sm mt-2">
                    Annual book fair featuring publishers and authors
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white border gap-3 border-gray-200 rounded-xl p-6 m-5 flex  shadow-sm   ">

                <div >
                  <img
                    src="src/assets/events/Container (2).png"
                    alt="Author Meet"
                    className="w-12 h-12"
                  />
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">Author Meet &amp; Greet</h3>
                  <p className="text-blue-600 text-sm mt-1">March 5, 2025</p>
                  <p className="text-gray-500 text-sm mt-2">
                    Interactive session with bestselling authors
                  </p>
                </div>
              </div>
              <div className="bg-white border gap-3 border-gray-200 rounded-xl p-6 m-5 flex  shadow-sm">

                <div >
                  <img
                    src="src/assets/events/Container (3).png"
                    alt="Workshop"
                    className="w-12 h-12"
                  />
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">Reading Workshop</h3>
                  <p className="text-blue-600 text-sm mt-1">Every Saturday</p>
                  <p className="text-gray-500 text-sm mt-2">
                    Workshops for children and young readers
                  </p>
                </div>
              </div>

            </div>

            <button className="mt-10 px-6 py-3 bg-white border border-gray-300 text-purple-600 rounded-lg flex items-center gap-2 mx-auto hover:bg-purple-50">
              View All Events →
            </button>

          </div>
        </div>

        <div className="w-full bg-white py-20 px-4">
          <div className="max-w-6xl mx-auto">

            {/* Badge */}
            <span className="inline-block bg-yellow-100 text-orange-500 px-4 py-1 rounded-full text-sm">
              Testimonials
            </span>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold mt-4 text-gray-900">
              What Our <span className="text-purple-600">Members Say</span>
            </h2>

            <p className="text-gray-500 mt-2">
              Real feedback from our community members
            </p>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

              {/* Card 1 */}
              <div className="border border-blue-200 rounded-xl p-6">

                <div >⭐⭐⭐⭐⭐</div>

                <p className="text-gray-600 mt-4 ">
                  "The online book reservation system is fantastic! I can easily request books and collect them at my convenience."
                </p>

                <div className="flex items-center gap-4 mt-6">
                  <div >
                    <img src="src\assets\testiminols\Container (1).png" alt="" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Priya Sharma</p>
                    <p className="text-sm text-gray-500">Student</p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="border border-blue-200 rounded-xl p-6">

                <div >⭐⭐⭐⭐⭐</div>

                <p className="text-gray-600 mt-4 ">
                  "Excellent collection of reference materials and a perfect quiet environment for research work."
                </p>

                <div className="flex items-center gap-4 mt-6">
                  <div>
                    <img src="src\assets\testiminols\Container (2).png" alt="" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Rajesh Kumar</p>
                    <p className="text-sm text-gray-500">Researcher</p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="border border-blue-200 rounded-xl p-6">

                <div >⭐⭐⭐⭐⭐</div>

                <p className="text-gray-600 mt-4 ">
                  "The children's section is wonderful! My students love the reading programs offered here."
                </p>

                <div className="flex items-center gap-4 mt-6">
                  <div >
                    <img src="src\assets\testiminols\Container (3).png" alt="" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Anita Desai</p>
                    <p className="text-sm text-gray-500">Teacher</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

        <div >
          <div
            className="w-full py-20 px-4 flex justify-center items-center"
            style={{
              background: "linear-gradient(90deg, #6D28D9 30%, #9333EA 60%, #DB2777 100%)",
            }}>
            <div className="  w-full text-center text-white">

              <div >
                {/* Icon */}
                <img src="src/assets/updated/Container (1).png" alt="" className="w-40 h-40 mx-auto  mb-4 flex   " />


                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold">
                  Stay Updated
                </h2>

                {/* Description */}
                <p className="text-white/80 mt-2">
                  Subscribe to our newsletter for the latest book arrivals,<br />
                  events, and library news
                </p>
              </div>

              {/* Input + Button */}
              <div className="mt-8 flex justify-center gap-3 max-w-xl mx-auto">

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg border border-white/30 outline-none tex-white"
                />

                <button className="bg-white text-purple-600 px-7 py-2 rounded-lg flex items-center gap-2 font-medium shadow">
                  <img src="src\assets\updated\Icon (1).png" alt="" className="3" />
                  Subscribe
                </button>

              </div>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomeAboutPage;

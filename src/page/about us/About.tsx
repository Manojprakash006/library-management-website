import React from "react";
import { FONT, COLORS } from "../../constant/Constant";
import Footer from "../../layout/footer/Footer";
const About = () => {
  return (
    <>
    <div className="" style={{ fontFamily: FONT.f1 }}>

      {/* Header Section */}
      <div
        className="w-full py-5   p-2 text-white mb-10"
        style={{
          background: `linear-gradient(90deg, ${COLORS.about.primary} 0%, ${COLORS.about.secondry} 50%)`,
        }} >
        
            
        <h1 className="text-3xl mb-3 max-w-6xl  font-bold">About Us</h1>
        <p>Dedicated to serving the community through knowledge and learning</p>
          
      </div>

      <div className="max-w-6xl mx-auto">

        {/* Our History */}
        <h2 className="text-2xl font-bold mb-3">Our History</h2>

        <p className="text-gray-500 text-sm mb-4">
          Established in 1995, City Central Library has been a cornerstone of our community for over 28 years.
          What began as a small collection of 500 books in a modest building has grown into a modern library
          facility housing over 10,000 books, digital resources, and state-of-the-art amenities.
        </p>

        <p className="text-gray-500 text-sm mb-10">
          Throughout the years, we have continuously evolved to meet the changing needs of our community.
          From introducing computer facilities in 2000 to launching our digital lending program in 2015,
          we remain committed to providing accessible knowledge and learning opportunities for all.
        </p>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">

          <div className="border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10">
                <img src="src/assets/aboutus/Container (1).png" alt="" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Our Mission</h3>
                <p className="text-gray-500 text-sm">
                  To promote literacy, lifelong learning, and provide equitable access to information and
                  resources that enrich the lives of our community members. We strive to be a welcoming space
                  where knowledge meets opportunity.
                </p>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-start gap-3">
              <div>
                <img
                  src="src/assets/aboutus/Container (2).png"
                  alt=""
                  className="w-10 h-10"
                />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Our Vision</h3>
                <p className="text-gray-500 text-sm">
                  To be recognized as the premier community library, fostering a culture of reading, learning,
                  and innovation. We envision a future where every individual has the tools and resources needed
                  to reach their full potential.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Why Choose Us */}
        <h2 className="text-center text-xl font-bold mb-8">Why Choose Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">

          <div className="border border-gray-200 rounded-xl p-6 text-center shadow-sm">
            <div className="w-12 h-12 mx-auto bg-green-100 rounded-full mb-4 flex items-center justify-center">
              <img src="src/assets/aboutus/Container (6).png" alt="" />
            </div>
            <h3 className="font-semibold mb-2">Quality Collection</h3>
            <p className="text-gray-500 text-sm">
              Carefully curated books and resources across all genres and subjects
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-6 text-center shadow-sm">
            <div className="w-12 h-12 mx-auto bg-blue-100 rounded-full mb-4 flex items-center justify-center">
              <img src="src/assets/aboutus/Container (7).png" alt="" />
            </div>
            <h3 className="font-semibold mb-2">Community Focused</h3>
            <p className="text-gray-500 text-sm">
              Regular events, workshops, and programs for all age groups
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-6 text-center shadow-sm">
            <div className="w-12 h-12 mx-auto bg-purple-100 rounded-full mb-4 flex items-center justify-center">
              <img src="src/assets/aboutus/Container (1).png" alt="" />
            </div>
            <h3 className="font-semibold mb-2">Modern Facilities</h3>
            <p className="text-gray-500 text-sm">
              State-of-the-art amenities including Wi-Fi, computers, and study spaces
            </p>
          </div>

        </div>

        {/* Library by Numbers */}
        <div className="bg-blue-50 rounded-xl py-10 px-6">

          <h2 className="text-center font-bold mb-8">Library by Numbers</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

            <div>
              <h3 className="text-purple-600 text-xl font-bold">28+</h3>
              <p className="text-gray-500 text-sm">Years of Service</p>
            </div>

            <div>
              <h3 className="text-purple-600 text-xl font-bold">10,000+</h3>
              <p className="text-gray-500 text-sm">Total Books</p>
            </div>

            <div>
              <h3 className="text-purple-600 text-xl font-bold">5,000+</h3>
              <p className="text-gray-500 text-sm">Active Members</p>
            </div>

            <div>
              <h3 className="text-purple-600 text-xl font-bold">100+</h3>
              <p className="text-gray-500 text-sm">Daily Visitors</p>
            </div>

          </div>

        </div>

      </div>
    </div>
    <Footer />
    </>
  
   );
};

export default About;

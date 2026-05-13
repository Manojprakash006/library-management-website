import { useEffect } from "react";
import { FONT, COLORS, FONTSIZE } from "../../constant/Constant";
import Footer from "../../layout/footer/Footer";
import container6 from "../../assets/aboutus/Container (6).png"
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchBrowseBooksData, fetchTotalMembers, fetchVisitorStats } from "../../Features/Collection/CollectionThunk";

const About = () => {

  const dispatch = useAppDispatch();
  const totalBooks = useAppSelector((state) => state.collection.totalBooks);
  const totalMembers = useAppSelector((state) => state.collection.totalMembers);
  const visitorStats = useAppSelector((state) => state.collection.visitorStats);
  const { libraryInfo } = useAppSelector((state) => state.contact);
  
  useEffect(() => {
    dispatch(fetchBrowseBooksData());
    dispatch(fetchTotalMembers());
    dispatch(fetchVisitorStats());
  }, [dispatch]);
  
  return (
    <>
      <div style={{ fontFamily: FONT.f1 }}>
        <div
          className="w-full py-8 px-4 mb-16"
          style={{
            background: `linear-gradient(90deg, ${COLORS.about.primary} 0%, ${COLORS.about.secondry} 50%)`,
          }}
        >
          <div className="px-4 sm:px-6 md:px-16 lg:px-24">
            <h1 className={` font-bold text-white mb-3 ${FONTSIZE[32]} leading-10`}>About Us</h1>
            <p className="text-white text-lg md:text-lg opacity-90">
              Dedicated to serving the community through knowledge and learning
            </p>
          </div>
        </div>

        <div className="px-4 sm:px-6 md:px-16 lg:px-25">
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-4">Our History</h2>
            <p className="text-gray-600 text-base leading-relaxed mb-4">
              Established in 1995, {libraryInfo?.libraryName || 'City Central Library'} has been a cornerstone of our community.
              What began as a small collection of 500 books in a modest building has grown into a modern library
              facility housing over {totalBooks}+ books, digital resources, and state-of-the-art amenities.
            </p>
            <p className="text-gray-600 text-base leading-relaxed">
              Throughout the years, we have continuously evolved to meet the changing needs of our community.
              From introducing computer facilities in 2000 to launching our digital lending program in 2015,
              we remain committed to providing accessible knowledge and learning opportunities for all.
            </p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <div className="border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 shrink-0">
                  <img
                    src="src/assets/aboutus/Container (1).png"
                    alt="Mission icon"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    To promote literacy, lifelong learning, and provide equitable access to information and
                    resources that enrich the lives of our community members. We strive to be a welcoming space
                    where knowledge meets opportunity.
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 shrink-0">
                  <img
                    src="src/assets/aboutus/Container (2).png"
                    alt="Vision icon"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    To be recognized as the premier community library, fostering a culture of reading, learning,
                    and innovation. We envision a future where every individual has the tools and resources needed
                    to reach their full potential.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="border border-gray-200 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition">
              <div className="w-16 h-16 mx-auto bg-green-100 rounded-full mb-5 flex items-center justify-center">
                <img src={container6} alt="Quality" className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Collection</h3>
              <p className="text-gray-600 text-base">
                Carefully curated books and resources across all genres and subjects
              </p>
            </div>

            <div className="border border-gray-200 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition">
              <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full mb-5 flex items-center justify-center">
                <img src="src/assets/aboutus/Container (7).png" alt="Community" className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community Focused</h3>
              <p className="text-gray-600 text-base">
                Regular events, workshops, and programs for all age groups
              </p>
            </div>

            <div className="border border-gray-200 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition">
              <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full mb-5 flex items-center justify-center">
                <img src="src/assets/aboutus/Container (1).png" alt="Facilities" className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Modern Facilities</h3>
              <p className="text-gray-600 text-base">
                State-of-the-art amenities including Wi-Fi, computers, and study spaces
              </p>
            </div>
          </div>

          <div className="bg-blue-50 rounded-2xl py-12 px-6 md:py-16 md:px-12 mb-16">
            <h2 className="text-3xl font-bold text-center mb-10">Library by Numbers</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-4xl md:text-4xl font-bold text-purple-700 mb-2">28+</div>
                <p className="text-gray-600 text-base">Years of Service</p>
              </div>
              <div>
                <div className="text-4xl md:text-4xl font-bold text-purple-700 mb-2">{totalBooks}</div>
                <p className="text-gray-600 text-base">Total Books</p>
              </div>
              <div>
                <div className="text-4xl md:text-4xl font-bold text-purple-700 mb-2">{totalMembers}</div>
                <p className="text-gray-600 text-base">Active Members</p>
              </div>
              <div>
                <div className="text-4xl md:text-4xl font-bold text-purple-700 mb-2">{visitorStats || 0}+</div>
                <p className="text-gray-600 text-base">Daily Visitors</p>
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
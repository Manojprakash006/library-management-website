import React, { useState } from 'react'
import { FONT, COLORS, FONTWEIGHT } from "../../constant/Constant";
import Footer from '../../layout/footer/Footer';
import {
  FiBook,
  FiDownload,
  FiWifi,
  FiMonitor,
  FiUsers,
  FiCalendar,
  FiGlobe,     
  FiTag,
  FiFileText,
  FiMapPin,
  FiShield,
  FiCreditCard,
  FiCheckCircle,
  FiArrowRight,
  FiEye,
  FiEyeOff,
} from 'react-icons/fi';
import { useNavigate } from 'react-router';
import Register from '../../models/registerpopup/registerForm';
import { useDispatch, useSelector } from 'react-redux';
import { registerMemberThunk } from '../../store/thunks/authThunk';
import type { RootState, AppDispatch } from '../../store/store';
import toast from 'react-hot-toast';

const Membership = () => {

  const benefits = [
    { icon: <FiBook size={36} color="#fff" />, color: COLORS.membership.benefits.iconPurple, title: 'Unlimited Book Access', desc: 'Borrow up to 5 books at a time from our vast collection.' },
    { icon: <FiDownload size={36} color="#fff" />, color: COLORS.membership.benefits.iconBlue, title: 'E-Book Downloads', desc: 'Access digital titles anytime, anywhere on any device.' },
    { icon: <FiWifi size={36} color="#fff" />, color: COLORS.membership.benefits.iconGreen, title: 'Free Wi-Fi', desc: 'High-speed internet access throughout the library.' },
    { icon: <FiMonitor size={36} color="#fff" />, color: COLORS.membership.benefits.iconTeal, title: 'Computer Lab Access', desc: 'Use modern computers with latest software.' },
    { icon: <FiUsers size={36} color="#fff" />, color: COLORS.membership.benefits.iconOrange, title: 'Study Rooms', desc: 'Reserve private study rooms for individual or group study sessions.' },
    { icon: <FiCalendar size={36} color="#fff" />, color: COLORS.membership.benefits.iconPink, title: 'Priority Events', desc: 'Get priority access to workshops, seminars and events.' },
    { icon: <FiGlobe size={36} color="#fff" />, color: COLORS.membership.benefits.iconBlue, title: 'Online Reservations', desc: 'Reserve books and resources from home, save your time.' },
    { icon: <FiTag size={36} color="#fff" />, color: COLORS.membership.benefits.iconRed, title: 'Member Discounts', desc: 'Exclusive discounts on library-affiliated store items.' },
  ];

  const processSteps = [
    { icon: <FiFileText size={34} color="#fff" />, title: 'Fill Online Form', desc: 'Complete the online registration form with your personal details.' },
    { icon: <FiMapPin size={34} color="#fff" />, title: 'Visit Library', desc: 'Bring your documents and visit our library.' },
    { icon: <FiShield size={34} color="#fff" />, title: 'Verification', desc: 'Our staff verifies your documents.' },
    { icon: <FiCreditCard size={34} color="#fff" />, title: 'Get Member ID', desc: 'Receive your membership card.' },
  ];

  const faqs = [
    {
      q: 'How do I become a member?',
      a: 'Simply fill in the online registration form or visit our library with a valid ID card and address proof. Membership is completely free!',
    },
    {
      q: 'What documents are required?',
      a: 'You will need a valid government-issued photo ID (Aadhar, PAN Passport, or Driving License) and proof of address (utility bill, bank statement). 2 Passport Size Photos.',
    },
    {
      q: 'Can I renew books online?',
      a: 'Yes! Members can log into their account and renew books online as long as there are no pending requests for that book.',
    },
    {
      q: 'What if I lose a book?',
      a: 'Members are responsible for borrowed books. Lost books must be replaced with the same edition or compensated at current market price.',
    },
    {
      q: 'Is there a late fee?',
      a: 'Yes, a minimal fine of ₹10 per day applies for overdue books to encourage timely returns.',
    },
    {
      q: 'Can I transfer my membership?',
      a: 'Membership is non-transferable and linked to your registered ID. Each library member needs their own membership.',
    },
  ];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [error, setError] = useState<formError>({});
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const { loading, error: apiError } = useSelector((state: RootState) => state.auth);

  type formError = {
    name?: string,
    email?: string,
    phone?: string,
    address?: string,
    password?: string,
    confirmPassword?: string,
  }

  const Validate = () => {

    let newError: formError = {};

    if (!name.trim()) newError.name = "Please enter your full name";
    if (!email.trim()) newError.email = "Please enter your email address";
    if (!phone.trim()) newError.phone = "Phone number is required";
    if (!address.trim()) newError.address = "Please enter your complete address";
    if (!password.trim()) newError.password = "Password is required";
    if (password.length > 0 && password.length < 6) newError.password = "Password must be at least 6 characters";
    if (password !== confirmPassword) newError.confirmPassword = "Passwords do not match";

    if (Object.keys(newError).length > 0) {
      setError(newError);
      return false;
    }
    setError({});
    return true;
  }

  const HandleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!Validate()) return;

    const payload = {
      name,
      email,
      phone,
      address,
      password
    };

    try {
      const resultAction = await dispatch(registerMemberThunk(payload));
      if (registerMemberThunk.fulfilled.match(resultAction)) {
        setName("");
        setEmail("");
        setPhone("");
        setAddress("");
        setPassword("");
        setConfirmPassword("");
        setError({});
        navigate("/login");
        toast.success("Registraion success - continue Login");
      }
    } catch (err) {
      console.error("Registration failed:", err);
    }
  }

  return (
    <>
      <div style={{ fontFamily: FONT.f1 }} className="min-h-screen">

        <div style={{ background: COLORS.membership.hero.gradient }} className="w-full py-6 px-5">
          <div className="px-4 sm:px-6 md:px-16 lg:px-24">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4"
              style={{ background: COLORS.membership.hero.badgeBg, color: COLORS.membership.hero.badgeText }}
            >
              <FiCheckCircle size={13} /> Join Our Community
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2" style={{ color: COLORS.membership.hero.title }}>
              Library Membership
            </h1>
            <p className="text-sm sm:text-base mb-6 max-w-xl" style={{ color: COLORS.membership.hero.subtitle }}>
              Become a member today and unlock access to thousands of books, premium facilities, and exclusive events
            </p>
            <div className="flex flex-wrap items-center w-fit rounded-2xl p-2 sm:p-3 md:p-4  " style={{ background: COLORS.membership.hero.badgeBg, color: COLORS.membership.hero.badgeText }}>
              <span
                className={`px-3 sm:px-4 md:px-5 py-1 sm:py-2 rounded-full font-bold text-xs sm:text-sm md:text-2xl lg:text-3xl leading-6 sm:leading-7 md:leading-8 `}
                style={{ color: COLORS.membership.hero.buttonPrimary, ...FONTWEIGHT[700] }}
              >
                100% FREE
              </span>
              <div className="w-px h-5 sm:h-6 bg-gray-300 mx-2 sm:mx-4"></div>
              <div className={`flex flex-col gap-0 sm:gap-1`}>
                <h1 className={`text-xs sm:text-sm md:text-bass leading-4 sm:leading-5`} style={{ ...FONTWEIGHT[700], color: COLORS.membership.hero.buttonPrimary }}>No Registration Fee</h1>
                <p className={`text-xs sm:text-sm md:text-bass leading-4 sm:leading-5`} style={{ ...FONTWEIGHT[400], color: COLORS.membership.hero.pTag }}>Lifetime Validity</p>
              </div>
            </div>
          </div>
        </div>

        <section className="py-16 px-5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: COLORS.membership.section.title }}>
                Membership <span style={{ color: COLORS.membership.section.highlight }}>Benefits</span>
              </h2>
              <p className="text-base" style={{ color: COLORS.membership.section.subtitle }}>
                Enjoy exclusive privileges and access to world-class library facilities
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
              {benefits.map((b, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-4">
                  <div
                    className="w-20 h-20 rounded-3xl flex items-center justify-center"
                    style={{ background: b.color }}
                  >
                    {b.icon}
                  </div>
                  <p className="text-base font-bold" style={{ color: COLORS.membership.benefits.title }}>{b.title}</p>
                  <p className="text-sm leading-relaxed" style={{ color: COLORS.membership.benefits.text }}>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 px-5 bg-[#F8F9FE]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: COLORS.membership.section.title }}>
                Quick <span style={{ color: COLORS.membership.section.highlight }}>Registration</span>
              </h2>
              <p className="text-sm" style={{ color: COLORS.membership.section.subtitle }}>
                Fill out the form below to start your membership journey
              </p>
            </div>
            <form onSubmit={HandleSubmit}
              className="rounded-3xl p-6 sm:p-10 max-w-6xl mx-auto"
              style={{
                background: COLORS.membership.registration.cardBg,
                boxShadow: COLORS.membership.registration.cardShadow,
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold" style={{ color: COLORS.membership.section.title }}>
                    Full Name <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="rounded-xl px-4 py-3 text-sm outline-none border focus:border-purple-500 transition"
                    style={{
                      background: COLORS.membership.registration.inputBg,
                      borderColor: COLORS.membership.registration.inputBorder,
                      color: COLORS.membership.section.title,
                    }}
                  />
                  <p className="text-red-400 mt-1 flex gap-2 items-center">{error.name}</p>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold" style={{ color: COLORS.membership.section.title }}>
                    Email Address <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="rounded-xl px-4 py-3 text-sm outline-none border focus:border-purple-500 transition"
                    style={{
                      background: COLORS.membership.registration.inputBg,
                      borderColor: COLORS.membership.registration.inputBorder,
                      color: COLORS.membership.section.title,
                    }}
                  />
                  <p className="text-red-400 mt-1 flex gap-2 items-center">{error.email}</p>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold" style={{ color: COLORS.membership.section.title }}>
                    Phone Number <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="+91-9876543210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="rounded-xl px-4 py-3 text-sm outline-none border focus:border-purple-500 transition"
                    style={{
                      background: COLORS.membership.registration.inputBg,
                      borderColor: COLORS.membership.registration.inputBorder,
                      color: COLORS.membership.section.title,
                    }}
                  />
                  <p className="text-red-400 mt-1 flex gap-2 items-center">{error.phone}</p>
                </div>
                <div className="flex flex-col gap-1 sm:col-span-2">
                  <label className="text-xs font-semibold" style={{ color: COLORS.membership.section.title }}>
                    Complete Address <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Your complete residential address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="rounded-xl px-4 py-3 text-sm outline-none border focus:border-purple-500 transition resize-none"
                    style={{
                      background: COLORS.membership.registration.inputBg,
                      borderColor: COLORS.membership.registration.inputBorder,
                      color: COLORS.membership.section.title,
                    }}
                  />
                  <p className="text-red-400 mt-1 flex gap-2 items-center">{error.address}</p>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold" style={{ color: COLORS.membership.section.title }}>
                    Password <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="******"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full rounded-xl px-4 py-3 text-sm outline-none border focus:border-purple-500 transition"
                      style={{
                        background: COLORS.membership.registration.inputBg,
                        borderColor: COLORS.membership.registration.inputBorder,
                        color: COLORS.membership.section.title,
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-purple-600 transition-colors"
                    >
                      {showPassword ? <FiEye size={18} /> : <FiEyeOff size={18} />}
                    </button>
                  </div>
                  <p className="text-red-400 text-xs mt-1">{error.password}</p>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold" style={{ color: COLORS.membership.section.title }}>
                    Confirm Password <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="******"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full rounded-xl px-4 py-3 text-sm outline-none border focus:border-purple-500 transition"
                      style={{
                        background: COLORS.membership.registration.inputBg,
                        borderColor: COLORS.membership.registration.inputBorder,
                        color: COLORS.membership.section.title,
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-purple-600 transition-colors"
                    >
                      {showConfirmPassword ? <FiEye size={18} /> : <FiEyeOff size={18} />}
                    </button>
                  </div>
                  <p className="text-red-400 text-xs mt-1">{error.confirmPassword}</p>
                </div>
              </div>
              {apiError && <p className="text-red-500 text-xs mt-4 text-center">{apiError}</p>}

              <div
                className="mt-6 rounded-xl p-4 text-xs border"
                style={{ background: COLORS.membership.req_Document.req_DocumentBG, borderColor: COLORS.membership.req_Document.req_DocumentBorder }}
              >
                <p className="font-semibold mb-2" style={{ color: COLORS.membership.req_Document.textHeadColor }}>
                  Required Documents (Visit Library):
                </p>
                <ul className="list-disc list-inside space-y-1 pl-5" style={{ color: COLORS.membership.req_Document.contentColor }}>
                  <li>Photo ID (Aadhar, PAN Passport, or Driving License)</li>
                  <li>Proof of Address (Utility Bill/Bank Statement)</li>
                  <li>2 Passport Size Photos</li>
                </ul>
              </div>

              <button type='submit'
                disabled={loading}
                className="mt-6 w-full cursor-pointer py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition hover:opacity-90 disabled:opacity-50"
                style={{
                  background: COLORS.membership.registration.buttonGradient,
                  color: COLORS.membership.registration.buttonText,
                }}
              >
                <FiCheckCircle size={16} /> {loading ? "Registering..." : "Submit Registration"}
              </button>
            </form>
          </div>
        </section>

        <section style={{ background: COLORS.membership.section.bg }} className="py-16 px-5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: COLORS.membership.section.title }}>
                Registration <span style={{ color: COLORS.membership.section.highlight }}>Process</span>
              </h2>
              <p className="text-base" style={{ color: COLORS.membership.section.subtitle }}>
                Simple 4-step process to become a member
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-12 relative">
              {processSteps.map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-4 relative">
                  <div className="relative">
                    <div
                      className="w-20 h-20 rounded-3xl flex items-center justify-center"
                      style={{ background: COLORS.membership.hero.gradient }}
                    >
                      {step.icon}
                    </div>
                    <div
                      className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                      style={{ background: COLORS.membership.hero.gradient, border: '2px solid #fff' }}
                    >
                      {i + 1}
                    </div>
                  </div>

                  {i < processSteps.length - 1 && (
                    <div
                      className="hidden sm:block absolute top-10 left-[calc(50%+2.8rem)] w-[calc(100%-5.6rem)] h-px"
                      style={{ background: COLORS.membership.process.connector }}
                    />
                  )}

                  <p className="text-base font-bold" style={{ color: COLORS.membership.process.title }}>{step.title}</p>
                  <p className="text-sm leading-relaxed" style={{ color: COLORS.membership.process.text }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-5 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: COLORS.membership.section.title }}>
                Frequently Asked <span style={{ color: COLORS.membership.section.highlight }}>Questions</span>
              </h2>
              <p className="text-base" style={{ color: COLORS.membership.section.subtitle }}>
                Everything you need to know about membership
              </p>
            </div>
            <div className=" mx-auto flex flex-col gap-10">
              {faqs.map((faq, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <div className="flex items-start gap-3">
                    <span className="text-base font-bold" style={{ color: COLORS.membership.faq.question }}>Q.</span>
                    <p className="text-base font-bold" style={{ color: COLORS.membership.section.title }}>{faq.q}</p>
                  </div>
                  <p className="text-sm leading-relaxed pl-7" style={{ color: COLORS.membership.faq.answer }}>
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: COLORS.membership.cta.gradient }} className="py-14 px-5">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3" style={{ color: COLORS.membership.cta.title }}>
              Ready to Join?
            </h2>
            <p className="text-sm mb-8" style={{ color: COLORS.membership.cta.subtitle }}>
              Start your journey with us today. Membership is completely free with lifetime validity!
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => setShowRegister(true)}
                className="px-8 py-3 rounded-full text-sm font-bold flex items-center gap-2 hover:opacity-90 transition"
                style={{ background: COLORS.membership.cta.buttonPrimary, color: COLORS.membership.cta.buttonPrimaryText }}
              >
                Register Now <FiArrowRight size={15} />
              </button>
            </div>
          </div>
        </section>

      </div>
      <Footer />
      {showRegister && <Register onClose={() => setShowRegister(false)} />}
    </>
  );
};

export default Membership;
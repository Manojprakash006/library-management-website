import React from 'react'
import { FONT, COLORS } from "../../constant/Constant";
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
} from 'react-icons/fi';

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
      a: 'Yes, a minimal fine of ₹5 per day applies for overdue books to encourage timely returns.',
    },
    {
      q: 'Can I transfer my membership?',
      a: 'Membership is non-transferable and linked to your registered ID. Each library member needs their own membership.',
    },
  ];

  return (
    <>
      <div style={{ fontFamily: FONT.f1 }} className="min-h-screen">

        {/* ── Hero Banner ── */}
        <div style={{ background: COLORS.membership.hero.gradient }} className="w-full py-3 px-5">
          <div className="max-w-7xl mx-auto">
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
            <div className="flex flex-wrap items-center gap-3">
              <span
                className="px-5 py-2 rounded-full text-sm font-bold"
                style={{ background: COLORS.membership.hero.buttonPrimary, color: COLORS.membership.hero.buttonPrimaryText }}
              >
                100% FREE
              </span>
              <span className="text-xs" style={{ color: COLORS.membership.hero.subtitle }}>
                No Registration Fee &nbsp;·&nbsp; Lifetime Validity
              </span>
            </div>
          </div>
        </div>

        {/* ── Membership Benefits ── */}
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

        {/* ── Quick Registration ── */}
        <section className="py-14 px-5 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: COLORS.membership.section.title }}>
                Quick <span style={{ color: COLORS.membership.section.highlight }}>Registration</span>
              </h2>
              <p className="text-sm" style={{ color: COLORS.membership.section.subtitle }}>
                Fill out the form below to start your membership journey
              </p>
            </div>
            <div
              className="rounded-3xl p-6 sm:p-10 max-w-6xl mx-auto"
              style={{
                background: COLORS.membership.registration.cardBg,
                boxShadow: COLORS.membership.registration.cardShadow,
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold" style={{ color: COLORS.membership.section.title }}>
                    Full Name <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="rounded-xl px-4 py-3 text-sm outline-none border focus:border-purple-500 transition"
                    style={{
                      background: COLORS.membership.registration.inputBg,
                      borderColor: COLORS.membership.registration.inputBorder,
                      color: COLORS.membership.section.title,
                    }}
                  />
                </div>
                {/* Email */}
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold" style={{ color: COLORS.membership.section.title }}>
                    Email Address <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="rounded-xl px-4 py-3 text-sm outline-none border focus:border-purple-500 transition"
                    style={{
                      background: COLORS.membership.registration.inputBg,
                      borderColor: COLORS.membership.registration.inputBorder,
                      color: COLORS.membership.section.title,
                    }}
                  />
                </div>
                {/* Phone */}
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold" style={{ color: COLORS.membership.section.title }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91-9876543210"
                    className="rounded-xl px-4 py-3 text-sm outline-none border focus:border-purple-500 transition"
                    style={{
                      background: COLORS.membership.registration.inputBg,
                      borderColor: COLORS.membership.registration.inputBorder,
                      color: COLORS.membership.section.title,
                    }}
                  />
                </div>
                {/* Complete Address */}
                <div className="flex flex-col gap-1 sm:col-span-2">
                  <label className="text-xs font-semibold" style={{ color: COLORS.membership.section.title }}>
                    Complete Address
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Your complete residential address"
                    className="rounded-xl px-4 py-3 text-sm outline-none border focus:border-purple-500 transition resize-none"
                    style={{
                      background: COLORS.membership.registration.inputBg,
                      borderColor: COLORS.membership.registration.inputBorder,
                      color: COLORS.membership.section.title,
                    }}
                  />
                </div>
              </div>

              {/* Required Documents */}
              <div
                className="mt-6 rounded-xl p-4 text-xs"
                style={{ background: COLORS.membership.registration.inputBg, color: COLORS.membership.section.subtitle }}
              >
                <p className="font-semibold mb-2" style={{ color: COLORS.membership.section.title }}>
                  Required Documents (Visit Library):
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Photo ID (Aadhar, PAN Passport, or Driving License)</li>
                  <li>Proof of Address (Utility Bill/Bank Statement)</li>
                  <li>2 Passport Size Photos</li>
                </ul>
              </div>

              {/* Submit Button */}
              <button
                className="mt-6 w-full py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition hover:opacity-90"
                style={{
                  background: COLORS.membership.registration.buttonGradient,
                  color: COLORS.membership.registration.buttonText,
                }}
              >
                <FiCheckCircle size={16} /> Submit Registration
              </button>
            </div>
          </div>
        </section>

        {/* ── Registration Process ── */}
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
                  {/* Icon box with number badge */}
                  <div className="relative">
                    <div
                      className="w-20 h-20 rounded-3xl flex items-center justify-center"
                      style={{ background: COLORS.membership.hero.gradient }}
                    >
                      {step.icon}
                    </div>
                    {/* Number badge */}
                    <div
                      className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                      style={{ background: COLORS.membership.hero.gradient, border: '2px solid #fff' }}
                    >
                      {i + 1}
                    </div>
                  </div>

                  {/* Connector line between steps */}
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

        {/* ── FAQ ── */}
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
            <div className="max-w-4xl mx-auto flex flex-col gap-10">
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

        {/* ── CTA ── */}
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
                className="px-8 py-3 rounded-full text-sm font-bold flex items-center gap-2 hover:opacity-90 transition"
                style={{ background: COLORS.membership.cta.buttonPrimary, color: COLORS.membership.cta.buttonPrimaryText }}
              >
                Register Now <FiArrowRight size={15} />
              </button>
              <button
                className="px-8 py-3 rounded-full text-sm font-bold hover:opacity-80 transition"
                style={{ background: COLORS.membership.cta.buttonSecondaryBg, color: COLORS.membership.cta.buttonSecondaryText, border: '1px solid rgba(255,255,255,0.3)' }}
              >
                Learn More
              </button>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
};

export default Membership;
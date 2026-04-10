import React from 'react'
import { FONT, COLORS, FONTWEIGHT, FONTSIZE } from "../../constant/Constant";
import Footer from "../../layout/footer/Footer";
import {
  FiBook,
  FiUser,
  FiCalendar,
  FiClock,
  FiMapPin,
  FiUsers,
  FiBookOpen,
  FiMonitor,
  FiStar,
} from "react-icons/fi";
import {
  MdMenuBook,
  MdOutlinePersonPin,
  MdOutlineSchool,
  MdChildCare,
} from "react-icons/md";
import eventIcon from "../../assets/events/Head Event Icon.png"
import Register from '../../models/registerpopup/registerForm';
import { useState } from 'react';
const C = COLORS.events;

const Event = () => {
  const [showRegister, setShowRegister] = useState(false);
  return (
    <>
      <div style={{ fontFamily: FONT.f1, background: C.page.bg }} className="">
        <div
          style={{ background: C.hero.bg }}
          className="w-full py-6 px-4 mb-16"
        >
          <div className="px-4 sm:px-6 md:px-16 lg:px-24">
            <span
              style={{
                background: C.hero.badgeBg,
                color: C.hero.title,
                ...FONTWEIGHT[700],
              }}
              className="md:flex gap-2 text-[11px] font-semibold flex justify-center items-center px-5 py-2 md:px-3 md:py-2 rounded-full tracking-widest w-fit mb-3"
            >
              <img src={eventIcon} className="w-4 h-4" alt="" />
              Events & Programs
            </span>
            <h1
              style={{ color: C.hero.title }}
              className="text-[clamp(28px,5vw,42px)] font-extrabold mt-0 mb-2"
            >
              Upcoming Events
            </h1>
            <p
              style={{ color: C.hero.subText }}
              className="text-[clamp(13px,2vw,16px)] m-0"
            >
              Join us for exciting workshops, author sessions, book fairs, and
              community programs
            </p>
          </div>
        </div>

        <div className="max-w-350 mx-auto px-5">
          <section className="mt-12 mb-14">
            <h2
              style={{ color: C.section.title }}
              className="text-[clamp(20px,3vw,26px)] font-bold mb-1"
            >
              Featured Events
            </h2>
            <p style={{ color: C.section.subText }} className="text-sm mb-7">
              Don't miss these highlighted upcoming events
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 ">
              <div
                style={{
                  background: C.featuredCard.bg,
                }}
                className={`rounded-2xl p-7 flex flex-col gap-3.5 shadow-2xl border-t-8 border-[#615FFF]`}
              >
                <div className="flex flex-col gap-3.5">
                  <div
                    style={{ background: "#EEF2FF", color: "#4F39F6" }}
                    className="w-13 h-13 rounded-[14px] flex items-center justify-center shrink-0"
                  >
                    <FiBook size={28} />
                  </div>
                  <span
                    style={{
                      background: C.featuredCard.tagBg,
                      color: C.featuredCard.tagText,
                    }}
                    className="text-[11px] w-fit font-semibold px-2.5 py-0.75 rounded-full flex items-center gap-1"
                  >
                    <FiBook size={12} /> Book Fair
                  </span>
                </div>

                <h3
                  style={{ color: C.featuredCard.title, ...FONTWEIGHT[700] }}
                  className={`${FONTSIZE[24]} leading-8`}
                >
                  Annual Book Fair 2025
                </h3>
                <p
                  style={{ color: C.featuredCard.desc, ...FONTWEIGHT[400] }}
                  className={`${FONTSIZE[16]} leading-6`}
                >
                  Join us for our biggest annual event featuring renowned
                  publishers, bestselling authors, book launchers, and exclusive
                  discounts on thousands of books.
                </p>

                <div
                  style={{ color: C.section.subText }}
                  className="flex flex-wrap gap-8 text-xs"
                >
                  <div className="flex flex-col gap-5">
                    <span
                      className={`flex items-center gap-1.5 text-[#101828] ${FONTSIZE[14]} leading-5`}
                      style={{ ...FONTWEIGHT[700] }}
                    >
                      <FiCalendar size={13} className="w-4 h-4" /> February
                      14-20, 2026
                    </span>
                    <span
                      className={`flex items-center gap-1.5 text-[#101828] ${FONTSIZE[14]} leading-5`}
                      style={{ ...FONTWEIGHT[700] }}
                    >
                      <FiClock size={13} className="w-4 h-4" /> 10:00 AM - 7:00
                      PM
                    </span>
                  </div>

                  <div className="flex flex-col gap-5">
                    <span
                      className={`flex items-center gap-1.5 text-[#101828] ${FONTSIZE[14]} leading-5`}
                      style={{ ...FONTWEIGHT[700] }}
                    >
                      <FiMapPin size={13} className="w-4 h-4" /> Main Hall
                    </span>
                    <span
                      className={`flex items-center gap-1.5 text-[#101828] ${FONTSIZE[14]} leading-5`}
                      style={{ ...FONTWEIGHT[700] }}
                    >
                      <FiUsers size={13} className="w-4 h-4" /> 800+ expected
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setShowRegister(true)}
                  style={{ background: C.hero.bg, fontFamily: FONT.f1 }}
                  className="mt-1 text-white border-none rounded-xl px-5 py-3 font-semibold text-sm cursor-pointer flex items-center justify-center gap-1.5"
                >
                  Register Now →
                </button>
              </div>

              <div
                style={{
                  background: C.featuredCard.bg,
                }}
                className="rounded-2xl p-7 flex flex-col gap-3.5 shadow-2xl border-t-8 border-[#F6339A]"
              >
                <div className="flex flex-col gap-3.5">
                  <div
                    style={{ background: "#FDF2F8", color: "#EC4899" }}
                    className="w-13 h-13 rounded-[14px] flex items-center justify-center shrink-0"
                  >
                    <FiUser size={28} />
                  </div>
                  <span
                    style={{
                      background: C.featuredCard.tagBg,
                      color: C.featuredCard.tagText,
                    }}
                    className="text-[11px] font-semibold w-fit px-2.5 py-0.75 rounded-full flex items-center gap-1"
                  >
                    <FiUser size={12} /> Author Session
                  </span>
                </div>

                <h3
                  style={{ color: C.featuredCard.title, ...FONTWEIGHT[700] }}
                  className={`${FONTSIZE[24]} leading-8`}
                >
                  Author Meet & Greet
                </h3>
                <p
                  style={{ color: C.featuredCard.desc, ...FONTWEIGHT[400] }}
                  className={`${FONTSIZE[16]} leading-6`}
                >
                  Interactive session with bestselling author Amia Tripathi.
                  Book signing, Q&A, and discussion about his latest novel.
                </p>

                <div
                  style={{ color: C.section.subText }}
                  className="flex flex-wrap gap-8 text-xs"
                >
                  <div className="flex flex-col gap-5">
                    <span
                      className={`flex items-center gap-1.5 text-[#101828] ${FONTSIZE[14]} leading-5`}
                      style={{ ...FONTWEIGHT[700] }}
                    >
                      <FiCalendar size={13} className="w-4 h-4" /> March 5, 2025
                    </span>
                    <span
                      className={`flex items-center gap-1.5 text-[#101828] ${FONTSIZE[14]} leading-5`}
                      style={{ ...FONTWEIGHT[700] }}
                    >
                      <FiClock size={13} className="w-4 h-4" /> 4:00 PM - 6:00
                      PM
                    </span>
                  </div>

                  <div className="flex flex-col gap-5">
                    <span
                      className={`flex items-center gap-1.5 text-[#101828] ${FONTSIZE[14]} leading-5`}
                      style={{ ...FONTWEIGHT[700] }}
                    >
                      <FiMapPin size={13} className="w-4 h-4" /> Conference Room
                    </span>
                    <span
                      className={`flex items-center gap-1.5 text-[#101828] ${FONTSIZE[14]} leading-5`}
                      style={{ ...FONTWEIGHT[700] }}
                    >
                      <FiUsers size={13} className="w-4 h-4" /> 100 seats
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setShowRegister(true)}
                  style={{
                    background: "linear-gradient(90deg,#EC4899,#A855F7)",
                    fontFamily: FONT.f1,
                  }}
                  className="mt-1 text-white border-none rounded-xl px-5 py-3 font-semibold text-sm cursor-pointer flex items-center justify-center gap-1.5"
                >
                  Register Now →
                </button>
              </div>
            </div>
          </section>

          <section className="mb-14">
            <h2
              style={{ color: C.section.title }}
              className="text-[clamp(20px,3vw,26px)] font-bold mb-1"
            >
              All Upcoming Events
            </h2>
            <p style={{ color: C.section.subText }} className="text-sm mb-7">
              Complete schedule of library events and programs
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <div
                style={{
                  background: C.card.bg,
                  border: `1px solid ${C.card.border}`,
                }}
                className="rounded-xl p-5.5 flex flex-col gap-2.5"
              >
                <div className="flex flex-col gap-3">
                  <div
                    style={{ background: "#EEF2FF", color: "#4F39F6" }}
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                  >
                    <FiBook size={22} />
                  </div>
                  <span
                    style={{ color: "#4F39F6", background: "#4F39F615" }}
                    className="text-[11px] font-semibold px-2.5 py-0.75 w-fit rounded-full"
                  >
                    Book Fair
                  </span>
                </div>

                <h3
                  style={{ color: C.card.title, ...FONTWEIGHT[700] }}
                  className={`${FONTSIZE[18]} leading-7`}
                >
                  Annual Book Fair 2025
                </h3>
                <p
                  style={{ color: C.card.desc }}
                  className="text-xs leading-relaxed m-0"
                >
                  Join us for our biggest annual event featuring renowned
                  publishers, bestselling authors, book launchers & exclusive
                  discounts on books.
                </p>

                <div
                  style={{ color: C.section.subText }}
                  className="flex flex-col gap-1.5 text-xs"
                >
                  <span className="flex items-center gap-1.5">
                    <FiCalendar size={12} /> February 14, 2026
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FiClock size={12} /> 10:00 AM - 7:00 PM
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FiMapPin size={12} /> Main Hall
                  </span>
                </div>

                <button
                  className="px-8 py-3 rounded-lg border border-blue-300 
                   bg-white text-blue-600 
                   hover:bg-gray-100 
                   transition duration-200"
                >
                  Learn More
                </button>
              </div>

              <div
                style={{
                  background: C.card.bg,
                  border: `1px solid ${C.card.border}`,
                }}
                className="rounded-[14px] p-5.5 flex flex-col gap-2.5"
              >
                <div className="flex flex-col gap-3">
                  <div
                    style={{ background: "#FDF2F8", color: "#EC4899" }}
                    className="w-11 h-11  rounded-xl flex items-center justify-center"
                  >
                    <FiUser size={22} />
                  </div>
                  <span
                    style={{ color: "#EC4899", background: "#EC489915" }}
                    className="text-[11px] w-fit font-semibold px-2.5 py-0.75 rounded-full"
                  >
                    Author Session
                  </span>
                </div>

                <h3
                  style={{ color: C.card.title, ...FONTWEIGHT[700] }}
                  className={`${FONTSIZE[18]} leading-7`}
                >
                  Author Meet & Greet
                </h3>
                <p
                  style={{ color: C.card.desc }}
                  className="text-xs leading-relaxed m-0"
                >
                  Interactive session with bestselling author Amia Tripathi.
                  Book signing, Q&A, and discussion about his latest novel.
                </p>

                <div
                  style={{ color: C.section.subText }}
                  className="flex flex-col gap-1.5 text-xs"
                >
                  <span className="flex items-center gap-1.5">
                    <FiCalendar size={12} /> March 5, 2025
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FiClock size={12} /> 4:00 PM – 6:00 PM
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FiMapPin size={12} /> Conference Room
                  </span>
                </div>

                <button
                  className="px-8 py-3 rounded-lg border border-blue-300 
                   bg-white text-blue-600 
                   hover:bg-gray-100 
                   transition duration-200"
                >
                  Learn More
                </button>
              </div>

              <div
                style={{
                  background: C.card.bg,
                  border: `1px solid ${C.card.border}`,
                }}
                className="rounded-[14px] p-5.5 flex flex-col gap-2.5"
              >
                <div className="flex flex-col gap-3">
                  <div
                    style={{ background: "#ECFDF5", color: "#10B981" }}
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                  >
                    <MdChildCare size={22} />
                  </div>
                  <span
                    style={{ color: "#10B981", background: "#10B98115" }}
                    className="text-[11px] w-fit font-semibold px-2.5 py-0.75 rounded-full"
                  >
                    Workshop
                  </span>
                </div>

                <h3
                  style={{ color: C.card.title, ...FONTWEIGHT[700] }}
                  className={`${FONTSIZE[18]} leading-7`}
                >
                  Children's Reading Workshop
                </h3>
                <p
                  style={{ color: C.card.desc }}
                  className="text-xs leading-relaxed m-0"
                >
                  Weekly reading sessions, storytelling, and creative activities
                  for children aged 5-12. Developing reading habits and
                  imagination.
                </p>

                <div
                  style={{ color: C.section.subText }}
                  className="flex flex-col gap-1.5 text-xs"
                >
                  <span className="flex items-center gap-1.5">
                    <FiCalendar size={12} /> Every Saturday
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FiClock size={12} /> 12:00 PM – 1:00 PM
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FiMapPin size={12} /> Story Section
                  </span>
                </div>

                <button
                  className="px-8 py-3 rounded-lg border border-blue-300 
                   bg-white text-blue-600 
                   hover:bg-gray-100 
                   transition duration-200"
                >
                  Learn More
                </button>
              </div>

              <div
                style={{
                  background: C.card.bg,
                  border: `1px solid ${C.card.border}`,
                }}
                className="rounded-[14px] p-5.5 flex flex-col gap-2.5"
              >
                <div className="flex flex-col gap-3">
                  <div
                    style={{ background: "#FFFBEB", color: "#F59E0B" }}
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                  >
                    <FiStar size={22} />
                  </div>
                  <span
                    style={{ color: "#F59E0B", background: "#F59E0B15" }}
                    className="text-[11px] w-fit font-semibold px-2.5 py-0.75 rounded-full"
                  >
                    Literary Event
                  </span>
                </div>

                <h3
                  style={{ color: C.card.title, ...FONTWEIGHT[700] }}
                  className={`${FONTSIZE[18]} leading-7`}
                >
                  Poetry & Literature Evening
                </h3>
                <p
                  style={{ color: C.card.desc }}
                  className="text-xs leading-relaxed m-0"
                >
                  An evening of poetry recitals, literary discussions, and open
                  mic for aspiring poets and writers.
                </p>

                <div
                  style={{ color: C.section.subText }}
                  className="flex flex-col gap-1.5 text-xs"
                >
                  <span className="flex items-center gap-1.5">
                    <FiCalendar size={12} /> March 12, 2026
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FiClock size={12} /> 6:00 PM – 9:00 PM
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FiMapPin size={12} /> Reading Plaza
                  </span>
                </div>

                <button
                  className="px-8 py-3 rounded-lg border border-blue-300 
                   bg-white text-blue-600 
                   hover:bg-gray-100 
                   transition duration-200"
                >
                  Learn More
                </button>
              </div>

              <div
                style={{
                  background: C.card.bg,
                  border: `1px solid ${C.card.border}`,
                }}
                className="rounded-[14px] p-5.5 flex flex-col gap-2.5"
              >
                <div className="flex flex-col gap-3">
                  <div
                    style={{ background: "#ECFDF5", color: "#10B981" }}
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                  >
                    <FiMonitor size={22} />
                  </div>
                  <span
                    style={{ color: "#10B981", background: "#10B98115" }}
                    className="text-[11px] w-fit font-semibold px-2.5 py-0.75 rounded-full"
                  >
                    Workshop
                  </span>
                </div>

                <h3
                  style={{ color: C.card.title, ...FONTWEIGHT[700] }}
                  className={`${FONTSIZE[18]} leading-7`}
                >
                  Digital Literacy Workshop
                </h3>
                <p
                  style={{ color: C.card.desc }}
                  className="text-xs leading-relaxed m-0"
                >
                  Learn to access ebooks, digital resources, online catalogs,
                  and use library digital services effectively.
                </p>

                <div
                  style={{ color: C.section.subText }}
                  className="flex flex-col gap-1.5 text-xs"
                >
                  <span className="flex items-center gap-1.5">
                    <FiCalendar size={12} /> March 18, 2026
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FiClock size={12} /> 2:00 PM – 4:00 PM
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FiMapPin size={12} /> Computer Lab
                  </span>
                </div>

                <button
                  className="px-8 py-3 rounded-lg border border-blue-300 
                   bg-white text-blue-600 
                   hover:bg-gray-100 
                   transition duration-200"
                >
                  Learn More
                </button>
              </div>

              <div
                style={{
                  background: C.card.bg,
                  border: `1px solid ${C.card.border}`,
                }}
                className="rounded-[14px] p-5.5 flex flex-col gap-2.5"
              >
                <div className="flex flex-col gap-3">
                  <div
                    style={{ background: "#EDE9FE", color: "#7C3AED" }}
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                  >
                    <FiBookOpen size={22} />
                  </div>
                  <span
                    style={{ color: "#7C3AED", background: "#7C3AED15" }}
                    className="text-[11px] w-fit font-semibold px-2.5 py-0.75 rounded-full"
                  >
                    Book Club
                  </span>
                </div>

                <h3
                  style={{ color: C.card.title, ...FONTWEIGHT[700] }}
                  className={`${FONTSIZE[18]} leading-7`}
                >
                  Book Club Meeting
                </h3>
                <p
                  style={{ color: C.card.desc }}
                  className="text-xs leading-relaxed m-0"
                >
                  Monthly book discussions, reviews, and recommendations. A
                  community of passionate readers sharing insights.
                </p>

                <div
                  style={{ color: C.section.subText }}
                  className="flex flex-col gap-1.5 text-xs"
                >
                  <span className="flex items-center gap-1.5">
                    <FiCalendar size={12} /> Last Friday of every month
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FiClock size={12} /> 5:00 PM – 7:00 PM
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FiMapPin size={12} /> Discussion Room
                  </span>
                </div>

                <button
                  className="px-8 py-3 rounded-lg border border-blue-300 
                   bg-white text-blue-600 
                   hover:bg-gray-100 
                   transition duration-200"
                >
                  Learn More
                </button>
              </div>
            </div>
          </section>

          <section className="mb-14">
            <h2
              style={{ color: C.section.title }}
              className="text-[clamp(20px,3vw,26px)] font-bold mb-1"
            >
              Past Events
            </h2>
            <p style={{ color: C.section.subText }} className="text-sm mb-7">
              Highlights from our recent events
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <div
                style={{
                  background: C.pastCard.bg,
                  border: `1px solid ${C.pastCard.border}`,
                }}
                className="rounded-[14px] p-5.5 flex flex-col gap-2.5"
              >
                <div className="w-11 h-11 rounded-xl bg-gray-200 flex items-center justify-center text-gray-400">
                  <FiBook size={20} />
                </div>
                <h3
                  style={{ color: C.pastCard.title }}
                  className="text-[15px] font-bold m-0"
                >
                  New Year Reading Marathon
                </h3>
                <span style={{ color: "#4F39F6" }} className="font-semibold">
                  January 1, 2026
                </span>
                <p
                  style={{ color: C.pastCard.desc }}
                  className="text-xs leading-relaxed m-0"
                >
                  A 12-hour reading marathon to kickstart the new year with
                  knowledge.
                </p>
                <div
                  style={{ color: C.section.subText }}
                  className="flex flex-col gap-1 text-xs"
                >
                  <span className="flex items-center gap-1">
                    <FiUsers size={12} /> 320 participants
                  </span>
                </div>
              </div>

              <div
                style={{
                  background: C.pastCard.bg,
                  border: `1px solid ${C.pastCard.border}`,
                }}
                className="rounded-[14px] p-5.5 flex flex-col gap-2.5"
              >
                <div className="w-11 h-11 rounded-xl bg-gray-200 flex items-center justify-center text-gray-400">
                  <FiBook size={20} />
                </div>
                <h3
                  style={{ color: C.pastCard.title }}
                  className="text-[15px] font-bold m-0"
                >
                  Science Fiction Festival
                </h3>
                <span style={{ color: "#4F39F6" }} className="font-semibold">
                  December 21-26, 2024
                </span>
                <p
                  style={{ color: C.pastCard.desc }}
                  className="text-xs leading-relaxed m-0"
                >
                  Celebrated sci-fi literature with author talks, cosplay, and
                  panel discussions.
                </p>
                <div
                  style={{ color: C.section.subText }}
                  className="flex flex-col gap-1 text-xs"
                >
                  <span className="flex items-center gap-1">
                    <FiUsers size={12} /> 500+ attended
                  </span>
                </div>
              </div>

              <div
                style={{
                  background: C.pastCard.bg,
                  border: `1px solid ${C.pastCard.border}`,
                }}
                className="rounded-[14px] p-5.5 flex flex-col gap-2.5"
              >
                <div className="w-11 h-11 rounded-xl bg-gray-200 flex items-center justify-center text-gray-400">
                  <FiBook size={20} />
                </div>
                <h3
                  style={{ color: C.pastCard.title }}
                  className="text-[15px] font-bold m-0"
                >
                  Holiday Book Drive
                </h3>
                <span style={{ color: "#4F39F6" }} className="font-semibold">
                  December 18-28, 2024
                </span>
                <p
                  style={{ color: C.pastCard.desc }}
                  className="text-xs leading-relaxed m-0"
                >
                  Community book donation drive to support underprivileged
                  school children.
                </p>
                <div
                  style={{ color: C.section.subText }}
                  className="flex flex-col gap-1 text-xs"
                >
                  <span className="flex items-center gap-1">
                    <FiUsers size={12} /> 620+ books donated
                  </span>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-[20px] px-8 py-10 mb-14 text-center">
            <h2
              style={{ color: C.section.title }}
              className="text-[clamp(20px,3vw,26px)] font-bold mb-1"
            >
              Event Categories
            </h2>
            <p style={{ color: C.section.subText }} className="text-sm mb-8">
              We organize various types of events throughout the year
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
              <div className="flex flex-col items-center gap-3">
                <div
                  style={{ background: "#4F39F618", color: "#4F39F6" }}
                  className="w-16 h-16 rounded-[18px] flex items-center justify-center"
                >
                  <MdMenuBook size={28} />
                </div>
                <p
                  style={{ color: C.categories.text, ...FONTWEIGHT[700] }}
                  className={`${FONTSIZE[18]} leading-7`}
                >
                  Book Fairs
                </p>
                <p style={{ color: C.section.subText }} className="text-xs m-0">
                  Annual & seasonal book exhibitions
                </p>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div
                  style={{ background: "#EC489918", color: "#EC4899" }}
                  className="w-16 h-16 rounded-[18px] flex items-center justify-center"
                >
                  <MdOutlinePersonPin size={28} />
                </div>
                <p
                  style={{ color: C.categories.text, ...FONTWEIGHT[700] }}
                  className={`${FONTSIZE[18]} leading-7`}
                >
                  Author Sessions
                </p>
                <p style={{ color: C.section.subText }} className="text-xs m-0">
                  Meet celebrated authors
                </p>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div
                  style={{ background: "#10B98118", color: "#10B981" }}
                  className="w-16 h-16 rounded-[18px] flex items-center justify-center"
                >
                  <MdOutlineSchool size={28} />
                </div>
                <p
                  style={{ color: C.categories.text, ...FONTWEIGHT[700] }}
                  className={`${FONTSIZE[18]} leading-7`}
                >
                  Workshops
                </p>
                <p style={{ color: C.section.subText }} className="text-xs m-0">
                  Skill & self development programs
                </p>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div
                  style={{ background: "#F59E0B18", color: "#F59E0B" }}
                  className="w-16 h-16 rounded-[18px] flex items-center justify-center"
                >
                  <MdChildCare size={28} />
                </div>
                <p
                  style={{ color: C.categories.text, ...FONTWEIGHT[700] }}
                  className={`${FONTSIZE[18]} leading-7`}
                >
                  Kids Programs
                </p>
                <p style={{ color: C.section.subText }} className="text-xs m-0">
                  Fun learning & creative activities
                </p>
              </div>
            </div>
          </section>
        </div>

        <div
          style={{ background: C.newsletter.bg }}
          className="px-5 py-14 text-center"
        >
          <h2
            style={{ color: C.newsletter.title }}
            className="text-[clamp(22px,4vw,34px)] font-extrabold mb-3"
          >
            Want to Stay Updated?
          </h2>
          <p
            style={{ color: C.newsletter.subText }}
            className={`${FONTSIZE[20]} leading-7 mb-7`}
          >
            Subscribe to our newsletter to receive event notifications and
            updates.
          </p>
          <button
            style={{
              background: C.newsletter.buttonBg,
              color: C.newsletter.buttonText,
              font: FONT.f1,
            }}
            className="border-none rounded-xl px-7 py-3.5 font-bold text-sm cursor-pointer"
          >
            Subscribe to Newsletter
          </button>
        </div>
      </div>

      <Footer />
      {showRegister && <Register onClose={() => setShowRegister(false)} />}
    </>
  );
};

export default Event;
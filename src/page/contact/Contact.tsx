import React, { useState } from 'react'
import { FONT, COLORS, FONTSIZE } from "../../constant/Constant";
import Footer from '../../layout/footer/Footer';
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiSend,
  FiCheckCircle,
  FiLoader
} from 'react-icons/fi';
import { getLibraryInfoApi, sendContactMessageApi } from '../../Features/service/contact.Service';
import toast from 'react-hot-toast';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { sendContactMessageThunk } from '../../Features/Contact/ContactThunk';

const Contact = () => {
  const c = COLORS.contact;
  const dispatch = useAppDispatch();
  const { libraryInfo, isSubmitting } = useAppSelector((state) => state.contact);

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  // Data is now fetched globally in AppRoutes.tsx

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await dispatch(sendContactMessageThunk(form)).unwrap();
      toast.success("Message sent successfully!");
      setForm({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (err: any) {
      toast.error(err || "Failed to send message");
    }
  };

  return (
    <div className="min-h-screen" style={{ fontFamily: FONT.f1, backgroundColor: c.section.bg }}>

      <div
          className="w-full py-8 px-4 mb-16 bg-linear-to-r from-[#01A641] to-[#019789] "
      >
          <div className="px-4 sm:px-6 md:px-25">
            <h1 className={` font-bold text-white mb-3 ${FONTSIZE[32]} leading-10`}>Contact Us</h1>
            <p className="text-white text-lg md:text-lg opacity-90">
                We're here to help. Get in touch with us
            </p>
          </div>
      </div>

      <div className=" max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-xl font-bold mt-0 mb-3" style={{ color: c.section.title }}>
              Get In Touch
            </h2>
            <p className="text-sm leading-relaxed mt-0 mb-7" style={{ color: c.section.subtitle }}>
              Have questions or need assistance? Feel free to reach out to us through any of the following channels. Our team is ready to help you.
            </p>

            <div className="flex flex-col gap-4">
              <div
                className="flex items-start gap-4 rounded-xl p-5 sm:p-8"
                style={{ backgroundColor: c.card.bg, border: `1px solid ${c.card.border}`, boxShadow: c.card.shadow }}
              >
                <div className="flex items-center justify-center rounded-xl p-3 shrink-0" style={{ backgroundColor: c.icons.visitBg }}>
                  <FiMapPin size={20} color={c.icons.visitIcon} />
                </div>
                <div>
                  <h3 className="m-0 mb-1.5 text-sm font-semibold" style={{ color: c.card.title }}>Visit Us</h3>
                  <p className="m-0 text-xs leading-relaxed" style={{ color: c.card.text }}>
                    {libraryInfo?.libraryName || 'City Central Library'}<br />
                    {libraryInfo?.address || '123 Library Street, City Center, State - 600001, India'}
                  </p>
                </div>
              </div>

              <div
                className="flex items-start gap-4 rounded-xl p-5 sm:p-8"
                style={{ backgroundColor: c.card.bg, border: `1px solid ${c.card.border}`, boxShadow: c.card.shadow }}
              >
                <div className="flex items-center justify-center rounded-xl p-3 shrink-0" style={{ backgroundColor: c.icons.callBg }}>
                  <FiPhone size={20} color={c.icons.callIcon} />
                </div>
                <div>
                  <h3 className="m-0 mb-1.5 text-sm font-semibold" style={{ color: c.card.title }}>Call Us</h3>
                  <p className="m-0 text-xs leading-relaxed" style={{ color: c.card.text }}>
                    Main: {libraryInfo?.phone || '+91-44-1234-5678'}<br />
                    Reference Desk: {libraryInfo?.referencePhone || '+91-44-1234-5679'}<br />
                    Available during library hours
                  </p>
                </div>
              </div>

              <div
                className="flex items-start gap-4 rounded-xl p-5 sm:p-8"
                style={{ backgroundColor: c.card.bg, border: `1px solid ${c.card.border}`, boxShadow: c.card.shadow }}
              >
                <div className="flex items-center justify-center rounded-xl p-3 shrink-0" style={{ backgroundColor: c.icons.emailBg }}>
                  <FiMail size={20} color={c.icons.emailIcon} />
                </div>
                <div>
                  <h3 className="m-0 mb-1.5 text-sm font-semibold" style={{ color: c.card.title }}>Email Us</h3>
                  <p className="m-0 text-xs leading-relaxed" style={{ color: c.card.text }}>
                    General: {libraryInfo?.email || 'info@citycentrallibrary.org'}<br />
                    Membership: {libraryInfo?.membershipEmail || 'membership@citycentrallibrary.org'}<br />
                    We respond within 24 hours
                  </p>
                </div>
              </div>

              <div
                className="flex items-start gap-4 rounded-xl p-5 sm:p-8"
                style={{ backgroundColor: c.card.bg, border: `1px solid ${c.card.border}`, boxShadow: c.card.shadow }}
              >
                <div className="flex items-center justify-center rounded-xl p-3 shrink-0" style={{ backgroundColor: c.icons.hoursBg }}>
                  <FiClock size={20} color={c.icons.hoursIcon} />
                </div>
                <div>
                  <h3 className="m-0 mb-1.5 text-sm font-semibold" style={{ color: c.card.title }}>Opening Hours</h3>
                  <p className="m-0 text-xs leading-relaxed" style={{ color: c.card.text }}>
                    {libraryInfo?.weekdaysHours || 'Monday - Friday: 9:00 AM - 8:00 PM'}<br />
                    {libraryInfo?.weekendHours || 'Saturday - Sunday: 10:00 AM - 6:00 PM'}<br />
                    {libraryInfo?.holidaysInfo || 'Closed on public holidays'}
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div
            className="rounded-2xl p-8"
            style={{ backgroundColor: c.card.bg, border: `1px solid ${c.card.border}`, boxShadow: c.card.shadow }}
          >
            <h2 className="text-xl font-bold mt-0 mb-6" style={{ color: c.section.title }}>
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">

              <div>
                <label className="block mb-1.5 text-sm font-medium" style={{ color: c.section.title, font: FONT.f1 }}>
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3.5 py-2.5 rounded-lg text-sm outline-none box-border"
                  style={{ border: `1px solid ${c.input.border}`, backgroundColor: c.input.bg, color: c.input.text, font: FONT.f1 }}
                />
              </div>

              <div>
                <label className="block mb-1.5 text-sm font-medium" style={{ color: c.section.title, font: FONT.f1 }}>
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3.5 py-2.5 rounded-lg text-sm outline-none box-border"
                  style={{ border: `1px solid ${c.input.border}`, backgroundColor: c.input.bg, color: c.input.text, font: FONT.f1 }}
                />
              </div>

              <div>
                <label className="block mb-1.5 text-sm font-medium" style={{ color: c.section.title, font: FONT.f1 }}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+91-9876543210"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-lg text-sm outline-none box-border"
                  style={{ border: `1px solid ${c.input.border}`, backgroundColor: c.input.bg, color: c.input.text, font: FONT.f1 }}
                />
              </div>

              <div>
                <label className="block mb-1.5 text-sm font-medium" style={{ color: c.section.title, font: FONT.f1 }}>
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="What is your message about?"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3.5 py-2.5 rounded-lg text-sm outline-none box-border"
                  style={{ border: `1px solid ${c.input.border}`, backgroundColor: c.input.bg, color: c.input.text, font: FONT.f1 }}
                />
              </div>

              <div>
                <label className="block mb-1.5 text-sm font-medium" style={{ color: c.section.title, font: FONT.f1 }}>
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  placeholder="Type your message here..."
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full px-3.5 py-2.5 rounded-lg text-sm outline-none box-border resize-y"
                  style={{ minHeight: '120px', border: `1px solid ${c.input.border}`, backgroundColor: c.input.bg, color: c.input.text, font: FONT.f1 }}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold cursor-pointer border-none transition-colors duration-200 disabled:opacity-50"
                style={{ backgroundColor: c.button.bg, color: c.button.text, font: FONT.f1 }}
                onMouseEnter={e => !isSubmitting && (e.currentTarget.style.backgroundColor = c.button.hover)}
                onMouseLeave={e => !isSubmitting && (e.currentTarget.style.backgroundColor = c.button.bg)}
              >
                {isSubmitting ? <FiLoader className="animate-spin" size={16} /> : <FiSend size={16} />}
                {isSubmitting ? "Sending Message..." : "Send Message"}
              </button>

            </form>
          </div>
        </div>

        <div
          className="mt-12 rounded-2xl px-4 sm:px-6 py-12 sm:py-16 flex flex-col items-center justify-center text-center min-h-48 mb-10"
          style={{ backgroundColor: c.map.bg }}
        >
          <FiMapPin size={40} color={c.map.icon} className="mb-4" />
          <h3 className="m-0 mb-2 text-sm font-semibold" style={{ color: c.map.text }}>
            Location Map
          </h3>
          <p className="m-0 text-xs" style={{ color: c.map.text }}>
            {libraryInfo?.address || '123 Library Street, City Center, State - 600001'}
          </p>
          <p className="mt-1 m-0 text-xs" style={{ color: c.map.text }}>
            (In production, Google Maps would be embedded here)
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <Footer />
    </div>
  );
};

export default Contact;
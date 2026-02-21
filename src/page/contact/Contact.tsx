import React, { useState } from 'react'
import { FONT, COLORS } from "../../constant/Constant";
import Footer from '../../layout/footer/Footer';
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiSend
} from 'react-icons/fi';

const Contact = () => {
  const c = COLORS.contact;

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const newForm = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      subject: form.subject,
      message: form.message,
    };
    newForm[e.target.name as keyof typeof newForm] = e.target.value;
    setForm(newForm);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // handle submission
  };

  return (
    <div className="min-h-screen" style={{ fontFamily: FONT.f1, backgroundColor: c.section.bg }}>

      {/* Hero Banner */}
      <div className="px-6 py-10" style={{ background: c.hero.gradient }}>
        <div className="max-w-7xl mx-auto">
          <h1 className="font-bold mb-2 mt-0" style={{ color: c.hero.title, fontSize: 'clamp(24px, 4vw, 32px)' }}>
            Contact Us
          </h1>
          <p className="text-base m-0" style={{ color: c.hero.subtitle }}>
            We're here to help. Get in touch with us
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid gap-8 items-start contact-grid" style={{ gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.4fr)' }}>

          {/* Left: Get In Touch */}
          <div>
            <h2 className="text-xl font-bold mt-0 mb-3" style={{ color: c.section.title }}>
              Get In Touch
            </h2>
            <p className="text-sm leading-relaxed mt-0 mb-7" style={{ color: c.section.subtitle }}>
              Have questions or need assistance? Feel free to reach out to us through any of the following channels. Our team is ready to help you.
            </p>

            {/* Info Cards */}
            <div className="flex flex-col gap-4">

              {/* Visit Us */}
              <div
                className="flex items-start gap-4 rounded-xl p-5"
                style={{ backgroundColor: c.card.bg, border: `1px solid ${c.card.border}`, boxShadow: c.card.shadow }}
              >
                <div className="flex items-center justify-center rounded-xl p-3 shrink-0" style={{ backgroundColor: c.icons.visitBg }}>
                  <FiMapPin size={20} color={c.icons.visitIcon} />
                </div>
                <div>
                  <h3 className="m-0 mb-1.5 text-sm font-semibold" style={{ color: c.card.title }}>Visit Us</h3>
                  <p className="m-0 text-xs leading-relaxed" style={{ color: c.card.text }}>
                    City Central Library<br />
                    123 Library Street, City Center<br />
                    State - 600001, India
                  </p>
                </div>
              </div>

              {/* Call Us */}
              <div
                className="flex items-start gap-4 rounded-xl p-5"
                style={{ backgroundColor: c.card.bg, border: `1px solid ${c.card.border}`, boxShadow: c.card.shadow }}
              >
                <div className="flex items-center justify-center rounded-xl p-3 shrink-0" style={{ backgroundColor: c.icons.callBg }}>
                  <FiPhone size={20} color={c.icons.callIcon} />
                </div>
                <div>
                  <h3 className="m-0 mb-1.5 text-sm font-semibold" style={{ color: c.card.title }}>Call Us</h3>
                  <p className="m-0 text-xs leading-relaxed" style={{ color: c.card.text }}>
                    Main: +91-44-1234-5678<br />
                    Reference Desk: +91-44-1234-5679<br />
                    Available during library hours
                  </p>
                </div>
              </div>

              {/* Email Us */}
              <div
                className="flex items-start gap-4 rounded-xl p-5"
                style={{ backgroundColor: c.card.bg, border: `1px solid ${c.card.border}`, boxShadow: c.card.shadow }}
              >
                <div className="flex items-center justify-center rounded-xl p-3 shrink-0" style={{ backgroundColor: c.icons.emailBg }}>
                  <FiMail size={20} color={c.icons.emailIcon} />
                </div>
                <div>
                  <h3 className="m-0 mb-1.5 text-sm font-semibold" style={{ color: c.card.title }}>Email Us</h3>
                  <p className="m-0 text-xs leading-relaxed" style={{ color: c.card.text }}>
                    General: info@citycentrallibrary.org<br />
                    Membership: membership@citycentrallibrary.org<br />
                    We respond within 24 hours
                  </p>
                </div>
              </div>

              {/* Opening Hours */}
              <div
                className="flex items-start gap-4 rounded-xl p-5"
                style={{ backgroundColor: c.card.bg, border: `1px solid ${c.card.border}`, boxShadow: c.card.shadow }}
              >
                <div className="flex items-center justify-center rounded-xl p-3 shrink-0" style={{ backgroundColor: c.icons.hoursBg }}>
                  <FiClock size={20} color={c.icons.hoursIcon} />
                </div>
                <div>
                  <h3 className="m-0 mb-1.5 text-sm font-semibold" style={{ color: c.card.title }}>Opening Hours</h3>
                  <p className="m-0 text-xs leading-relaxed" style={{ color: c.card.text }}>
                    Monday - Friday: 9:00 AM - 8:00 PM<br />
                    Saturday - Sunday: 10:00 AM - 6:00 PM<br />
                    Closed on public holidays
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Send Us a Message */}
          <div
            className="rounded-2xl p-8"
            style={{ backgroundColor: c.card.bg, border: `1px solid ${c.card.border}`, boxShadow: c.card.shadow }}
          >
            <h2 className="text-xl font-bold mt-0 mb-6" style={{ color: c.section.title }}>
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">

              <div>
                <label className="block mb-1.5 text-sm font-medium" style={{ color: c.section.title, fontFamily: FONT.f1 }}>
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
                  style={{ border: `1px solid ${c.input.border}`, backgroundColor: c.input.bg, color: c.input.text, fontFamily: FONT.f1 }}
                />
              </div>

              <div>
                <label className="block mb-1.5 text-sm font-medium" style={{ color: c.section.title, fontFamily: FONT.f1 }}>
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
                  style={{ border: `1px solid ${c.input.border}`, backgroundColor: c.input.bg, color: c.input.text, fontFamily: FONT.f1 }}
                />
              </div>

              <div>
                <label className="block mb-1.5 text-sm font-medium" style={{ color: c.section.title, fontFamily: FONT.f1 }}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+91-9876543210"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-lg text-sm outline-none box-border"
                  style={{ border: `1px solid ${c.input.border}`, backgroundColor: c.input.bg, color: c.input.text, fontFamily: FONT.f1 }}
                />
              </div>

              <div>
                <label className="block mb-1.5 text-sm font-medium" style={{ color: c.section.title, fontFamily: FONT.f1 }}>
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
                  style={{ border: `1px solid ${c.input.border}`, backgroundColor: c.input.bg, color: c.input.text, fontFamily: FONT.f1 }}
                />
              </div>

              <div>
                <label className="block mb-1.5 text-sm font-medium" style={{ color: c.section.title, fontFamily: FONT.f1 }}>
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
                  style={{ minHeight: '120px', border: `1px solid ${c.input.border}`, backgroundColor: c.input.bg, color: c.input.text, fontFamily: FONT.f1 }}
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold cursor-pointer border-none transition-colors duration-200"
                style={{ backgroundColor: c.button.bg, color: c.button.text, fontFamily: FONT.f1 }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = c.button.hover)}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = c.button.bg)}
              >
                <FiSend size={16} />
                Send Message
              </button>

            </form>
          </div>
        </div>

        {/* Location Map */}
        <div
          className="mt-10 rounded-2xl px-6 py-16 flex flex-col items-center justify-center text-center min-h-48"
          style={{ backgroundColor: c.map.bg }}
        >
          <FiMapPin size={40} color={c.map.icon} className="mb-4" />
          <h3 className="m-0 mb-2 text-sm font-semibold" style={{ color: c.map.text }}>
            Location Map
          </h3>
          <p className="m-0 text-xs" style={{ color: c.map.text }}>
            123 Library Street, City Center, State - 600001
          </p>
          <p className="mt-1 m-0 text-xs" style={{ color: c.map.text }}>
            (In production, Google Maps would be embedded here)
          </p>
        </div>
      </div>

      {/* Responsive styles */}
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
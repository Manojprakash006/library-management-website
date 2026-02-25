import React, { useState } from 'react'
import { FONT, COLORS } from "../../constant/Constant";
import { useNavigate } from 'react-router';

const Register = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState<formError>({});
    
      type formError = {
        fullName?: String,
        email?: String,
        phone?: string,
        address?: string,
        password?: string,
        confirmPassword?: string
      }
    
      const Validate = () => { 
    
        let newError: formError = {};
    
        if(!formData.fullName.trim()) newError.fullName = "Please Enter the FullName";
        if(!formData.email.trim()) newError.email = "Please Enter the Email";
        if(!formData.phone.trim()) newError.phone = "Please Enter the Phone Number";
        if(!formData.address.trim()) newError.address = "Please Enter the Address";
        if(!formData.password.trim()) newError.password = "Please Enter the Password";
        if(!formData.confirmPassword.trim()) newError.password = "Please confirm the Password";
        if (formData.password.trim() && formData.confirmPassword.trim() && formData.password !== formData.confirmPassword) {
            newError.confirmPassword = "Password Mismatched";}
  
        if(Object.keys(newError).length > 0) {
             setError(newError);
             return false;
          }
          setError({});
          return true;
      }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {

    e.preventDefault();

    if(!Validate()) return;

    setFormData({
      fullName: '',
    email: '',
    phone: '',
    address: '',
    password: '',
    confirmPassword: '',
    });
    setError({});
    console.log('Register', formData);

    navigate("/login");
    
  };

  const handleCancel = () => {
    console.log('Cancel');
    navigate(-1);
  };

  return (
    <>
      <div
        className="fixed inset-0 flex items-center justify-center z-50 px-4"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.45)' }}
      >
        <div
          className="relative bg-white rounded-2xl w-full mx-auto overflow-hidden"
          style={{
            boxShadow: '0px 20px 50px rgba(0,0,0,0.15)',
            border: '1px solid #E5E7EB',
            maxWidth: '560px',
          }}
        >
          <button
            onClick={handleCancel}
            className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors z-10"
            aria-label="Close"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M12 4L4 12M4 4l8 8" stroke="#6B7280" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>

          <form onSubmit={handleSubmit} className="px-6 pt-5 pb-5">
            <div className="flex items-start gap-3 mb-1 pr-6">
              <div
                className="shrink-0 w-9 h-9 rounded-xl flex items-center justify-center mt-0.5"
                style={{ backgroundColor: '#DCFCE7' }}
              >
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M10 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2c-4.418 0-7 2-7 3v1h14v-1c0-1-2.582-3-7-3Z"
                    fill="#16A34A"
                  />
                </svg>
              </div>
              <div>
                <h2
                  className="text-base font-semibold leading-tight"
                  style={{ color: COLORS?.registerModal?.header?.title ?? '#111827', fontFamily: FONT?.primary }}
                >
                  Register Now
                </h2>
                <p
                  className="text-xs mt-0.5 leading-snug"
                  style={{ color: COLORS?.registerModal?.header?.subtitle ?? '#6B7280', fontFamily: FONT?.primary }}
                >
                  Create your free library account to start browsing and requesting books
                </p>
              </div>
            </div>

            <div className="border-t border-gray-100 my-3" />

            <div className="flex flex-col gap-2">
              <div>
                <label
                  className="block text-xs font-medium mb-1"
                  style={{ color: COLORS?.registerModal?.header?.title ?? '#111827', fontFamily: FONT?.primary }}
                >
                  Full Name <span style={{ color: '#16A34A' }}>*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full rounded-lg px-3 py-2 text-sm outline-none transition-all"
                  style={{
                    backgroundColor: '#F3F4F6',
                    border: '1.5px solid #E5E7EB',
                    color: '#111827',
                    fontFamily: FONT?.primary,
                  }}
                  onFocus={e => (e.target.style.borderColor = '#16A34A')}
                  onBlur={e => (e.target.style.borderColor = '#E5E7EB')}
                />
                <p className="text-red-400 mt-1 flex gap-2 items-center">{error.fullName}</p>
              </div>

              <div>
                <label
                  className="block text-xs font-medium mb-1"
                  style={{ color: COLORS?.registerModal?.header?.title ?? '#111827', fontFamily: FONT?.primary }}
                >
                  Email Address <span style={{ color: '#16A34A' }}>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full rounded-lg px-3 py-2 text-sm outline-none transition-all"
                  style={{
                    backgroundColor: '#F3F4F6',
                    border: '1.5px solid #E5E7EB',
                    color: '#111827',
                    fontFamily: FONT?.primary,
                  }}
                  onFocus={e => (e.target.style.borderColor = '#16A34A')}
                  onBlur={e => (e.target.style.borderColor = '#E5E7EB')}
                />
                <p className="text-red-400 mt-1 flex gap-2 items-center">{error.email}</p>
              </div>

              <div>
                <label
                  className="block text-xs font-medium mb-1"
                  style={{ color: COLORS?.registerModal?.header?.title ?? '#111827', fontFamily: FONT?.primary }}
                >
                  Phone Number <span style={{ color: '#16A34A' }}>*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91-9876543210"
                  className="w-full rounded-lg px-3 py-2 text-sm outline-none transition-all"
                  style={{
                    backgroundColor: '#F3F4F6',
                    border: '1.5px solid #E5E7EB',
                    color: '#111827',
                    fontFamily: FONT?.primary,
                  }}
                  onFocus={e => (e.target.style.borderColor = '#16A34A')}
                  onBlur={e => (e.target.style.borderColor = '#E5E7EB')}
                />
                <p className="text-red-400 mt-1 flex gap-2 items-center">{error.phone}</p>
              </div>

              <div>
                <label
                  className="block text-xs font-medium mb-1"
                  style={{ color: COLORS?.registerModal?.header?.title ?? '#111827', fontFamily: FONT?.primary }}
                >
                  Address <span style={{ color: '#16A34A' }}>*</span>
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Your complete address"
                  rows={2}
                  className="w-full rounded-lg px-3 py-2 text-sm outline-none transition-all resize-none"
                  style={{
                    backgroundColor: '#F3F4F6',
                    border: '1.5px solid #E5E7EB',
                    color: '#111827',
                    fontFamily: FONT?.primary,
                  }}
                  onFocus={e => (e.target.style.borderColor = '#16A34A')}
                  onBlur={e => (e.target.style.borderColor = '#E5E7EB')}
                />
                <p className="text-red-400 mt-1 flex gap-2 items-center">{error.address}</p>
              </div>

              <div>
                <label
                  className="block text-xs font-medium mb-1"
                  style={{ color: COLORS?.registerModal?.header?.title ?? '#111827', fontFamily: FONT?.primary }}
                >
                  Password <span style={{ color: '#16A34A' }}>*</span>
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="At least 6 characters"
                  className="w-full rounded-lg px-3 py-2 text-sm outline-none transition-all"
                  style={{
                    backgroundColor: '#F3F4F6',
                    border: '1.5px solid #E5E7EB',
                    color: '#111827',
                    fontFamily: FONT?.primary,
                  }}
                  onFocus={e => (e.target.style.borderColor = '#16A34A')}
                  onBlur={e => (e.target.style.borderColor = '#E5E7EB')}
                />
                <p className="text-red-400 mt-1 flex gap-2 items-center">{error.password}</p>
              </div>

              <div>
                <label
                  className="block text-xs font-medium mb-1"
                  style={{ color: COLORS?.registerModal?.header?.title ?? '#111827', fontFamily: FONT?.primary }}
                >
                  Confirm Password <span style={{ color: '#16A34A' }}>*</span>
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Re-enter your password"
                  className="w-full rounded-lg px-3 py-2 text-sm outline-none transition-all"
                  style={{
                    backgroundColor: '#F3F4F6',
                    border: '1.5px solid #E5E7EB',
                    color: '#111827',
                    fontFamily: FONT?.primary,
                  }}
                  onFocus={e => (e.target.style.borderColor = '#16A34A')}
                  onBlur={e => (e.target.style.borderColor = '#E5E7EB')}
                />
                <p className="text-red-400 mt-1 flex gap-2 items-center">{error.confirmPassword}</p>
              </div>
            </div>

            <div
              className="mt-3 rounded-xl px-3.5 py-2.5"
              style={{
                backgroundColor: '#ECFDF5',
                border: '1px solid #A7F3D0',
              }}
            >
              <p
                className="text-xs font-semibold mb-1.5 flex items-center gap-1.5"
                style={{ color: '#065F46', fontFamily: FONT?.primary }}
              >
                <span>📚</span> What's Next?
              </p>
              <ul className="flex flex-col gap-1">
                {[
                  'Registration is instant & free',
                  'Browse collections and request books online',
                  'Admin will approve your book requests',
                  'Track your issued books in your dashboard',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <svg className="shrink-0 mt-0.5" width="13" height="13" viewBox="0 0 14 14" fill="none">
                      <circle cx="7" cy="7" r="7" fill="#16A34A" fillOpacity="0.15" />
                      <path d="M4.5 7l1.8 1.8L9.5 5.5" stroke="#16A34A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span
                      className="text-xs leading-snug"
                      style={{ color: '#047857', fontFamily: FONT?.primary }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-end gap-3 mt-3">
              <button
                onClick={handleCancel}
                className="px-5 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-gray-200"
                style={{
                  backgroundColor: '#F3F4F6',
                  color: COLORS?.registerModal?.button?.secondaryText ?? '#111827',
                  border: '1px solid #D1D5DB',
                  fontFamily: FONT?.primary,
                }}
              >
                Cancel
              </button>
              <button type='submit'
                className="flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium transition-colors"
                style={{
                  backgroundColor: '#16A34A',
                  color: '#FFFFFF',
                  fontFamily: FONT?.primary,
                }}
                onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = '#15803D')}
                onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = '#16A34A')}
              >
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0 1.5c-3.314 0-5.5 1.5-5.5 2.25V13h11v-1.25c0-.75-2.186-2.25-5.5-2.25Z"
                    fill="#FFFFFF"
                  />
                  <path d="M12 5.5l1.5 1.5-3 3" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Register Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
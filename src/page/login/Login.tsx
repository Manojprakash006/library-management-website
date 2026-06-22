import React, { useState } from 'react'
import { FONT, COLORS } from "../../constant/Constant";
import { useNavigate } from 'react-router';

const Login = ({ }: { onClose?: () => void }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState<formError>({});
  
    type formError = {
      email?: String,
      password?: String,
    }
  
    const Validate = () => { 
  
      let newError: formError = {};
  
      if(!email.trim()) newError.email = "Please Enter the Email";
      if(!password.trim()) newError.password = "Please Enter the Password";
  
      if(Object.keys(newError).length > 0) {
           setError(newError);
           return false;
        }
        setError({});
        return true;
    }

  const HandleClose = () => {
    navigate(-1);
  }

  const HandleSubmit = () => {
    if(!Validate()) return;
    setEmail("");
    setPassword("");
    navigate("/");
    console.log("Login Success");
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      style={{ backgroundColor: COLORS.loginModal.overlay }}
    >
      <div 
        className="relative w-full max-w-md rounded-2xl p-6 sm:p-8"
        style={{
          backgroundColor: COLORS.loginModal.modal.bg,
          border: `1px solid ${COLORS.loginModal.modal.border}`,
          boxShadow: COLORS.loginModal.modal.shadow,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 w-7 h-7 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          onClick={HandleClose}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M1 1L13 13M13 1L1 13"
              stroke={COLORS.loginModal.header.closeIcon}
              strokeWidth="1.75"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div className="flex items-center gap-3 mb-1">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
            style={{ backgroundColor: COLORS.loginModal.header.iconBg }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zM12 14c-5.514 0-9 2.515-9 4.5V20h18v-1.5C21 16.515 17.514 14 12 14z"
                fill={COLORS.loginModal.header.iconColor}
              />
            </svg>
          </div>
          <h2
            className="text-lg font-semibold"
            style={{ fontFamily: FONT.primary, color: COLORS.loginModal.header.title }}
          >
            Member Login
          </h2>
        </div>

        <p
          className="text-sm mb-6 ml-12"
          style={{ fontFamily: FONT.secondary, color: COLORS.loginModal.header.subtitle }}
        >
          Enter your credentials to access your library account
        </p>

        <div className="space-y-4">
          <div>
            <label
              className="block text-sm font-medium mb-1.5"
              style={{ fontFamily: FONT.secondary, color: COLORS.loginModal.header.title }}
            >
              Email Address
            </label>
            <input
              type="email"
              placeholder="your.email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
              className="w-full rounded-lg px-4 py-2.5 text-sm outline-none transition-all"
              style={{
                fontFamily: FONT.secondary,
                backgroundColor: COLORS.loginModal.input.bg,
                border: `1.5px solid ${emailFocused ? COLORS.loginModal.input.focus : COLORS.loginModal.input.border}`,
                color: COLORS.loginModal.input.text,
                boxShadow: emailFocused ? `0 0 0 3px ${COLORS.loginModal.input.focus}22` : 'none',
              }}
            />
            <p className="text-red-400 mt-1 flex gap-2 items-center">{error.email}</p>
          </div>

          <div>
            <label
              className="block text-sm font-medium mb-1.5"
              style={{ fontFamily: FONT.secondary, color: COLORS.loginModal.header.title }}
            >
              Password
            </label>
            <input
              type= {password? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setPasswordFocused(true)}
              onBlur={() => setPasswordFocused(false)}
              className="w-full rounded-lg px-4 py-2.5 text-sm outline-none transition-all"
              style={{
                fontFamily: FONT.secondary,
                backgroundColor: COLORS.loginModal.input.bg,
                border: `1.5px solid ${passwordFocused ? COLORS.loginModal.input.focus : COLORS.loginModal.input.border}`,
                color: COLORS.loginModal.input.text,
                boxShadow: passwordFocused ? `0 0 0 3px ${COLORS.loginModal.input.focus}22` : 'none',
              }}
            />
            <p className="text-red-400 mt-1 flex gap-2 items-center">{error.password}</p>
          </div>

          <div className="flex justify-end -mt-1">
            <button
              onClick={() => navigate('/forgot-password')}
              className="text-sm transition-colors"
              style={{
                fontFamily: FONT.secondary,
                color: COLORS.loginModal.link.color,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.loginModal.link.hover)}
              onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.loginModal.link.color)}
            >
              Forgot password?
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3 mt-6">
          <button
            className="flex-1 py-2.5 rounded-lg text-sm font-medium transition-all border"
            style={{
              fontFamily: FONT.secondary,
              backgroundColor: COLORS.loginModal.button.secondaryBg,
              color: COLORS.loginModal.button.secondaryText,
              borderColor: COLORS.loginModal.button.secondaryBorder,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#E5E7EB')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = COLORS.loginModal.button.secondaryBg)}
            onClick={HandleClose}
          >
            Cancel
          </button>

          <button 
            onClick={HandleSubmit}
            className="flex-1 py-2.5 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-all"
            style={{
              fontFamily: FONT.secondary,
              backgroundColor: COLORS.loginModal.button.primaryBg,
              color: COLORS.loginModal.button.primaryText,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = COLORS.loginModal.button.primaryHover)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = COLORS.loginModal.button.primaryBg)}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4M10 17l5-5-5-5M15 12H3"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Login
          </button>
        </div>    
      </div>
    </div>
  );
};

export default Login;
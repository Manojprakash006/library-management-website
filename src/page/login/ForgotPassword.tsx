import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { forgotPasswordThunk } from '../../store/thunks/authThunk';
import type { AppDispatch } from '../../store/store';
import { FONT, COLORS } from "../../constant/Constant";
import toast from 'react-hot-toast';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) {
            toast.error('Please enter your email');
            return;
        }

        setLoading(true);
        try {
            const resultAction = await dispatch(forgotPasswordThunk(email));
            if (forgotPasswordThunk.fulfilled.match(resultAction)) {
                toast.success('Password reset link sent to your email!', {
                    icon: '📧',
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                });
                setIsSubmitted(true);
            } else {
                toast.error((resultAction.payload as string) || 'Something went wrong');
            }
        } catch (err) {
            toast.error('Failed to send reset link');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 px-4" style={{ backgroundColor: COLORS.loginModal.overlay }}>
            <div className="relative bg-white rounded-2xl w-full mx-auto overflow-hidden animate-in fade-in zoom-in duration-300" 
                 style={{ 
                    backgroundColor: COLORS.loginModal.modal.bg,
                    boxShadow: COLORS.loginModal.modal.shadow, 
                    border: `1px solid ${COLORS.loginModal.modal.border}`, 
                    maxWidth: '400px' 
                 }}>
                <button 
                    onClick={() => navigate(-1)} 
                    className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors z-10"
                >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M1 1L13 13M13 1L1 13" stroke={COLORS.loginModal.header.closeIcon} strokeWidth="1.75" strokeLinecap="round" />
                    </svg>
                </button>

                <div className="px-6 pt-8 pb-8">
                    {!isSubmitted ? (
                        <>
                            <div className="text-center mb-6">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: COLORS.loginModal.header.iconBg }}>
                                    <span className="text-2xl">🔐</span>
                                </div>
                                <h2 className="text-xl font-bold" style={{ fontFamily: FONT.primary, color: COLORS.loginModal.header.title }}>Forgot Password?</h2>
                                <p className="text-sm mt-1" style={{ fontFamily: FONT.secondary, color: COLORS.loginModal.header.subtitle }}>Enter your email address and we'll send you a link to reset your password.</p>
                            </div>

                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label className="block text-xs font-medium mb-1" style={{ fontFamily: FONT.secondary, color: COLORS.loginModal.header.title }}>Email Address</label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="name@example.com"
                                        className="w-full rounded-lg px-3 py-2 text-sm outline-none transition-all"
                                        style={{
                                            fontFamily: FONT.secondary,
                                            backgroundColor: COLORS.loginModal.input.bg,
                                            border: `1.5px solid ${COLORS.loginModal.input.border}`,
                                            color: COLORS.loginModal.input.text,
                                        }}
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full rounded-lg py-2.5 text-sm font-medium transition-all flex items-center justify-center gap-2"
                                    style={{
                                        fontFamily: FONT.secondary,
                                        backgroundColor: COLORS.loginModal.button.primaryBg,
                                        color: COLORS.loginModal.button.primaryText,
                                    }}
                                >
                                    {loading ? (
                                        <>
                                            <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </>
                                    ) : 'Send Reset Link'}
                                </button>

                                <div className="mt-4 text-center">
                                    <button 
                                        type="button"
                                        onClick={() => navigate(-1)}
                                        className="text-sm font-medium hover:underline transition-all"
                                        style={{ color: COLORS.loginModal.link.color, fontFamily: FONT.secondary }}
                                    >
                                        Back to Login
                                    </button>
                                </div>
                            </form>
                        </>
                    ) : (
                        <div className="text-center py-4 animate-in slide-in-from-bottom-4 duration-500">
                            <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4 border border-green-100">
                                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2" style={{ fontFamily: FONT.primary, color: COLORS.loginModal.header.title }}>Check your mail</h3>
                            <p className="text-sm mb-6 px-2" style={{ fontFamily: FONT.secondary, color: COLORS.loginModal.header.subtitle }}>
                                We have sent a password reset link to <br/>
                                <span className="font-semibold" style={{ color: COLORS.loginModal.header.title }}>{email}</span>
                            </p>
                            <div className="space-y-3">
                                <button
                                    onClick={() => navigate(-1)}
                                    className="w-full rounded-lg py-2.5 text-sm font-medium transition-all"
                                    style={{
                                        fontFamily: FONT.secondary,
                                        backgroundColor: COLORS.loginModal.button.primaryBg,
                                        color: COLORS.loginModal.button.primaryText,
                                    }}
                                >
                                    Return to Login
                                </button>
                                <button
                                    onClick={() => setIsSubmitted(false)}
                                    className="text-sm font-medium hover:underline block mx-auto"
                                    style={{ color: COLORS.loginModal.link.color, fontFamily: FONT.secondary }}
                                >
                                    Didn't receive code? Resend
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;

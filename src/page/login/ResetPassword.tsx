import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetPasswordThunk } from '../../store/thunks/authThunk';
import type { AppDispatch } from '../../store/store';
import { FONT, COLORS } from "../../constant/Constant";
import toast from 'react-hot-toast';

const ResetPassword = () => {
    const [searchParams] = useSearchParams();
    const token = searchParams.get('token');
    
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!token) {
            toast.error('Invalid or missing reset token');
            return;
        }

        if (password.length < 6) {
            toast.error('Password must be at least 6 characters');
            return;
        }

        if (password !== confirmPassword) {
            toast.error('Passwords do not match');
            return;
        }

        setLoading(true);
        try {
            const resultAction = await dispatch(resetPasswordThunk({ token, newPassword: password }));
            if (resetPasswordThunk.fulfilled.match(resultAction)) {
                toast.success('Password reset successfully! You can now login.', {
                    duration: 4000,
                    icon: '✅',
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                });
                setTimeout(() => navigate('/login'), 2000);
            } else {
                toast.error((resultAction.payload as string) || 'Reset failed');
            }
        } catch (err) {
            toast.error('Failed to reset password');
        } finally {
            setLoading(false);
        }
    };

    if (!token) {
        return (
            <div className="flex items-center justify-center min-h-[80vh]" style={{ backgroundColor: 'transparent' }}>
                <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 text-center max-w-md mx-auto animate-in fade-in zoom-in duration-300">
                    <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">⚠️</div>
                    <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: FONT.primary, color: COLORS.loginModal.header.title }}>Invalid Link</h2>
                    <p className="text-gray-500 mb-6" style={{ fontFamily: FONT.secondary }}>The password reset link is invalid, broken, or has expired. Please request a new one.</p>
                    <button 
                        onClick={() => navigate('/forgot-password')} 
                        className="w-full py-3 rounded-xl font-semibold transition-all"
                        style={{ 
                            backgroundColor: COLORS.loginModal.button.primaryBg, 
                            color: COLORS.loginModal.button.primaryText,
                            fontFamily: FONT.secondary 
                        }}
                    >
                        Request New Link
                    </button>
                    <button 
                        onClick={() => navigate('/')} 
                        className="mt-4 text-sm font-medium hover:underline"
                        style={{ color: COLORS.loginModal.link.color, fontFamily: FONT.secondary }}
                    >
                        Back to Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 px-4" style={{ backgroundColor: COLORS.loginModal.overlay }}>
            <div className="relative bg-white rounded-2xl w-full mx-auto overflow-hidden animate-in fade-in zoom-in duration-300" 
                 style={{ 
                    backgroundColor: COLORS.loginModal.modal.bg,
                    boxShadow: COLORS.loginModal.modal.shadow, 
                    border: `1px solid ${COLORS.loginModal.modal.border}`, 
                    maxWidth: '400px' 
                 }}>
                <div className="px-6 pt-8 pb-8">
                    <div className="text-center mb-8">
                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-50" style={{ backgroundColor: COLORS.loginModal.header.iconBg }}>
                            <span className="text-2xl animate-spin-slow">🔄</span>
                        </div>
                        <h2 className="text-2xl font-bold" style={{ fontFamily: FONT.primary, color: COLORS.loginModal.header.title }}>Set New Password</h2>
                        <p className="text-sm mt-2 px-4" style={{ fontFamily: FONT.secondary, color: COLORS.loginModal.header.subtitle }}>Your identity has been verified. Please choose a strong new password.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-1.5">
                            <label className="block text-xs font-semibold uppercase tracking-wider ml-1" style={{ fontFamily: FONT.secondary, color: COLORS.loginModal.header.subtitle }}>New Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Min 6 characters"
                                className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all focus:ring-2 focus:ring-purple-200"
                                style={{
                                    fontFamily: FONT.secondary,
                                    backgroundColor: COLORS.loginModal.input.bg,
                                    border: `1.5px solid ${COLORS.loginModal.input.border}`,
                                    color: COLORS.loginModal.input.text,
                                }}
                                required
                            />
                        </div>

                        <div className="space-y-1.5">
                            <label className="block text-xs font-semibold uppercase tracking-wider ml-1" style={{ fontFamily: FONT.secondary, color: COLORS.loginModal.header.subtitle }}>Confirm New Password</label>
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Re-enter password"
                                className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all focus:ring-2 focus:ring-purple-200"
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
                            className="w-full rounded-xl py-3.5 text-sm font-bold transition-all shadow-lg hover:shadow-purple-200 flex items-center justify-center gap-2"
                            style={{
                                fontFamily: FONT.secondary,
                                backgroundColor: COLORS.loginModal.button.primaryBg,
                                color: COLORS.loginModal.button.primaryText,
                            }}
                        >
                            {loading ? (
                                <>
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Updating...
                                </>
                            ) : 'Update Password'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;

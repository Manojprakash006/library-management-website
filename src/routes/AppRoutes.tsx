import { Route, Routes } from 'react-router-dom'
import Navbar from '../layout/navbar/Navbar';
import About from '../page/about us/About';
import Collection from '../page/collection/Collection';
import Contact from '../page/contact/Contact';
import Event from '../page/eventss/Event';
import HomeAboutPage from '../page/home/Home';
import Login from '../models/loginmodal/loginpopup';
import Membership from '../page/membership/Membership';
import RegisterForm from '../models/registerpopup/registerForm';
import Services from "../page/servicess/Services";
import ForgotPassword from '../page/login/ForgotPassword';
import ResetPassword from '../page/login/ResetPassword';
import { useEffect } from 'react';
import { useAppDispatch } from '../store/hooks';
import { fetchLibraryInfoThunk } from '../Features/Contact/ContactThunk';
import ScrollToTop from '../page/ScrollToTop';
import { socketService } from '../services/socketService';

export const AppRoutes = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchLibraryInfoThunk());

    // Connect and listen for global updates
    socketService.connect();
    socketService.on('library_info_updated', () => {
      dispatch(fetchLibraryInfoThunk());
    });

    return () => {
      socketService.off('library_info_updated');
    };
  }, [dispatch]);

  return (
    <>
      <ScrollToTop />
      <Navbar  />
      
      <Routes>
        <Route path="/" element={<HomeAboutPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/event" element={<Event />} />
        <Route path="/login" element={<Login />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </>
  )
}

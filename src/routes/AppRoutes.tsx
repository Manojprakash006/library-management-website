import React, { useState } from 'react'
import { Route, Routes } from 'react-router'
import Navbar from '../layout/navbar/Navbar';
// import Header from "./layout/header/Header";
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
import ScrollToTop from '../page/ScrollToTop';

export const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar  />
      {/* <Header /> */}
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

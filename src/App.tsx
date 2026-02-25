import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import  Navbar  from "./layout/navbar/Navbar";
// import Header from "./layout/header/Header";
import About from "./page/about us/About";
import Collection from "./page/collection/Collection";
import  Contact from "./page/contact/Contact";
import Event from "./page/eventss/Event";
import Home from "./page/home/Home";
import Login from "./page/login/Login";
import Membership from "./page/membership/Membership";
import Register from "./page/register/Register";
import Services from "./page/servicess/Services";
import ScrollToTop from './page/ScrollToTop';

const App = () => {

  return (
<BrowserRouter>
  <ScrollToTop />
  <Navbar  />
  {/* <Header /> */}
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/collection" element={<Collection />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/event" element={<Event />} />
    <Route path="/login" element={<Login />} />
    <Route path="/membership" element={<Membership />} />
    <Route path="/register" element={<Register />} />
    <Route path="/services" element={<Services />} />
  </Routes>
</BrowserRouter> 

)
}

export default App
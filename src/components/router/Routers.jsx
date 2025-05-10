import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from "../Home-page/Home";
import Policy from '../policy_details/Policy';
import InsurancePage from '../InsuranceProduct/InsurancePage';
import Financepage from '../Financialservice/Financepage';
import SIPDetails from '../pages/Financepages/SIPDetails.jsx'
import LoanDetails from '../pages/Financepages/LoanDetails.jsx';
import Loan from '../pages/Financepages/Loan.jsx';
import BlogSection from '../Blog/BlogSection.jsx';
import BlogDetails from '../pages/blogsdetails/BlogDetails.jsx';
import Contact from '../ContactUs.js/Contact.jsx';
import AboutHero from '../pages/AboutUsPaged/AboutHero.jsx';
import AboutUs from '../AboutUs/AboutUs.jsx';
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/policy/:id" element={<Policy/>} />
      <Route path='/insurancepage' element={<InsurancePage/>}/>
      <Route path='/financePage'   element={<Financepage/>}/>
      <Route path='/loan'   element={<Loan/>}/>
      <Route path='/sipdetails/:id' element={<SIPDetails/>}/>
      <Route path='/loanDetails/:id' element={<LoanDetails/>}/>
      <Route path='/blog' element={<BlogSection/>}/>
      <Route path='/blogDetails/:id' element={<BlogDetails/>}/>
      <Route path ='/contact' element={<Contact/>}/>
      <Route path ='/Aboutus' element={<AboutUs/>}/>
      
    </Routes>
  );
};

export default Routers;

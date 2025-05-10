import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/newlogo.png';

const Footer = () => {
  const [insuranceData, setInsuranceData] = useState([]);
  const [sipData, setSipData] = useState([]);
  const [loanData, setLoanData] = useState([]);

  useEffect(() => {
    // Fetch Insurance
    fetch('http://localhost:4000/api/v1/insurance/allInsurance')
      .then(res => res.json())
      .then(data => setInsuranceData(data.data))
      .catch(err => console.log('Insurance API Error:', err));

    // Fetch SIP
    fetch('http://localhost:4000/api/v1/sip/getallsip')
      .then(res => res.json())
      .then(data => setSipData(data.data))
      .catch(err => console.log('SIP API Error:', err));

    // Fetch Loan
    fetch('http://localhost:4000/api/v1/finance/getalloan')
      .then(res => res.json())
      .then(data => setLoanData(data.data))
      .catch(err => console.log('Loan API Error:', err));
  }, []);

  const footerSections = [
    {
      title: 'Insurance',
      links: insuranceData.map(item => ({
        name: item.name,
        url: `/policy/${item._id}`,
      })),
    },
    {
      title: 'SIP Plans',
      links: sipData.map(item => ({
        name: item.name,
        url: `/sipdetails/${item._id}`,
      })),
    },
    {
      title: 'Financial Services',
      links: loanData.map(item => ({
        name: item.name,
        url: `/loanDetails/${item._id}`,
      })),
    },
    {
      title: 'Resources',
      links: [
        { name: 'FAQs', url: '/' },
        { name: 'Support', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: 'Careers', url: '/' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', url: '/Aboutus' },
        { name: 'Contact', url: '/contact' },
        { name: 'Terms of Use', url: '/terms' },
        { name: 'Privacy Policy', url: '/privacy' },
        { name: 'Ahmedabad,inda', url: '/' },
        { name: '(91+)00000000000', url: '/' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Facebook', url: 'https://facebook.com', iconPath: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' },
    { name: 'Twitter', url: 'https://twitter.com', iconPath: 'M23 3a10.9 10.9 0 0 1-3.14 1.53...' },
    { name: 'Instagram', url: 'https://instagram.com', iconPath: 'M16 0H8a8 8 0 0 0-8 8v8a8 8 0 0 0...' },
    { name: 'LinkedIn', url: 'https://linkedin.com', iconPath: 'M16 8a6 6 0 0 1 6 6v7h-4v-7...' },
  ];

  return (
    <footer className="text-white body-font" style={{ background: 'linear-gradient(135deg, #8F87F1 0%, #6B63D6 100%)' }}>
      <div className="container md:px-20 px-5 py-12 mx-auto flex flex-col md:flex-row items-start justify-center">
        {/* Brand Section */}
        <div className="w-full md:w-80 mb-10 md:mb-0 text-center md:text-left">
          <Link
            to="/"
            className="flex items-center justify-center md:justify-start text-white text-2xl font-bold transition duration-300 hover:opacity-90"
            aria-label="Insurance Hub Home"
          >
            <div className='flex items-center'>
              <img src={logo} alt="Logo" className='h-16 md:h-24 w-auto' />
            </div>
            <span>Cover Mitra</span>
          </Link>
          <p className="mt-4 text-base text-indigo-100 leading-relaxed max-w-xs mx-auto md:mx-0">
            Secure your life, health, and wealth – all in one place.
          </p>
        </div>

        {/* Navigation Sections */}
        <div className="w-full mt-8">
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:pl-12">
            {footerSections.map((section, index) => (
              <div key={index} className="px-2">
                <h2 className="font-semibold text-lg text-white tracking-wide mb-3">
                  {section.title}
                </h2>
                <nav aria-label={`${section.title} navigation`} className="list-none space-y-2">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <Link
                        to={link.url}
                        className="text-indigo-100 text-base hover:text-white hover:translate-x-1 transition duration-300 block"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ background: 'linear-gradient(135deg, #141434 0%, #1A1A4A 100%)' }}>
        <div className="container mx-auto py-6 px-4 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-indigo-100 text-sm text-center sm:text-left mb-4 sm:mb-0">
            © 2025 Insurance Hub — All Rights Reserved
          </p>
          <div className="inline-flex space-x-4" aria-label="Social media links">
            {socialLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-100 hover:text-white hover:-translate-y-1 transition duration-300"
                aria-label={`Visit our ${item.name} page`}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d={item.iconPath} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

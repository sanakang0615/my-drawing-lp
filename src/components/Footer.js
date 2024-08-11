// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="text-gray-800 py-10 text-center">
      <p className='grey-qo-regular'>&copy; {new Date().getFullYear()} Sana Kang. All Rights Reserved.</p>
      <div className="mt-4">
        {/* <a href="https://www.instagram.com/yourprofile" className="text-gray-400 hover:text-white mx-2">
          Instagram
        </a>
        <a href="https://www.twitter.com/yourprofile" className="text-gray-400 hover:text-white mx-2">
          Twitter
        </a> */}
        {/* Add more social links as necessary */}
      </div>
    </footer>
  );
};

export default Footer;

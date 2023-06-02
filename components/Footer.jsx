import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-purple-300 text-white py-6 px-[30rem]">
      <div className="container mx-auto text-center">
        <p className="text-sm mb-4 font-bold">
          &copy; {new Date().getFullYear()} FIT4LYFE. All rights reserved.
        </p>
      </div>
      {/* <style jsx>{`
    footer {
      width: 100%;
      left: 0;
      position: fixed;
      bottom: 0;
    }
  `}</style> */}
    </footer>
  );
};

export default Footer;
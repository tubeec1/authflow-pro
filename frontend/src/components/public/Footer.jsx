import React from "react";

const Footer = () => {
  return (
    <footer className="text-center py-6 text-gray-500 text-xs sm:text-sm px-4">
      © {new Date().getFullYear()} AuthFlow. All rights reserved.
    </footer>
  );
};

export default Footer;

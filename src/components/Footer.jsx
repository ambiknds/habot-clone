import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto text-center text-gray-600 px-4">
        <p className="text-sm">&copy; 2024 HABOT. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="#about"
            className="hover:text-blue-700 transition duration-200"
          >
            About
          </a>
          <a
            href="#faq"
            className="hover:text-blue-700 transition duration-200"
          >
            FAQ
          </a>
          <a
            href="#privacy"
            className="hover:text-blue-700 transition duration-200"
          >
            Data Privacy
          </a>
          <a
            href="#terms"
            className="hover:text-blue-700 transition duration-200"
          >
            Terms
          </a>
          <a
            href="#accessibility"
            className="hover:text-blue-700 transition duration-200"
          >
            Accessibility
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

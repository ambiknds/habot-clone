import React from 'react';

function Header() {
  return (
    <header className="bg-gray-100 p-4 shadow-lg sticky top-0 z-50">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-4">
        <h1 className="text-2xl font-bold text-blue-800">HABOT</h1>
        <ul className="flex space-x-8 text-lg text-gray-600 font-medium">
          <li className="hover:text-blue-700 cursor-pointer">Find Suppliers</li>
          <li className="hover:text-blue-700 cursor-pointer">
            Find Service Tags
          </li>
          <li className="hover:text-blue-700 cursor-pointer">
            Login / Sign Up
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: "#hero", label: "Home" },
    { path: "#about", label: "About" },
    { path: "#experience", label: "Experience" },
    { path: "#projects", label: "Projects" },
    { path: "#contact", label: "Contact" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-extrabold text-red-600 tracking-wide drop-shadow-md">
          NOOR UL HUDA
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 font-medium text-red-600">
          {navItems.map(({ path, label }) => (
            <a
              key={path}
              href={path}
              onClick={() => setIsOpen(false)}
              className="hover:text-red-800 transition duration-300"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-red-600 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden px-4 pb-4 space-y-3 font-medium text-red-600 bg-white shadow-inner">
          {navItems.map(({ path, label }) => (
            <a
              key={path}
              href={path}
              onClick={() => setIsOpen(false)}
              className="block w-full text-left hover:text-red-800 transition"
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;

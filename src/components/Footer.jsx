import React from "react";

function Footer() {
  return (
    <footer className="bg-white text-red-600 text-center py-4 shadow-inner border-t border-red-100">
      <p className="mb-2">
        <a href="https://www.adorittech.com/" className="hover:underline hover:text-red-800 transition">
          adorittech.com
        </a>
      </p>
      <p>&copy; {new Date().getFullYear()} Noor. All rights reserved.</p>
    </footer>
  );
}

export default Footer;

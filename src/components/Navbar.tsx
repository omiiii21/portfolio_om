import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">My Portfolio</h1>
      <ul className="flex space-x-4">
        <li><a href="#about" className="hover:text-yellow-400">About</a></li>
        <li><a href="#projects" className="hover:text-yellow-400">Projects</a></li>
        <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

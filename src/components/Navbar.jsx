import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar bg-blue-600 text-white p-4">
      <h1 className="text-xl">Welcome to the Big Boys</h1>
      <ul className="flex space-x-4">
        <li><Link to="/">Data Recovery</Link></li>
        <li><Link to="/meetings">Meetings</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

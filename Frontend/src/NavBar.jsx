import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-blue-300">
              FormPage
            </Link>
          </li>
          <li>
            <Link to="/prompt-result" className="text-white hover:text-blue-300">
              PromptResultPage
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

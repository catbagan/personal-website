import { Link } from 'gatsby';
import React from 'react';
import './header.css';

const Header: React.FunctionComponent = () => (
  <header>
    <div className="container">
      <div className="logo">
        <Link to="/">Daniel Catbagan</Link>
      </div>
      <div className="navigation">
        <nav>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </div>
  </header>
);

export default Header;

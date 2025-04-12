import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <ul>
      <Link to="/home">Home</Link>

        <li><Link to="/addblog">Addblog</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar
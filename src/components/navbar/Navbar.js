import React from "react";
import { Link } from "react-router-dom";

import './_navbar.scss';

function Navbar() {
  return (
    <div>
      <nav className='navbar'>
        <Link to="/home"><div>Accueil</div></Link>
        <Link to="/about" ><div>A Propos</div></Link>
      </nav>
    </div>
  )
}

export default Navbar
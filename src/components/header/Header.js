import React from "react";
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';
import Navbar from '../navbar/Navbar';

import './_header.scss';

function Header() {
    return (
        <header>
            <Link to="/home">
                <div>
                    <img className='logo' src={logo} alt='Logo Kasa' />
                </div>
            </Link>
            <Navbar />  
        </header>
    )
}
  
export default Header;
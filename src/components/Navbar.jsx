import React from 'react';


const Navbar = () => {
    return (
        <nav className="navbar flex justify-between items-center bg-gradient-to-r from-green-400 to-green-600 px-4 py-2">
            <div className="navbar-logo text-2xl font-bold text-white">
               &lt; PassOP /&gt;
            </div>
            <ul className="navbar-links flex space-x-4 text-white font-semibold px-1">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './subpages/Home';
import About from './subpages/About';
import Contact from './subpages/Contact';
import Portfolio from './subpages/Portfolio'
import './NavBar.css';

function NavBar(){
    return (
        <div>
            <nav>
                <Link to="/">Home page</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/about">About me</Link>
                <Link to="contact">Contact</Link>
            </nav>

        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        </Routes>

        </div>
    );
}

export default NavBar;
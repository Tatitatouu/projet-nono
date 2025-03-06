import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; 
import logo from "../../assets/logoNo/logo-full-black.webp";
import "./header.css";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <img src={logo} alt="Logo Noémie" className="logo" />
            <div className="menu-icon" onClick={toggleMenu}>
                {isMenuOpen ? <FaTimes /> : <FaBars />}
            </div>
            <nav className={`nav ${isMenuOpen ? "show" : ""}`}>
                <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")}>
                    Accueil
                </NavLink>
                <NavLink to="/about" className={({ isActive }) => (isActive ? "active-link" : "")}>
                    À Propos
                </NavLink>
                <NavLink to="/transfo-avis" className={({ isActive }) => (isActive ? "active-link" : "")}>
                    Transformations/Avis
                </NavLink>
                <NavLink to="/contact" className={({ isActive }) => (isActive ? "active-link" : "")}>
                    Contact
                </NavLink>
            </nav>
        </header>
    );
}

export default Header;
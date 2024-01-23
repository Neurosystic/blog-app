import React, {useState} from "react";
import "../Navbar/navbar.css";
import menuIcon from "../../assets/nav/menuIcon.png";
import closeIcon from "../../assets/nav/closeIcon.png";

export const Navbar = () =>{
    const [menuOpen, setMenuOpen] = useState(false);

    return <nav className="navbar">
        <a className="title" href="/">Portfolio</a>
        <div className="menu">
            <img className="menuBtn" src={menuOpen ? closeIcon : menuIcon } alt="menu-button" onClick={()=> setMenuOpen(!menuOpen)} />
            <ul className={`menuItems ${menuOpen ? "menuOpen": ""}`} onClick={()=> setMenuOpen(false)}>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>
}
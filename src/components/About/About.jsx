import React from "react";
import "../About/About.css";
import aboutImage from "../../assets/about/aboutImage.png";
import cursorIcon from "../../assets/about/cursorIcon.png";
import serverIcon from "../../assets/about/serverIcon.png";
import uiIcon from "../../assets/about/uiIcon.png";

export const About = () =>{
    return (
        <section className="container" id="about">
            <h2 className="titlw">About</h2>
            <div className="content">
                <img className="aboutImage" src={aboutImage} alt="About Image" />
                <ul className="aboutItems">
                    <li className="aboutItem">
                        <img src={cursorIcon} alt="Cursor Icon" />
                        <div className="aboutItemText">
                            <h3>Frontend Developer</h3>
                            <p>Description</p>
                        </div>
                    </li>
                    <li className="aboutItem">
                        <img src={serverIcon} alt="Server Icon" />
                        <div className="aboutItemText">
                            <h3>Backend Developer</h3>
                            <p>Description</p>
                        </div>
                    </li>
                    <li className="aboutItem">
                        <img src="" alt="" />
                        <div className="aboutItemText">
                            <h3>Title</h3>
                            <p>Description</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}
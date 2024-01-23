import React from "react";
import "../Hero/Hero.css";
import heroImage from "../../assets/hero/heroImage.png";

export const Hero = () => {
    return <section className="container">
        <div className="content">
            <h1 className="title">Hi, I'm Xinyu</h1>
            <p className="description">Briefing of experience and tech stack</p>
            <a className="contactBtn" href="mailto:soph.c0366@gmail.com">Contact Me</a>
        </div>
        <img className="heroImage" src={heroImage} alt="Hero Image" />
        <div className="topBlur"></div>
        <div className="bottomBlur"></div>
    </section>
}
import React from "react";
import "../Experience/Experience.css";
import skills from "../../data/skills.json";
import css from "../../assets/skills/css.png";
import html from "../../assets/skills/html.png";
import node from "../../assets/skills/node.png";
import react from "../../assets/skills/react.png";

export const Experience = () =>{
    return (
        <section id="experience">
            <h2>Experience</h2>
            <div>
                <div>
                    {skills.map((skill, id) => {
                        return <div key={id}>
                            <div>
                                <img src={""} alt={skill.title} />
                            </div>
                            <p>{skill.title}</p>
                        </div>
                    })}
                </div>
            </div>
        </section>
    )
}
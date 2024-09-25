import React from "react";
import "./about.css";
import ME from "../../assets/1702988341986.jpg";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-img">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>Freelancer</small>
            </article>

            <article className="about_card" id="projects">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>2+ Completed</small>
            </article>
          </div>
          <p>
            Enthusiastic Software Developer eager to contribute to team success
            through hard work, attention to detail, and excellent organizational
            skills. Clear understanding of Java programming, SDLC , HTML5, CSS3,
            JavaScript (ReactJS). Motivated to learn, grow, and excel in the
            software industry
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;

import React from "react";
import "./portfolio.css";
import img1 from '../../assets/Social-media-hero-image.jpg'
import img2 from '../../assets/fitness.png'
import img3 from '../../assets/tictactoe.webp'

const data = [
  {
    id: 1,
    image: img1,
    title: "SocialSearcher - Search Engine",
    github: "http://github.io",
    demo: "http://localhost:8080/",
  },
  {
    id: 2,
    image: img2,
    title: "AI Powered Health Fitness Tracker",
    github: "http://github.io",
    demo: "http://localhost:8080/",
  },
  {
    id: 2,
    image: img3,
    title: "AI powered - Tik Tac Toe Game SinglePlayer",
    github: "http://github.io",
    demo: "http://localhost:8080/",
  }
];

const Portfoli = () => {
  return (
    <section id="portfoli">
      <h5>My Works</h5>
      <h2>Projects</h2>

      <div className="container project_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="Project_items">
              <div className="Project_item-img">
                <img src={image} alt="img1" />
              </div>
              <h3>{title}</h3>
              <div className="project-item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  SourceCode
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live-Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfoli;

import React from "react";
import "./experience.css";
import { FaCss3, FaHtml5, FaJava, FaReact } from "react-icons/fa";
import { SiOracle , SiFigma, SiApachespark ,SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { SiMysql, SiNodedotjs ,SiScala } from "react-icons/si";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Skills I Have</h5>
      <h2>My Hands-on with</h2>

      <div className="container experience_container">
        {/* ====================Front end techs================================ */}

        <div className="experience_Frontend">
          <h3>FrontEnd Techs</h3>

          <div className="exp_content">
            <article className="exp_details">
              <FaHtml5 className="exp_details-icons" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="exp_details">
              <FaCss3 className="exp_details-icons" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="exp_details">
              <SiTypescript className="exp_details-icons" />
              <div>
                <h4>TypeScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="exp_details">
              <IoLogoJavascript className="exp_details-icons" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="exp_details">
              <SiFigma className="exp_details-icons" />
              <div>
                <h4>Figma</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="exp_details">
              <FaReact className="exp_details-icons" />
              <div>
                <h4>ReactJS</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>

        {/* ====================Backend techs================================ */}

        <div className="experience_Backend">
          <h3>BackEnd Techs</h3>

          <div className="exp_content">
            <article className="exp_details">
              <SiScala  className="exp_details-icons" />
              <div>
                <h4>Scala(In-Depth)</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>

            <article className="exp_details">
              <FaJava className="exp_details-icons" />
              <div>
                <h4>Java</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="exp_details">
              <SiOracle  className="exp_details-icons" />
              <div>
                <h4>Oracle SQl Server</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            
            <article className="exp_details">
              <SiMysql className="exp_details-icons" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="exp_details">
              <SiNodedotjs className="exp_details-icons" />
              <div>
                <h4>Node.js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        {/* ========================Tools & techs ======================== */}

        <div className="experience_Backend">
          <h3>Tools</h3>

          <div className="exp_content">

            <article className="exp_details">
              <SiApachespark  className="exp_details-icons" />
              <div>
                <h4>Apache Spark</h4>
                <small className="text-light">Distributed Data-processing system - Beginner</small>
              </div>
            </article>

            <article className="exp_details">
              <SiApachespark  className="exp_details-icons" />
              <div>
                <h4>Informatica PowerCenter</h4>
                <small className="text-light">Data integration tool (ETL) - Beginner</small>
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

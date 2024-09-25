/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./navbar.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineProject } from "react-icons/ai";
import { GrContactInfo } from "react-icons/gr";
import { FaUserCheck } from "react-icons/fa";
// import { RiServiceFill } from "react-icons/ri";
import { MdContacts } from "react-icons/md";

const NavBar = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        {" "}
        <AiOutlineHome />{" "}
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        {" "}
        <GrContactInfo />{" "}
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        {" "}
        <FaUserCheck />{" "}
      </a>

      {/* Hidden Now Will Be added in Future */}

      {/* <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        {" "}
        <RiServiceFill />{" "}
      </a> */}

      <a
        href="#portfoli"
        onClick={() => setActiveNav("#portfoli")}
        className={activeNav === "#portfoli" ? "active" : ""}
      >
        {" "}
        <AiOutlineProject />{" "}
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        {" "}
        <MdContacts />{" "}
      </a>
    </nav>
  );
};

export default NavBar;

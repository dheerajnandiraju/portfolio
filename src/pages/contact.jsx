import React, { useState } from "react";
import { BiLogoGmail } from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const container = {
    marginTop: "8vh",
    flexWrap: "wrap",
    height: "100vh",
    width: "100%",
  };
  const title = {
    margin: "1rem",
    fontSize: "3rem",
    color: "#fca311",
    fontWeight: "bold",
  };
  const block = {
    height: "30rem",
    margin: "5vw",
    padding: "1.5vw",
    borderRadius: "1vw",
    backgroundColor: "#e5e5e5",
    boxShadow: "4px 4px 10px rgba(0, 0, 0, 1)",
  };

  const buttonCommonStyles = {
    margin: "1rem",
    border: "0.1rem solid black",
    borderRadius: "0.5rem",
    color: "black",
    padding: "1vh 3vh",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "1.2rem",
    cursor: "pointer",
    position: "relative",
    overflow: "hidden",
    transition: "background 0.4s",
  };

  const [linkedinHovered, setLinkedinHovered] = useState(false);
  const [gmailHovered, setGmailHovered] = useState(false);
  const [instaHovered, setInstaHovered] = useState(false);

  const instaButtonStyles = {
    ...buttonCommonStyles,
    background: instaHovered
      ? "linear-gradient(to right, #ff8c00, #ff0080)"
      : "#e5e5e5",
  };

  const linkedinButtonStyles = {
    ...buttonCommonStyles,
    background: linkedinHovered
      ? "linear-gradient(to right, #0e76a8, #00a0dc)"
      : "#e5e5e5",
  };

  const gmailButtonStyles = {
    ...buttonCommonStyles,
    background: gmailHovered
      ? "linear-gradient(to right, #d44638, #dd4b39)"
      : "#e5e5e5",
  };

  return (
    <div style={container}>
      <div style={title}>Contact me</div>
      <div style={block}>
        <div style={{ fontSize: "1.1rem" }}>
          <h1 className="contact-info flex flex-rowtext-xl mb-5 m-2">
            <BiLogoGmail className="m-1" />
            <strong>Gmail:</strong> dheerajnandiraju@gmail.com
          </h1>
          <h1 className="contact-info flex flex-row mb-5 m-2">
            <FaLinkedin className="m-1" />
            <strong>LinkedIn:</strong> Dheeraj Nandiraju
          </h1>
          <h1 className="contact-info flex flex-row mb-5 m-2">
            <AiFillInstagram className="m-1" />
            <strong>Instagram:</strong> @dheerajnandiraju
          </h1>
        </div>
        <div
          style={{
            display: "inline-block",
            marginTop: "1.2rem",
            textAlign: "center",
            height: "10rem",
            width: "100%",
          }}
        >
          <h1 style={{ fontSize: "1.5rem" }}>
            {" "}
            <strong> All it takes a click</strong>
          </h1>
          <a
            href="https://www.linkedin.com/in/dheeraj-nandiraju/"
            style={linkedinButtonStyles}
            type="button"
            onMouseEnter={() => setLinkedinHovered(true)}
            onMouseLeave={() => setLinkedinHovered(false)}
          >
            LinkedIn
          </a>
          <a
            style={gmailButtonStyles}
            href="mailto:dheerajnandiraju@gmail.com"
            type="button"
            onMouseEnter={() => setGmailHovered(true)}
            onMouseLeave={() => setGmailHovered(false)}
          >
            Gmail
          </a>
          <a
            style={instaButtonStyles}
            href="https://www.instagram.com/dheerajnandiraju/"
            type="button"
            onMouseEnter={() => setInstaHovered(true)}
            onMouseLeave={() => setInstaHovered(false)}
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

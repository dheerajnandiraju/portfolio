import React, { useState, useEffect } from "react";
import profilepic from "../assets/profilepic.png";

const Home = () => {
  const container = {
    display: "inline flex",
    flexDirection: "row",
    marginTop: "8vh",
    flexWrap: "wrap",
    height: "100vh",
    width: "100%",
  };
  const left = {
    color: "#fff",
    width: "45rem",
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    verticalAlign: "center",
  };

  const right = {
    width: "45rem",
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    verticalAlign: "center",
  };

  const magic = {
    "@media screen and (max-width: 700px)": {
      flexDirection: "column",
    },
  };

  const title = {
    margin: "1rem",
    fontSize: "3.5rem",
    color: "#fca311",
    fontWeight: "bold",
  };
  const ptag = {
    margin: "1rem",
    fontSize: "1.5rem",
    color: "#fca311",
  };

  const img = {
    height: "20rem",
    width: "20rem",
    border: "solid white .5rem",
    borderRadius: "50%",
    marginTop: "1vh",
    marginLeft: "1vh",
  };

  const [text, setText] = useState("");

  useEffect(() => {
    const textToType =
      "Hello, I'm <strong>Dheeraj Nandiraju</strong>, a Computer Science and Engineering student at Keshav Memorial Institute of Technology, expecting to graduate 2026. Passionate about technology, I'm on a journey to explore the realms of software development. Join me as I showcase my projects and share insights into my coding adventures.";

    let index = 0;

    const intervalId = setInterval(() => {
      setText((prevText) => prevText + textToType[index]);
      index++;

      if (index === textToType.length) {
        clearInterval(intervalId);
        setText(textToType); // Set the final text after typing is complete
      }
    }, 25); // Adjust the interval for typing speed

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{ ...container, ...magic }}>
      <div style={left}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={title}>Welcome to my portfolio!</div>
          <div style={ptag} dangerouslySetInnerHTML={{ __html: text }} />
        </div>
      </div>
      <div style={right}>
        <img
          style={img}
          src={profilepic}
          alt="profile"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </div>
    </div>
  );
};

export default Home;

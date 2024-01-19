import React, { useState, useEffect } from "react";
import profilepic from "D:/portfolio/src/assets/profilepic.png";

const About = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const container = {
    marginTop: "8vh",
    flexWrap: "wrap",
    height: "100vh",
    width: "100%",
  };

  const sectionStyle = {
    opacity: isVisible ? 1 : 0,
    transition: "opacity 1s ease-in-out",
  };

  const title = {
    ...sectionStyle,
    margin: "1rem",
    fontSize: "2rem",
    color: "#fca311",
    fontWeight: "bold",
  };

  const ptag = {
    ...sectionStyle,
    margin: "1rem",
    fontSize: "1rem",
    color: "#e5e5e5",
  };

  const img = {
    height: "auto",
    width: "100%",
    maxWidth: "20em",
    border: "solid white .5rem",
    borderRadius: "50%",
    margin: "7vh",
  };

  useEffect(() => {
    // Set isVisible to true after a short delay when the component mounts
    const delay = setTimeout(() => {
      setIsVisible(true);
    }, 50); // Adjust the delay as needed

    // Clear the timeout to avoid memory leaks
    return () => clearTimeout(delay);
  }, []);

  return (
    <div style={container}>
      <div>
        <div
          style={{
            float: "right",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            style={img}
            src={profilepic}
            alt="profilepic"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </div>
        <div style={title}>About Me:</div>
        <div style={ptag}>
          Hi! I'm Dheeraj Nandiraju, a 2nd-year B.Tech CSE student at Keshav
          Memorial Institute of Technology, passionate about exploring diverse
          aspects of Computer Science.
        </div>
      </div>
      {/* ............................................................................................................................................ */}

      {/* ............................................................................................................................................ */}
      <div style={sectionStyle}>
        <div style={title}>Code Explorer:</div>
        <div style={ptag}>
          I delve into programming languages like C, C++, Java, Python, C#, and
          Frontend (JavaScript, React). Engaging in coding projects and
          competitions is my thing.
        </div>
      </div>

      {/* ............................................................................................................................................ */}
      <div style={sectionStyle}>
        <div style={title}>Tech Skills:</div>
        <div style={ptag}>
          Proficient in C, C++, Python, and Frontend. Currently exploring Java
          and Backend technologies.
        </div>
      </div>
      {/* ............................................................................................................................................ */}
      <div style={sectionStyle}>
        <div style={title}>Beyond the Screen:</div>
        <div style={ptag}>
          Apart from coding, I enjoy photography, dancing, and sketching.
          There's more to me than lines of code.
        </div>
      </div>

      {/* ............................................................................................................................................ */}
      <div style={sectionStyle}>
        <div style={title}>Future Focus:</div>
        <div style={ptag}>
          Excited about Networking and Professional Development in the second
          half of my B.Tech journey. Whether it's Full-Stack or Software
          Development, I'm committed to continuous learning.
        </div>
      </div>
      {/* ............................................................................................................................................ */}
      <div style={sectionStyle}>
        <div style={title}>Let's Connect:</div>
        <div style={ptag}>
          Open to connecting with students and tech enthusiasts. Reach out at{" "}
          <strong>dheerajnandiraju@gmail.com</strong>, and let's share our
          coding adventures!
        </div>
      </div>

      {/* ............................................................................................................................................ */}
      <div style={sectionStyle}>
        <div style={ptag}>
          Thanks for stopping by and joining my ongoing adventure of learning
          and coding!
          <br />
          Best,
          <br />
          <strong> Dheeraj Nandiraju </strong>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import c from "../assets/c.png";
import cpp from "../assets/cpp.png";
import cs from "../assets/cs.png";
import java from "../assets/java.png";
import mysql from "../assets/mysql.png";
import python from "../assets/python.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/javascript.png";
import react from "../assets/react.png";
import tkinter from "../assets/tkinter.png";
import bootstrap from "../assets/bootsrap.png";
import ps from "../assets/ps.png";
import figma from "../assets/figma.png";

const Skills = () => {
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
  const tiles = {
    height: "auto",
    margin: "5vw",
    padding: "1vw",
    borderRadius: "1vw",
    backgroundColor: "#e5e5e5",
    boxShadow: "4px 4px 10px rgba(0, 0, 0, 1)",
  };
  const heading = {
    margin: "1rem",
    fontSize: "2rem",
    color: "#333",
    fontWeight: "bold",
  };
  const img = {
    height: "9vw",
    width: "9vw",
  };
  const cardDeck = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center", // Center-align the cards
  };
  const card = {
    margin: "1vw",
  };

  return (
    <div style={{ ...container }}>
      <div style={title}>Skills</div>
      {/* ........................................................................... */}
      <div style={tiles}>
        <div class="card">
          <div class="card-content">
            <div style={heading}>Languages and Databases</div>
            <div class="row text-center">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                class="col s4 m2"
              >
                <img style={img} alt="" src={c} class="responsive-img" />
                <h1 className="text text-xl">c</h1>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                class="col s4 m2"
              >
                <img style={img} alt="" src={cpp} class="responsive-img" />
                <h1 className="text text-xl"> c++</h1>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                class="col s4 m2"
              >
                <img style={img} alt="" src={cs} class="responsive-img" />
                <h1 className="text text-xl">C#</h1>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                class="col s4 m2"
              >
                <img style={img} alt="" src={python} class="responsive-img" />
                <h1 className="text text-xl">Python</h1>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                class="col s4 m2"
              >
                <img style={img} alt="" src={java} class="responsive-img" />
                <h1 className="text text-xl"> Java</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ........................................................................... */}
      <div style={tiles}>
        <div class="card">
          <div class="card-content">
            <div style={heading}>Web-Development</div>
            <div class="row text-center">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                class="col s4 m2"
              >
                <img style={img} alt="" src={html} class="responsive-img" />
                <h1 className="text text-xl">HTML</h1>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                class="col s4 m2"
              >
                <img style={img} alt="" src={css} class="responsive-img" />
                <h1 className="text text-xl"> CSS</h1>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                class="col s4 m2"
              >
                <img style={img} alt="" src={js} class="responsive-img" />
                <h1 className="text text-xl">JavaScript</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* .................................................................... */}
      <div style={tiles}>
        <div class="card">
          <div class="card-content">
            <div style={heading}>Database</div>
            <div class="row text-center">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                class="col s4 m2"
              >
                <img style={img} alt="" src={mysql} class="responsive-img" />
                <h1 className="text text-xl">MySQL</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ........................................................................... */}
      <div style={tiles}>
        <div class="card">
          <div class="card-content">
            <div style={heading}>Libraries</div>
            <div class="row text-center">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                class="col s4 m2"
              >
                <img style={img} alt="" src={react} class="responsive-img" />
                <h1 className="text text-xl">React</h1>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                class="col s4 m2"
              >
                <img style={img} alt="" src={tkinter} class="responsive-img" />
                <h1 className="text text-xl"> Tkinter</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* .................................................................... */}
      <div style={tiles}>
        <div class="card">
          <div class="card-content">
            <div style={heading}>Frameworks</div>
            <div class="row text-center">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                class="col s4 m2"
              >
                <img
                  style={img}
                  alt=""
                  src={bootstrap}
                  class="responsive-img"
                />
                <h1 className="text text-xl">Bootstrap</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* .................................................................... */}
      <div style={tiles}>
        <div class="card">
          <div class="card-content">
            <div style={heading}>Designing</div>
            <div class="row text-center">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                class="col s4 m2"
              >
                <img style={img} alt="" src={figma} class="responsive-img" />
                <h1 className="text text-xl">Figma</h1>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                class="col s4 m2"
              >
                <img style={img} alt="" src={ps} class="responsive-img" />
                <h1 className="text text-xl">Photoshop</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

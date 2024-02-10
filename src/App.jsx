import "./App.css";
import React from "react";
import NavBar from "./components/navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Skill from "./components/skill";
import BackgroundImage from "./assets/bg-2.jpg";
function App() {
  return (
    <React.StrictMode>
      <div className="h-screen flex flex-col relative overflow-hidden">
        <img
          src={BackgroundImage}
          alt="background top-0 left-0"
          className="-z-50 absolute h-full w-full object-cover"
        />
        <Routes>
          <Route path="/" element=<Home /> />
          <Route path="about" element=<About /> />
          <Route path="contact" element=<Contact /> />
          <Route path="skills" element=<Skill /> />\
        </Routes>
        <NavBar />
      </div>
    </React.StrictMode>
  );
}

export default App;

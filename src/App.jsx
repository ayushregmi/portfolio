import "./App.css";
import React from "react";
import NavBar from "./components/navbar";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Skill from "./components/skill";
import BackgroundImage from "./assets/bg-2.jpg";
import { useSwipeable } from "react-swipeable";

function App() {
  const pageList = ["/", "/about", "/skills", "/contact"];
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const goto = (value) => {
    const index =
      (pageList.findIndex(
        (item) => item.toLowerCase() === pathname.toLowerCase()
      ) +
        value +
        pageList.length) %
      pageList.length;

    navigate(pageList[index]);
  };

  const swipeHandler = useSwipeable({
    onSwipedLeft: () => {
      goto(1);
    },
    onSwipedRight: () => {
      goto(-1);
    },
    swipeDuration: 500,
    preventScrollOnSwipe: true,
  });

  return (
    <React.StrictMode>
      <div
        {...swipeHandler}
        className="h-screen flex flex-col relative overflow-hidden"
      >
        <img
          src={BackgroundImage}
          alt="background top-0 left-0"
          className="-z-50 absolute h-full w-full object-cover"
        />
        <Routes>
          <Route path="/" element=<Home /> />
          <Route path="/portfolio" element=<Home /> />
          <Route path="about" element=<About /> />
          <Route path="contact" element=<Contact /> />
          <Route path="skills" element=<Skill /> />
        </Routes>
        <NavBar />
      </div>
    </React.StrictMode>
  );
}

export default App;

import { motion } from "framer-motion";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";

const HomePage = () => {
  document.title = "Aayush Regmi | Home";

  const name = "Aayush Regmi";

  const rubberBand = () => {
    return {
      transform: [
        "scale3d(1,1,1)",
        "scale3d(2,.3,1)",
        "scale3d(.75,1.25,1)",
        "scale3d(1.25,.85,1)",
        "scale3d(.9,1.05,1)",
        "scale3d(1,1,1)",
      ],
      transtion: [0, 0.4, 0.6, 0.7, 0.8, 0],
    };
  };

  const getLetters = (word) => {
    const letters = word.split("");

    return letters.map((letter, index) => {
      const [isPlaying, setIsPlaying] = useState(false);

      return letter === " " ? (
        <span>&nbsp;</span>
      ) : (
        <motion.span
          animate={() => ({ ...rubberBand() })}
          whileHover={() => {
            if (!isPlaying) {
              setIsPlaying(true);
              return rubberBand();
            }
          }}
          onHoverEnd={() => {
            setIsPlaying(false);
          }}
          className={`${
            letter === " " ? "pr-2" : ""
          } text-text-green hover:text-text-yellow`}
          key={index}
        >
          {letter}
        </motion.span>
      );
    });
  };

  return (
    <>
      <div className="text-gray-300 bg-default-background/95 relative h-full w-full flex flex-col items-between justify-center px-10 sm:px-16 text-2xl sm:text-3xl lg:text-4xl">
        <div>
          <div className="cursor-default">
            Hey There! <br></br>
            <div className="flex flex-row items-center">
              <span>I am</span>
              &nbsp;{getLetters(name)}&nbsp;
            </div>
          </div>
          <div className="text-2xl sm:text-3xl mt-4 lg:mt-8">
            <TypeAnimation
              className="text-orange-color"
              sequence={["Programmer", 1000, "Student", 1000]}
              repeat={Infinity}
              speed={200}
              wrapper="span"
            />
          </div>
          <div className="flex flex-row gap-5 text-sm mt-6">
            <Link
              to={"/portfolio/about"}
              className="text-text-light-blue px-3 sm:px-5 py-1 sm:py-2 lg:py-3 border border-text-light-blue hover:bg-secondary-background/40 duration-300"
            >
              About Me
            </Link>
            <Link
              to={"/portfolio/contact"}
              className="text-text-orange border px-3 sm:px-5 py-1 sm:py-2 lg:py-3 border-text-orange hover:bg-secondary-background/40 duration-300"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;

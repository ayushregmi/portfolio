import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ProjectData } from "../Data/ProjectData";
import { Link } from "react-router-dom";

const ProjectsPage = () => {
  document.title = "Aayush Regmi | Projects";

  const divRef = useRef();
  const containerRef = useRef();

  useEffect(() => {
    const screenHeight = window.innerHeight;
    const screenWidth = window.innerWidth;

    divRef.current.style.height = `${
      screenHeight -
      parseInt(screenWidth >= 768 ? 25 : 21) -
      parseInt(screenWidth >= 900 ? 32 : 24)
    }px`;
  }, []);

  const [columns, setColumns] = useState(null);

  useEffect(() => {
    setColumns(3);
    const resizeObserver = new ResizeObserver((entries) => {
      const containerWidth = entries[0].contentRect.width;

      // Example logic to set number of columns based on width
      if (containerWidth >= 1080) {
        containerRef.current.style.gridTemplateColumns = "repeat(3, 1fr)";
        // setColumns(3);
      } else if (containerWidth > 680) {
        containerRef.current.style.gridTemplateColumns = "repeat(2, 1fr)";
        setColumns(2);
      } else {
        containerRef.current.style.gridTemplateColumns = "repeat(1, 1fr)";
        setColumns(1);
      }
    });

    if (divRef.current) {
      resizeObserver.observe(divRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

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

  const getLetters = (word, classes) => {
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
          className={`${letter === " " ? "pr-2" : ""} ${classes}`}
          key={index}
        >
          {letter}
        </motion.span>
      );
    });
  };

  return (
    <>
      <div
        ref={divRef}
        className="py-10 px-5 xs:px-8 sm:px-10 ml:px-20 relative w-full overflow-y-scroll overflow-x-hidden bg-default-background/95 text-4xl text-gray-300 scrollbar"
      >
        <div className="group relative inline-block">
          <div className="flex flex-row items-center">
            {getLetters("Projects", "text-text-blue")}
          </div>
          <div className="absolute -bottom-1 left-2 h-[2px] w-10 bg-text-yellow group-hover:w-11/12 group-hover:left-1 duration-300"></div>
        </div>
        <div
          ref={containerRef}
          className={`grid  mt-8 sm:mt-14 gap-x-3 gap-y-6 sm:px-5`}
        >
          {ProjectData.map((project, index) => (
            <ProjectsCard key={index} project={project} />
          ))}
        </div>
      </div>
    </>
  );
};

const ProjectsCard = ({ project }) => {
  const { title, description, ref_img, tools, url } = project;

  return (
    <>
      <Link
        to={url}
        className="group bg-[#171717] relative overflow-hidden rounded-lg border-default-background hover:border-text-green border-2 flex flex-col"
      >
        <div className="overflow-hidden h-[200px] rounded-lg object-center pointer-events-none">
          <img
            className="h-full w-full object-cover object-center group-hover:scale-110 duration-300"
            src={ref_img}
            alt={title}
          />
        </div>
        <div className="flex-grow flex flex-col justify-between">
          <div className="px-5 pt-5">
            <div className="text-xl font-black">{title}</div>
            <div className="text-xs mt-1">{description}</div>
          </div>
          <div className="px-5 pt-10 pb-5 flex gap-x-3 gap-y-2 flex-wrap">
            {tools.map((tool, index) => (
              <div
                key={index}
                className={`text-xs border rounded-lg px-2 ${
                  index % 3 === 0
                    ? "text-text-green border-text-green"
                    : index % 3 === 1
                    ? "text-text-blue border-text-blue"
                    : "text-text-yellow border-text-yellow"
                }`}
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProjectsPage;

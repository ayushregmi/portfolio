import Typing from "./Typing";
import { Link } from "react-router-dom";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import UserNotFound from "../assets/userNotFound.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {
  document.title = "Home";

  useEffect(() => {
    AOS.init();
  }, []);

  const list_1 = ["Web Development", "Machine Learning"];

  return (
    <>
      <div className="flex-grow overflow-hidden flex items-center justify-center font-protest-riot">
        <div className=" grid grid-cols-2 gap-2 w-4/5 rounded-2xl ">
          <div
            className="w-full h-full flex items-start flex-col justify-center p-10 gap-2"
            data-aos="fade-right"
          >
            <div className="text-[4rem] flex flex-col leading-none">
              <span>Hi There,</span>
              <span>
                I'm <span className="text-red-800">Aayush Regmi</span>
              </span>
            </div>
            <div className="text-4xl mt-3">
              I am into{" "}
              <Typing
                words={list_1}
                typing_delay={150}
                delete_delay={40}
                className="text-blue-900"
              />
            </div>
            <div className="mt-5 w-full flex">
              <Link
                to="about"
                className="bg-blue-900 text-gray-200 px-9 py-3 text-lg rounded-full flex flex-row items-center gap-2 transition duration-300 hover:scale-105 shadow-lg hover:shadow-2xl"
              >
                <span>About Me</span>

                <FaArrowAltCircleRight className="h-5 w-5" />
              </Link>
            </div>
            <div className="flex flex-row gap-3 mt-5 px-5">
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUJcmljayByb2xs">
                <SiLinkedin className="h-7 w-7" />
              </a>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUJcmljayByb2xs">
                <FaGithub className="h-7 w-7" />
              </a>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUJcmljayByb2xs">
                <FaInstagramSquare className="h-7 w-7" />
              </a>
            </div>
          </div>
          <div
            className="p-10 flex items-center justify-end"
            data-aos="fade-left"
          >
            <div className="bg-white w-80 h-80 rounded-full overflow-hidden">
              <img
                src={UserNotFound}
                alt="user"
                className="h-full w-full pointer-events-none object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

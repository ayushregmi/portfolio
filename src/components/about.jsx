import UserNotFound from "../assets/userNotFound.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  document.title = "About";
  return (
    <>
      <div className="flex-grow flex items-center justify-center font-protest-riot">
        <div className="bg-black w-4/5 p-10 rounded-lg overflow-hidden items-center flex flex-col bg-opacity-0">
          <div
            className="text-center text-4xl text-blue-900 flex flex-row w-full"
            data-aos="fade-down"
          >
            <div className="w-1/3"></div>
            <div className="w-2/3">
              About <span className="text-red-900">Me</span>
            </div>
          </div>
          <div
            className="flex h-full px-10 items-center justify-center  flex-grow"
            data-aos="fade-up"
          >
            <div className="h-full w-1/3 overflow-hidden hover:scale-105 transition duration-300 flex items-center justify-center">
              <img
                src={UserNotFound}
                alt="user"
                className="pointer-events-none h-4/5 w-4/5 rounded-2xl object-cover "
              />
            </div>
            {/* <div className="text-center text-4xl text-blue-900 row-span-1">
              About <span className="text-red-900">Me</span>
            </div> */}
            <div className="w-2/3 h-full text-justify row-span-4 px-20 text-black text-md flex items-center">
              Hey there! I'm Aayush Regmi, currently studying Computer
              Engineering. I'm passionate about artificial intelligence and
              machine learning—the cool tech that makes computers smart and able
              to learn from data. I love diving into coding projects, from
              building predictive models to exploring neural networks. I'm all
              about using technology to solve real-world problems and make a
              positive impact. Outside of coding, you'll find me brainstorming
              new ideas, chatting about the latest tech trends with friends, or
              enjoying the great outdoors. Let's connect and explore how we can
              innovate together!
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

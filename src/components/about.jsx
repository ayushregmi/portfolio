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
        <div className="bg-black w-5/6 lg:w-4/5 sm:p-8 xl:p-10 rounded-lg overflow-hidden items-center flex flex-col bg-opacity-0">
          <div
            className="text-center text-lg md:text-2xl lg:text-4xl text-blue-900 flex flex-row w-full mb-8 sm:mb-5"
            data-aos="fade-down"
          >
            <div className="w-1/3 hidden sm:block"></div>
            <div className="mx-auto sm:mx-0 sm:w-2/3 text-3xl lg:text-4xl">
              About <span className="text-red-900">Me</span>
            </div>
          </div>
          <div
            className="flex flex-col sm:flex-row h-full xl:px-8 items-center justify-center  flex-grow"
            data-aos="fade-up"
          >
            <div className="order-2 sm:order-1 h-full w-3/5 sm:w-1/3 overflow-hidden hover:scale-105 transition duration-300 flex items-center justify-center">
              <img
                src={UserNotFound}
                alt="user"
                className="pointer-events-none w-full h-full xl:h-4/5 xl:w-4/5 rounded-2xl object-cover "
              />
            </div>
            {/* <div className="text-center text-4xl text-blue-900 row-span-1">
              About <span className="text-red-900">Me</span>
            </div> */}
            <div className="order-1 sm:order-2 mb-10 sm:mb-0 w-11/16 sm:w-2/3 h-full text-justify row-span-4  sm:px-10 lg:px-14 xl:px-20 text-black text-xs sm:text-[0.7rem] md:text-xs lg:text-[1rem] xl:text-base flex items-center">
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

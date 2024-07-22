import { TypeAnimation } from "react-type-animation";

const AboutMePage = () => {
  document.title = "Aayush Regmi | About";

  return (
    <>
      <div className="p-5 sm:p-10 relative w-full h-full bg-default-background/95 sm:text-2xl text-gray-300">
        <TypeAnimation
          className="text-gray-300 cursor-default"
          sequence={["I write bugs..."]}
          preRenderFirstString
          wrapper="span"
        />
      </div>
    </>
  );
};

export default AboutMePage;

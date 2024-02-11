import { skill_data } from "../data/SkillData";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef, useState } from "react";

const Skill = () => {
  const divRef = useRef();

  const [larger, setLarger] = useState(false);

  useEffect(() => {
    const divSize = divRef.current.clientHeight;

    console.log(divSize, window.innerHeight);

    if (divSize > window.innerHeight) {
      setLarger(true);
    } else {
      setLarger(false);
    }
  }, [divRef]);

  useEffect(() => {
    AOS.init();
  }, []);
  document.title = "Skills";
  return (
    <>
      <div
        className={`flex-grow relative overflow-y-auto flex justify-center font-protest-riot ${
          larger ? "items-start" : "items-center"
        }`}
      >
        <div ref={divRef} className="w-4/5 flex flex-col mt-5">
          <div
            className="flex items-center justify-center"
            data-aos="fade-left"
          >
            <div className="text-3xl lg:text-4xl text-blue-900">
              My <span className="text-red-900">Skills</span>
            </div>
          </div>
          <div
            className="mt-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-x-5 gap-y-5"
            data-aos="fade-right"
          >
            {skill_data.map((item) => {
              return <Item item={item} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

const Item = ({ item }) => {
  const [itemName, itemImage] = item;
  return (
    <>
      <div className="pointer-events-none flex flex-col items-center bg-white bg-opacity-0 hover:bg-opacity-100 rounded-lg px-2 py-4 gap-2 transition duration-300">
        <div className="h-16 w-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 overflow-hidden">
          <img
            src={itemImage}
            alt={itemName}
            className="w-full h-full object-contain"
          />
        </div>
        <div>{itemName}</div>
      </div>
    </>
  );
};

export default Skill;

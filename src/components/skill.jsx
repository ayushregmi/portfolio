import { skill_data } from "../data/SkillData";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Skill = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  document.title = "Skills";
  return (
    <>
      <div className="flex-grow relative overflow-y-auto flex items-start justify-center font-protest-riot">
        <div className="w-4/5 flex flex-col mt-5">
          <div
            className="flex items-center justify-center"
            data-aos="fade-left"
          >
            <div className="text-4xl text-blue-900">My Skills</div>
          </div>
          <div
            className="mt-10 grid grid-cols-7 gap-x-5 gap-y-5"
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
        <div className="w-24 h-24 overflow-hidden">
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

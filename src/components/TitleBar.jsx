import { AiOutlineClose } from "react-icons/ai";
import { VscChromeMaximize, VscChromeMinimize } from "react-icons/vsc";
import { useEffect, useRef } from "react";

const TitleBar = () => {
  const menuItems = [
    "File",
    "Edit",
    "Selection",
    "View",
    "Go",
    "Run",
    "Terminal",
    "Help",
  ];

  return (
    <>
      <div className="pl-1 text-xs md:text-[0.5em] ml:text-[0.6em] xl:text-xs text-text-gray grid grid-cols-7 md:grid-cols-5 items-center border-b border-border-color">
        <div className="col-span-1 md:col-span-2 flex flex-row xl:gap-x-1 py-1 items-center flex-wrap">
          <img
            src="./vscode.svg"
            className="h-3 w-3 md:h-2 md:w-2 ml:h-3 ml:w-3 mr-1 ml:mx-2"
          />
          <div className="hidden md:flex flex-row lg:gap-x-1">
            {menuItems.map((item, index) => (
              <TitleBarItem key={index} text={item} />
            ))}
          </div>
        </div>
        <div className="text-center font-bold col-span-5 md:col-span-1">
          Aayush Regmi - Visual Studio Code
        </div>
        <div className="flex justify-end h-full col-span-1 md:col-span-2">
          <TitleBarButtons
            button_icon={<VscChromeMinimize className="h-3 w-3" />}
          />

          <TitleBarButtons
            button_icon={<VscChromeMaximize className="h-3 w-3" />}
          />
          <TitleBarButtons
            button_icon={<AiOutlineClose className="h-3 w-3" />}
          />
        </div>
      </div>
    </>
  );
};

const TitleBarItem = ({ text }) => {
  return (
    <div className="cursor-pointer px-1 ml:px-2 hover:bg-hover-color rounded-md duration-300">
      {text}
    </div>
  );
};

const TitleBarButtons = ({ button_icon }) => {
  const divRef = useRef(null);

  useEffect(() => {
    if (divRef.current) {
      const height = divRef.current.clientHeight;
      divRef.current.style.width = `${height}px`;
    }
  }, []);

  return (
    <div
      ref={divRef}
      className="cursor-pointer hover:bg-hover-color h-full flex items-center justify-center"
    >
      {button_icon}
    </div>
  );
};

export default TitleBar;

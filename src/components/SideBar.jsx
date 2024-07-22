import { useCallback, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { pages } from "../Data/PagesData";

const SideBar = () => {
  const [selectedIcon, setSelectedIcon] = useState(-1);

  const top_icons = { 0: "./files.svg", 1: "./tags.svg" };
  const bottom_icons = ["./user.svg", "./settings.svg"];
  return (
    <>
      <div className="hidden sm:flex flex-row">
        <div className="w-12 bg-default-background border-r border-border-color flex flex-col justify-between">
          <SideBarIcons
            selectedIcon={selectedIcon}
            setSelectedIcon={setSelectedIcon}
            icons={top_icons}
          />
          <div className="flex flex-col">
            {bottom_icons.map((icon, index) => (
              <>
                <button
                  key={index}
                  className="hover:bg-hover-color flex justify-center py-3"
                >
                  <img className="w-6 h-6" src={icon} />
                </button>
              </>
            ))}
          </div>
        </div>
        <div
          className={`bg-secondary-background ${
            selectedIcon !== -1 ? "" : "hidden"
          }`}
        >
          <SideBarExplorer />
        </div>
      </div>
    </>
  );
};

const SideBarIcons = ({ setSelectedIcon, selectedIcon, icons }) => {
  return (
    <>
      <div className="flex flex-col gap-y-1">
        {Object.keys(icons).map((key) => (
          <SideBarIconButtons
            key={key}
            icon_path={icons[key]}
            setSelectedIcon={setSelectedIcon}
            iconIndex={key}
            selected={selectedIcon === key}
          />
        ))}
      </div>
    </>
  );
};

const SideBarIconButtons = ({
  icon_path,
  iconIndex,
  setSelectedIcon,
  selected,
}) => {
  return (
    <>
      <button
        className={`px-2 py-3 border-l-2 hover:bg-hover-color ${
          selected ? "border-orange-color" : "border-default-background"
        }`}
        onClick={() => {
          if (selected) setSelectedIcon(-1);
          else setSelectedIcon(iconIndex);
        }}
      >
        <img src={icon_path} className="w-6 h-6" />
      </button>
    </>
  );
};

const SideBarExplorer = () => {
  const [showMore, setShowMore] = useState(true);

  // const pages = [
  //   ["home.jsx", "reactlogo.svg", "/"],
  //   ["about.txt", "textlogo.svg", "/about"],
  //   ["projects.py", "pythonlogo.svg", "/projects"],
  //   ["contact.cpp", "cpplogo.svg", "/contact"],
  // ];

  const [selectedPage, setSelectedPage] = useState(0);

  const findPageIndex = useCallback(
    (searchLink) => {
      for (let i = 0; i < pages.length; i++) {
        if (searchLink === pages[i][2]) {
          return i;
        }
      }
    },
    [pages]
  );

  const location = useLocation();
  useEffect(() => {
    const path = location.pathname;
    setSelectedPage(findPageIndex(path));
  }, [location.pathname, findPageIndex]);

  return (
    <>
      <div className="w-[200px] ml:w-[250px] text-xs ml:text-sm xl:text-base font-extrathin text-text-white  border-r border-border-color hidden md:flex flex-col gap-y-3 py-2">
        <div className="ml-6 uppercase">EXPLORER</div>
        <div>
          <button
            className="flex flex-row items-center gap-x-2"
            onClick={() => {
              setShowMore(!showMore);
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="duration-300"
              style={{
                transform: `${showMore ? "rotate(90deg)" : "rotate(0deg)"}`,
              }}
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.072 8.024L5.715 3.667l.618-.62L11 7.716v.618L6.333 13l-.618-.619 4.357-4.357z"
              ></path>
            </svg>

            <div className="uppercase ">Portfolio</div>
          </button>

          <div className="overflow-hidden">
            <div
              className={`mt-1 text-[0.7em] ml:text-xs xl:text-sm flex flex-col items-start ${
                showMore ? "translate-y-0" : "-translate-y-40"
              } duration-300`}
            >
              {pages.map((item, index) => {
                const [text, icon, link, status] = item;
                const textColor =
                  status === "E"
                    ? "text-text-red"
                    : status === "U"
                    ? "text-text-green"
                    : status === "M"
                    ? "text-text-yellow"
                    : "";
                return (
                  <>
                    <Link
                      to={link}
                      onClick={() => {
                        setSelectedPage(index);
                      }}
                      key={index}
                      className={`${textColor} pl-6 py-1 border flex flex-row hover:bg-default-background items-center gap-2 w-full ${
                        selectedPage === index
                          ? "bg-hover-color border-color-blue"
                          : "border-secondary-background"
                      }`}
                    >
                      <img className="h-4 pointer-events-none" src={icon} />
                      <div className="flex justify-between flex-grow pr-10 items-center">
                        <div>{text}</div>
                        {(status === "M" || status === "U") && (
                          <div>{status === "M" ? "M" : "U"}</div>
                        )}
                      </div>
                    </Link>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;

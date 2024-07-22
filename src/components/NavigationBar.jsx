import { useCallback, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { pages } from "../Data/PagesData";
const NavigtionBar = () => {
  const [selectedPage, setSelectedPage] = useState(0);

  // const pages = [
  //   ["home.jsx", "reactlogo.svg", "/"],
  //   ["about.txt", "textlogo.svg", "/about"],
  //   ["projects.py", "pythonlogo.svg", "/projects"],
  //   ["contact.cpp", "cpplogo.svg", "/contact"],
  // ];

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
      <div className="w-full flex flex-row h-6 ml:h-8 text-[0.6em] ml:text-[0.7em] lg:text-xs xl:text-sm font-thin ml:font-base">
        {pages.map((page, index) => (
          <Tabs key={index} tab_info={page} selected={index === selectedPage} />
        ))}
        <div className="border-b border-b-border-color flex-grow bg-secondary-background "></div>
      </div>
    </>
  );
};

const Tabs = ({ tab_info, selected }) => {
  const [text, logo, link, status] = tab_info;
  const textColor =
    status === "E"
      ? "text-text-red"
      : status === "U"
      ? "text-text-green"
      : status === "M"
      ? "text-text-yellow"
      : "text-text-white";

  return (
    <>
      <Link
        className={`${textColor} font-default flex flex-row items-center gap-1 sm:gap-2 pl-1  ml:pl-2  border-r border-border-color ${
          selected
            ? "border-t-2 border-t-orange-color bg-default-background/95"
            : "border-b bg-secondary-background "
        }`}
        to={link}
      >
        <img src={logo} className="h-3 w-3 pointer-events-none" />

        <div className="flex flex-row justify-between gap-1 xs:gap-2 sm:gap-4 flex-grow items-center pr-2  sm:pr-4">
          <div>{text}</div>
          {(status === "M" || status === "U") && (
            <div>{status === "M" ? "M" : "U"}</div>
          )}
        </div>
      </Link>
    </>
  );
};

export default NavigtionBar;

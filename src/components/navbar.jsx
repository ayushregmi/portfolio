import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const { pathname } = useLocation();

  const isHome = pathname === "/";
  const isAbout = pathname === "/about";
  const isContact = pathname === "/contact";
  const isSkills = pathname === "/skills";

  return (
    <>
      <div className="bg-gradient-to-5 from-transparent to-white px-10 py-4 border-color-3 ">
        <div className="flex flex-row justify-center font-protest-riot h-full items-center h-full">
          <div className="flex flex-row gap-x-10 h-full items-center">
            <Link
              to="/"
              // className="text-white transition duration-300 px-4 py-2 rounded-xl bg-blue-900 hover:bg-color-3 hover:text-black"
              className={`text-lg transition duration-300 px-4 py-1 rounded-xl hover:bg-blue-900 hover:text-white ${
                isHome ? "text-white bg-blue-900" : "text-blue-900"
              }`}
            >
              Home
            </Link>
            <Link
              to="about"
              // className="text-white transition duration-300 px-4 py-2 rounded-xl bg-blue-900 hover:bg-color-3 hover:text-black"
              className={`text-lg transition duration-300 px-4 py-1 rounded-xl hover:bg-blue-900 hover:text-white ${
                isAbout ? "text-white bg-blue-900" : "text-blue-900"
              }`}
            >
              About
            </Link>

            <Link
              to="skills"
              // className="text-white transition duration-300 px-4 py-2 rounded-xl bg-blue-900 hover:bg-color-3 hover:text-black"
              className={`text-lg transition duration-300 px-4 py-1 rounded-xl hover:bg-blue-900 hover:text-white ${
                isSkills ? "text-white bg-blue-900" : "text-blue-900"
              }`}
            >
              Skills
            </Link>

            <Link
              to="contact"
              // className="text-white transition duration-300 px-4 py-2 rounded-xl bg-blue-900 hover:bg-color-3 hover:text-black"
              className={`text-lg transition duration-300 px-4 py-1 rounded-xl hover:bg-blue-900 hover:text-white ${
                isContact ? "text-white bg-blue-900" : "text-blue-900"
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;

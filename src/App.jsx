import "./App.css";
import SideBar from "./components/SideBar";
import TitleBar from "./components/TitleBar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutMePage from "./components/AboutMePage";
import ContactsPage from "./components/ContactsPage";
import ProjectsPage from "./components/ProjectsPage";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <>
      <div className="flex flex-col h-screen bg-default-background font-default max-h-screen text-white">
        <TitleBar />
        <div className="bg-black flex flex-row flex-grow h-full">
          <SideBar />
          <div className="flex flex-col flex-grow bg-default-background relative">
            <img
              src="./bg.jpg"
              className="h-full w-full object-cover object-left absolute"
            />
            <div className="z-10">
              <NavigationBar />
            </div>
            <div className="flex-grow">
              <Routes>
                <Route path="/portfolio" element={<HomePage />} />
                <Route path="/portfolio/about" element={<AboutMePage />} />
                <Route path="/portfolio/projects" element={<ProjectsPage />} />
                <Route path="/portfolio/contact" element={<ContactsPage />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

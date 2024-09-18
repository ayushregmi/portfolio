import { useState } from "react";
import { useEffect } from "react";
import CodeEditor from "./CodeEditor";
import Terminal from "./Terminal";

const ContactsPage = () => {
  document.title = "Aayush Regmi | Contact";

  const [showTerminal, setShowTerminal] = useState(true);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === "j") {
        event.preventDefault(); // Prevent the default action if needed
        // Your action here
        console.log("Ctrl + J was pressed! " + showTerminal);

        setShowTerminal(!showTerminal);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <>
      <div className="relative flex flex-col h-full">
        <CodeEditor showTerminal={showTerminal} />
        {showTerminal && <Terminal />}
      </div>
    </>
  );
};

export default ContactsPage;

import { useEffect, useRef, useState } from "react";

import ChatBot from "./ChatBot";
import info from "../Data/info.json";

const Terminal = () => {
  const [initialPlaceHolder, setInitialPlaceHolder] = useState(
    "Ask me something..."
  );

  const textRef = useRef(null);
  const [text, setText] = useState("");
  const [disableInput, setDisableInput] = useState(false);

  const [history, setHistory] = useState([]);

  const historyRef = useRef(null);

  // Scroll to the bottom whenever the children change
  useEffect(() => {
    if (historyRef.current) {
      historyRef.current.scrollTop = historyRef.current.scrollHeight;
    }
  }, [history]);

  const focusTerminal = () => {
    if (textRef.current) {
      textRef.current.focus();
    }
  };

  const onTextChange = (e) => {
    setText(e.target.value);
  };

  const pushHistory = () => {
    const html = `<span class="text-text-green pr-1">$ - </span><span>${text}</span>`;
    setHistory([...history, html]);
  };

  const c = ChatBot();

  const generateAnswer = async (query) => {
    await c.invoke({ information: info, query }).then((resp) => {
      setHistory((prev) => [...prev, resp.content]);
      setDisableInput(false);
    });
  };

  return (
    <>
      <div
        className="absolute left-0 bottom-0 w-full h-1/2 py-3 px-6 text-white bg-secondary-background border-t border-border-color flex flex-col"
        onClick={focusTerminal}
      >
        <div className="flex pb-4 flex-row justify-between relative">
          <div className="uppercase text-xs border-b pb-1 border-orange-color">
            Terminal
          </div>
          <div className="absolute -right-4"></div>
        </div>
        <div className="flex-grow overflow-auto scrollbar" ref={historyRef}>
          <div>
            {history.map((his, index) => (
              <History text={his} key={index} />
            ))}
          </div>
          <div className="relative">
            <div className="absolute h-full left-0 top-0  text-text-green ">
              $ -
            </div>
            <input
              autoFocus
              className="w-full outline-none pl-10 bg-transparent"
              type="text"
              placeholder={initialPlaceHolder}
              ref={textRef}
              value={text}
              onChange={onTextChange}
              onKeyDownCapture={(event) => {
                if (!disableInput) {
                  if (event.key === "Enter") {
                    if (text === "clear") {
                      setHistory([]);
                      setInitialPlaceHolder("Ask me something...");
                    } else {
                      setDisableInput(true);
                      generateAnswer(text);
                      pushHistory();
                      scrollTo(textRef);
                      setInitialPlaceHolder("");
                    }
                    setText("");
                  }
                }
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

const History = ({ text }) => {
  return <div dangerouslySetInnerHTML={{ __html: text }}></div>;
};

export default Terminal;

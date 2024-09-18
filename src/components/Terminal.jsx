import { useEffect, useRef, useState } from "react";

import { ChatGroq } from "@langchain/groq";
import { PromptTemplate } from "@langchain/core/prompts";

const Terminal = () => {
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

  const model = new ChatGroq({
    apiKey: "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",
    model: "llama-3.1-70b-versatile",
    temperature: 0,
  });

  const message =
    "You are a chatbot that is present on my portfolio website. You will be provided a query. The query can range from a greeting to a question about the cosmos.\
  Your task will be to respond to the query. Keep the answer as short as possible.\
  Respond in a html format with divs, spans and a tags where necessary and use tailwind classes for styling.\
  The text size should be sm and the text colour should be white. Use colors like red, green, blue and yellow for a tags.\
  Do not set the height of any of the html components and answer in simple paragarphs.\
  Query: {query}";

  const prompt = PromptTemplate.fromTemplate(message);

  const chain = prompt.pipe(model);

  const generateAnswer = async (query) => {
    await chain.invoke({ query }).then((resp) => {
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
              ref={textRef}
              value={text}
              onChange={onTextChange}
              onKeyDownCapture={(event) => {
                if (!disableInput) {
                  if (event.key === "Enter") {
                    if (text === "clear") {
                      setHistory([]);
                    } else {
                      setDisableInput(true);
                      generateAnswer(text);
                      pushHistory();
                      scrollTo(textRef);
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

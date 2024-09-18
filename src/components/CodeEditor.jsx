const CodeEditor = ({ showTerminal }) => {
  const range = (start, end) => {
    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
  };

  return (
    <>
      <div
        className={`relative w-full ${
          showTerminal ? "h-1/2" : "h-full"
        } bg-default-background/95 text-xs md:text-sm lg:text-base flex flex-row overflow-auto scrollbar`}
      >
        <div className="h-full w-8 bg-default-background border-r border-r-border-color flex flex-col text-right px-2">
          {range(1, 20).map((number) => (
            <div key={number}>{number}</div>
          ))}
        </div>
        <div className="pl-2">
          <div>&nbsp;</div>
          <div>
            <span className="text-text-red">void</span>{" "}
            <span className="text-text-purple">contactInfo</span>
            <span className="text-text-blue">
              ()
              {"{"}
            </span>
          </div>
          <div className="pl-10">
            <span className="text-text-orange">std</span>
            ::
            <span className="text-text-orange">string</span>
            <span> github </span>
            <span className="text-text-red"> = </span>
            <a
              href="https://www.github.com/ayushregmi"
              className="text-text-light-blue"
            >
              "ayushregmi"
            </a>
            ;
          </div>
          <div className="pl-10">
            <span className="text-text-orange">std</span>
            ::
            <span className="text-text-orange">string</span>
            <span> linkedin </span>
            <span className="text-text-red"> = </span>
            <a
              href="https://www.linkedin.com/in/aayush-regmi-9b82651b6/"
              className="text-text-light-blue"
            >
              "Aayush Regmi"
            </a>
            ;
          </div>
          <div className="pl-10">
            <span className="text-text-orange">std</span>
            ::
            <span className="text-text-orange">string</span>
            <span> email </span>
            <span className="text-text-red"> = </span>
            <a
              href="mailto:aregmi29@gmail.com"
              className="text-text-light-blue"
            >
              "aregmi29@gmail.com"
            </a>
            ;
          </div>
          <div>&nbsp;</div>
          <div className="pl-10">
            <span className="text-text-orange">std</span>
            ::cout
            <span className="text-text-purple"> &lt;&lt; </span>
            github
            <span className="text-text-purple"> &lt;&lt; </span>
            <span className="text-text-orange">std</span>::
            <span className="text-text-purple">endl</span>;
          </div>
          <div className="pl-10">
            <span className="text-text-orange">std</span>
            ::cout
            <span className="text-text-purple"> &lt;&lt; </span>
            linkedin
            <span className="text-text-purple"> &lt;&lt; </span>
            <span className="text-text-orange">std</span>::
            <span className="text-text-purple">endl</span>;
          </div>
          <div className="pl-10">
            <span className="text-text-orange">std</span>
            ::cout
            <span className="text-text-purple"> &lt;&lt; </span>
            email
            <span className="text-text-purple"> &lt;&lt; </span>
            <span className="text-text-orange">std</span>::
            <span className="text-text-purple">endl</span>;
          </div>
          <div className="text-text-blue">{"}"}</div>
          <div>&nbsp;</div>
          <div>
            <span className="text-text-red">int</span>{" "}
            <span className="text-text-purple">main</span>
            <span className="text-text-blue">(){"{"}</span>
          </div>
          <div className="pl-10">
            <span className="text-text-purple">contactInfo</span>
            <span className="text-text-blue">()</span>;
          </div>
          <div>&nbsp;</div>
          <div className="pl-10">
            <span className="text-text-red">return </span>
            <span className="text-text-light-blue">0</span>;
          </div>
          <div className="text-text-blue">{"}"}</div>
        </div>
      </div>
    </>
  );
};

export default CodeEditor;

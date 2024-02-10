import { useEffect, useState } from "react";

const Typing = ({ words, typing_delay, delete_delay, className }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0); // index of the current word in the screen
  const [currentIndex, setCurrentIndex] = useState(0); // index of the current character
  const [writing, setWriting] = useState(true);

  useEffect(() => {
    if (writing) {
      if (currentText.length < words[currentWordIndex].length) {
        const timeout = setTimeout(() => {
          setCurrentText(
            (prevText) => prevText + words[currentWordIndex][currentIndex]
          );
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }, typing_delay);

        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setWriting(false);
          setCurrentIndex(0);
          setCurrentWordIndex(
            (prevWordIndex) => (prevWordIndex + 1) % words.length
          );
        }, 300);

        return () => clearTimeout(timeout);
      }
    } else {
      if (currentText.length !== 0) {
        const timeout = setTimeout(() => {
          setCurrentText((prevText) => prevText.slice(0, -1));
        }, delete_delay);

        return () => clearTimeout(timeout);
      } else {
        setWriting(true);
      }
    }
  }, [writing, currentText]);

  // useEffect(() => {
  //   console.log(cursorText);
  //   if (cursor) {
  //     const timeout = setTimeout(() => {
  //       if (cursorText.length === 0) {
  //         setCursorText("|");
  //       } else {
  //         setCursorText("");
  //       }
  //     }, 100);

  //     return () => clearTimeout(timeout);
  //   }
  // }, [cursorText]);

  return (
    <>
      <span className={className}>{currentText}</span>
    </>
  );
};

export default Typing;

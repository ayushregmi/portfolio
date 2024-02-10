import { FaUserAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import ContactImage from "../assets/contact.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    AOS.init();
  }, []);
  document.title = "Contact";

  const handleSubmit = () => {};

  return (
    <>
      <div className="flex-grow flex items-center justify-center font-protest-riot">
        <div className="w-2/3  flex flex-row gap-2">
          <div
            className="w-1/2 overflow-hidden flex items-center justify-center
          "
            data-aos="fade-down"
          >
            <div className="bg-white overflow-hidden rounded-xl pointer-events-none">
              <img src={ContactImage} alt="img" />
            </div>
          </div>
          <div
            className="w-1/2 flex flex-col gap-6 justify-center"
            data-aos="fade-up"
          >
            <div className="text-center text-4xl mb-6">
              Leave a <span className="text-red-900">Message</span>
            </div>
            <div className="w-full relative">
              <div className="absolute top-0 left-0 h-10 w-10 flex items-center justify-center">
                <FaUserAlt className="text-gray-400" />
              </div>
              <input
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                placeholder="Name"
                className="w-4/5 h-10 outline-none rounded-xl pl-10 font-protest-riot"
              />
            </div>
            <div className="w-full relative">
              <div className="absolute top-0 left-0 h-10 w-10 flex items-center justify-center">
                <MdMail className="text-gray-400 h-5 w-5" />
              </div>
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                placeholder="Email"
                className="w-4/5 h-10 outline-none  rounded-xl pl-10 font-protest-riot"
              />
            </div>
            <div className="w-full relative">
              <div className="absolute top-0 left-0 h-10 w-10 flex items-center justify-center">
                <BiSolidMessageRoundedDetail className="text-gray-400 h-6 w-6" />
              </div>
              <textarea
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                placeholder="Message"
                className="w-4/5 py-2 max-h-96 h-40 outline-none  rounded-xl font-protest-riot px-10"
              />
            </div>
            <div className="flex justify-end w-4/5">
              <button
                onSubmit={(e) => {
                  handleSubmit(e);
                }}
                className="bg-blue-900 text-gray-100 px-8 py-3 text-lg rounded-full flex flex-row items-center gap-2 transition duration-300 hover:scale-105 shadow-lg hover:shadow-2xl"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";
import { Input } from "./ui/Input";

const Contact = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[35vw]    ">
          I’d Love to Hear from
          <span className="text-yellow"> You</span>  Get in Touch!
        </h1>
       

        <div className="grid grid-cols-1 gap-y-2 lg:w-[800px]  w-[500px] my-10">
          <input
            id="email"
            type="text"
            className=" border border-purple rounded-lg custom-scroll-bar-x border-opacity-50 bg-black p-4  flex-1 focus:border-yellow active:border-yellow outline-none"
            placeholder="xyz@d07.com"
          ></input>
          <textarea
            id="message"
            className="sm:my-5 border border-purple rounded-lg custom-scroll-bar-x border-opacity-50 bg-black p-4  flex-1 focus:border-yellow active:border-yellow outline-none"
            rows={5}
            placeholder="Hey Divyakumar, This is an awesome website!"
          ></textarea>
        </div>
        <div>
          <MagicButton
            title="Send"
            icon={<FaLocationArrow />}
            position="right"
          />
          </div>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Made with ❤ by Divy
        </p>

        <div className="flex items-center md:gap-3 gap-6 sm:my-5">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Contact;

import { useState, ChangeEvent, FormEvent } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbwPXMT7z42Ylng8CUSLFwAAzZecBI0ZWm5V7Lscixg6UIQdRwp9UhhpIJDwGM1QSAiS/exec";
    const formData = new FormData();
    formData.append("email", email);
    formData.append("message", message);

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        setStatus("Success! Your message has been sent.");
        setEmail("");
        setMessage("");
      } else {
        setStatus("Error! Something went wrong.");
      }
    } catch (error) {
      setStatus("Error! Something went wrong.");
      console.error("Error!", error);
    }
  };

  return (
    <footer className="w-full pt-20 pb-10 relative" id="contact">
      <div className="absolute inset-0">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <h1 className="heading lg:max-w-[35vw] text-center">
          I’d Love to Hear from
          <span className="text-yellow"> You</span> Get in Touch!
        </h1>

        <form
          onSubmit={onSubmit}
          className="grid gap-y-4 w-full max-w-lg mx-auto my-10"
        >
          <input
            id="email"
            type="text"
            value={email}
            onChange={handleEmailChange}
            className="border border-purple rounded-lg custom-scroll-bar-x border-opacity-50 bg-black p-4 flex-1 focus:border-yellow active:border-yellow outline-none w-full"
            placeholder="xyz@d07.com"
          />
          <textarea
            id="message"
            value={message}
            onChange={handleMessageChange}
            className="border border-purple rounded-lg custom-scroll-bar-x border-opacity-50 bg-black p-4 flex-1 focus:border-yellow active:border-yellow outline-none w-full"
            rows={5}
            placeholder="Hey Divyakumar, This is an awesome website!"
          />
          <div className="flex justify-center mt-4">
            <MagicButton
              title="Send"
              icon={<FaLocationArrow />}
              position="right"
            />
          </div>
        </form>

        {status && (
          <TextGenerateEffect
            words={status}
            className="text-center text-[20px] md:text-2xl lg:text-3xl"
          />
        )}
      </div>

      <div className="relative z-10 flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Made with ❤ by Divy
        </p>

        <div className="flex items-center md:gap-3 gap-6 sm:my-5">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Contact;

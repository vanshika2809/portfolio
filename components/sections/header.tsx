import React from "react";
import Avatar from "../elements/Avatar";

const Header = () => {
  return (
    <section className="w-full min-h-[500px] relative overflow-hidden">
      <div
        style={{ backgroundImage: "url(/headerBg.jpg)" }}
        className="absolute blur-sm transform bg-no-repeat bg-center bg-cover scale-[1.01] inset-0 z-[1]"
      ></div>
      <header className="z-20 absolute inset-0 flex items-center justify-center text-white">
        <div className="flex lg:w-2/3 w-4/5 flex-col lg:flex-row space-y-6 lg:space-y-0">
          <div className="flex-1 order-2 lg:order-1 flex flex-col space-y-6 lg:pr-[18px]">
            <h1 className="font-bold text-5xl text-center lg:text-left">
              Vanshika Mehrotra
            </h1>
            <p className="text-lg font-semibold font-sans leading-9 text-center lg:text-left">
              Hi, <br /> I am a Computer Science student at the University of
              Florida, who has developed a strong foundation in software
              development and programming languages, including Python and
              Javascript. I am taking courses concentrated on security -
              Computer Network & Security, Malware Reverse Engineering,
              Penetration Testing & Ethical Hacking.
            </p>
          </div>
          <div className="order-1 lg:order-2 flex flex-col justify-center items-center">
            <Avatar />
          </div>
        </div>
      </header>
    </section>
  );
};

export default Header;

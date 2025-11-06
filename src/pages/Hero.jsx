import React from "react";
import noorImg from "../assets/noor.png";
import cvFile from "../assets/Noor Ul Huda Resume.pdf";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-black via-red-900 to-red-700 px-6">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div className="text-white space-y-6">
          {/* Professional animated heading */}
          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight animate-fade-in animate-slide-up">
            Hi, I’m a Full Stack Developer
          </h2>

          <p className="text-lg sm:text-xl font-medium text-white animate-fade-in delay-100">
            <span className="text-yellow-300 font-semibold animate-pulse">
              Turning Ideas into Seamless Digital Experiences
            </span>
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-wrap gap-4 animate-slide-up delay-200">
            <a
              href={cvFile}
              download
              className="inline-flex items-center gap-2 bg-white text-red-700 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-red-100 transition duration-300 transform hover:scale-105"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-transparent border border-white text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-white hover:text-red-700 transition duration-300 transform hover:scale-105"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex justify-center md:justify-end animate-slide-in-right">
          <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-white shadow-xl hover:scale-110 transition-transform duration-500">
            <img
              src={noorImg}
              alt="Noor"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

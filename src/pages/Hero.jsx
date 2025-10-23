// import React from "react";

// function Hero() {
//   return (
//     <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-black via-red-900 to-red-700 px-6">
//       <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//         {/* LEFT */}
//         <div className="text-white space-y-6 animate-fade-in">
//           <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
//             Hi, I'm Noor ul Huda
//           </h1>

//           <p className="text-lg sm:text-xl font-medium text-white">
//             I'm a student studying <span className="text-yellow-300 font-semibold">IT professional</span> at{" "}
//             <span className="text-yellow-300 font-semibold">Virtual University</span>.
//             I’m passionate about <span className="text-yellow-300 font-semibold">Information Technology</span> and eager to bring my skills to real-world projects.
//           </p>

//           {/* CTA */}
//           <div className="flex flex-wrap gap-4 animate-slide-up delay-200">
//             <a
//               href="/NoorUlHuda_CV.pdf"
//               download
//               className="inline-flex items-center gap-2 bg-white text-red-700 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-red-100 transition duration-300"
//             >
//               Download CV
//             </a>
//             <a
//               href="/contact"
//               className="inline-flex items-center gap-2 bg-transparent border border-white text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-white hover:text-red-700 transition duration-300"
//             >
//               Contact Me
//             </a>
//           </div>
//         </div>

//         {/* RIGHT */}
//         <div className="flex justify-center md:justify-end animate-slide-in-right">
//           <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-white shadow-xl hover:scale-105 transition-transform">
//             <img src="/noor.png" alt="Noor" className="w-full h-full object-cover" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;

import React from "react";
import noorImg from "../assets/noor.png"; // ✅ Image imported properly
import cvFile from "../assets/Noor's CV.pdf"; // ✅ CV imported properly

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-black via-red-900 to-red-700 px-6">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT */}
        <div className="text-white space-y-6 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Hi, I'm Noor ul Huda
          </h1>

          <p className="text-lg sm:text-xl font-medium text-white">
            <span className="text-yellow-300 font-semibold">
              PYTHON | DJANGO | REACT.JS | TAILWIND CSS | JAVASCRIPT | FULL STACK DEVELOPER
            </span>
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-4 animate-slide-up delay-200">
            <a
              href={cvFile} // ✅ Using imported CV file
              download
              className="inline-flex items-center gap-2 bg-white text-red-700 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-red-100 transition duration-300"
            >
              Download CV
            </a>
            <a
              href="#contact" // optional: scroll to contact section
              className="inline-flex items-center gap-2 bg-transparent border border-white text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-white hover:text-red-700 transition duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center md:justify-end animate-slide-in-right">
          <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-white shadow-xl hover:scale-105 transition-transform">
            <img
              src={noorImg} // ✅ Using imported image
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

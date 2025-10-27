import React from "react";

function Experience() {
  return (
    <section
      id="experience"
      className="bg-gradient-to-r from-gray-900 via-red-900 to-red-700 text-white py-16 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 border-b-2 border-yellow-400 inline-block animate-fade-in">
          Experience
        </h2>

        {/* First Experience */}
        <div className="mb-10 bg-white/10 p-6 rounded-xl shadow-lg hover:scale-105 transform transition duration-500 animate-slide-up">
          <h3 className="text-2xl font-semibold text-yellow-300">
            Web Developer – Computribe
          </h3>
          <p className="italic text-sm text-gray-200">
            Lahore, Pakistan | Feb 2024 – Apr 2024
          </p>

          <ul className="mt-4 space-y-4 list-disc list-inside text-gray-100 leading-relaxed">
            <li>
              Developed and optimized Python scripts to automate data processing tasks,
              improving workflow efficiency and minimizing manual effort. Worked with
              Django to design reliable backend systems for web applications.
            </li>

            <li>
              Collaborated with the team to build RESTful APIs, enabling seamless
              data exchange between frontend and backend. Focused on testing and debugging
              to ensure strong performance and maintainability.
            </li>
          </ul>
        </div>

        {/* Second Experience */}
        <div className="bg-white/10 p-6 rounded-xl shadow-lg hover:scale-105 transform transition duration-500 animate-slide-up delay-200">
          <h3 className="text-2xl font-semibold text-yellow-300">
            Web Developer – CodeCelix
          </h3>
          <p className="italic text-sm text-gray-200">
            Lahore, Pakistan | Aug 2025 – Oct 2025
          </p>

          <ul className="mt-4 space-y-4 list-disc list-inside text-gray-100 leading-relaxed">
            <li>
              Developed and maintained responsive, high-performance web applications using React.js, Tailwind CSS, and MongoDB. Focused on crafting visually appealing interfaces that delivered a smooth and engaging user experience. Ensured seamless functionality across all screen sizes and devices through clean, modular code. 
              This approach enhanced accessibility and performance across the entire platform.
            </li>

            <li>
              Designed and implemented reusable UI components and interactive dashboards, focusing on responsive layouts and intuitive user interaction. Collaborated closely with team members to improve efficiency and maintain design consistency throughout the project. Optimized frontend performance for faster load times and better scalability. Delivered visually refined, 
              data-driven dashboards that provided meaningful insights to users.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;

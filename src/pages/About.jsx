import React from "react";

function About() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4">
          About Me
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed">
          I am a Full Stack Developer skilled in Python, Django, React.js, Tailwind CSS, and JavaScript, with a strong focus on building responsive and efficient web applications. I enjoy crafting seamless user interfaces with React and Tailwind CSS while developing secure and scalable backends using Django. My goal is to create visually appealing, high-performing, and reliable digital solutions that bring ideas to life. Passionate about clean design, modern development practices, and continuous learning, I strive to deliver projects that blend creativity with functionality.
        </p>
      </div>

      {/* Skills */}
      <div className="max-w-5xl mx-auto mb-16 animate-slide-up">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Professional Skills
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "SEO-Optimization",
            "Content Writing",
            "SMM (Social Media Marketing)",
            "WordPress Development",
          ].map((skill) => (
            <span
              key={skill}
              className="bg-red-500 text-white px-5 py-2 rounded-full text-sm font-medium shadow hover:bg-red-600 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Languages */}
      <div className="max-w-5xl mx-auto animate-slide-up delay-200">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Programming Languages
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {["HTML", "CSS", "JavaScript", "React JS", "Python", "Django Framework", "C++"].map(
            (lang) => (
              <span
                key={lang}
                className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium shadow hover:bg-gray-800 transition"
              >
                {lang}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default About;

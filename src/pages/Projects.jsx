import React from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Modern E-Commerce Store",
    description:
      "This full-featured e-commerce web application is built using React for the frontend and Node.js with Express for the backend. It includes product listings, shopping cart, user authentication, and admin product management. The system is scalable and designed to deliver a fast, responsive online shopping experience.",
    link: "https://github.com/joingithubcode/E-Commerce-Project.git",
  },
  {
    title: "Skin Disease Detection System",
    description:
      "This project is a deep learning-based skin disease detection system built using Convolutional Neural Networks (CNN). It analyzes uploaded skin images to predict potential diseases with high accuracy. Developed using Python and Streamlit, it aims to support early diagnosis and raise awareness in healthcare.",
    link: "https://github.com/joingithubcode/Skin-Disease-Detection-Using-CNN.git",
  },
];

function Projects() {
  return (
    <section className="py-20 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-red-600 mb-12 tracking-tight">
          Projects Showcase
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((proj, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {proj.title}
              </h3>
              <p className="text-gray-600 mb-4">{proj.description}</p>
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-red-600 hover:text-red-800 font-medium transition"
              >
                View Project <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

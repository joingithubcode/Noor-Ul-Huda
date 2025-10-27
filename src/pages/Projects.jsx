// import React from "react";
// import { ExternalLink } from "lucide-react";

// const projects = [
//   {
//     title: "Modern E-Commerce Store",
//     description:
//       "This full-featured e-commerce web application is built using React for the frontend and Node.js with Express for the backend. It includes product listings, shopping cart, user authentication, and admin product management. The system is scalable and designed to deliver a fast, responsive online shopping experience.",
//     link: "https://github.com/joingithubcode/E-Commerce-Project.git",
//   },
//   {
//     title: "Skin Disease Detection System",
//     description:
//       "This project is a deep learning-based skin disease detection system built using Convolutional Neural Networks (CNN). It analyzes uploaded skin images to predict potential diseases with high accuracy. Developed using Python and Streamlit, it aims to support early diagnosis and raise awareness in healthcare.",
//     link: "https://github.com/joingithubcode/Skin-Disease-Detection-Using-CNN.git",
//   },
// ];

// function Projects() {
//   return (
//     <section className="py-20 px-4 bg-gray-100">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-3xl font-bold text-center text-red-600 mb-12 tracking-tight">
//           Projects Showcase
//         </h2>
//         <div className="grid gap-8 md:grid-cols-2">
//           {projects.map((proj, i) => (
//             <div
//               key={i}
//               className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300"
//             >
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                 {proj.title}
//               </h3>
//               <p className="text-gray-600 mb-4">{proj.description}</p>
//               <a
//                 href={proj.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center text-red-600 hover:text-red-800 font-medium transition"
//               >
//                 View Project <ExternalLink className="w-4 h-4 ml-1" />
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Projects;


import React from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Student Management System",
    description:
      "A CRUD-based web application developed using Python, Django, and React.js that allows administrators to efficiently manage student data, including registration, updates, and deletions. It includes user authentication, real-time data interaction, and a responsive UI for seamless data handling and usability.",
    link: "https://github.com/joingithubcode/PNY_Project.git",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with React.js and Tailwind CSS to showcase my projects, skills, certifications, and experience. It features smooth animations, a modern layout, and responsive design, reflecting my frontend development expertise and eye for clean UI design.",
    link: "https://github.com/joingithubcode/Noor-Ul-Huda.git",
  },
  {
    title: "E-Commerce Website",
    description:
      "A fully functional e-commerce platform developed using Python, HTML, and Tailwind CSS. It includes product listings, authentication, cart management, order checkout, and an admin dashboard for managing users, orders, and products — delivering a smooth, secure, and responsive shopping experience.",
    link: "https://github.com/joingithubcode/Valleysfood-E-Commerce-Website.git",
  },
  {
    title: "Medication Reminder Tracker App",
    description:
      "A responsive web application built using React.js and MongoDB to help users manage and track their medications. Users can add, edit, delete medications, and set reminders. The app ensures secure data storage and a smooth user experience with a modern, responsive UI.",
    link: "https://github.com/joingithubcode/Medication_Tracker_Website.git",
  },
  {
    title: "Gleam Watches E-Commerce Store",
    description:
      "A modern e-commerce website built with React.js and Tailwind CSS for showcasing and selling premium watches. It includes product filters, discount labels, cart management, and a polished checkout process — all wrapped in a clean, elegant, and responsive interface.",
    link: "https://gleam-watches-ecommerce.netlify.app/",
  },
  {
    title: "Business Portfolio Website",
    description:
      "A dynamic and visually engaging business portfolio website built using React.js and Tailwind CSS. It showcases company services, projects, and testimonials, featuring a content management dashboard and modern UI/UX principles for a professional, responsive experience.",
    link: "https://business-portfolio-web.netlify.app/",
  },
  {
    title: "Human Skin Disease Detection System Using CNN (FYP)",
    description:
      "An AI-based deep learning system that uses Convolutional Neural Networks (CNN) to detect skin diseases from uploaded images with high accuracy. Developed using Python, TensorFlow, and Streamlit, it supports real-time prediction and includes an admin panel for managing datasets and updates.",
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

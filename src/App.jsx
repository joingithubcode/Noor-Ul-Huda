// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Hero from "./pages/Hero";
// import About from "./pages/About";
// import Projects from "./pages/Projects";
// import Contact from "./pages/Contact";

// function App() {
//   return (
//     <div className="font-sans">
//       <Header />
//       <main>
//         <Routes>
//           <Route path="/" element={<Hero />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/projects" element={<Projects />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;


import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="font-sans scroll-smooth">
      <Header />

      <main>
        <section id="hero">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;

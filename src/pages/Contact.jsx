import React from "react";

function Contact() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-black via-red-900 to-red-700 px-6 py-20">
      <div className="text-center mb-16 max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
          Contact Me
        </h2>
        <p className="text-lg md:text-xl text-gray-100 leading-relaxed drop-shadow-sm">
          I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          Feel free to reach out and let’s build something great together.
        </p>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
        {/* Info Box */}
        <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col justify-center hover:scale-[1.02] transition">
          <h1 className="text-2xl font-semibold mb-5 text-gray-800 text-center">
            Personal Details
          </h1>
          <ul className="space-y-3 text-base leading-relaxed text-center">
            <li><span className="font-medium">Name:</span> Noor ul Huda Abid</li>
            <li><span className="font-medium">Nationality:</span> Pakistani</li>
            <li><span className="font-medium">Date of Birth:</span> 13/11/2000</li>
            <li><span className="font-medium">Gender:</span> Female</li>
            <li>
              <span className="font-medium">Email:</span>{" "}
              <a
                href="mailto:noorulhudaabid883@gmail.com"
                className="text-red-600 hover:underline"
              >
                noorulhudaabid883@gmail.com
              </a>
            </li>
            <li>
              <span className="font-medium">Website:</span>{" "}
              <a
                href="https://www.adorittech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:underline"
              >
                www.adorittech.com
              </a>
            </li>
            <li><span className="font-medium">Location:</span> 54000 Lahore (Pakistan)</li>
          </ul>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col justify-center hover:scale-[1.02] transition">
          <h3 className="text-2xl font-semibold text-gray-800 mb-5 text-center">
            Send a Message
          </h3>
          <form className="space-y-5">
            <div>
              <label className="block mb-1 text-gray-700 font-medium">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700 font-medium">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700 font-medium">Message</label>
              <textarea
                placeholder="Your Message"
                className="w-full border border-gray-300 px-4 py-2 rounded h-32 resize-none focus:outline-none focus:ring-2 focus:ring-red-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition font-semibold shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;

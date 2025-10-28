import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [state, handleSubmit] = useForm("mzzkdpjo");
  const [userEmail, setUserEmail] = useState("");

  const handleCustomSubmit = async (e) => {
    e.preventDefault();
    await handleSubmit(e);

    if (e.target && e.target.reset && !state.submitting) {
      e.target.reset();
    }

    // Toast message instead of alert
    toast.success(`Thank you ${userEmail || "User"}! Your message has been sent successfully.`, {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-black via-red-900 to-red-700 px-6 py-20">
      {/* Toast container */}
      <ToastContainer />

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
          <h1 className="text-2xl font-semibold mb-5 text-gray-800 text-center">Personal Details</h1>
          <ul className="space-y-3 text-base leading-relaxed text-center">
            <li><span className="font-medium">Name:</span> Noor ul Huda Abid</li>
            <li>
              <span className="font-medium">Email:</span>{" "}
              <a href="mailto:noorulhudaabid883@gmail.com" className="text-red-600 hover:underline">
                noorulhudaabid883@gmail.com
              </a>
            </li>
            <li><span className="font-medium">Phone:</span> +92 333 9737818</li>
            <li>
              <span className="font-medium">LinkedIn:</span>{" "}
              <a href="https://www.linkedin.com/in/noor-ul-huda-abid" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">
                Profile
              </a>
            </li>
            <li>
              <span className="font-medium">Website:</span>{" "}
              <a href="https://www.adorittech.com" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">
                www.adorittech.com
              </a>
            </li>
            <li><span className="font-medium">Address:</span> Lahore, Pakistan (54000)</li>
          </ul>
        </div>

        {/* Form Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col justify-center hover:scale-[1.02] transition">
          <h3 className="text-2xl font-semibold text-gray-800 mb-5 text-center">
            Send a Message
          </h3>

          <form onSubmit={handleCustomSubmit} className="space-y-5">
            <div>
              <label className="block mb-1 text-gray-700 font-medium">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700 font-medium">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="Your Email"
                onChange={(e) => setUserEmail(e.target.value)}
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
            <div>
              <label className="block mb-1 text-gray-700 font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Your Message"
                className="w-full border border-gray-300 px-4 py-2 rounded h-32 resize-none focus:outline-none focus:ring-2 focus:ring-red-400"
              ></textarea>
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>
            <button
              type="submit"
              disabled={state.submitting}
              className="w-full bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition font-semibold shadow-md"
            >
              {state.submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;

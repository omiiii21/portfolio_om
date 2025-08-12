import React from "react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-12 px-6 bg-white text-center">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <p className="text-gray-700 mb-4">Let’s work together!</p>
      <a
        href="mailto:youremail@example.com"
        className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600"
      >
        Email Me
      </a>
    </section>
  );
};

export default Contact;

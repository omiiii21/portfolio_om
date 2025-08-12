import React from "react";
import profilePic from "../assets/profile.jpg";

const Hero: React.FC = () => {
  return (
    <section className="text-center py-16 bg-gray-100">
      <img
        src={profilePic}
        alt="Profile"
        className="mx-auto rounded-full w-32 h-32 mb-4"
      />
      <h2 className="text-3xl font-bold">Hi, I'm Om</h2>
      <p className="text-gray-600 mt-2">Full Stack Developer | Data Engineer</p>
    </section>
  );
};

export default Hero;

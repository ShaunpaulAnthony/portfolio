import React from "react";
import profilePic from '../profile.jpg';

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-40 md:flex-row flex-col items-center">
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mr-8 flex justify-center">
          <img
            className="profile-pic object-cover object-center rounded"
            alt="profile picture"
            src={profilePic}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-800">
            Hi, I'm Shaun.
            <br className="hidden lg:inline-block" />Full Stack Developer
          </h1>
          <p className="mb-8 leading-relaxed">
            Hands-on experience in multiple technologies, from
            front-end design to back-end integration.
          </p>
          <div className="flex justify-center">
            {/* <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Get in Contact
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}
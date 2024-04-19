import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";

const Home = () => {
  return (
    <section className="bg-black pt-2">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <img
              alt=""
              src="/mine.jpg"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Grow your audience
            </h2>
            <p className="mt-4 text-white text-5xl">Hi, I'm</p>
            <p className=" text-[#fb153b] text-5xl">Uwineza Florence</p>
            <p className="mt-4 text-white text-4xl">Front-end developer.</p>
            <p className="mt-4 text-white text-xl">
              I Am currently attending She Can Codebootcamp and I Am studend in university of Rwanda(UR)
            </p>
            <p className="mt-4 text-[#fb153b] text-3xl">Find me:</p>
            <br></br>
            <div className="flex gap-10 text-3xl">
              <a href="https://www.instagram.com/_uwineza_/">
                <FaInstagram className="text-white hover:text-[#fb153b] " />
              </a>
              <a href="</a>">
                <FaGithub className="text-white  hover:text-[#fb153b] " />
              </a>
              <a href="https://mail.google.com/mail/u/0/#chats">
                <MdEmail className="text-white  hover:text-[#fb153b] " />
              </a>
              <a href="https://www.linkedin.com/in/uwineza-florence-3b9463280/">
                <CiLinkedin className="text-white  hover:text-[#fb153b] " />
              </a>
            </div>
            <div>
            <button className="mt-8 inline-block rounded  bg-[#fb153b] px-12 py-3 text-sm font-medium text-white transition hover:bg-[#85414d] focus:outline-none focus:ring focus:ring-yellow-400"><a href="cv.pdf" download>Learn More</a></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

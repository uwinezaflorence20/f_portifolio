import React from 'react'
import { FaReact } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { LuComputer } from "react-icons/lu";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { RiMiniProgramFill } from "react-icons/ri";
import { MdOutlineComputer } from "react-icons/md";
const Skill = () => {
  
  return (
    
    <div>
      
      <section class="bg-black text-white">
  <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div class="mx-auto max-w-lg text-center">
        
      <h2 class="text-3xl font-bold sm:text-4xl">My skill</h2>
      
    </div>

    <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <a
        class="block rounded-xl border border-[#fb153b] p-8 shadow-xl transition hover:border-[#fb153b] hover:shadow-[#fb153b]"
        href="#"
      >
        <FaHtml5 className="text-3xl hover:text-[#fb153b]" />

        <h2 class="mt-4 text-xl font-bold text-white">HTML</h2>

        <p class="mt-1 text-sm text-gray-300">
          It Is used to build the interface for the website
        </p>
      </a>

      <a
        class="block rounded-xl border border-[#fb153b] p-8 shadow-xl transition hover:border-[#fb153b] hover:shadow-[#fb153b]"
        href="#"
      >
        
        <FaCss3Alt className="text-3xl hover:text-[#fb153b]" />

        <h2 class="mt-4 text-xl font-bold text-white">CSS</h2>

        <p class="mt-1 text-sm text-gray-300">
        CSS is the language we use to style an HTML document.CSS describes how HTML elements should be displayed.
        </p>
      </a>

      <a
        class="block rounded-xl border border-[#fb153b] p-8 shadow-xl transition hover:border-[#fb153b] hover:shadow-[#fb153b]"
        href="#"
      >
       <LuComputer className="text-3xl hover:text-[#fb153b]" />

        <h2 class="mt-4 text-xl font-bold text-white">Lunix/Unix</h2>

        <p class="mt-1 text-sm text-gray-300">
        Linux is an open source operating system. An operating system is the software that directly manages a system’s hardware and resources, like CPU, memory, and storage. 
        </p>
      </a>

      <a
        class="block rounded-xl border border-[#fb153b] p-8 shadow-xl transition hover:border-[#fb153b] hover:shadow-[#fb153b]"
        href="#"
      >
        
        <FaJava className="text-3xl hover:text-[#fb153b]"  />
        <h2 class="mt-4 text-xl font-bold text-white">Java</h2>

        <p class="mt-1 text-sm text-gray-300">
        Java Developer is responsible for designing, implementing, and maintaining Java-based software and applications, contributing to all stages of the software development lifecycle.
        </p>
      </a>

      <a
        class="block rounded-xl border border-[#fb153b] p-8 shadow-xl transition hover:border-[#fb153b] hover:shadow-[#fb153b]"
        href="#"
      >
        <RiMiniProgramFill className="text-3xl hover:text-[#fb153b]" />


        <h2 class="mt-4 text-xl font-bold text-white">C++</h2>

        <p class="mt-1 text-sm text-gray-300">
        C++ is the most used and most popular programming language developed by Bjarne Stroustrup. C++ is a high-level and object-oriented programming language. 
        </p>
      </a>

      <a
        class="block rounded-xl border border-[#fb153b] p-8 shadow-xl transition hover:border-[#fb153b] hover:shadow-[#fb153b]"
        href="#"
      >
        <DiJavascript className="text-3xl hover:text-[#fb153b]" />


        <h2 class="mt-4 text-xl font-bold text-white">Javascript</h2>

        <p class="mt-1 text-sm text-gray-300">
        JavaScript, often abbreviated as JS, is a programming language and core technology of the Web, alongside HTML and CSS. 99% of websites use
        </p>
      </a>

      <a
        class="block rounded-xl border border-[#fb153b] p-8 shadow-xl transition hover:border-[#fb153b] hover:shadow-[#fb153b]"
        href="#"
      >
        
        <MdOutlineComputer className="text-3xl hover:text-[#fb153b]" />

        <h2 class="mt-4 text-xl font-bold text-white">C</h2>

        <p class="mt-1 text-sm text-gray-300">
        C++ is the most used and most popular programming language developed by Bjarne Stroustrup. C++ is a high-level and object-oriented programming
        </p>
      </a>

      <a
        class="block rounded-xl border border-[#fb153b] p-8 shadow-xl transition hover:border-[#fb153b] hover:shadow-[#fb153b]"
        href="#"
      >
       <FaDatabase className="text-3xl hover:text-[#fb153b]"  />


        <h2 class="mt-4 text-xl font-bold text-white">DBMS Tools</h2>

        <p class="mt-1 text-sm text-gray-300">
        DBMS Tools like mysql work bench na d design different database type like commercial and other types of the database.
        </p>
      </a>

      <a
        class="block rounded-xl border border-[#fb153b] p-8 shadow-xl transition hover:border-[#fb153b] hover:shadow-[#fb153b]"
        href="#"
      >
        <FaReact className="text-3xl hover:text-[#fb153b] " />


        <h2 class="mt-4 text-xl font-bold text-white">React</h2>

        <p class="mt-1 text-sm text-gray-300">
        C++ is the most used and most popular programming language developed by Bjarne Stroustrup. C++ is a high-level and object-oriented programming
        </p>
      </a>
    </div>

    <div class="mt-12 text-center">
      <a
        href="https://github.com/uwinezaflorence20"
        class="inline-block rounded bg-[#fb153b] px-12 py-3 text-sm font-medium text-white transition hover:bg-[#fb153b] focus:outline-none focus:ring focus:ring-yellow-400"
      >
        My Projects
      </a>
    </div>
  </div>
</section>
    </div>
  )
}

export default Skill

import React from 'react'
import Header from './Header'
const AboutMe = () => {
  return (
    <div>
      
<section className="bg-black">
  <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
    <div class="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div class="relative h-64 overflow-hidden sm:h-80 lg:h-full">
        <img
          alt=""
          src="/about.jpeg"
          class="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div class="lg:py-16">
        <article class="space-y-4 text-white text-xl">
          <p>
          I am a website designer from Rwanda, with a strong focus on front-end development. I love to gain new experiences and analyze and learn from my surroundings<br></br>
<br></br>A
s a highly skilled and experienced computer programmer, I am passionate about writing code and developing high-quality software that meets the needs of my clients.<br></br><br></br>

My strong background in computer science, coupled with my commitment to using the best programming practices and tools available, makes me a valuable asset to any software development team.
          </p>

          <button className="mt-8 inline-block rounded  bg-[#fb153b] px-12 py-3 text-sm font-medium text-white transition hover:bg-[#85414d] focus:outline-none focus:ring focus:ring-yellow-400"><a href="cv.pdf" download>Download CV</a></button>
        </article>
      </div>
    </div>
  </div>
</section>

</div>
  )
}

export default AboutMe


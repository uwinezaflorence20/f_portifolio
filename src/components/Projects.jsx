import React from 'react'
import Header from './Header'
import { GrFormNextLink } from "react-icons/gr";
const Projects = () => {
  return (
    <div>
     <section class="bg-white">
  <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
    <h2 class="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
      Project I Have Finished so Far
    </h2>

    <div class="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
      <blockquote class="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
        <div class="flex items-center gap-4">
          <img alt="" src="/dice.png"/>
        </div>
        <p className="font-bold">roll dice  Project</p>
        <p class="mt-4 text-gray-700">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a
          consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus
          error officiis atque voluptates magnam!
        </p>
        <a className="font-serif font-bold hover:text-[#fb153b]" href="https://uwinezaflorence20.github.io/roll_dice_generator/"> View More<GrFormNextLink /></a>
      </blockquote>

      <blockquote class="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
        <div class="flex items-center h-72 gap-4">
          <img alt="" src="/api.png"/>
        </div>
        <p className="font-bold">Countries API project</p>
        <p class="mt-4 text-gray-700">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a
          consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus
          error officiis atque voluptates magnam!
        </p>
        <a className="font-serif font-bold hover:text-[#fb153b]" href=""> View More<GrFormNextLink /></a>
      </blockquote>

      <blockquote class="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
        <div class="flex items-center h-72  gap-4">
          <img alt="" src="/food.png"/>
        </div>
        <p className="font-bold">Food Blog Project</p>
        <p class="mt-4 text-gray-700">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a
          consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus
          error officiis atque voluptates magnam!
        </p>
        <a className="font-serif font-bold hover:text-[#fb153b]" href="https://uwinezaflorence20.github.io/new-food-blog-project/"> View More<GrFormNextLink /></a>
      </blockquote>

      <blockquote class="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
        <div class="flex items-center h-72  gap-4">
          <img alt="" src="/rock.png"/>
        </div>
        <p className="font-bold">rock paper scissor project</p>
        <p class="mt-4 text-gray-700">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a
          consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus
          error officiis atque voluptates magnam!
        </p>
        <a className="font-serif font-bold hover:text-[#fb153b]" href="https://uwinezaflorence20.github.io/rock_paper_scissor_app/"> View More<GrFormNextLink /></a>
      </blockquote>

      <blockquote class="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
        <div class="flex items-center h-72  gap-4">
          <img alt="" src="/age.png"/>
        </div>
        <p className="font-bold">Age calculator project</p>
        <p class="mt-4 text-gray-700">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a
          consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus
          error officiis atque voluptates magnam!
        </p>
        <a className="font-serif font-bold hover:text-[#fb153b]" href="https://uwinezaflorence20.github.io/age_calculator/"> View More</a>
        <GrFormNextLink />
      </blockquote>

      <blockquote class="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
        <div class="flex items-center h-72  gap-4">
          <img alt="" src="/image.png"/>
        </div>
        <p className="font-bold">Emoji Generator</p>
        <p class="mt-4 text-gray-700">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a
          consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus
          error officiis atque voluptates magnam!
        </p>
        <a className="font-serif font-bold hover:text-[#fb153b]" href="https://uwinezaflorence20.github.io/emoji_generator/"> View More</a>
        <GrFormNextLink />
      </blockquote>

    </div>
  </div>
</section>
    </div>
  )
}

export default Projects

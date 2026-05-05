'use client';

import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

const projects = [
  {
    title: "bazaAR — AR Shopping Experience",
    description:
      "An AR-inspired web app that streams live camera input using WebRTC and renders product overlays in real time via Canvas and requestAnimationFrame, creating a smooth interactive shopping experience.",
    images: ["/project2/ss4.png", "/project2/ss5.png"],
    github: "https://github.com/khushisingh1935-pixel/bazaAR",
    techStack: "WebRTC → Canvas → requestAnimationFrame → React → Tailwind",
  },
  {
    title: "Manzar — Movie Explorer",
    description:
      "A movie explorer app with real-time search suggestions and a favorites system stored in localStorage, built using React and the OMDB API.",
    images: ["/project1/ss1.png", "/project1/ss2.png"],
    github: "https://github.com/khushisingh1935-pixel/Manzar-movie-explorer",
    techStack: "React → OMDB API → LocalStorage → Dynamic Search Suggestions",
  },
  {
    title: "Design Agency — Responsive UI/UX Showcase",
    description:
      "A high-performance agency-style website built with Next.js, featuring clean UI, responsive design, and optimized image rendering for smooth, modern user experiences.",
    images: ["/project3/ss7.png", "/project3/ss8.png"],
    github:
      "https://github.com/khushisingh1935-pixel/Design-Agency-Homepage",
    techStack:
      "Next.js → React → TailwindCSS → Optimized Image Rendering",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-pink-50 to-white dark:from-zinc-900 dark:to-zinc-950 text-pink-700 dark:text-pink-300 py-20"
    >
      <div className="max-w-4xl mx-auto px-6">

        <p className="text-center text-pink-400 dark:text-pink-500 text-sm font-semibold uppercase tracking-widest mb-2">
          Things I've built
        </p>

        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Projects
        </h1>

        <p className="text-md italic text-center text-slate-500 dark:text-slate-400 mb-12">
          …a few things I built (and rebuilt more than once).
        </p>

        {projects.map((project, i) => (
          <div
            key={i}
            className="group transition-all duration-500 hover:-translate-y-1"
          >
            <div className="space-y-6">

              <h2 className="text-2xl font-bold group-hover:text-pink-500 transition">
                {project.title}
              </h2>

              <p className="text-pink-600 dark:text-pink-400 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.techStack.split("→").map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 rounded-full bg-pink-200/60 dark:bg-pink-900/40 text-pink-700 dark:text-pink-300"
                  >
                    {tech.trim()}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.images.map((src, j) => (
                  <div
                    key={j}
                    className="relative overflow-hidden rounded-xl border border-pink-200 dark:border-zinc-700 shadow-sm"
                  >
                    <Image
                      src={src}
                      alt={`${project.title} screenshot ${j + 1}`}
                      width={900}
                      height={500}
                      className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-300" />
                  </div>
                ))}
              </div>

              {/* GitHub Button */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 px-6 py-3 
                bg-pink-600 text-white rounded-lg 
                hover:bg-pink-700 transition-all duration-300 
                hover:scale-105 hover:shadow-lg hover:shadow-pink-400/30 
                font-semibold"
              >
                View on GitHub
                <FiArrowUpRight className="text-lg group-hover:-translate-y-1 group-hover:translate-x-1 transition" />
              </a>
            </div>

            {/* Divider */}
            {i < projects.length - 1 && (
              <div className="my-16 border-t border-pink-200/70 dark:border-zinc-700"></div>
            )}
          </div>
        ))}

      </div>
    </section>
  );
}
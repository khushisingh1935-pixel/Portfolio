'use client';

import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaJava, FaPython, FaGitAlt, FaGithub
} from "react-icons/fa";
import {
  SiC, SiCplusplus, SiNextdotjs, SiExpress, SiMongodb, SiTailwindcss, SiMysql
} from "react-icons/si";

const skills = [
  { name: "C", icon: <SiC />, link: "https://en.wikipedia.org/wiki/C_(programming_language)" },
  { name: "C++", icon: <SiCplusplus />, link: "https://isocpp.org/" },
  { name: "Java", icon: <FaJava />, link: "https://www.java.com/" },
  { name: "Python", icon: <FaPython />, link: "https://www.python.org/" },
  { name: "HTML", icon: <FaHtml5 />, link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { name: "CSS", icon: <FaCss3Alt />, link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { name: "JavaScript", icon: <FaJs />, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "React", icon: <FaReact />, link: "https://react.dev/" },
  { name: "Next.js", icon: <SiNextdotjs />, link: "https://nextjs.org/" },
  { name: "Node.js", icon: <FaNode />, link: "https://nodejs.org/" },
  { name: "Express", icon: <SiExpress />, link: "https://expressjs.com/" },
  { name: "MySQL", icon: <SiMysql />, link: "https://www.mysql.com/" },
  { name: "TailwindCSS", icon: <SiTailwindcss />, link: "https://tailwindcss.com/" },
  { name: "Git", icon: <FaGitAlt />, link: "https://git-scm.com/" },
  { name: "GitHub", icon: <FaGithub />, link: "https://github.com/" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-pink-100 dark:bg-zinc-800 text-pink-700 dark:text-pink-300">

      <div className="max-w-5xl mx-auto px-6">
        <p className="text-center text-pink-400 dark:text-pink-500 text-sm font-semibold uppercase tracking-widest mb-2">
          What I work with
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-pink-700 dark:text-pink-300">
          Skills
        </h1>

          <p className="text-md italic text-center text-slate-500 dark:text-slate-400 mb-8">
            …other than centering a div (eventually).
          </p>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-5">
          {skills.map((skill, index) => (
            <a
              key={index}
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 p-4 rounded-xl
                         bg-white/60 dark:bg-white/5 border border-pink-200/60 dark:border-white/10
                         backdrop-blur-sm hover:bg-pink-200/60 dark:hover:bg-white/10
                         hover:scale-110 hover:shadow-md hover:shadow-pink-300/30
                         transition-all duration-300"
            >
              <div className="text-4xl text-pink-500 dark:text-pink-400 group-hover:text-pink-600 dark:group-hover:text-pink-300 transition-colors duration-200">
                {skill.icon}
              </div>
              <p className="text-xs font-semibold text-pink-700 dark:text-pink-300 text-center">
                {skill.name}
              </p>
            </a>
          ))}
        </div>
      </div>

    </section>
  );
}
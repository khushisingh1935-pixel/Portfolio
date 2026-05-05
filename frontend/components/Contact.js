'use client';

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const socials = [
  {
    icon: <FaGithub />,
    href: "https://github.com/khushisingh1935-pixel",
    label: "GitHub",
  },
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/khushisingh2006",
    label: "LinkedIn",
  },
  {
    icon: <MdEmail />,
    href: "mailto:khushisingh1935@gmail.com",
    label: "Email",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-pink-200 dark:bg-zinc-900 py-16">
      <div className="flex flex-col items-center text-center gap-6 max-w-xl mx-auto px-6">

        <p className="text-pink-500 dark:text-pink-400 text-sm font-semibold uppercase tracking-widest">
          Let's connect
        </p>
        <h1 className="text-2xl md:text-3xl font-bold text-pink-800 dark:text-pink-300">
          Got an idea? Let's bring it to life 💌
        </h1>

        <div className="flex space-x-8 mt-2">
          {socials.map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={label !== "Email" ? "_blank" : undefined}
              rel={label !== "Email" ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="text-5xl text-pink-600 dark:text-pink-400 hover:text-pink-800 dark:hover:text-pink-200 hover:scale-110 transition-all duration-300"
            >
              {icon}
            </a>
          ))}
        </div>

        <p className="text-pink-700 dark:text-pink-400 text-sm mt-2">Connect with me!</p>

        <p className="text-pink-600 dark:text-pink-400 text-base">
          Made with curiosity …and a lot of trial and error ❤️
        </p>

        <div className="w-16 h-px bg-pink-400/40 dark:bg-pink-600/40 my-1"></div>

        <p className="text-pink-500 dark:text-pink-500 text-xs">
          © 2026 Khushi. All rights reserved.
        </p>

      </div>
    </section>
  );
}
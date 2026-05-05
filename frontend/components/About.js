import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row items-center bg-pink-50 dark:bg-zinc-900 gap-10 px-8 md:px-16 py-20"
    >

      <div className="flex-shrink-0">
        <div className="relative">
          <div className="absolute -inset-2 rounded-xl bg-gradient-to-br from-pink-300 to-pink-500 dark:from-pink-600 dark:to-pink-800 opacity-40 blur-sm"></div>
          <Image
            src="/Myphoto.jpeg"
            alt="Profile Picture"
            width={300}
            height={300}
            className="relative rounded-xl border-4 border-pink-300 dark:border-pink-600 transition-transform duration-300 hover:scale-105 shadow-lg"
          />
        </div>
      </div>

      <div className="max-w-2xl">
        <p className="text-pink-400 dark:text-pink-500 text-sm font-semibold uppercase tracking-widest mb-2">
          Who am I?
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-pink-700 dark:text-pink-300 mb-4">
          More About Me!
        </h1>

        <p className="text-base text-pink-600 dark:text-pink-400 leading-relaxed">
          Hi, I'm Khushi. I'm a self-taught web developer who's passionate about building things on the web. I started learning web development in my free time, and it's been an incredible journey of discovery and growth.
        </p>
        <p className="text-base text-pink-600 dark:text-pink-400 leading-relaxed mt-3">
          I'm someone who got curious about how websites actually work—and that curiosity slowly turned into building things on my own. I'm still learning, still figuring things out, but I genuinely enjoy the process of sitting with a problem and making it work.
        </p>

        <p className="mt-5 font-semibold text-pink-500 dark:text-pink-400 italic text-sm">
          Still learning, still building… and occasionally debugging for hours over one typo. 🙃
        </p>
        <p className="text-md italic text-slate-500 dark:text-slate-400 mt-4">
            P.S. I’ve spent way too long deciding between two shades of pink for this website.
          </p>

        <a
          href="/resume%20(1).pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-all duration-300 hover:scale-105 hover:shadow-md hover:shadow-pink-300/40 font-bold active:scale-95"
        >
          View Resume ↗
        </a>
      </div>

    </section>
  );
}
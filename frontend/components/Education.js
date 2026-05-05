import Image from "next/image";

export default function Education() {
  return (
    <section id="education" className="bg-pink-100 dark:bg-zinc-800 text-pink-700 dark:text-pink-300">
      <div className="max-w-4xl mx-auto px-6 py-20">

        <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center text-pink-700 dark:text-pink-300">
          Education
        </h1>

        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-white/60 dark:bg-white/5 border border-pink-200 dark:border-zinc-700 backdrop-blur-sm rounded-2xl px-8 py-8 shadow-sm hover:shadow-md hover:shadow-pink-200/30 transition-all duration-300">

          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-pink-300 to-pink-500 dark:from-pink-600 dark:to-pink-800 opacity-40 blur-sm"></div>
              <Image
                src="/srmlogo.jpeg"
                width={72}
                height={72}
                alt="SRM Logo"
                className="relative rounded-full object-cover border-2 border-pink-300 dark:border-pink-600"
              />
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col gap-2 text-center sm:text-left">
            <h2 className="text-xl md:text-2xl font-bold text-pink-700 dark:text-pink-300 leading-snug">
              SRM Institute of Science and Technology
            </h2>
            <p className="text-pink-600 dark:text-pink-400 text-sm font-medium">
              Bachelor of Technology — Computer Science and Engineering
            </p>
            <p className="text-pink-500 dark:text-pink-500 text-sm">
              2024 – 2028
            </p>

            {/* CGPA badge */}
            <div className="mt-2 inline-flex self-center sm:self-start items-center gap-2 bg-pink-200/70 dark:bg-white/10 text-pink-700 dark:text-pink-300 text-sm font-semibold px-4 py-1.5 rounded-full border border-pink-300 dark:border-zinc-600">
            CGPA — 8.8
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
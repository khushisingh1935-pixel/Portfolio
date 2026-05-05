import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">

      <Image
        src="/Cover.png"
        alt="Hero Image"
        fill
        priority
        sizes="100vw"
        className="object-cover scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50"></div>
      <div className="relative z-10 max-w-3xl mx-auto px-6 flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg leading-tight tracking-tight">
          Hi, I'm Khushi 🌻
        </h1>
        <p className="text-xl md:text-2xl text-pink-100 mt-4 mb-10 drop-shadow-md font-light">
          Computer Science Student &nbsp;·&nbsp; Web Developer &nbsp;·&nbsp; Coffee Enthusiast
        </p>
        <a
          href="#about"
          className="mt-2 px-8 py-3 bg-pink-600/90 hover:bg-pink-500 text-white rounded-full font-bold tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/30 active:scale-95"
        >
          Take a look around ↓
        </a>
      </div>

    </section>
  );
}
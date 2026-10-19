import { HiArrowRight, HiSparkles, HiOutlineChatAlt2 } from "react-icons/hi";
import { FaReact, FaJsSquare, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiVite, SiWebflow } from "react-icons/si";
import heroImg from "../assets/adel-ahammed-full-stack-web-developer-webflow-expert.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-16 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#008efb]/15 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow"></div>
      <div
        className="absolute bottom-12 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#b16cea]/15 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column: Introductions & CTAs */}
        <div className="lg:col-span-7 text-left space-y-6">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#008efb]/10 border border-[#008efb]/30 text-[#008efb] text-xs sm:text-sm font-semibold shadow-inner max-w-full">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
            <span className="truncate">Available for Hire &amp; Projects • 4 Years Experience</span>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <p className="text-gray-400 font-medium text-base sm:text-lg tracking-wide">
              Hello, I am
            </p>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Adel —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008efb] via-[#52a5ff] to-[#b16cea]">
                Frontend Developer
              </span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-2xl leading-relaxed">
            I craft clean, fast, and responsive modern web applications with{" "}
            <span className="text-white font-semibold">React.js</span>,{" "}
            <span className="text-white font-semibold">JavaScript (ES6+)</span>,{" "}
            <span className="text-white font-semibold">Tailwind CSS</span>, and{" "}
            <span className="text-white font-semibold">Webflow</span>.
            Dedicated to writing maintainable code and bringing intuitive user experiences to life.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
            {/* Get in Touch CTA */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#008efb] to-[#b16cea] hover:opacity-95 text-white px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl font-bold shadow-lg shadow-[#008efb]/25 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer text-xs sm:text-sm md:text-base"
            >
              <HiOutlineChatAlt2 className="text-lg sm:text-xl" />
              <span>Let's Connect</span>
            </a>

            {/* Explore Projects Button */}
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 bg-[#101524] text-gray-200 border border-gray-800 hover:border-[#008efb]/60 hover:text-white px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl font-semibold shadow-xs hover:shadow-md transition-all duration-300 text-xs sm:text-sm md:text-base"
            >
              <span>Explore Projects</span>
              <HiArrowRight className="text-base" />
            </a>

            {/* Quick About Link */}
            <a
              href="#about"
              className="inline-flex items-center justify-center text-xs sm:text-sm font-semibold text-gray-400 hover:text-[#008efb] px-2 sm:px-3 py-3 transition"
            >
              About Me &rarr;
            </a>
          </div>

          {/* Core Tech Stack Badges */}
          <div className="pt-4 border-t border-gray-800/80">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-1.5">
              <HiSparkles className="text-[#008efb]" /> Core Tech Stack
            </p>
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs sm:text-sm">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0e1424] text-gray-200 font-medium border border-gray-800 hover:border-[#008efb]/40 transition">
                <FaReact className="text-[#008efb] text-base" /> React.js
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0e1424] text-gray-200 font-medium border border-gray-800 hover:border-yellow-500/40 transition">
                <FaJsSquare className="text-yellow-400 text-base" /> JavaScript (ES6+)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0e1424] text-gray-200 font-medium border border-gray-800 hover:border-cyan-500/40 transition">
                <SiTailwindcss className="text-cyan-400 text-base" /> Tailwind CSS
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0e1424] text-gray-200 font-medium border border-gray-800 hover:border-[#008efb]/40 transition">
                <SiWebflow className="text-[#146ef5] text-base" /> Webflow
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0e1424] text-gray-200 font-medium border border-gray-800 hover:border-purple-500/40 transition">
                <SiVite className="text-purple-400 text-base" /> Vite
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0e1424] text-gray-200 font-medium border border-gray-800 hover:border-orange-500/40 transition">
                <FaGitAlt className="text-orange-400 text-base" /> Git &amp; GitHub
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Prominent Large Profile Image Showcase without Overlaps */}
        <div className="lg:col-span-5 relative flex items-center justify-center pt-4 lg:pt-0">
          {/* Subtle Ambient Backing Glow */}
          <div className="absolute -inset-3 sm:-inset-5 bg-gradient-to-tr from-[#008efb]/25 via-transparent to-[#b16cea]/25 rounded-[36px] blur-2xl -z-10 animate-pulse-glow"></div>

          {/* Animated Image Container */}
          <div className="relative w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[450px] aspect-[4/4.8] p-[3px] bg-gradient-to-tr from-[#008efb] via-[#4fa7fc]/40 to-[#b16cea] rounded-[30px] sm:rounded-[34px] shadow-2xl shadow-black/80 animate-float">
            <div className="w-full h-full bg-[#0b0f19] rounded-[27px] sm:rounded-[31px] overflow-hidden relative group">
              {/* Full-bleed Portrait Photo */}
              <img
                src={heroImg}
                alt="Adel - Frontend Developer & Webflow Expert"
                className="w-full h-full object-cover object-top filter contrast-[1.04] brightness-95 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700"
              />

              {/* Bottom Gradient Fade for Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-[#07090e]/25 to-transparent pointer-events-none"></div>

              {/* Clean Bottom Glass Info Bar with 4+ Years Experience */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#0b0f19]/90 backdrop-blur-md border border-gray-800/90 shadow-xl flex items-center justify-between z-10">
                <div className="overflow-hidden">
                  <h4 className="text-white font-extrabold text-sm sm:text-base tracking-tight flex items-center gap-2">
                    Adel
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse inline-block shrink-0"></span>
                  </h4>
                  <p className="text-[11px] sm:text-xs text-[#008efb] font-semibold mt-0.5 truncate">
                    Frontend Developer &amp; Web Designer
                  </p>
                  <p className="text-[10px] sm:text-[11px] text-gray-300 font-medium mt-0.5">
                    4+ Years Experience
                  </p>
                </div>
                <div className="text-right shrink-0 ml-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    Available
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

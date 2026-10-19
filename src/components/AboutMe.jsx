import {
  HiOutlineUser,
  HiOutlineSparkles,
  HiOutlineBriefcase,
  HiOutlineCheckCircle,
} from "react-icons/hi";
import { SiUpwork, SiFiverr } from "react-icons/si";
import { FaCode } from "react-icons/fa";

const AboutMe = () => {
  const coreCompetencies = [
    "HTML5 & Modern CSS3",
    "JavaScript & TypeScript",
    "React.js & Tailwind CSS",
    "Webflow & WordPress",
    "MongoDB Database",
    "Responsive Web Design",
  ];

  return (
    <section id="about" className="py-20 sm:py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#008efb]/10 border border-[#008efb]/30 text-[#008efb] text-xs font-semibold uppercase tracking-wider">
          <HiOutlineUser className="text-[#008efb] text-sm" />
          <span>About Me</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Who I <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008efb] to-[#b16cea]">Am</span>
        </h2>

        <p className="text-base sm:text-lg text-gray-400">
          Four years of delivering high-performing web design, frontend architectures, and client success.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Minimal Code-Inspired Design with Subtle Animation */}
        <div className="lg:col-span-5 relative">
          {/* Ambient Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#008efb]/20 to-[#b16cea]/20 rounded-2xl blur-xl -z-10 animate-pulse-glow"></div>

          {/* Code Window */}
          <div className="relative bg-[#0b0f19] rounded-2xl border border-gray-800 shadow-2xl shadow-black/80 overflow-hidden text-left animate-float">
            {/* Terminal Window Header */}
            <div className="bg-[#101626] px-4 py-3 flex items-center justify-between border-b border-gray-800/80">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-400 font-mono">
                <FaCode className="text-[#008efb]" />
                <span>AdelProfile.ts</span>
              </div>
              <div className="w-8"></div>
            </div>

            {/* Code Content */}
            <div className="p-5 font-mono text-xs sm:text-sm text-gray-300 leading-relaxed overflow-x-auto">
              <p>
                <span className="text-[#b16cea]">interface</span>{" "}
                <span className="text-yellow-400">Developer</span> &#123;
              </p>
              <p className="pl-4 text-gray-400">
                name: <span className="text-blue-300">string</span>;
              </p>
              <p className="pl-4 text-gray-400">
                experience: <span className="text-blue-300">string</span>;
              </p>
              <p className="pl-4 text-gray-400">
                specialties: <span className="text-blue-300">string[]</span>;
              </p>
              <p className="pl-4 text-gray-400">
                marketplaces: &#123; fiverr: <span className="text-blue-300">string</span>; upwork: <span className="text-blue-300">string</span> &#125;;
              </p>
              <p>&#125;</p>
              <br />
              <p>
                <span className="text-[#b16cea]">const</span>{" "}
                <span className="text-[#008efb]">adel</span>:{" "}
                <span className="text-yellow-400">Developer</span> = &#123;
              </p>
              <p className="pl-4">
                <span className="text-gray-400">name:</span>{" "}
                <span className="text-emerald-400">"Adel"</span>,
              </p>
              <p className="pl-4">
                <span className="text-gray-400">role:</span>{" "}
                <span className="text-emerald-400">"Frontend Developer &amp; Web Designer"</span>,
              </p>
              <p className="pl-4">
                <span className="text-gray-400">experience:</span>{" "}
                <span className="text-emerald-400">"4+ Years"</span>,
              </p>
              <p className="pl-4">
                <span className="text-gray-400">marketplaces:</span> &#123;
              </p>
              <p className="pl-8 text-cyan-300">
                upwork: <span className="text-emerald-400">"Top Rated Freelancer ★"</span>,
              </p>
              <p className="pl-8 text-cyan-300">
                fiverr: <span className="text-emerald-400">"Level 2 Seller ★★★★★"</span>
              </p>
              <p className="pl-4">&#125;,</p>
              <p className="pl-4">
                <span className="text-gray-400">skills:</span> [
              </p>
              <p className="pl-8 text-yellow-300">
                "React", "TypeScript", "Webflow", "WordPress", "Tailwind"
              </p>
              <p className="pl-4">],</p>
              <p className="pl-4">
                <span className="text-gray-400">openForHire:</span>{" "}
                <span className="text-[#008efb]">true</span>
              </p>
              <p>&#125;;</p>

              {/* Animated Terminal Status Line */}
              <div className="mt-4 pt-3 border-t border-gray-800/80 flex items-center justify-between text-xs text-gray-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-emerald-400 font-semibold">Compiled Successfully</span>
                </div>
                <span className="text-gray-500 font-mono">UTF-8</span>
              </div>
            </div>
          </div>

          {/* Quick Stats Banner below code */}
          <div className="mt-4 grid grid-cols-3 gap-3 text-center">
            <div className="p-3 bg-[#0b0f19] rounded-xl border border-gray-800">
              <span className="block text-xl font-black text-[#008efb]">4+</span>
              <span className="text-[11px] text-gray-400 font-medium">Years Exp</span>
            </div>
            <div className="p-3 bg-[#0b0f19] rounded-xl border border-gray-800">
              <span className="block text-xl font-black text-[#b16cea]">100+</span>
              <span className="text-[11px] text-gray-400 font-medium">Projects Built</span>
            </div>
            <div className="p-3 bg-[#0b0f19] rounded-xl border border-gray-800">
              <span className="block text-xl font-black text-emerald-400">5.0 ★</span>
              <span className="text-[11px] text-gray-400 font-medium">Client Rating</span>
            </div>
          </div>
        </div>

        {/* Right Column: Bio Narrative & Marketplace Badges */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-4 text-gray-300 leading-relaxed text-base sm:text-lg">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
              Transforming creative ideas into fast, responsive, and functional digital experiences.
            </h3>
            <p>
              My name is <strong className="text-white">Adel</strong>, and I am a dedicated{" "}
              <strong className="text-white">Frontend Developer</strong> with{" "}
              <strong className="text-white">four years of hands-on experience</strong> in web design and development.
              I specialize in crafting high-impact digital solutions using{" "}
              <span className="text-white font-medium">HTML, CSS, JavaScript, TypeScript, React, Tailwind CSS, MongoDB, WordPress, and Webflow</span>.
            </p>
            <p className="text-sm sm:text-base text-gray-400">
              Over the past four years, I have successfully partnered with global clients, agencies, and businesses across top freelance marketplaces. My focus is always on writing clean, scalable code and delivering pixel-perfect designs with exceptional attention to user experience.
            </p>
          </div>

          {/* Freelance Marketplace Credentials */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            {/* Upwork Badge */}
            <div className="p-4 rounded-xl bg-[#0b0f19] border border-gray-800 hover:border-[#14a800]/50 shadow-md transition-all group flex items-start gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-[#14a800]/15 text-[#14a800] flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform">
                <SiUpwork />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-bold text-white">Upwork</h4>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#14a800]/20 text-[#14a800] border border-[#14a800]/40">
                    Top Rated
                  </span>
                </div>
                <p className="text-xs text-gray-400 mt-1 leading-normal">
                  Recognized as a <strong className="text-gray-200">Top Rated Freelancer</strong> with a proven track record of successful client projects and verified quality.
                </p>
              </div>
            </div>

            {/* Fiverr Badge */}
            <div className="p-4 rounded-xl bg-[#0b0f19] border border-gray-800 hover:border-[#1dbf73]/50 shadow-md transition-all group flex items-start gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-[#1dbf73]/15 text-[#1dbf73] flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform">
                <SiFiverr />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-bold text-white">Fiverr</h4>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#1dbf73]/20 text-[#1dbf73] border border-[#1dbf73]/40">
                    Level 2 Seller
                  </span>
                </div>
                <p className="text-xs text-gray-400 mt-1 leading-normal">
                  Earned <strong className="text-gray-200">Level 2 Seller</strong> status through consistent 5-star ratings, on-time deliveries, and repeat client relationships.
                </p>
              </div>
            </div>
          </div>

          {/* Core Competencies Checklist */}
          <div>
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <HiOutlineSparkles className="text-[#008efb]" /> Core Competencies
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {coreCompetencies.map((comp) => (
                <div
                  key={comp}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#0e1424] border border-gray-800 text-xs text-gray-300 font-medium"
                >
                  <HiOutlineCheckCircle className="text-[#008efb] shrink-0 text-sm" />
                  <span className="truncate">{comp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#008efb] to-[#b16cea] hover:opacity-95 text-white px-6 py-3 rounded-xl font-bold shadow-md shadow-[#008efb]/20 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <HiOutlineBriefcase className="text-lg" />
              <span>Hire Me for Projects</span>
            </a>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-[#101626] text-gray-200 border border-gray-800 hover:border-[#008efb]/50 hover:text-white px-6 py-3 rounded-xl font-semibold shadow-xs transition-all duration-300"
            >
              <span>Explore My Work</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

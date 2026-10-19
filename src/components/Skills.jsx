import { useState } from "react";
import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaNpm,
  FaWordpress,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiBootstrap,
  SiMongodb,
  SiVite,
  SiVercel,
  SiTypescript,
  SiNextdotjs,
  SiWebflow,
  SiElementor,
} from "react-icons/si";
import {
  HiOutlineCode,
  HiOutlineServer,
  HiOutlineTerminal,
  HiOutlineDeviceMobile,
  HiOutlineSparkles,
} from "react-icons/hi";

const categories = [
  { id: "all", name: "All Skills" },
  { id: "Frontend", name: "Frontend Development", icon: HiOutlineCode },
  { id: "CMS & No-Code", name: "CMS & No-Code", icon: HiOutlineDeviceMobile },
  { id: "Backend & Database", name: "Backend & Database", icon: HiOutlineServer },
  { id: "Tools & Deployment", name: "Tools & Deployment", icon: HiOutlineTerminal },
];

const skillsList = [
  // Frontend
  {
    name: "HTML5",
    category: "Frontend",
    icon: FaHtml5,
    iconColor: "text-orange-500",
    bgGlow: "group-hover:bg-orange-500/10",
    tag: "Semantic Markup",
  },
  {
    name: "CSS3",
    category: "Frontend",
    icon: FaCss3Alt,
    iconColor: "text-blue-500",
    bgGlow: "group-hover:bg-blue-500/10",
    tag: "Flexbox & Grid Layouts",
  },
  {
    name: "JavaScript ES6+",
    category: "Frontend",
    icon: FaJsSquare,
    iconColor: "text-yellow-400",
    bgGlow: "group-hover:bg-yellow-400/10",
    tag: "Async & Modern JS",
  },
  {
    name: "TypeScript",
    category: "Frontend",
    icon: SiTypescript,
    iconColor: "text-blue-400",
    bgGlow: "group-hover:bg-blue-400/10",
    tag: "Type Safety & Interfaces",
  },
  {
    name: "React.js",
    category: "Frontend",
    icon: FaReact,
    iconColor: "text-[#008efb]",
    bgGlow: "group-hover:bg-[#008efb]/10",
    tag: "Component Architecture",
  },
  {
    name: "Next.js",
    category: "Frontend",
    icon: SiNextdotjs,
    iconColor: "text-white",
    bgGlow: "group-hover:bg-white/10",
    tag: "SSR & Full-Stack React",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    icon: SiTailwindcss,
    iconColor: "text-cyan-400",
    bgGlow: "group-hover:bg-cyan-400/10",
    tag: "Utility-First Styling",
  },
  {
    name: "Bootstrap",
    category: "Frontend",
    icon: SiBootstrap,
    iconColor: "text-purple-400",
    bgGlow: "group-hover:bg-purple-400/10",
    tag: "Responsive Framework",
  },

  // CMS & No-Code
  {
    name: "Webflow",
    category: "CMS & No-Code",
    icon: SiWebflow,
    iconColor: "text-[#146ef5]",
    bgGlow: "group-hover:bg-[#146ef5]/10",
    tag: "Custom Interactions & CMS",
  },
  {
    name: "WordPress",
    category: "CMS & No-Code",
    icon: FaWordpress,
    iconColor: "text-blue-400",
    bgGlow: "group-hover:bg-blue-400/10",
    tag: "Custom Themes & Sites",
  },
  {
    name: "Elementor",
    category: "CMS & No-Code",
    icon: SiElementor,
    iconColor: "text-rose-500",
    bgGlow: "group-hover:bg-rose-500/10",
    tag: "Visual Page Building",
  },

  // Backend & Database
  {
    name: "Node.js",
    category: "Backend & Database",
    icon: FaNodeJs,
    iconColor: "text-emerald-400",
    bgGlow: "group-hover:bg-emerald-400/10",
    tag: "Server-Side Runtime",
  },
  {
    name: "Express.js",
    category: "Backend & Database",
    icon: HiOutlineServer,
    iconColor: "text-gray-300",
    bgGlow: "group-hover:bg-gray-300/10",
    tag: "REST API Development",
  },
  {
    name: "MongoDB",
    category: "Backend & Database",
    icon: SiMongodb,
    iconColor: "text-emerald-500",
    bgGlow: "group-hover:bg-emerald-500/10",
    tag: "NoSQL Database",
  },

  // Tools & Deployment
  {
    name: "Git & GitHub",
    category: "Tools & Deployment",
    icon: FaGitAlt,
    iconColor: "text-orange-500",
    bgGlow: "group-hover:bg-orange-500/10",
    tag: "Version Control",
  },
  {
    name: "Vite",
    category: "Tools & Deployment",
    icon: SiVite,
    iconColor: "text-purple-400",
    bgGlow: "group-hover:bg-purple-400/10",
    tag: "Fast Build Tooling",
  },
  {
    name: "Vercel & Netlify",
    category: "Tools & Deployment",
    icon: SiVercel,
    iconColor: "text-gray-200",
    bgGlow: "group-hover:bg-white/10",
    tag: "CI/CD & Cloud Hosting",
  },
  {
    name: "npm & Ecosystem",
    category: "Tools & Deployment",
    icon: FaNpm,
    iconColor: "text-red-500",
    bgGlow: "group-hover:bg-red-500/10",
    tag: "Package Management",
  },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? skillsList
      : skillsList.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-20 sm:py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto relative">
      {/* Background glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#008efb]/10 blur-[130px] rounded-full pointer-events-none -z-10"></div>

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#008efb]/10 border border-[#008efb]/30 text-[#008efb] text-xs font-semibold uppercase tracking-wider">
          <HiOutlineSparkles className="text-[#008efb] text-sm" />
          <span>Technical Capabilities</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008efb] to-[#b16cea]">Skills</span>
        </h2>

        <p className="text-base sm:text-lg text-gray-400">
          The core technologies, frameworks, and modern tools I leverage to build blazing-fast web solutions.
        </p>
      </div>

      {/* Modern Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
              activeCategory === cat.id
                ? "bg-gradient-to-r from-[#008efb] to-[#b16cea] text-white shadow-lg shadow-[#008efb]/25 scale-105"
                : "bg-[#0b0f19] text-gray-400 border border-gray-800 hover:border-gray-700 hover:text-white"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Distinct Skills Grid: Sleek Dark Glass Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {filteredSkills.map((skill) => {
          const Icon = skill.icon;
          return (
            <div
              key={skill.name}
              className="group relative bg-[#0b0f19]/90 backdrop-blur-sm border border-gray-800/80 hover:border-[#008efb]/50 rounded-2xl p-4 sm:p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Hover Ambient Glow */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${skill.bgGlow}`}
              ></div>

              <div className="relative z-10 flex items-center justify-between gap-4">
                {/* Left: Icon & Names */}
                <div className="flex items-center gap-3.5">
                  <div className="w-13 h-13 rounded-xl bg-[#111726] border border-gray-800 flex items-center justify-center text-2xl group-hover:scale-110 group-hover:border-[#008efb]/40 transition-all duration-300 shadow-inner">
                    <Icon className={skill.iconColor} />
                  </div>

                  <div>
                    <h3 className="font-bold text-white text-base group-hover:text-[#008efb] transition-colors">
                      {skill.name}
                    </h3>
                    <p className="text-xs text-gray-400 mt-0.5 font-medium">
                      {skill.tag}
                    </p>
                  </div>
                </div>

                {/* Right: Category Pill */}
                <span className="shrink-0 text-[10px] sm:text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#111728] text-gray-300 border border-gray-800 group-hover:border-[#008efb]/30 group-hover:text-white transition-colors">
                  {skill.category}
                </span>
              </div>

              {/* Bottom Glowing Accent Line on Hover */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#008efb] to-[#b16cea] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          );
        })}
      </div>

      {/* Bottom Summary Bar */}
      <div className="mt-12 text-center">
        <p className="text-xs sm:text-sm text-gray-400">
          Proficient in transforming design specs into responsive, SEO-friendly, and maintainable production code.
        </p>
      </div>
    </section>
  );
};

export default Skills;

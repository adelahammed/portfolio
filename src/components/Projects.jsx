import { useState } from "react";
import { projectTabs, projectsData } from "../data/projects";
import { HiExternalLink, HiSparkles } from "react-icons/hi";
import { FaGithub, FaReact, FaWordpress } from "react-icons/fa";
import { SiWebflow } from "react-icons/si";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("react");

  const tabIcons = {
    react: FaReact,
    webflow: SiWebflow,
    wordpress: FaWordpress,
  };

  const filteredProjects = projectsData.filter(
    (project) => project.tab === activeTab
  );

  return (
    <section id="projects" className="py-20 sm:py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto relative">
      {/* Background Glows */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#b16cea]/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#008efb]/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#008efb]/10 border border-[#008efb]/30 text-[#008efb] text-xs font-semibold uppercase tracking-wider">
          <HiSparkles className="text-[#008efb] text-sm" />
          <span>Showcase Portfolio</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008efb] to-[#b16cea]">Projects</span>
        </h2>

        <p className="text-base sm:text-lg text-gray-400">
          Real-world client and production projects across React applications, custom Webflow platforms, and WordPress websites.
        </p>
      </div>

      {/* Three Project Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
        {projectTabs.map((tab) => {
          const Icon = tabIcons[tab.id];
          const isActive = activeTab === tab.id;
          const count = projectsData.filter((p) => p.tab === tab.id).length;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                isActive
                  ? "bg-gradient-to-r from-[#008efb] to-[#b16cea] text-white shadow-lg shadow-[#008efb]/25 scale-105"
                  : "bg-[#0b0f19] text-gray-400 border border-gray-800 hover:border-gray-700 hover:text-white"
              }`}
            >
              {Icon && <Icon className="text-base" />}
              <span>{tab.label}</span>
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full font-mono ${
                  isActive
                    ? "bg-white/20 text-white"
                    : "bg-gray-800 text-gray-400"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Centered Flex/Grid Animated Projects Showcase */}
      <div className="flex flex-wrap justify-center gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-md group relative bg-[#0b0f19] rounded-2xl border border-gray-800/80 hover:border-[#008efb]/50 shadow-xl shadow-black/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col overflow-hidden"
          >
            {/* Project Image Preview Container */}
            <div className="relative aspect-video w-full overflow-hidden bg-[#111726] border-b border-gray-800/80">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent opacity-60 pointer-events-none"></div>

              {/* Category Pill Tag */}
              <span className="absolute top-3.5 left-3.5 bg-[#07090e]/90 backdrop-blur-md text-[#008efb] border border-[#008efb]/30 text-[11px] font-semibold px-3 py-1 rounded-full shadow-md">
                {project.category}
              </span>
            </div>

            {/* Card Content Body */}
            <div className="p-6 flex flex-col flex-grow justify-between space-y-5">
              <div className="space-y-3">
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#008efb] transition-colors leading-snug">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-[#101626] text-gray-300 border border-gray-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Bottom Actions */}
              <div className="pt-4 border-t border-gray-800/80 flex items-center justify-between gap-3">
                {/* Live Demo Link */}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center justify-center gap-1.5 bg-gradient-to-r from-[#008efb] to-[#b16cea] hover:opacity-95 text-white text-xs font-bold py-2.5 rounded-xl shadow-md shadow-[#008efb]/20 transition-all cursor-pointer ${
                      project.tab === "react" && project.github ? "px-4" : "w-full"
                    }`}
                  >
                    <span>Live Demo</span>
                    <HiExternalLink className="text-sm" />
                  </a>
                )}

                {/* GitHub button strictly for React projects */}
                {project.tab === "react" && project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="View Source on GitHub"
                    className="inline-flex items-center gap-1.5 bg-[#101626] hover:bg-gray-800 text-gray-300 hover:text-white text-xs font-semibold px-4 py-2.5 rounded-xl border border-gray-800 hover:border-gray-700 transition"
                  >
                    <FaGithub className="text-sm" />
                    <span>GitHub</span>
                  </a>
                )}
              </div>
            </div>

            {/* Bottom Glow Accent Line on Card Hover */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#008efb] to-[#b16cea] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>

      {/* Footer Callout */}
      <div className="mt-14 text-center">
        <p className="text-xs sm:text-sm text-gray-500">
          Need a high-converting Webflow, React, or WordPress site?{" "}
          <a
            href="#contact"
            className="font-semibold text-[#008efb] hover:text-[#b16cea] transition underline"
          >
            Let's work together &rarr;
          </a>
        </p>
      </div>
    </section>
  );
};

export default Projects;

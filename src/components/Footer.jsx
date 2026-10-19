import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail, HiArrowUp } from "react-icons/hi";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#07090e] border-t border-gray-800/80 text-gray-400 print:hidden mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand & Mission */}
          <div className="md:col-span-2 space-y-3">
            <Link
              to="/"
              className="text-xl font-extrabold text-white flex items-center gap-2 group"
            >
              <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#008efb] to-[#b16cea] flex items-center justify-center text-white font-mono text-sm shadow-xs group-hover:scale-105 transition-transform">
                A
              </span>
              <span>
                Adel<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008efb] to-[#b16cea]">Web</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 max-w-md leading-relaxed">
              Frontend Developer &amp; Webflow Expert with 4 years of experience delivering pixel-perfect, high-performance web applications and custom websites.
            </p>
            <div className="pt-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span className="text-xs text-gray-400 font-medium">
                Upwork Top Rated &amp; Fiverr Level 2 Seller
              </span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/#about" className="hover:text-[#008efb] transition">
                  About Me
                </a>
              </li>
              <li>
                <a href="/#skills" className="hover:text-[#008efb] transition">
                  My Skills
                </a>
              </li>
              <li>
                <a href="/#projects" className="hover:text-[#008efb] transition">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="/#contact" className="hover:text-[#008efb] transition">
                  Let's Connect
                </a>
              </li>
              <li>
                <Link to="/resume" className="text-[#008efb] font-semibold hover:underline">
                  Resume &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & Socials */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Connect With Me
            </h4>
            <p className="text-xs text-gray-400">
              Open to contracts, freelance jobs, and full-time opportunities.
            </p>
            <div className="flex items-center gap-2.5 pt-1">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/adel250"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="w-9 h-9 rounded-lg bg-[#101626] border border-gray-800 hover:border-[#008efb]/50 hover:bg-[#0077b5] hover:text-white flex items-center justify-center text-gray-300 transition"
              >
                <FaLinkedin className="text-base" />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/adelahammed"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="w-9 h-9 rounded-lg bg-[#101626] border border-gray-800 hover:border-gray-700 hover:bg-gray-800 hover:text-white flex items-center justify-center text-gray-300 transition"
              >
                <FaGithub className="text-base" />
              </a>

              {/* Email */}
              <a
                href="mailto:adelahammed.25@gmail.com"
                aria-label="Send Email"
                className="w-9 h-9 rounded-lg bg-[#101626] border border-gray-800 hover:border-[#008efb]/50 hover:bg-[#008efb] hover:text-white flex items-center justify-center text-gray-300 transition"
              >
                <HiMail className="text-base" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} AdelWeb. Designed &amp; Crafted with React, Tailwind CSS &amp; Vite.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="inline-flex items-center gap-1.5 text-gray-400 hover:text-[#008efb] font-medium transition cursor-pointer"
          >
            <span>Back to top</span>
            <HiArrowUp className="text-sm" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

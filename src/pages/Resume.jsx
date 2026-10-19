import { Link } from "react-router-dom";
import {
  HiArrowLeft,
  HiPrinter,
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiExternalLink,
} from "react-icons/hi";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";
import { SiUpwork, SiFiverr } from "react-icons/si";
import profileImg from "../assets/adel-ahammed-full-stack-web-developer-webflow-expert.jpg";

const Resume = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#07090e] pt-28 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8 text-gray-200 font-sans print:bg-white print:text-gray-900 print:pt-0 print:pb-0 print:px-0">
      {/* Top Action Bar (Hidden during print) */}
      <div className="max-w-4xl mx-auto mb-6 flex flex-wrap items-center justify-between gap-4 print:hidden">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-300 bg-[#0b0f19] border border-gray-800 px-4 py-2.5 rounded-xl shadow-sm hover:bg-[#111726] hover:text-[#008efb] hover:border-[#008efb]/40 transition"
        >
          <HiArrowLeft className="text-base" /> Back to Portfolio
        </Link>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#008efb] to-[#b16cea] hover:opacity-95 px-5 py-2.5 rounded-xl shadow-md shadow-[#008efb]/25 hover:shadow-lg transition cursor-pointer"
          >
            <HiPrinter className="text-base" /> Print / Save as PDF
          </button>
        </div>
      </div>

      {/* Main Resume Sheet */}
      <div className="max-w-4xl mx-auto bg-[#0b0f19] border border-gray-800 rounded-2xl shadow-2xl p-6 sm:p-10 lg:p-12 print:bg-white print:text-gray-900 print:shadow-none print:border-none print:p-0 print:rounded-none">
        
        {/* Header Section */}
        <header className="border-b border-gray-800 print:border-gray-300 pb-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 sm:gap-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              {/* Profile Photo */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-[#008efb]/50 print:border-gray-400 shrink-0 shadow-xl bg-[#101626]">
                <img
                  src={profileImg}
                  alt="Adel"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Name & Titles */}
              <div>
                <h1 className="text-3xl sm:text-4xl font-black text-white print:text-gray-900 tracking-tight">
                  Adel
                </h1>
                <p className="text-base sm:text-lg font-bold text-[#008efb] print:text-blue-700 mt-1">
                  Frontend Developer &amp; Webflow Expert
                </p>
                <p className="text-xs sm:text-sm text-gray-400 print:text-gray-600 mt-1">
                  4 Years of Professional Web Development Experience • Upwork Top Rated &amp; Fiverr Level 2 Seller
                </p>
              </div>
            </div>

            {/* Availability Badges */}
            <div className="flex flex-col items-start md:items-end gap-1.5 text-xs text-gray-400 print:text-gray-600 shrink-0">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-semibold bg-[#008efb]/15 text-[#008efb] border border-[#008efb]/30 print:border-blue-600 print:text-blue-700">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse print:hidden"></span>
                Available for Contract &amp; Full-Time
              </span>
              <span>Open to Remote &amp; On-site Opportunities</span>
            </div>
          </div>

          {/* Contact Details Grid */}
          <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 text-xs text-gray-300 print:text-gray-700 pt-4 border-t border-gray-800/80 print:border-gray-200">
            <a
              href="mailto:adelahammed.25@gmail.com"
              className="flex items-center gap-1.5 hover:text-[#008efb] transition"
            >
              <HiMail className="text-[#008efb] text-base shrink-0" />
              <span className="truncate">adelahammed.25@gmail.com</span>
            </a>
            <a
              href="tel:01622704174"
              className="flex items-center gap-1.5 hover:text-[#008efb] transition"
            >
              <HiPhone className="text-[#008efb] text-base shrink-0" />
              <span>01622704174</span>
            </a>
            <div className="flex items-center gap-1.5">
              <HiLocationMarker className="text-[#008efb] text-base shrink-0" />
              <span>Dhaka, Bangladesh</span>
            </div>
            <a
              href="https://github.com/adelahammed"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-[#008efb] transition"
            >
              <FaGithub className="text-white print:text-gray-900 text-base shrink-0" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/adel250"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-[#008efb] transition"
            >
              <FaLinkedin className="text-[#008efb] text-base shrink-0" />
              <span>LinkedIn</span>
            </a>
            <a
              href="/"
              className="flex items-center gap-1.5 hover:text-[#008efb] transition"
            >
              <FaGlobe className="text-[#008efb] text-base shrink-0" />
              <span>AdelWeb</span>
            </a>
          </div>
        </header>

        {/* Section: Professional Summary */}
        <section className="mb-6">
          <h2 className="text-base sm:text-lg font-bold text-white print:text-gray-900 uppercase tracking-wider border-b border-gray-800 print:border-gray-300 pb-1 mb-2.5 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#008efb] rounded-sm"></span>
            Professional Summary
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 print:text-gray-700 leading-relaxed text-justify">
            Accomplished and client-focused <strong>Frontend Developer &amp; Webflow Expert</strong> with over <strong>four years of hands-on experience</strong> architecting, developing, and deploying fast, accessible, and responsive digital solutions. Highly proficient in <strong>React.js, Next.js, TypeScript, JavaScript (ES6+), Tailwind CSS, Webflow (CMS, Client-First), and WordPress</strong>. Proven track record across top freelance platforms as an <strong>Upwork Top Rated Freelancer</strong> and <strong>Fiverr Level 2 Seller</strong>, consistently delivering 5-star solutions for international businesses, startups, and agencies.
          </p>
        </section>

        {/* Section: Core Technical Arsenal */}
        <section className="mb-6">
          <h2 className="text-base sm:text-lg font-bold text-white print:text-gray-900 uppercase tracking-wider border-b border-gray-800 print:border-gray-300 pb-1 mb-3 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#008efb] rounded-sm"></span>
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div className="p-3 bg-[#101626] print:bg-gray-50 rounded-xl border border-gray-800 print:border-gray-200">
              <span className="font-bold text-white print:text-gray-900 block mb-1">
                Frontend Development:
              </span>
              <p className="text-gray-300 print:text-gray-700 leading-relaxed text-xs">
                React.js, Next.js, JavaScript (ES6+), TypeScript, HTML5, CSS3, Tailwind CSS, Bootstrap, CSS Grid, Flexbox, Responsive UI/UX.
              </p>
            </div>

            <div className="p-3 bg-[#101626] print:bg-gray-50 rounded-xl border border-gray-800 print:border-gray-200">
              <span className="font-bold text-white print:text-gray-900 block mb-1">
                CMS &amp; No-Code Solutions:
              </span>
              <p className="text-gray-300 print:text-gray-700 leading-relaxed text-xs">
                Webflow (CMS Collections, Custom Interactions, Client-First), WordPress, Elementor Pro, WooCommerce, Custom Site Building.
              </p>
            </div>

            <div className="p-3 bg-[#101626] print:bg-gray-50 rounded-xl border border-gray-800 print:border-gray-200">
              <span className="font-bold text-white print:text-gray-900 block mb-1">
                Backend &amp; Database:
              </span>
              <p className="text-gray-300 print:text-gray-700 leading-relaxed text-xs">
                Node.js, Express.js, MongoDB (CRUD Operations), RESTful APIs, JSON Integration, Asynchronous Data Fetching.
              </p>
            </div>

            <div className="p-3 bg-[#101626] print:bg-gray-50 rounded-xl border border-gray-800 print:border-gray-200">
              <span className="font-bold text-white print:text-gray-900 block mb-1">
                Tools &amp; Workflow:
              </span>
              <p className="text-gray-300 print:text-gray-700 leading-relaxed text-xs">
                Git, GitHub, Vite, Vercel, Netlify, npm &amp; Ecosystem, Chrome DevTools, Figma-to-Code Translation, Speed Optimization.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Professional Experience */}
        <section className="mb-6">
          <h2 className="text-base sm:text-lg font-bold text-white print:text-gray-900 uppercase tracking-wider border-b border-gray-800 print:border-gray-300 pb-1 mb-3.5 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#008efb] rounded-sm"></span>
            Professional Experience &amp; Marketplace Credentials
          </h2>

          <div className="space-y-4">
            {/* Upwork */}
            <div className="border-l-2 border-[#14a800] pl-4 py-0.5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h3 className="text-sm sm:text-base font-bold text-white print:text-gray-900 flex items-center gap-2">
                  <SiUpwork className="text-[#14a800] text-base" /> Top Rated Freelancer – Frontend &amp; Webflow Developer
                  <span className="text-[11px] font-normal text-emerald-400 font-mono bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 print:border-green-600 print:text-green-800">
                    Upwork Global
                  </span>
                </h3>
                <span className="text-xs text-gray-400 print:text-gray-600 font-medium">
                  2020 – Present
                </span>
              </div>
              <ul className="mt-2 list-disc list-inside text-xs sm:text-sm text-gray-300 print:text-gray-700 space-y-1">
                <li>
                  Successfully delivered 50+ custom web projects, interactive web applications, and conversion-focused Webflow websites for international clients.
                </li>
                <li>
                  Achieved and maintained Top Rated status with 100% client satisfaction, excellent on-time project completion, and repeated contract extensions.
                </li>
                <li>
                  Specialized in converting Figma and design systems into pixel-perfect, responsive React and Webflow web solutions.
                </li>
              </ul>
            </div>

            {/* Fiverr */}
            <div className="border-l-2 border-[#1dbf73] pl-4 py-0.5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h3 className="text-sm sm:text-base font-bold text-white print:text-gray-900 flex items-center gap-2">
                  <SiFiverr className="text-[#1dbf73] text-base" /> Level 2 Seller – Web Designer &amp; Frontend Developer
                  <span className="text-[11px] font-normal text-emerald-400 font-mono bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 print:border-green-600 print:text-green-800">
                    Fiverr Marketplace
                  </span>
                </h3>
                <span className="text-xs text-gray-400 print:text-gray-600 font-medium">
                  2020 – Present
                </span>
              </div>
              <ul className="mt-2 list-disc list-inside text-xs sm:text-sm text-gray-300 print:text-gray-700 space-y-1">
                <li>
                  Earned Level 2 Seller status by delivering 5-star customer ratings, high-quality code standards, and responsive web design.
                </li>
                <li>
                  Built and launched custom WordPress and Webflow portals, implementing complex multi-page interactions, custom forms, and dynamic CMS templates.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section: Featured Projects Showcase */}
        <section className="mb-6">
          <h2 className="text-base sm:text-lg font-bold text-white print:text-gray-900 uppercase tracking-wider border-b border-gray-800 print:border-gray-300 pb-1 mb-3.5 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#008efb] rounded-sm"></span>
            Key Featured Projects
          </h2>

          <div className="space-y-4 text-xs sm:text-sm">
            {/* Project 1 */}
            <div className="p-3.5 bg-[#101626] print:bg-gray-50 rounded-xl border border-gray-800 print:border-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h4 className="font-bold text-white print:text-gray-900">
                  FitLog - Workout Library
                  <span className="ml-2 text-xs font-normal text-[#008efb] print:text-blue-700 font-mono">
                    React &amp; Next.js Application
                  </span>
                </h4>
                <div className="flex items-center gap-2.5 text-xs text-[#008efb] print:text-blue-700 font-medium">
                  <a href="https://a6-fitlog.vercel.app/" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-0.5">
                    Live Demo <HiExternalLink />
                  </a>
                  <span>•</span>
                  <a href="https://github.com/adelahammed/a6-fitlog" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-0.5">
                    GitHub <HiExternalLink />
                  </a>
                </div>
              </div>
              <p className="text-gray-300 print:text-gray-700 mt-1 leading-relaxed text-xs">
                Modern workout library featuring 12 exercises across all major muscle groups with detail pages, user ratings, "My Plan" list, saved workouts, and full mobile responsiveness.
              </p>
              <p className="text-[11px] text-gray-400 print:text-gray-500 font-mono mt-1">
                Technologies: Next.js, React.js, Tailwind CSS, Vercel
              </p>
            </div>

            {/* Project 2 */}
            <div className="p-3.5 bg-[#101626] print:bg-gray-50 rounded-xl border border-gray-800 print:border-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h4 className="font-bold text-white print:text-gray-900">
                  বাজার দর - Market Price Tracker
                  <span className="ml-2 text-xs font-normal text-[#008efb] print:text-blue-700 font-mono">
                    React &amp; Next.js Web App
                  </span>
                </h4>
                <div className="flex items-center gap-2.5 text-xs text-[#008efb] print:text-blue-700 font-medium">
                  <a href="https://a7-bazardor-pi.vercel.app/" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-0.5">
                    Live Demo <HiExternalLink />
                  </a>
                  <span>•</span>
                  <a href="https://github.com/adelahammed/a7-bazardor" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-0.5">
                    GitHub <HiExternalLink />
                  </a>
                </div>
              </div>
              <p className="text-gray-300 print:text-gray-700 mt-1 leading-relaxed text-xs">
                Bangla daily commodity price tracker showing price changes with indicators, catalog of 33 essentials, individual product detail pages, and sign in / sign up authentication.
              </p>
              <p className="text-[11px] text-gray-400 print:text-gray-500 font-mono mt-1">
                Technologies: Next.js, React.js, Tailwind CSS, Vercel
              </p>
            </div>

            {/* Project 3 */}
            <div className="p-3.5 bg-[#101626] print:bg-gray-50 rounded-xl border border-gray-800 print:border-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h4 className="font-bold text-white print:text-gray-900">
                  Alluvium Media - DeepTech Video Agency
                  <span className="ml-2 text-xs font-normal text-[#146ef5] font-mono">
                    Webflow CMS Website
                  </span>
                </h4>
                <a href="https://www.alluviummedia.com/" target="_blank" rel="noreferrer" className="text-xs text-[#008efb] print:text-blue-700 hover:underline flex items-center gap-0.5 font-medium">
                  Live Site <HiExternalLink />
                </a>
              </div>
              <p className="text-gray-300 print:text-gray-700 mt-1 leading-relaxed text-xs">
                Conversion-focused agency site for DeepTech video storytelling studio with client logo marquee, CMS case studies, tech blog, testimonials, interactive FAQ, and Calendly scheduling.
              </p>
              <p className="text-[11px] text-gray-400 print:text-gray-500 font-mono mt-1">
                Technologies: Webflow, Webflow CMS, Calendly, YouTube Embed
              </p>
            </div>

            {/* Project 4 */}
            <div className="p-3.5 bg-[#101626] print:bg-gray-50 rounded-xl border border-gray-800 print:border-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h4 className="font-bold text-white print:text-gray-900">
                  First Thought IT - IT Consulting Portfolio
                  <span className="ml-2 text-xs font-normal text-[#146ef5] font-mono">
                    Webflow Portfolio
                  </span>
                </h4>
                <a href="https://first-thought-it.webflow.io/" target="_blank" rel="noreferrer" className="text-xs text-[#008efb] print:text-blue-700 hover:underline flex items-center gap-0.5 font-medium">
                  Live Site <HiExternalLink />
                </a>
              </div>
              <p className="text-gray-300 print:text-gray-700 mt-1 leading-relaxed text-xs">
                Personal-brand website for an IT executive covering consulting services, interactive work experience timeline, past corporate partnerships, and dedicated service pages.
              </p>
              <p className="text-[11px] text-gray-400 print:text-gray-500 font-mono mt-1">
                Technologies: Webflow, Custom Interactions, SVG Graphics
              </p>
            </div>

            {/* Project 5 */}
            <div className="p-3.5 bg-[#101626] print:bg-gray-50 rounded-xl border border-gray-800 print:border-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h4 className="font-bold text-white print:text-gray-900">
                  Greener Me - Sydney Garden Services
                  <span className="ml-2 text-xs font-normal text-[#146ef5] font-mono">
                    Webflow Business Portal
                  </span>
                </h4>
                <a href="https://www.greener-me.com.au/" target="_blank" rel="noreferrer" className="text-xs text-[#008efb] print:text-blue-700 hover:underline flex items-center gap-0.5 font-medium">
                  Live Site <HiExternalLink />
                </a>
              </div>
              <p className="text-gray-300 print:text-gray-700 mt-1 leading-relaxed text-xs">
                Sydney-based local business site for garden architecture with commercial/residential sections, media gallery, customer testimonials, careers portal with CV upload, and booking forms.
              </p>
              <p className="text-[11px] text-gray-400 print:text-gray-500 font-mono mt-1">
                Technologies: Webflow, Forms, Google Analytics, Responsive Design
              </p>
            </div>

            {/* Project 6 */}
            <div className="p-3.5 bg-[#101626] print:bg-gray-50 rounded-xl border border-gray-800 print:border-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h4 className="font-bold text-white print:text-gray-900">
                  Makhundu Atchar - Bulk Atchar Supplier
                  <span className="ml-2 text-xs font-normal text-blue-400 font-mono">
                    WordPress &amp; Elementor
                  </span>
                </h4>
                <a href="https://www.makhunduatchar.co.za/" target="_blank" rel="noreferrer" className="text-xs text-[#008efb] print:text-blue-700 hover:underline flex items-center gap-0.5 font-medium">
                  Live Site <HiExternalLink />
                </a>
              </div>
              <p className="text-gray-300 print:text-gray-700 mt-1 leading-relaxed text-xs">
                B2B commerce website for a South African family producer featuring categorized inventory, wholesale price list, direct email ordering system, and mission showcase.
              </p>
              <p className="text-[11px] text-gray-400 print:text-gray-500 font-mono mt-1">
                Technologies: WordPress, Elementor
              </p>
            </div>
          </div>
        </section>

        {/* Section: Languages & Work Principles */}
        <section>
          <h2 className="text-base sm:text-lg font-bold text-white print:text-gray-900 uppercase tracking-wider border-b border-gray-800 print:border-gray-300 pb-1 mb-3 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#008efb] rounded-sm"></span>
            Languages &amp; Work Ethics
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-gray-300 print:text-gray-700">
            <div>
              <span className="font-bold text-white print:text-gray-900 block mb-1">Languages:</span>
              <p>English (Professional Working Proficiency), Bengali (Native).</p>
            </div>
            <div>
              <span className="font-bold text-white print:text-gray-900 block mb-1">Work Principles:</span>
              <p>Pixel-Perfect Execution, Clean Component Structure, Timely Deliveries, Client-First Communication.</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Resume;

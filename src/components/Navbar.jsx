import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenuAlt3, HiX, HiDocumentText } from "react-icons/hi";

const navLinks = [
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("about");
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  // Active section spy & scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (!isHomePage) return;

      const sections = navLinks.map((link) =>
        document.getElementById(link.id)
      );

      sections.forEach((section) => {
        if (!section) return;

        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < top + height) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 print:hidden ${
        scrolled || !isHomePage
          ? "bg-[#07090e]/85 backdrop-blur-md shadow-lg shadow-black/40 border-b border-gray-800/80"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between h-20 px-4 sm:px-6">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-black tracking-tight text-white group flex items-center gap-2"
        >
          <span className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#008efb] to-[#b16cea] flex items-center justify-center text-white font-mono text-lg shadow-md shadow-[#008efb]/30 group-hover:scale-105 transition-transform">
            A
          </span>
          <span className="tracking-tight">
            Adel<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008efb] to-[#b16cea]">Web</span>
          </span>
        </Link>

        {/* Desktop Navigation Links: About, Skills, Projects, Contact */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const href = isHomePage ? `#${link.id}` : `/#${link.id}`;
            const isLinkActive = isHomePage && active === link.id;

            return (
              <li key={link.id}>
                <a
                  href={href}
                  className={`relative py-1 font-medium text-sm transition-colors duration-200 ${
                    isLinkActive
                      ? "text-[#008efb] font-semibold"
                      : "text-gray-300 hover:text-[#008efb]"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-gradient-to-r from-[#008efb] to-[#b16cea] transition-all duration-300 ${
                      isLinkActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </a>
              </li>
            );
          })}
        </ul>

        {/* Desktop Right CTA (Resume Button) */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/resume"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#008efb] to-[#b16cea] hover:opacity-95 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-md shadow-[#008efb]/25 hover:shadow-lg hover:shadow-[#008efb]/35 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <HiDocumentText className="text-lg" />
            Resume
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          className="md:hidden text-2xl text-gray-200 p-2 rounded-lg hover:bg-gray-800/60 transition focus:outline-none"
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden bg-[#0b0f19]/95 backdrop-blur-xl border-b border-gray-800 shadow-2xl overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 py-6 px-6" : "max-h-0 py-0 px-6"
        }`}
      >
        <ul className="flex flex-col gap-4">
          {navLinks.map((link) => {
            const href = isHomePage ? `#${link.id}` : `/#${link.id}`;
            const isLinkActive = isHomePage && active === link.id;

            return (
              <li key={link.id}>
                <a
                  href={href}
                  onClick={closeMenu}
                  className={`block py-1.5 text-base font-medium transition ${
                    isLinkActive ? "text-[#008efb] font-semibold" : "text-gray-300 hover:text-[#008efb]"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            );
          })}

          {/* Mobile Resume Button */}
          <li className="pt-2 border-t border-gray-800">
            <Link
              to="/resume"
              onClick={closeMenu}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#008efb] to-[#b16cea] text-white py-3 rounded-xl font-semibold shadow hover:opacity-90 transition"
            >
              <HiDocumentText className="text-xl" />
              View Resume
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
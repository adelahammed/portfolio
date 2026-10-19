import fitlogImg from "../assets/projects/fitlog.png";
import bazardorImg from "../assets/projects/bazardor.png";
import alluviumImg from "../assets/projects/alluvium.png";
import firstthoughtImg from "../assets/projects/firstthought.png";
import greenermeImg from "../assets/projects/greenerme.png";
import makhunduImg from "../assets/projects/makhundu.png";

export const projectTabs = [
  { id: "react", label: "React Projects" },
  { id: "webflow", label: "Webflow Projects" },
  { id: "wordpress", label: "WordPress Projects" },
];

export const projectsData = [
  // 1. React Projects (Includes GitHub links)
  {
    id: "react-1",
    tab: "react",
    title: "FitLog - Workout Library",
    category: "React / Next.js",
    image: fitlogImg,
    description:
      "A modern workout library with 12 exercises across all major muscle groups. It has detail pages, ratings, a “My Plan” list and saved workouts, in a responsive layout.",
    technologies: ["Next.js", "React.js", "Tailwind CSS", "Vercel"],
    live: "https://a6-fitlog.vercel.app/",
    github: "https://github.com/adelahammed/a6-fitlog",
  },
  {
    id: "react-2",
    tab: "react",
    title: "বাজার দর - Market Price Tracker",
    category: "React / Next.js",
    image: bazardorImg,
    description:
      "A Bangla price tracker for everyday essentials. It shows daily price changes with up/down indicators, 33 products, product detail pages and sign in/sign up.",
    technologies: ["Next.js", "React.js", "Tailwind CSS", "Vercel"],
    live: "https://a7-bazardor-pi.vercel.app/",
    github: "https://github.com/adelahammed/a7-bazardor",
  },

  // 2. Webflow Projects (No GitHub link)
  {
    id: "webflow-1",
    tab: "webflow",
    title: "Alluvium Media - DeepTech Video Agency",
    category: "Webflow CMS",
    image: alluviumImg,
    description:
      "A conversion-focused agency site for a DeepTech video storytelling studio. It has a client logo marquee, case studies, a blog CMS, testimonials, an FAQ and Calendly booking.",
    technologies: ["Webflow", "Webflow CMS", "Calendly", "YouTube Embed"],
    live: "https://www.alluviummedia.com/",
    github: null,
  },
  {
    id: "webflow-2",
    tab: "webflow",
    title: "First Thought IT - IT Consulting Portfolio",
    category: "Webflow Portfolio",
    image: firstthoughtImg,
    description:
      "A clean personal-brand site for an IT leader. It covers services, work experience timeline, past partnerships and dedicated service pages.",
    technologies: ["Webflow", "Custom Interactions", "SVG Graphics"],
    live: "https://first-thought-it.webflow.io/",
    github: null,
  },
  {
    id: "webflow-3",
    tab: "webflow",
    title: "Greener Me - Sydney Garden Services",
    category: "Webflow Website",
    image: greenermeImg,
    description:
      "A local-business site for garden design and maintenance. It has commercial and residential sections, a gallery, testimonials, a careers section with CV upload and site-visit booking forms.",
    technologies: ["Webflow", "Forms", "Google Analytics", "Responsive Design"],
    live: "https://www.greener-me.com.au/",
    github: null,
  },

  // 3. WordPress Projects (No GitHub link)
  {
    id: "wp-1",
    tab: "wordpress",
    title: "Makhundu Atchar - Bulk Atchar Supplier",
    category: "WordPress & Elementor",
    image: makhunduImg,
    description:
      "A B2B site for a South African family-owned atchar producer. It has product categories, a price list, an order-by-email flow and a community mission story.",
    technologies: ["WordPress", "Elementor"],
    live: "https://www.makhunduatchar.co.za/ ",
    github: null,
  },
];

export default projectsData;

import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <main className="relative">
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
};

export default Home;

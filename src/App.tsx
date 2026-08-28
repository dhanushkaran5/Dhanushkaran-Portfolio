import CursorGlitter from './components/CursorGlitter';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProfessionalSummary from './components/ProfessionalSummary';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <CursorGlitter />
      <Navbar />
      <main>
        <Hero />
        <ProfessionalSummary />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

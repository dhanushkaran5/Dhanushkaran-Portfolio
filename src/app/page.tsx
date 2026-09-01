import Navbar from '@/components/navbar/Navbar';
import Hero from '@/components/hero/Hero';
import StatsCounter from '@/components/stats/StatsCounter';
import AboutBento from '@/components/about/AboutBento';
import InteractiveTerminal from '@/components/terminal/InteractiveTerminal';
import ProjectShowcase from '@/components/projects/ProjectShowcase';
import SkillsBento from '@/components/skills/SkillsBento';
import ServicesSection from '@/components/services/ServicesSection';
import ExperienceTimeline from '@/components/experience/ExperienceTimeline';
import ContactSection from '@/components/contact/ContactSection';
import Footer from '@/components/footer/Footer';

export default function Home() {
  return (
    <main className="flex-1 flex flex-col w-full overflow-hidden">
      <Navbar />
      <Hero />
      <StatsCounter />
      <AboutBento />
      <InteractiveTerminal />
      <ProjectShowcase />
      <SkillsBento />
      <ServicesSection />
      <ExperienceTimeline />
      <ContactSection />
      <Footer />
    </main>
  );
}

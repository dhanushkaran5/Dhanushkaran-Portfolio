import Navbar from '@/components/navbar/Navbar';
import Hero from '@/components/hero/Hero';
import AboutBento from '@/components/about/AboutBento';
import ExperienceTimeline from '@/components/experience/ExperienceTimeline';
import ProjectShowcase from '@/components/projects/ProjectShowcase';
import SkillsBento from '@/components/skills/SkillsBento';
import ArsenalSection from '@/components/arsenal/ArsenalSection';
import CertificatesSection from '@/components/certifications/CertificatesSection';
import WorkflowDashboard from '@/components/workflow/WorkflowDashboard';
import InteractiveTerminal from '@/components/terminal/InteractiveTerminal';
import ServicesSection from '@/components/services/ServicesSection';
import ContactSection from '@/components/contact/ContactSection';
import Footer from '@/components/footer/Footer';

export default function Home() {
  return (
    <main className="flex-1 flex flex-col w-full overflow-visible relative">
      <Navbar />
      <Hero />
      <AboutBento />
      <ExperienceTimeline />
      <ProjectShowcase />
      <SkillsBento />
      <ArsenalSection />
      <CertificatesSection />
      <WorkflowDashboard />
      <InteractiveTerminal />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ApiVisualizationSection from "@/components/ApiVisualizationSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { motion } from "framer-motion";

const Home = () => {
  // Add smooth scrolling behavior
  useEffect(() => {
    const handleHashLink = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const closestAnchor = target.closest('a');
      
      if (closestAnchor && closestAnchor.hash && closestAnchor.hash.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(closestAnchor.hash);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleHashLink);
    return () => document.removeEventListener('click', handleHashLink);
  }, []);

  // Floating download resume button
  const FloatingDownloadButton = () => (
    <motion.div 
      className="fixed bottom-6 right-6 z-40"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.5 }}
    >
      <a 
        href="/api/resume" 
        className="flex items-center justify-center bg-primary text-primary-foreground w-12 h-12 rounded-full shadow-lg hover:bg-primary/90 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        aria-label="Download Resume" 
        title="Download Resume"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="7 10 12 15 17 10"></polyline>
          <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
      </a>
    </motion.div>
  );

  return (
    <div className="font-sans bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ApiVisualizationSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
      <FloatingDownloadButton />
    </div>
  );
};

export default Home;

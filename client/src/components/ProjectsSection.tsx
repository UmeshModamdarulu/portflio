import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { projects, Project, getIconComponent } from "@/lib/projects";

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section 
      id="projects" 
      ref={sectionRef} 
      className="py-20 relative overflow-hidden" 
      style={{ background: 'linear-gradient(180deg, #091428 0%, #0a192f 100%)' }}
    >
      {/* Background effect with bubbles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
        {[1, 2, 3, 4, 5, 6, 7].map((_, index) => {
          const size = Math.floor(Math.random() * 15) + 5; // Random size between 5px and 20px
          const left = `${Math.floor(Math.random() * 100)}%`;
          const delay = Math.random() * 5;
          const duration = Math.random() * 10 + 15;
          
          return (
            <motion.div
              key={index}
              className="absolute rounded-full bg-white/20 backdrop-blur-sm"
              style={{ 
                width: size, 
                height: size, 
                left,
                bottom: "-50px",
              }}
              initial={{ y: 0, opacity: 0.3 }}
              animate={{ 
                y: -1000, 
                opacity: [0.3, 0.5, 0.2, 0],
                scale: [1, 1.2, 0.8, 1.1, 0]
              }}
              transition={{ 
                repeat: Infinity, 
                duration, 
                delay,
                ease: "easeInOut"
              }}
            />
          );
        })}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-xs font-bold tracking-widest uppercase py-1 px-3 border border-primary/30 rounded-full text-primary inline-block">Portfolio</span>
          </motion.div>
          <h2 className="text-4xl font-bold text-white mb-4">Featured <span className="text-primary">Projects</span></h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">Showcasing my API development and integration work</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = getIconComponent(project.iconName);
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="h-full"
              >
                <Card className="h-full overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl backdrop-blur-sm bg-white/10 border border-white/10 rounded-xl">
                  <div className={`h-48 ${project.gradientClasses} flex items-center justify-center text-white relative overflow-hidden`}>
                    {/* Animated background glowing effect */}
                    <div className="absolute inset-0 opacity-30">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full blur-3xl bg-primary/50 animate-pulse"></div>
                      <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full blur-2xl bg-cyan-400/40 animate-pulse" style={{ animationDelay: '1s' }}></div>
                    </div>
                    <IconComponent className="h-14 w-14 drop-shadow-lg relative z-10" />
                  </div>
                  <CardContent className="p-6 bg-gradient-to-b from-[#0e1c2f] to-[#091428] border-t border-white/5">
                    <h3 className="font-semibold text-xl mb-2 text-white">{project.title}</h3>
                    <p className="text-gray-300 mb-5 text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className={`${tech.badgeClasses} text-xs font-medium px-2.5 py-0.5 rounded border-white/20`}>
                          {tech.name}
                        </Badge>
                      ))}
                    </div>
                    <Button 
                      variant="ghost"
                      className="text-primary hover:text-white hover:bg-primary/20 transition-colors group flex items-center gap-1 pl-0"
                      onClick={() => handleOpenModal(project)}
                    >
                      <span>View Details</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <Dialog open={isModalOpen} onOpenChange={handleCloseModal}>
            <DialogContent className="max-w-3xl bg-gradient-to-b from-[#0c1c33] to-[#081020] border border-white/10 text-white shadow-xl">
              <DialogHeader>
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl ${selectedProject.gradientClasses}`}>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-6 w-6 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                      <line x1="8" y1="21" x2="16" y2="21"></line>
                      <line x1="12" y1="17" x2="12" y2="21"></line>
                    </svg>
                  </div>
                  <DialogTitle className="text-2xl font-bold text-white">{selectedProject.title}</DialogTitle>
                </div>
                <DialogDescription className="mt-4 text-gray-300">
                  {selectedProject.description}
                </DialogDescription>
              </DialogHeader>
              
              <div className="py-6 space-y-6">
                <div>
                  <h4 className="font-semibold text-primary text-lg mb-3 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                    </svg>
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedProject.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className={`${tech.badgeClasses} border-white/20 text-sm font-medium`}>
                        {tech.name}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-primary text-lg mb-3 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 11 12 14 22 4"></polyline>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                    Project Highlights
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-gray-300 flex items-start gap-2">
                        <span className="text-cyan-400 mt-1.5">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <DialogFooter className="flex justify-end">
                <Button variant="default" onClick={handleCloseModal}>
                  Close
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;

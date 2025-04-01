import { useRef } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  const experienceItems = [
    "Designed, developed, and integrated RESTful and SOAP APIs to enhance system functionality.",
    "Collaborated with cross-functional teams to understand requirements and deliver high-quality solutions.",
    "Wrote clean, efficient, and maintainable code following best practices.",
    "Troubleshot and debugged applications to ensure optimal performance and reliability.",
    "Conducted API testing and validation using tools like Postman and Swagger.",
    "Improved application performance by optimizing database queries and backend logic.",
    "Worked with version control systems like Git for code management and collaboration.",
    "Provided technical support and documentation for implemented solutions."
  ];

  const technologies = [
    ".NET", "Java", "Python", "SQL", "RESTful APIs", "SOAP APIs", "Git", "Postman", "Swagger"
  ];

  return (
    <section id="experience" ref={sectionRef} className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0F2A49 0%, #062335 100%)' }}>
      {/* Animated bubbles effect */}
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
            <span className="text-xs font-bold tracking-widest uppercase py-1 px-3 border border-primary/30 rounded-full text-primary inline-block">Experience</span>
          </motion.div>
          <h2 className="text-4xl font-bold text-white mb-4">Professional <span className="text-primary">Experience</span></h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">My journey as a Software Developer specializing in API development</p>
        </motion.div>
        
        <div className="relative pl-8 sm:pl-12 py-6 ml-4">
          <div className="relative pl-8 pb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute left-0 top-0 mt-1 -ml-1.5 w-4 h-4 rounded-full bg-primary border-2 border-white/30 shadow-[0_0_10px_rgba(0,180,216,0.6)]"
            />
            
            {/* Timeline line */}
            <motion.div 
              className="absolute left-0 top-[24px] w-1 bg-gradient-to-b from-primary to-primary/30"
              initial={{ height: 0 }}
              animate={inView ? { height: "calc(100% - 24px)" } : { height: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              style={{ boxShadow: '0 0 8px rgba(0,180,216,0.4)' }}
            />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="transform transition duration-300 hover:-translate-y-1 hover:shadow-lg backdrop-blur-sm bg-white/10 border border-white/10 rounded-xl overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <h3 className="text-xl font-semibold text-primary">Software Developer</h3>
                    <div className="flex items-center mt-2 md:mt-0">
                      <span className="text-sm text-white font-medium bg-primary/20 px-3 py-1 rounded-full border border-primary/30">May 2023 - Dec 2024</span>
                    </div>
                  </div>
                  
                  <p className="font-medium text-white mb-4">I2space Web Technologies</p>
                  
                  <ul className="space-y-3 text-gray-300">
                    {experienceItems.map((item, index) => (
                      <motion.li 
                        key={index}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                  
                  <motion.div
                    className="mt-6 flex flex-wrap gap-2"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                  >
                    {technologies.map((tech, index) => (
                      <Badge key={index} variant="outline" className="bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20">
                        {tech}
                      </Badge>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

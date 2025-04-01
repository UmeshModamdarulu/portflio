import { useRef } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

const EducationSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  const education = [
    {
      degree: "Bachelor of Technology",
      institution: "Annamacharya Institute of Technology and Sciences",
      score: "CGPA: 7.7"
    },
    {
      degree: "Intermediate",
      institution: "Sri Chaitanya Junior College",
      score: "Percentage: 86.9%"
    }
  ];

  const certifications = [
    {
      name: "Java Full Stack Developer",
      description: "Comprehensive certification covering Java development, frontend technologies, and database integration.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 18l2-2-2-2"></path>
          <path d="M8 6l-2 2 2 2"></path>
          <path d="M18 16l4 0"></path>
          <path d="M6 8l-4 0"></path>
          <path d="M14 6l6 6-6 6"></path>
          <path d="M10 18l-6-6 6-6"></path>
        </svg>
      )
    },
    {
      name: "AI Workshop",
      description: "Participated in an intensive workshop on artificial intelligence concepts and applications.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a8 8 0 0 0-8 8c0 5.2 7 12 8 12s8-6.8 8-12a8 8 0 0 0-8-8z"></path>
          <path d="M8.8 9.7c1 1.2 2.5 2 4.2 2a5.5 5.5 0 0 0 4.3-2.1"></path>
        </svg>
      )
    }
  ];

  return (
    <section id="education" ref={sectionRef} className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold font-sans text-gray-900 mb-2">Education & Certifications</h2>
          <p className="text-lg text-gray-600">Academic background and professional achievements</p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="transform transition duration-300 hover:-translate-y-1 hover:shadow-lg h-full">
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                  </svg>
                  <h3 className="text-xl font-semibold font-sans">Education</h3>
                </div>
                
                <div className="space-y-6">
                  {education.map((item, index) => (
                    <motion.div
                      key={index}
                      className="border-l-4 border-primary pl-4 py-1"
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                    >
                      <h4 className="font-sans font-semibold text-lg">{item.degree}</h4>
                      <p className="text-gray-700">{item.institution}</p>
                      <div className="flex items-center mt-1">
                        <span className="text-gray-500 text-sm">{item.score}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="transform transition duration-300 hover:-translate-y-1 hover:shadow-lg h-full">
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-500 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="6"></circle>
                    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
                  </svg>
                  <h3 className="text-xl font-semibold font-sans">Certifications</h3>
                </div>
                
                <div className="space-y-6">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      className="flex"
                      initial={{ opacity: 0, y: 10 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                    >
                      <div className="mr-4 flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                          {cert.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-sans font-semibold text-lg">{cert.name}</h4>
                        <p className="text-gray-600 mt-1">{cert.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

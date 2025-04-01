import { motion } from "framer-motion";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { useRef } from "react";
import { Database, Code, Server, Wrench } from "lucide-react";

interface SkillBarProps {
  name: string;
  percentage: number;
  delay: number;
  color: string;
}

const SkillBar = ({ name, percentage, delay, color }: SkillBarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useIntersectionObserver(ref, { threshold: 0.1 });

  // Define background colors based on category
  const colorMap = {
    "primary": "hsl(195, 100%, 60%)", // primary aqua blue
    "blue": "#45b3e0",    // lighter blue
    "purple": "#59c1d0",  // teal blue
    "pink": "#4a9cc9",    // medium blue
  };
  
  const barColor = colorMap[color as keyof typeof colorMap] || colorMap.primary;
  
  return (
    <div ref={ref} className="mb-8">
      <div className="mb-2">
        <span className="font-medium text-white text-sm">{name}</span>
      </div>
      <div className="w-full bg-black/30 h-1.5 rounded-full relative">
        <motion.div
          className="h-1.5 rounded-full relative"
          style={{ 
            backgroundColor: barColor,
            boxShadow: `0 0 8px ${barColor}`
          }}
          initial={{ width: 0 }}
          animate={{ width: inView ? `${percentage}%` : 0 }}
          transition={{ duration: 1.2, delay }}
        />
      </div>
    </div>
  );
};

type SkillCategory = {
  title: string;
  skills: { name: string; percentage: number }[];
  color: string;
  icon: React.ReactNode;
};

const SkillsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  const skillCategories: SkillCategory[] = [
    {
      title: "Backend Technologies",
      color: "primary",
      icon: <Server className="w-5 h-5" />,
      skills: [
        { name: "DOT NET", percentage: 85 },
        { name: "JAVA", percentage: 80 },
        { name: "PYTHON", percentage: 70 },
        { name: "API DEVELOPMENT", percentage: 90 }
      ]
    },
    {
      title: "Frontend Technologies",
      color: "blue",
      icon: <Code className="w-5 h-5" />,
      skills: [
        { name: "HTML", percentage: 85 },
        { name: "CSS", percentage: 75 },
        { name: "JAVASCRIPT", percentage: 70 },
        { name: "RESPONSIVE DESIGN", percentage: 80 }
      ]
    },
    {
      title: "Database & Storage", 
      color: "purple",
      icon: <Database className="w-5 h-5" />,
      skills: [
        { name: "SQL", percentage: 85 },
        { name: "MYSQL", percentage: 80 },
        { name: "DATABASE DESIGN", percentage: 75 },
        { name: "QUERY OPTIMIZATION", percentage: 70 }
      ]
    },
    {
      title: "Tools & Technologies",
      color: "pink",
      icon: <Wrench className="w-5 h-5" />,
      skills: [
        { name: "GIT/GITHUB/GITLAB", percentage: 85 },
        { name: "POSTMAN/SWAGGER", percentage: 90 },
        { name: "VISUAL STUDIO", percentage: 80 },
        { name: "VMWARE ADMINISTRATION", percentage: 75 }
      ]
    }
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0A192F 0%, #0F2A49 100%)' }}>
      {/* Background effect with bubbles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPGcgZmlsbD0iIzE0MTQxNCIgZmlsbC1vcGFjaXR5PSIwLjQiPgogICAgICA8cGF0aCBkPSJNMzYgMzRjMC0xLjEuOS0yIDItMiAxLjEgMCAyIC45IDIgMiAwIDEuMS0uOSAyLTIgMi0xLjEgMC0yLS45LTItMm0wLTEyYzAtMS4xLjktMiAyLTIgMS4xIDAgMiAuOSAyIDIgMCAxLjEtLjkgMi0yIDItMS4xIDAtMi0uOS0yLTJtLTEyIDBjMC0xLjEuOS0yIDItMiAxLjEgMCAyIC45IDIgMiAwIDEuMS0uOSAyLTIgMi0xLjEgMC0yLS45LTItMm0wIDEyYzAtMS4xLjktMiAyLTIgMS4xIDAgMiAuOSAyIDIgMCAxLjEtLjkgMi0yIDItMS4xIDAtMi0uOS0yLTJtLTEyIDBjMC0xLjEuOS0yIDItMiAxLjEgMCAyIC45IDIgMiAwIDEuMS0uOSAyLTIgMi0xLjEgMC0yLS45LTItMm0wLTEyYzAtMS4xLjktMiAyLTIgMS4xIDAgMiAuOSAyIDIgMCAxLjEtLjkgMi0yIDItMS4xIDAtMi0uOS0yLTJtLTEyIDBjMC0xLjEuOS0yIDItMiAxLjEgMCAyIC45IDIgMiAwIDEuMS0uOSAyLTIgMi0xLjEgMC0yLS45LTItMm0wIDEyYzAtMS4xLjktMiAyLTIgMS4xIDAgMiAuOSAyIDIgMCAxLjEtLjkgMi0yIDItMS4xIDAtMi0uOS0yLTJNNCAyMmMwLTEuMS45LTIgMi0yIDEuMSAwIDIgLjkgMiAyIDAgMS4xLS45IDItMiAyLTEuMSAwLTItLjktMi0ybTAtMTJjMC0xLjEuOS0yIDItMiAxLjEgMCAyIC45IDIgMiAwIDEuMS0uOSAyLTIgMi0xLjEgMC0yLS45LTItMm0wIDI0YzAtMS4xLjktMiAyLTIgMS4xIDAgMiAuOSAyIDIgMCAxLjEtLjkgMi0yIDItMS4xIDAtMi0uOS0yLTJtMTItMTJjMC0xLjEuOS0yIDItMiAxLjEgMCAyIC45IDIgMiAwIDEuMS0uOSAyLTIgMi0xLjEgMC0yLS45LTItMm0wIDEyYzAtMS4xLjktMiAyLTIgMS4xIDAgMiAuOSAyIDIgMCAxLjEtLjkgMi0yIDItMS4xIDAtMi0uOS0yLTJtMC0yNGMwLTEuMS45LTIgMi0yIDEuMSAwIDIgLjkgMiAyIDAgMS4xLS45IDItMiAyLTEuMSAwLTItLjktMi0ybTEyIDEyYzAtMS4xLjktMiAyLTIgMS4xIDAgMiAuOSAyIDIgMCAxLjEtLjkgMi0yIDItMS4xIDAtMi0uOS0yLTJtMCAxMmMwLTEuMS45LTIgMi0yIDEuMSAwIDIgLjkgMiAyIDAgMS4xLS45IDItMiAyLTEuMSAwLTItLjktMi0ybTAtMjRjMC0xLjEuOS0yIDItMiAxLjEgMCAyIC45IDIgMiAwIDEuMS0uOSAyLTIgMi0xLjEgMC0yLS45LTItMm0xMiAxMmMwLTEuMS45LTIgMi0yIDEuMSAwIDIgLjkgMiAyIDAgMS4xLS45IDItMiAyLTEuMSAwLTItLjktMi0ybTAgMTJjMC0xLjEuOS0yIDItMiAxLjEgMCAyIC45IDIgMiAwIDEuMS0uOSAyLTIgMi0xLjEgMC0yLS45LTItMm0wLTI0YzAtMS4xLjktMiAyLTIgMS4xIDAgMiAuOSAyIDIgMCAxLjEtLjkgMi0yIDItMS4xIDAtMi0uOS0yLTJtMTIgMTJjMC0xLjEuOS0yIDItMiAxLjEgMCAyIC45IDIgMiAwIDEuMS0uOSAyLTIgMi0xLjEgMC0yLS45LTItMm0wIDEyYzAtMS4xLjktMiAyLTIgMS4xIDAgMiAuOSAyIDIgMCAxLjEtLjkgMi0yIDItMS4xIDAtMi0uOS0yLTJtMC0yNGMwLTEuMS45LTIgMi0yIDEuMSAwIDIgLjkgMiAyIDAgMS4xLS45IDItMiAyLTEuMSAwLTItLjktMi0yIi8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4=')] opacity-5"></div>
        
        {/* Animated bubbles effect */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => {
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
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
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
            <span className="text-xs font-bold tracking-widest uppercase py-1 px-3 border border-primary/30 rounded-full text-primary inline-block">My Skills</span>
          </motion.div>
          <h2 className="text-5xl font-bold text-white mb-6 leading-tight">Technical <span className="text-primary">Expertise</span></h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            My proficiency in various technologies enables me to build robust and scalable solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-8"
            >
              <div className="flex items-center mb-8 gap-3">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white bg-primary/80 backdrop-blur-sm`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div>
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    percentage={skill.percentage}
                    delay={0.3 + index * 0.05 + skillIndex * 0.05}
                    color={category.color}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

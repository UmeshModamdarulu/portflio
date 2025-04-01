import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";
import { Code, Database, Server, Globe } from "lucide-react";

const HeroSection = () => {
  const [isTyped, setIsTyped] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set typed state to true after animation duration
    const timer = setTimeout(() => {
      setIsTyped(true);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  // Floating elements animation
  const createFloatingElements = () => {
    const elements = [
      { icon: <Database className="w-full h-full" />, size: "w-16 h-16", color: "bg-purple-600/20 text-purple-400" },
      { icon: <Server className="w-full h-full" />, size: "w-12 h-12", color: "bg-pink-600/20 text-pink-400" },
      { icon: <Code className="w-full h-full" />, size: "w-14 h-14", color: "bg-blue-600/20 text-blue-400" },
      { icon: <Globe className="w-full h-full" />, size: "w-10 h-10", color: "bg-green-600/20 text-green-400" },
    ];

    return elements.map((el, index) => {
      const posX = 20 + (index * 25);
      const posY = 10 + (index * 15) % 40;
      const duration = 15 + index * 2;
      
      return (
        <motion.div
          key={index}
          className={`absolute rounded-full ${el.size} ${el.color} flex items-center justify-center p-3 backdrop-blur-sm`}
          style={{ left: `${posX}%`, top: `${posY}%` }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            rotate: [0, 5, 0, -5, 0],
          }}
          transition={{
            duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {el.icon}
        </motion.div>
      );
    });
  };

  return (
    <section id="home" ref={containerRef} className="min-h-screen py-24 flex items-center relative overflow-hidden bg-gradient-to-b from-black to-gray-900">
      {/* Background gradient blob */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute -top-[30%] -right-[10%] w-[80%] h-[80%] rounded-full bg-gradient-to-br from-primary via-purple-600 to-pink-500 blur-3xl"></div>
        <div className="absolute -bottom-[30%] -left-[10%] w-[80%] h-[80%] rounded-full bg-gradient-to-tr from-blue-700 via-primary to-purple-700 blur-3xl"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        {createFloatingElements()}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.div
              className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 rounded-full px-4 py-1 mb-6 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-white font-medium text-sm">Software Developer & API Specialist</p>
            </motion.div>
            
            <motion.div
              className="mb-6 relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-7xl font-extrabold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                  Modamdarulu
                </span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-pink-500">
                  Umesh
                </span>
              </h1>
            </motion.div>
            
            <motion.p
              className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Results-driven Software Developer with expertise in 
              <span className="text-primary font-medium"> API development</span>,
              <span className="text-purple-400 font-medium"> backend systems</span>, and
              <span className="text-pink-400 font-medium"> integration solutions</span>.
            </motion.p>
            
            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button size="lg" className="rounded-full shadow-lg shadow-primary/30 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-lg px-8">
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-purple-400 text-purple-400 hover:bg-purple-400/10 text-lg">
                <a href="/api/resume" className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </div>
          
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="relative">
              {/* Decorative circles */}
              <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-gradient-to-r from-pink-500 to-primary opacity-20 blur-xl animate-pulse"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-r from-primary to-blue-500 opacity-20 blur-xl animate-pulse"></div>
              
              {/* Main card */}
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-700 backdrop-blur-xl shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-900/20"></div>
                
                {/* Card content */}
                <div className="relative p-8">
                  <div className="flex flex-col items-center space-y-6">
                    <motion.div
                      className="w-32 h-32 rounded-full bg-gradient-to-r from-primary to-purple-600 p-1"
                      initial={{ scale: 0.5 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                    >
                      <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                        <span className="font-bold text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">MU</span>
                      </div>
                    </motion.div>
                    
                    <div className="space-y-2 text-center">
                      <motion.h2 
                        className="text-2xl font-bold text-white"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                      >
                        API Development
                      </motion.h2>
                      <motion.p 
                        className="text-gray-300"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.1 }}
                      >
                        Expert in designing, building and integrating APIs
                      </motion.p>
                    </div>
                    
                    <motion.div 
                      className="flex flex-wrap gap-2 justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.2 }}
                    >
                      <span className="px-3 py-1 rounded-full text-xs bg-primary/20 text-primary border border-primary/30">REST</span>
                      <span className="px-3 py-1 rounded-full text-xs bg-purple-500/20 text-purple-400 border border-purple-500/30">.NET</span>
                      <span className="px-3 py-1 rounded-full text-xs bg-blue-500/20 text-blue-400 border border-blue-500/30">Java</span>
                      <span className="px-3 py-1 rounded-full text-xs bg-pink-500/20 text-pink-400 border border-pink-500/30">Python</span>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="flex flex-col items-center">
          <p className="text-gray-400 text-sm mb-2">Scroll to explore</p>
          <div className="w-6 h-10 rounded-full border-2 border-gray-400 flex justify-center pt-1">
            <motion.div 
              className="w-1 h-2 bg-white rounded-full"
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

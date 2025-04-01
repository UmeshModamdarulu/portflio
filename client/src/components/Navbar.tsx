import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll events for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-[#121212]/90 shadow-[0_4px_30px_rgba(0,0,0,0.2)] backdrop-blur-md border-b border-white/5" 
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="h-10 text-white font-bold text-2xl">
              <span className="text-white">UMESH</span>
              <span className="text-primary">.</span>
            </div>
          </motion.div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center">
            <ul className="flex space-x-8">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                >
                  <a
                    href={link.href}
                    className={`relative py-2 font-medium text-sm tracking-wide transition-all duration-300 group ${
                      activeSection === link.href.substring(1)
                        ? "text-primary"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {link.name}
                    <span 
                      className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300 ${
                        activeSection === link.href.substring(1) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    ></span>
                  </a>
                </motion.li>
              ))}
            </ul>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              className="ml-12"
            >
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-md px-4 py-2 text-sm font-medium hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                <a href="#contact">Hire Me</a>
              </Button>
            </motion.div>
          </div>
          
          {/* Mobile navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:text-primary">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-full sm:w-[350px] bg-[#121212] border-l border-white/10 text-white p-0"
              >
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-center p-6 border-b border-white/10">
                    <div className="text-white font-bold text-2xl">
                      <span className="text-white">UMESH</span>
                      <span className="text-primary">.</span>
                    </div>
                    <SheetTrigger asChild>
                      <Button variant="ghost" size="icon" className="text-white hover:text-primary">
                        <X className="h-5 w-5" />
                        <span className="sr-only">Close menu</span>
                      </Button>
                    </SheetTrigger>
                  </div>
                  
                  <nav className="flex flex-col gap-2 p-6 flex-grow">
                    {navLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        className={`px-4 py-3 text-base font-medium tracking-wide transition-all duration-200 border-l-2 ${
                          activeSection === link.href.substring(1)
                            ? "text-primary border-primary bg-primary/5"
                            : "text-gray-300 hover:text-white border-transparent hover:border-white/20 hover:bg-white/5"
                        }`}
                      >
                        {link.name}
                      </a>
                    ))}
                  </nav>
                  
                  <div className="p-6 mt-auto border-t border-white/10">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-md py-6 text-base font-medium hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                      <a href="#contact">Hire Me</a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

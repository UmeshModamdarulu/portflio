import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

const ApiVisualizationSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useIntersectionObserver(sectionRef, { threshold: 0.1 });
  const visualizationRef = useRef<HTMLDivElement>(null);

  // Create particles for API visualization
  useEffect(() => {
    if (!visualizationRef.current || !inView) return;
    
    const container = visualizationRef.current;
    const particles: HTMLDivElement[] = [];
    
    const createParticle = () => {
      if (!container) return;
      
      const particle = document.createElement('div');
      particle.classList.add('absolute', 'rounded-full', 'bg-cyan-500', 'opacity-60');
      
      // Random size between 3px and 8px
      const size = Math.random() * 5 + 3;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random position
      const startX = 100 + Math.random() * 200;
      const startY = 50 + Math.random() * 100;
      particle.style.left = `${startX}px`;
      particle.style.top = `${startY}px`;
      
      // Animation
      particle.animate(
        [
          { transform: 'translate(0, 0)', opacity: 0 },
          { opacity: 0.8, offset: 0.2 },
          { transform: 'translate(100px, -200px)', opacity: 0 }
        ],
        {
          duration: Math.random() * 4000 + 2000,
          easing: 'linear',
          fill: 'forwards'
        }
      );
      
      container.appendChild(particle);
      particles.push(particle);
      
      // Remove particle after animation completes
      setTimeout(() => {
        if (container.contains(particle)) {
          container.removeChild(particle);
        }
        const index = particles.indexOf(particle);
        if (index > -1) {
          particles.splice(index, 1);
        }
      }, 6000);
    };
    
    // Create particles at interval
    const intervalId = setInterval(createParticle, 300);
    
    return () => {
      clearInterval(intervalId);
      particles.forEach(particle => {
        if (container.contains(particle)) {
          container.removeChild(particle);
        }
      });
    };
  }, [inView]);

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #062335 0%, #091428 100%)' }}>
      {/* Background effect with bubbles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
        {[1, 2, 3, 4, 5].map((_, index) => {
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
            <span className="text-xs font-bold tracking-widest uppercase py-1 px-3 border border-primary/30 rounded-full text-primary inline-block">APIs</span>
          </motion.div>
          <h2 className="text-4xl font-bold text-white mb-4">API <span className="text-primary">Integration Expertise</span></h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">Showcasing my proficiency in API design and integration</p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="backdrop-blur-sm bg-white/10 border border-white/10 rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-primary/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">API Workflow Visualization</h3>
                <div ref={visualizationRef} className="border border-white/10 rounded-lg bg-[#061525] p-4 h-72 relative overflow-hidden">
                  <div className="absolute top-4 left-4 rounded-md bg-gradient-to-r from-primary to-blue-400 text-white px-3 py-2 text-sm font-mono shadow-lg">Client</div>
                  <div className="absolute bottom-4 right-4 rounded-md bg-gradient-to-r from-cyan-500 to-blue-400 text-white px-3 py-2 text-sm font-mono shadow-lg">Server</div>
                  
                  <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    {/* HTTP Request arrow */}
                    <path 
                      d="M100,50 C150,30 250,30 300,50 C350,70 450,70 500,50" 
                      stroke="url(#requestGradient)" 
                      strokeWidth="3" 
                      fill="none" 
                      strokeDasharray="6,4"
                      style={{
                        filter: "drop-shadow(0 0 4px rgba(0, 210, 255, 0.6))"
                      }}
                    />
                    
                    {/* Response arrow */}
                    <path 
                      d="M500,120 C450,140 350,140 300,120 C250,100 150,100 100,120" 
                      stroke="url(#responseGradient)" 
                      strokeWidth="3" 
                      fill="none" 
                      strokeDasharray="6,4"
                      style={{
                        filter: "drop-shadow(0 0 4px rgba(0, 210, 255, 0.6))"
                      }}
                    />
                    
                    {/* Small data packets animation */}
                    <circle className="animate-ping" cx="150" cy="45" r="3" fill="#00d2ff" />
                    <circle className="animate-ping" cx="250" cy="45" r="3" fill="#00d2ff" style={{ animationDelay: "0.5s" }} />
                    <circle className="animate-ping" cx="350" cy="45" r="3" fill="#00d2ff" style={{ animationDelay: "1s" }} />
                    <circle className="animate-ping" cx="450" cy="45" r="3" fill="#00d2ff" style={{ animationDelay: "1.5s" }} />
                    
                    <circle className="animate-ping" cx="450" cy="125" r="3" fill="#0ea5e9" />
                    <circle className="animate-ping" cx="350" cy="125" r="3" fill="#0ea5e9" style={{ animationDelay: "0.5s" }} />
                    <circle className="animate-ping" cx="250" cy="125" r="3" fill="#0ea5e9" style={{ animationDelay: "1s" }} />
                    <circle className="animate-ping" cx="150" cy="125" r="3" fill="#0ea5e9" style={{ animationDelay: "1.5s" }} />
                    
                    {/* Define gradients */}
                    <defs>
                      <linearGradient id="requestGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="hsl(195, 100%, 60%)" />
                        <stop offset="100%" stopColor="#00d2ff" />
                      </linearGradient>
                      <linearGradient id="responseGradient" x1="100%" y1="0%" x2="0%" y2="0%">
                        <stop offset="0%" stopColor="#0ea5e9" />
                        <stop offset="100%" stopColor="hsl(195, 100%, 60%)" />
                      </linearGradient>
                    </defs>
                  </svg>
                  
                  {/* Labels */}
                  <div className="absolute top-9 left-1/2 transform -translate-x-1/2 text-xs text-primary bg-white/10 backdrop-blur-sm px-2 py-1 rounded shadow-sm">
                    HTTP Request
                  </div>
                  <div className="absolute bottom-9 left-1/2 transform -translate-x-1/2 text-xs text-cyan-400 bg-white/10 backdrop-blur-sm px-2 py-1 rounded shadow-sm">
                    JSON Response
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="backdrop-blur-sm bg-white/10 border border-white/10 rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-primary/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">API Code Example</h3>
                <div className="relative">
                  <div className="flex items-center gap-1.5 absolute top-3 left-4 z-10">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <pre className="bg-[#061525] text-gray-100 p-4 pt-10 rounded-lg overflow-auto h-72 text-sm font-mono shadow-inner border border-white/10">
                    <code className="text-blue-50">
{`using System.Web.Http;

namespace ApiDemo.Controllers
{
    public class <span class="text-primary">ProductsController</span> : ApiController
    {
        // GET: api/products
        public IHttpActionResult <span class="text-cyan-300">GetProducts</span>()
        {
            var products = _repository.GetAll();
            return <span class="text-green-300">Ok</span>(products);
        }

        // GET: api/products/5
        public IHttpActionResult <span class="text-cyan-300">GetProduct</span>(int id)
        {
            var product = _repository.GetById(id);
            
            if (product == null)
                return <span class="text-yellow-300">NotFound</span>();
                
            return <span class="text-green-300">Ok</span>(product);
        }

        // POST: api/products
        public IHttpActionResult <span class="text-cyan-300">PostProduct</span>(<span class="text-primary">Product</span> product)
        {
            if (!ModelState.IsValid)
                return <span class="text-red-300">BadRequest</span>(ModelState);
            
            _repository.Add(product);
            
            return <span class="text-green-300">CreatedAtRoute</span>(
                "DefaultApi",
                new { id = product.Id },
                product
            );
        }
    }`}
                    </code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ApiVisualizationSection;

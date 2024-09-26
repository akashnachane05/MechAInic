import React, { useEffect, useRef,useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, Redirect ,useNavigate } from 'react-router-dom';
import { ChevronRight, Upload, BarChart2, FileText, ArrowRight, Cog, Cpu, Zap, Shield } from 'lucide-react';
const AnimatedBackground = () => {
    const canvasRef = useRef(null);
  
    useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
  
      const gears = [];
      const gearCount = 10;
  
      for (let i = 0; i < gearCount; i++) {
        gears.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 30 + 20,
          teeth: Math.floor(Math.random() * 8) + 8,
          rotation: 0,
          speed: (Math.random() - 0.5) * 0.02,
        });
      }
  
      function drawGear(gear) {
        ctx.save();
        ctx.translate(gear.x, gear.y);
        ctx.rotate(gear.rotation);
  
        ctx.beginPath();
        ctx.moveTo(gear.radius, 0);
        for (let i = 0; i < gear.teeth; i++) {
          const angle = (i / gear.teeth) * Math.PI * 2;
          const innerRadius = gear.radius * 0.8;
          ctx.lineTo(Math.cos(angle) * gear.radius, Math.sin(angle) * gear.radius);
          ctx.lineTo(Math.cos(angle + 0.1) * innerRadius, Math.sin(angle + 0.1) * innerRadius);
        }
        ctx.closePath();
        ctx.strokeStyle = 'rgba(100, 100, 255, 0.2)';
        ctx.lineWidth = 2;
        ctx.stroke();
  
        ctx.restore();
      }
  
      function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
  
        gears.forEach((gear) => {
          gear.rotation += gear.speed;
          drawGear(gear);
        });
      }
  
      animate();
  
      return () => cancelAnimationFrame(animate);
    }, []);
  
    return <canvas ref={canvasRef} className="absolute inset-0 z-0" />;
  };
const Footer = () => (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">MechAInic</h3>
            <p className="text-gray-400">Revolutionizing image analysis with AI</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About Us', 'Features', 'Pricing', 'Contact'].map((item) => (
                <motion.li key={item} whileHover={{ x: 5 }}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">{item}</a>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              {['Twitter', 'LinkedIn', 'GitHub'].map((platform) => (
                <motion.a
                  key={platform}
                  href="#"
                  whileHover={{ y: -5 }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {platform}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400"
        >
          <p>&copy; 2024 MechAInic. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
  export default Footer
  
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
const CTASection = () => (
    <section className="py-20 bg-gray-800 relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-6"
        >
          Ready to Transform Your Workflow?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-300 mb-8"
        >
          Join thousands of satisfied users and experience the power of AI-driven image analysis.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition-colors duration-300 shadow-lg"
        >
          Get Started Now <ChevronRight className="inline-block ml-2" />
        </motion.button>
      </div>
      <div className="absolute inset-0 z-0 opacity-10">
        <AnimatedBackground />
      </div>
    </section>
  );
  export default CTASection
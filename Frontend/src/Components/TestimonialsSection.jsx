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
const TestimonialCard = ({ quote, author, company }) => (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <p className="text-lg italic mb-4">"{quote}"</p>
      <h4 className="font-bold">{author}</h4>
      <p className="text-sm text-gray-400">{company}</p>
    </div>
  );
  
  const TestimonialsSection = () => (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          What Our Clients Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard
            quote="MechAInic has revolutionized our damage assessment process, saving us countless hours and improving accuracy."
            author="John Doe"
            company="TechCorp Inc."
          />
          <TestimonialCard
            quote="The real-time analysis feature has been a game-changer for our on-site inspections."
            author="Jane Smith"
            company="InspectPro Ltd."
          />
          <TestimonialCard
            quote="We've seen a 40% increase in efficiency since implementing MechAInic in our workflow."
            author="Mike Johnson"
            company="AutoFix Solutions"
          />
        </div>
      </div>
    </section>
  );
  export default TestimonialsSection
  
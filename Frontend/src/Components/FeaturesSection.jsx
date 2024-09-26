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
const FeatureCard = ({ icon: Icon, title, description }) => {
    const controls = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref);
  
    useEffect(() => {
      if (inView) {
        controls.start({ opacity: 1, y: 0 });
      }
    }, [controls, inView]);
  
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }}
        className="bg-gray-800 p-6 rounded-lg shadow-lg relative overflow-hidden"
      >
        <motion.div
          className="absolute top-0 right-0 w-24 h-24 bg-blue-500 rounded-bl-full opacity-10"
          whileHover={{ scale: 1.2, rotate: 90 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          className="text-blue-400 mb-4 relative z-10"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          <Icon size={40} />
        </motion.div>
        <h3 className="text-xl font-semibold mb-2 relative z-10">{title}</h3>
        <p className="text-gray-400 relative z-10">{description}</p>
      </motion.div>
    );
  };
  
  const FeaturesSection = () => (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Key Features
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={Cpu}
            title="AI-Powered Analysis"
            description="Our advanced AI models ensure the highest level of fault detection accuracy in the industry."
          />
          <FeatureCard
            icon={Zap}
            title="Real-Time Processing"
            description="Get instant results with our lightning-fast processing capabilities."
          />
          <FeatureCard
            icon={Shield}
            title="Secure & Reliable"
            description="Your data is protected with enterprise-grade security measures."
          />
        </div>
      </div>
      <div className="absolute inset-0 z-0 opacity-5">
        <AnimatedBackground />
      </div>
    </section>
  );
  export default FeaturesSection
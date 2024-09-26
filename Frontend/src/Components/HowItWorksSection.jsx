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

  
const HowItWorksSection = () => {
    const steps = [
      { icon: Upload, title: "Upload Data", description: "Securely upload your images or video footage" },
      { icon: BarChart2, title: "AI Analysis", description: "Our AI processes and analyzes the data in real-time" },
      { icon: FileText, title: "Get Results", description: "Receive detailed reports and actionable insights" },
    ];
  
    return (
      React.createElement(
        'section',
        { className: 'py-20 bg-gray-800 relative overflow-hidden' },
        React.createElement(
          'div',
          { className: 'container mx-auto px-4' },
          React.createElement(
            motion.h2,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.5 },
              className: 'text-3xl font-bold text-center mb-12'
            },
            'How It Works'
          ),
          React.createElement(
            'div',
            { className: 'flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8' },
            steps.map((step, index) => (
              React.createElement(
                React.Fragment,
                { key: step.title },
                React.createElement(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 },
                    transition: { duration: 0.5, delay: index * 0.2 },
                    className: 'flex flex-col items-center text-center max-w-xs'
                  },
                  React.createElement(
                    motion.div,
                    {
                      whileHover: { scale: 1.1, rotate: 360 },
                      transition: { duration: 0.5 },
                      className: 'bg-blue-500 p-4 rounded-full mb-4'
                    },
                    React.createElement(step.icon, { size: 32, className: 'text-white' })
                  ),
                  React.createElement('h3', { className: 'text-xl font-semibold mb-2' }, step.title),
                  React.createElement('p', { className: 'text-gray-400' }, step.description)
                ),
                index < 2 &&
                React.createElement(
                  motion.div,
                  {
                    initial: { opacity: 0 },
                    whileInView: { opacity: 1 },
                    transition: { duration: 0.5, delay: index * 0.2 + 0.1 },
                    className: 'hidden md:block'
                  },
                  React.createElement(ArrowRight, { className: 'text-blue-500', size: 32 })
                )
              )
            ))
          )
        ),
        React.createElement(
          'div',
          { className: 'absolute inset-0 z-0 opacity-5' },
          React.createElement(AnimatedBackground)
        )
      )
    );
  };
  export default HowItWorksSection
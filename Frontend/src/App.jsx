import React, { useEffect, useRef,useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, Redirect ,useNavigate } from 'react-router-dom';
import { ChevronRight, Upload, BarChart2, FileText, ArrowRight, Cog, Cpu, Zap, Shield } from 'lucide-react';
import DemoModal from './pages/DemoModal';
import LoginScreen from './pages/LoginScreen';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard'
import FeaturesSection from './Components/FeaturesSection'
import HowItWorksSection from './Components/HowItWorksSection';
import TestimonialsSection from './Components/TestimonialsSection';
import PricingSection from './Components/PricingSection';
import Footer from './Components/Footer';
import CTASection from './Components/CTASection';
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

const Header = () => (
  <motion.header
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.5 }}
    className="relative top-0 left-0 right-0 z-50 bg-opacity-90 bg-gray-900 backdrop-filter backdrop-blur-sm"
  >
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <Cog className="w-8 h-8 text-white" />
        </motion.div>
        <span className="text-2xl font-bold text-white">MechAInic</span>
      </div>
      <nav>
        <ul className="flex space-x-6">
          {['Features', 'How It Works', 'Pricing', 'Contact'].map((item) => (
            <motion.li key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">{item}</a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </div>
  </motion.header>
);





const HeroSection = ({ setShowModal }) => {
  const navigate = useNavigate();
  const handleGetStartedClick = () => {
    navigate('/pages/LoginScreen'); // Navigate to the 'Get Started' page
  };
  
  return (
    
    <section className="py-20 bg-gray-800 relative text-center">
    
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className=" relative text-5xl z-10 md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 "
        style={{ paddingBottom: '0.15em' }} 
      >
        Transforming Machine Learning for Image Segmentation & Damage Estimation
      </motion.h1>

      <p className="relative text-lg z-10 mb-8 text-gray-400">
        AI-powered solutions to estimate and analyze damage in real-time.
      </p>

      {/* Get Started Button */}
      <button 
        // onClick={() => history.push("/login")}
        onClick={handleGetStartedClick} // Call the function when the button is clicked
        
        className="relative mt-4 z-10 px-6 py-3 text-lg bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md">
        Get Started
      </button>

      {/* Watch Demo Button */}
      <button
        onClick={() => setShowModal(true)} // Opens modal on click
        className="relative mt-4 ml-4 z-10 px-6 py-3 text-lg bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md"
      >
        Watch Demo
      </button>
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 opacity-100">
        <AnimatedBackground />
      </div>
    </section>
  );
};

export default function App() {
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  return (
    <Router>
      <Header />
      <Routes>
        <Route 
          path="/" 
          element={
            <div className="bg-gray-900 text-white min-h-screen">
              <HeroSection setShowModal={setShowModal} />
              <FeaturesSection />
              <HowItWorksSection />
              <TestimonialsSection />
              <PricingSection />
              <CTASection />
              <Footer />
              {/* Modal Component for Video */}
              {showModal && <DemoModal showModal={showModal} setShowModal={setShowModal} />}
            </div>
          } 
        />
        <Route path="/pages/SignUp" element={<SignUp />} />
        <Route path="/pages/LoginScreen" element={<LoginScreen />}/>
        <Route path="/pages/Dashboard" element={<Dashboard/>}/>
         

      </Routes>
    </Router>
  );
  
}


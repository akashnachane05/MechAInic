import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, BarChart2, Settings, HelpCircle, LogOut, User, Bell, Menu, X,Cog } from 'lucide-react';

const Sidebar = ({ isOpen, toggleSidebar }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.aside
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="w-64 h-screen bg-gray-900 bg-opacity-50 backdrop-blur-lg fixed left-0 top-0 p-5 flex flex-col z-20"
      >
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 text-gray-300 hover:text-white"
        >
          <X size={24} />
        </button>
        <nav className="flex-1 mt-10">
          {[
            { name: 'Home', icon: <User size={20} /> },
            { name: 'Upload Data', icon: <Upload size={20} /> },
            { name: 'View Results', icon: <BarChart2 size={20} /> },
            { name: 'Settings', icon: <Settings size={20} /> },
            { name: 'Help', icon: <HelpCircle size={20} /> },
          ].map((item) => (
            <motion.a
              key={item.name}
              href="#"
              className="flex items-center space-x-3 text-gray-300 p-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.icon}
              <span>{item.name}</span>
            </motion.a>
          ))}
        </nav>
      </motion.aside>
    )}
  </AnimatePresence>
);

const Header = ({ toggleSidebar }) => (
  <header className="flex justify-between items-center p-5 bg-gray-900 bg-opacity-50 backdrop-blur-lg">
    <div className="flex items-center space-x-3">
      <button
        onClick={toggleSidebar}
        className="text-gray-300 hover:text-white focus:outline-none"
      >
        <Menu size={24} />
      </button>
        <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
            <Cog className="w-10 h-10 text-white" />
        </motion.div>

      <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
        MechAInic: Image Segmentation & Damage Estimation
      </h1>
    </div>
    <div className="flex items-center space-x-4">
      <Bell size={24} className="text-gray-300 hover:text-white cursor-pointer" />
      <div className="relative group">
        <User size={24} className="text-gray-300 hover:text-white cursor-pointer" />
        <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
          <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-indigo-700">Profile</a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-indigo-700">Settings</a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-indigo-700">
            <LogOut size={18} className="inline mr-2" />
            Logout
          </a>
        </div>
      </div>
    </div>
  </header>
);

const ActionButton = ({ icon, text }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="flex items-center justify-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg shadow-lg transition-colors duration-200"
  >
    {icon}
    <span>{text}</span>
  </motion.button>
);

const DashboardWidget = ({ title, children }) => (
  <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-lg p-4 shadow-lg">
    <h3 className="text-lg font-semibold mb-3">{title}</h3>
    {children}
  </div>
);

export default function HomeScreen() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-gray-900 to-black text-white">
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <main className={`transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'} p-8`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Welcome to MechAInic</h2>
          <p className="text-xl text-gray-300">Start by uploading your data or view previous analysis results.</p>
        </motion.div>
        <div className="flex justify-center space-x-6 mb-12">
          <ActionButton icon={<Upload size={24} />} text="Upload Data" />
          <ActionButton icon={<BarChart2 size={24} />} text="View Results" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <DashboardWidget title="Recent Activity">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-gray-700 rounded-lg"></div>
                <div>
                  <p className="font-semibold">Analysis #{index + 1}</p>
                  <p className="text-sm text-gray-400">Completed on {new Date().toLocaleDateString()}</p>
                </div>
              </div>
            ))}
          </DashboardWidget>
          <DashboardWidget title="System Status">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <p>All systems operational</p>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-400">Last update: {new Date().toLocaleTimeString()}</p>
            </div>
          </DashboardWidget>
        </div>
      </main>
      <footer className={`transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'} p-4 text-center text-sm text-gray-500`}>
        <p>© 2024 MechAInic. All rights reserved. | <a href="#" className="hover:text-white">Terms of Service</a> | <a href="#" className="hover:text-white">Privacy Policy</a></p>
        <p>Version 1.0.0</p>
      </footer>
    </div>
  );
}

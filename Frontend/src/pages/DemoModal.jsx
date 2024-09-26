import React from 'react';
import { motion } from 'framer-motion';

const DemoModal = ({ showModal, setShowModal }) => {
  return (
    <>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg relative w-full max-w-4xl"
          >
            {/* Close button */}
            <button
              onClick={() => setShowModal(false)} // Close modal when clicked
              className="absolute top-3 right-3 text-white text-xl font-bold"
            >
              &times;
            </button>

            {/* Video container */}
            <div className="relative pt-[56.25%]"> {/* 16:9 aspect ratio for video */}
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID" // Replace with your video URL or ID
                title="Demo Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default DemoModal;

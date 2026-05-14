import "./App.css";
import { motion } from "framer-motion";

import Navbar from "./Navbar";
import ContactBtn from "./ContactBtn";
import ResponsiveNavbar from "./ResponsiveNavbar";

//Pages
import Hero from "./Pages/Hero";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Portfolio from "./Pages/Portfolio";
import Footer from "./Pages/Footer";
import ContactModal from "./ContactModal";

import { useState, useRef } from "react";

function App() {
  const [showResponsiveNavbar, setShowResponsiveNavbar] = useState(false);
  const showContactModalRef = useRef(null);

  function handleShowContactModal() {
    if (showContactModalRef.current) {
      if (showContactModalRef.current.style.display === "block") {
        showContactModalRef.current.style.display = "none";
      } else {
        showContactModalRef.current.style.display = "block";
      }
    }
  }
  return (
    <main>
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 200, -150, 100, 0],
          y: [0, 150, -200, 100, 0]
        }}
        transition={{ repeat: Infinity, duration: 12 }}
        className="absolute w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-30"
      />
      <motion.div
        animate={{ 
          scale: [1.2, 1, 1.2],
          x: [0, -180, 120, -100, 0],
          y: [0, 180, -150, 50, 0]
        }}
        transition={{ repeat: Infinity, duration: 14 }}
        className="absolute bg-purple-500 rounded-full opacity-25 top-1/4 right-10 w-72 h-72 blur-3xl"
      />
      <motion.div
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, 100, -200, 150, 0],
          y: [0, -180, 100, -50, 0]
        }}
        transition={{ repeat: Infinity, duration: 16 }}
        className="absolute bg-pink-500 rounded-full bottom-1/4 left-1/3 w-80 h-80 blur-3xl opacity-20"
      />

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 200, -200, 150, 0],
          y: [0, -180, 100, -50, 0]
        }}
        transition={{ repeat: Infinity, duration: 16 }}
        className="absolute bg-green-500 rounded-full bottom-1/4 left-1/3 w-80 h-80 blur-3xl opacity-20"
      />
      <motion.div
        animate={{ 
          scale: [1.1, 1, 1.1],
          x: [0, -150, 180, -80, 0],
          y: [0, -100, 150, -120, 0]
        }}
        transition={{ repeat: Infinity, duration: 15 }}
        className="absolute rounded-full top-1/3 right-1/4 w-96 h-96 bg-cyan-500 blur-3xl opacity-20"
      />
      <motion.div
        animate={{ 
          scale: [1, 1.15, 1],
          x: [0, 160, -120, 100, 0],
          y: [0, 120, -180, 80, 0]
        }}
        transition={{ repeat: Infinity, duration: 13 }}
        className="absolute bg-indigo-500 rounded-full opacity-25 bottom-20 right-1/3 w-72 h-72 blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          x: [0, 160, -120, 100, 0],
          y: [0, 120, -180, 80, 0]
        }}
        transition={{ repeat: Infinity, duration: 13 }}
        className="absolute bg-indigo-500 rounded-full opacity-25 bottom-20 right-1/3 w-72 h-72 blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 100, -200, 150, 0],
          y: [0, -180, 100, -50, 0]
        }}
        transition={{ repeat: Infinity, duration: 16 }}
        className="absolute bg-pink-500 rounded-full bottom-1/4 left-1/3 w-80 h-80 blur-3xl opacity-20"
      />
      <Navbar setShowResponsiveNavbar={setShowResponsiveNavbar} />
      <Hero />
      <About />
      <Services />
      <ContactBtn handleShowContactModal={handleShowContactModal} />
      <Portfolio />
      <ContactModal ref={showContactModalRef} />
      <Footer />
      <ResponsiveNavbar
        showResponsiveNavbar={showResponsiveNavbar}
        setShowResponsiveNavbar={setShowResponsiveNavbar}
      />
    </main>
  );
}

export default App;

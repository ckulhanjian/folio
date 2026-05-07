// pages/Home.jsx
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Playlist from './Playlist.jsx'
import Header from './new-header.jsx'
import Footer from './Contact.jsx'
import CursorDot from './CursorDot.jsx'
import experience from '../data/experience.json'

function Home() {

  // read in from experience.json => TRACKS
  const tracks = experience;

  return (
  <div>
    <CursorDot />
    
    <motion.div
      id="header-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ 
        duration: 0.6, 
        ease: [0.25, 0.46, 0.45, 0.94] // Custom smooth easing
      }}
      viewport={{ 
        once: false,
        margin: '-100px',
        amount: 0.3
      }}
    >
      <Header/>
    </motion.div>

      {/* content -> middle section */}
    <motion.div
    id="content-section"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ 
      duration: 0.4, 
      ease: [0.25, 0.46, 0.45, 0.94]
    }}
    viewport={{ 
      once: false,
      margin: '-50px', // Much smaller margin
      amount: 0.15     // Lower threshold
    }}
  >
      <Playlist tracks={tracks} />

    </motion.div>

    <motion.div
      id="footer-section"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ 
        duration: 0.5, 
        ease: [0.25, 0.46, 0.45, 0.94]
        // Removed delay
      }}
      viewport={{ 
        once: false,
        margin: '-30px', // Smaller margin
        amount: 0.2      // Lower threshold
      }}
    >
      <Footer />
    </motion.div>
  </div>
);
}

export default Home;
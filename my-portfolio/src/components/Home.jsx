// pages/Home.jsx
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Playlist from '../components/Playlist.jsx'
import Header from '../components/Header.jsx'
import Footer from '../components/Contact.jsx'
import CursorDot from '../components/CursorDot'


function Home() {
  const folio = {
    title: 'My Portfolio',
    artist: 'Cara Kulhanjian',
    description: 'Keep scrolling to learn about my projects and experiences. Click above to hear my story.'
  }

  const tracks = [
    { name: 'Codepath Technical Interview Prep', album: 'Program', date: '06-08 2024', 
      techStack: 'Python | Visual Studio Code', link: '/videos/2.mp4', 
      description: `This 10 week course reinforced my knowledge of data scturctures and algorithms 
      through practical application with leetcode style questions.`},

    { name: 'Travel Wizards', album: 'Project', date: '07-08 2025',
      techStack: 'Python | pyMuPDF', link: '/videos/1.mp4', description: 'interview prep questions'},

    { name: 'GrupUp', album: 'Project', date: '06-07 2025', link: '/videos/2.mp4',  },

    { name: 'GWC x Accenture Work Prep', album: 'Program', date: '05-06 2025', link: '/videos/1.mp4', },

    { name: 'SWE Satellite - Backend', album: 'Design Team', date: '09-05 2025', link: '/videos/2.mp4',  },

    { name: 'UF CISE - Programing 1', album: 'Teaching Assistant', date: '08-12 2024', link: '/videos/1.mp4',  }
  ];

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
      <Header album={folio} />
    </motion.div>

    <motion.div
    id="content-section"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ 
      duration: 0.4, 
      ease: [0.25, 0.46, 0.45, 0.94]
      // Removed delay
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
// pages/Home.jsx
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Playlist from '../components/Playlist.jsx'
import Header from '../components/Header.jsx'
import Footer from '../components/Contact.jsx'
import CursorDot from '../components/CursorDot'
// import video1 from '../assets/1.mp4'
// import video2 from '../assets/videos/2.mp4'


function Home() {
  const folio = {
    title: 'My Portfolio',
    artist: 'Cara Kulhanjian',
    description: 'Keep scrolling to learn about my projects and experiences. Click above to hear my story.'
  }

  const tracks = [
    { name: 'Codepath Technical Interview Prep', album: 'Program', date: '06-08 2024', 
      techStack: 'Python | Visual Studio Code', link: 'codepath.mp4', 
      description: `This 10 week course reinforced my knowledge of data scturctures and algorithms 
      through practical application with leetcode style questions.`},

    { name: 'Travel Wizards', album: 'Project / Experience', date: '07-// 2025',
      techStack: 'Python | pyMuPDF', link: '2.mp4', 
      description: `Used Python OS and PyMuPdf libraries to develop automation scripts 
      for internal Travel Agency processes including processing invoices for hotel billing and 
      customer records which reduced a 2 hour process to <5 seconds.`},

      { name: 'NBA Shotmap Comparison', album: 'Project', date: '06-// 2025',
      techStack: 'Python | seaborn', link: 'nba.mp4', 
      description: `Data science project to compare 2 nba players and where they most commonly
      shoot from. Generated heatmaps using seaborn and matplotlib. HTML/CSS frontend with flask backend.`},

    { name: 'GrupUp', album: 'Startup', date: '06-07 2025', link: {},
    description: `Used personality theory and behavioral research to create a better matchmaking 
    algorithm to connect strangers at publicly hosted events.`  },

    { name: 'GWC x Accenture Work Prep', album: 'Program', date: '05-06 2025', link: 'gwc.mp4',
  description: `Designed a case study and prototyped a virtual reality solution in Figma that would help reduce 
  burnout in doctors by managing their daily schedule and physical symptoms, encouraging them 
  to take breaks when they become overwhelmed.`},

    { name: 'SWE Satellite - Backend', album: 'Design Team', date: '09-// 2024', link: {},  
  description: `Contributed as a backend developer on a Space Traffic Control Visualizer, building a 
  system to determine satellite positioning and visibility using the Orekit library and MongoDB for 
  data storage. Currently leading Team Tech for the 2025-26 school year.`},

    { name: 'UF CISE - Programing 1', album: 'Teaching Assistant', date: '08-12 2024', link: {},  
  description: `Led 2 discussion sessions with 30+ students for Programming Fundamentals (700+ students) 
  where I explained procedural and objected-oriented programming and debugged projects.`},

  {name: 'StorySnaps', album: 'SASE Hackathon', date: '09-09 2024', link: 'storysnaps.mp4',
    description: `Developed a mobile app designed to enhance children’s reading skills through interactive 
    storytelling. Used React Native and Expo, integrating Google Cloud Vertex AI to generate stories from user-uploaded drawings.`}
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
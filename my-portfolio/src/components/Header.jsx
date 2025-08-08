import React, { useState } from 'react';
import '../styles.css';
import MusicGrid from '../components/MusicGrid'
import ReactiveBackground from '../components/ReactiveBackground';

function handleMouseMove(e) {
  const card = document.querySelector('.border');
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;

  const rotateX = (-y / 20).toFixed(2);
  const rotateY = (x / 20).toFixed(2);

  card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}

function handleMouseLeave() {
  const card = document.querySelector('.border');
  card.style.transform = 'rotateX(0deg) rotateY(0deg)';
}

function Header({ album }) {
    const scrollToPlaylist = () => {
        const section = document.getElementById('content-section');
        if (section) {
            const offset = 100; // pixels of extra space at top
            const top = section.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };

    const scrollToFooter = () => {
        const section = document.getElementById('footer-section');
        section?.scrollIntoView({ behavior: 'smooth' });
    };

    const [isFront, setFront] = useState(true);


   const handleClick = () => {
    setFront(prev => !prev);
    };

    return (
        <div className="header">
            <ReactiveBackground />
            <div
                className="border"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={handleClick}
                >

                {isFront ? 
                (
                <>
                    <div className='albumbg'>
                        <img src="/record.png" className="album-cover" alt="Album cover" />
                    </div>
                    
                    <div className="album-info">
                        {/* <span className='turnlogo'>&#10561;</span> */}
                        <p>Portfolio</p>
                        <h1>Cara Kulhanjian</h1>
                        <p className='text-black'>Data, Design & D.</p>
                        <div className="header-buttons">
                            <button className="play" onClick={scrollToPlaylist} >⏵︎ Play Now</button>
                            <button className="turn" >&#10561;</button>
                        </div>
                        
                        {/* <button cla */}
                    </div>
                </>
                ) : 
                (
                    <div className='backside'>
                        <div className='education'>
                            <h1>Education</h1>
                            <p>Bachelors in Computer Science at the University of Florida <span>Honors College</span></p>
                        </div>

                        <div className='coursework'>
                            <h1>Relevant Coursework</h1>
                            <ul>
                                <li>Operating Systems</li>
                                <li>|</li>
                                <li>Databases & Information Systems</li>
                                <li>|</li>
                                <li>Data Structures & Algorithms</li>
                            </ul>
                        </div>

                        <div className='interests'>
                            <h1>Tech Interests</h1>
                            <ul>
                                <li className='fs'>Fullstack Development</li>
                                <li className='ux'>User Experience</li>
                                <li className='ds'>Data Science</li>
                                <li className='cv'>Computer Vision</li>
                            </ul>
                        </div>

                        
                    </div>
                )}
                

                

            </div>
            
        </div>
    );
}

export default Header;
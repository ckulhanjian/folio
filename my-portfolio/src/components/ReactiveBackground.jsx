// components/ReactiveBackground.jsx
import React, { useRef, useEffect } from 'react';
// import './ReactiveBackground.css';

const ReactiveBackground = () => {
  const bgRef = useRef(null);

  useEffect(() => {
    const bg = bgRef.current;

    const handleMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;
      bg.style.setProperty('--x', `${x}px`);
      bg.style.setProperty('--y', `${y}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return <div className="reactive-bg" ref={bgRef}></div>;
};

export default ReactiveBackground;
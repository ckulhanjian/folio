import { useRef } from 'react';

// Rotates the image to face the cursor as the mouse moves within the
// wrapper — driven purely by mousemove events, so it only turns while
// the mouse is actually moving, and can sweep the full 360 degrees as
// the cursor circles around it.
function RotatingHead({ src, alt, className = '' }) {
  const imgRef = useRef(null);

  const handleMouseMove = (event) => {
    const img = imgRef.current;
    if (!img) return;
    const rect = img.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const angle = Math.atan2(event.clientY - centerY, event.clientX - centerX) * (180 / Math.PI);
    img.style.transform = `rotate(${angle + 90}deg)`;
  };

  const handleMouseLeave = () => {
    const img = imgRef.current;
    if (img) img.style.transform = 'rotate(0deg)';
  };

  return (
    <div className="rotating-head-zone" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <img ref={imgRef} src={src} alt={alt} className={`rotating-head ${className}`} />
    </div>
  );
}

export default RotatingHead;

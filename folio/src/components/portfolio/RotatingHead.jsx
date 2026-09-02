import { useEffect, useRef } from 'react';

// Rotates the image to face the cursor as the mouse moves, driven
// purely by mousemove events so it only turns while the mouse is
// actually moving, and can sweep the full 360 degrees as the cursor
// circles around it. By default it only tracks movement within its
// own tight wrapper; pass `trackParent` to track movement anywhere
// within whatever element the caller rendered it inside instead (e.g.
// a full section), so the image can sit anywhere inside a much bigger
// mouse-tracking area.
function RotatingHead({ src, alt, className = '', trackParent = false }) {
  const imgRef = useRef(null);
  const wrapRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    const target = trackParent ? img?.parentElement : wrapRef.current;
    if (!img || !target) return;

    const handleMouseMove = (event) => {
      const rect = img.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const angle = Math.atan2(event.clientY - centerY, event.clientX - centerX) * (180 / Math.PI);
      img.style.transform = `rotate(${angle + 90}deg)`;
    };

    const handleMouseLeave = () => {
      img.style.transform = 'rotate(0deg)';
    };

    target.addEventListener('mousemove', handleMouseMove);
    target.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      target.removeEventListener('mousemove', handleMouseMove);
      target.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [trackParent]);

  if (trackParent) {
    return <img ref={imgRef} src={src} alt={alt} className={`rotating-head ${className}`} />;
  }

  return (
    <div ref={wrapRef} className="rotating-head-zone">
      <img ref={imgRef} src={src} alt={alt} className={`rotating-head ${className}`} />
    </div>
  );
}

export default RotatingHead;

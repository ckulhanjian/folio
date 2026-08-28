import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CARDS = [
  { id: 'cohort', label: 'Cohort Analysis', sub: 'All of Us dataset · 800K+ records', bg: 'var(--babyblue)' },
  { id: 'imaging', label: 'Imaging Heatmaps', sub: 'Regional infection concentration', bg: 'var(--pink)' },
  { id: 'model', label: 'Recovery Model', sub: 'Predictive relapse modeling', bg: 'var(--cream)' },
];

const ROTATIONS = [-5, 4, -8, 6];

function stylesFor(position, total) {
  return {
    x: position * 12,
    y: position * 16,
    rotate: ROTATIONS[position % ROTATIONS.length],
    scale: 1 - position * 0.045,
    zIndex: total - position,
  };
}

function PhotoStack() {
  const [order, setOrder] = useState(CARDS.map((_, i) => i));

  const cycle = () => {
    setOrder((prev) => [...prev.slice(1), prev[0]]);
  };

  useEffect(() => {
    const timer = setInterval(cycle, 4200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="photo-stack">
      <button type="button" className="photo-stack-surface" onClick={cycle} aria-label="Shuffle project photos">
        {order.map((cardIdx, position) => {
          const card = CARDS[cardIdx];
          const { x, y, rotate, scale, zIndex } = stylesFor(position, CARDS.length);
          return (
            <motion.div
              key={card.id}
              className="photo-card"
              style={{ background: card.bg }}
              animate={{ x, y, rotate, scale, zIndex }}
              transition={{ type: 'spring', stiffness: 260, damping: 24 }}
            >
              <div className="photo-card-face">
                <span className="photo-card-label">{card.label}</span>
                <span className="photo-card-sub">{card.sub}</span>
              </div>
            </motion.div>
          );
        })}
      </button>
      <span className="stack-hint">Click the stack to shuffle · swap in real project photos</span>
    </div>
  );
}

export default PhotoStack;

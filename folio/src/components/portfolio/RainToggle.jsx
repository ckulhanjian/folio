import { useState } from 'react';

const NOTE_COUNT = 32;
const NOTE_CHARS = ['♪', '♫'];

function makeDrops() {
  return Array.from({ length: NOTE_COUNT }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    duration: 4 + Math.random() * 4,
    delay: Math.random() * -8,
    size: 0.8 + Math.random() * 0.9,
    char: NOTE_CHARS[i % NOTE_CHARS.length],
  }));
}

// A small fixed toggle, top right, like a dark/light mode switch —
// except this one makes it rain ASCII music notes over the whole
// page, the same falling-character idea as the hero's ascii-art
// graphics, just in motion instead of a static mask.
function RainToggle() {
  const [raining, setRaining] = useState(false);
  const [drops] = useState(makeDrops);

  return (
    <>
      <button
        type="button"
        className={`rain-toggle${raining ? ' rain-toggle-active' : ''}`}
        onClick={() => setRaining((r) => !r)}
        aria-pressed={raining}
        aria-label={raining ? 'Stop the note rain' : 'Make it rain music notes'}
      >
        ♪
      </button>
      {raining && (
        <div className="rain-overlay" aria-hidden="true">
          {drops.map((drop) => (
            <span
              key={drop.id}
              className="rain-note"
              style={{
                left: `${drop.left}%`,
                fontSize: `${drop.size}rem`,
                animationDuration: `${drop.duration}s`,
                animationDelay: `${drop.delay}s`,
              }}
            >
              {drop.char}
            </span>
          ))}
        </div>
      )}
    </>
  );
}

export default RainToggle;

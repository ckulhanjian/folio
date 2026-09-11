import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Three real figures from the GLP-1/meth cohort analysis, restyled in
// the site's own palette instead of matplotlib's default colors.

function CohortHeatmap() {
  const cells = [
    { label: 'Meth · GLP-1', value: 7032, shade: 0.32 },
    { label: 'Meth · No GLP-1', value: 71704, shade: 0.55 },
    { label: 'No Meth · GLP-1', value: 36856, shade: 0.44 },
    { label: 'No Meth · No GLP-1', value: 546270, shade: 1 },
  ];
  return (
    <div className="chart-card">
      <span className="chart-card-title">Patients Analyzed per Group</span>
      <div className="chart-heatmap">
        {cells.map((cell) => (
          <div
            key={cell.label}
            className="chart-heatmap-cell"
            style={{ background: `rgba(110, 15, 19, ${cell.shade})`, color: cell.shade > 0.5 ? '#fbf8ec' : '#201a14' }}
          >
            <span className="chart-heatmap-value">{cell.value.toLocaleString()}</span>
            <span className="chart-heatmap-label">{cell.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function StimulantFrequencyChart() {
  const segments = [
    { key: 'Daily', color: '#6e0f13' },
    { key: 'Weekly', color: '#a8453a' },
    { key: 'Monthly', color: '#c97a6c' },
    { key: 'Once or twice', color: '#e8b3ab' },
    { key: 'Never', color: '#f6e0dc' },
  ];
  const bars = [
    { label: 'Meth Only', n: 828, values: [11.7, 5.3, 5.9, 14, 63] },
    { label: 'Meth + GLP-1', n: 45, values: [2.2, 8.9, 0, 0, 88.9] },
  ];
  return (
    <div className="chart-card">
      <span className="chart-card-title">Stimulant Use Frequency (Past 3 Months)</span>
      <div className="chart-stackbars">
        {bars.map((bar) => (
          <div key={bar.label} className="chart-stackbar-col">
            <div className="chart-stackbar">
              {segments.map((seg, i) => (
                <div
                  key={seg.key}
                  className="chart-stackbar-seg"
                  style={{ height: `${bar.values[i]}%`, background: seg.color }}
                  title={`${seg.key}: ${bar.values[i]}%`}
                />
              ))}
            </div>
            <span className="chart-stackbar-caption">
              {bar.label}
              <br />n={bar.n}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function DrugUsageChart() {
  // Relative shares read off the pictogram (Other is the one exact
  // count the source chart labeled); the rest are approximate,
  // ordered by the icon density in that chart.
  const rows = [
    { label: 'Semaglutide', width: 100 },
    { label: 'Dulaglutide', width: 64 },
    { label: 'Liraglutide', width: 38 },
    { label: 'Exenatide', width: 11 },
    { label: 'Other (27)', width: 9 },
    { label: 'Lixisenatide', width: 3 },
  ];
  return (
    <div className="chart-card">
      <span className="chart-card-title">GLP-1 Drug Usage (Relative Share)</span>
      <div className="chart-rankbars">
        {rows.map((row) => (
          <div key={row.label} className="chart-rankbar-row">
            <span className="chart-rankbar-label">{row.label}</span>
            <span className="chart-rankbar-track">
              <span className="chart-rankbar-fill" style={{ width: `${row.width}%` }} />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

const CARDS = [
  { id: 'cohort', bg: 'var(--babyblue)', Render: CohortHeatmap },
  { id: 'stimulant', bg: 'var(--pink)', Render: StimulantFrequencyChart },
  { id: 'drugs', bg: 'var(--cream)', Render: DrugUsageChart },
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
      <button type="button" className="photo-stack-surface" onClick={cycle} aria-label="Shuffle research figures">
        {order.map((cardIdx, position) => {
          const card = CARDS[cardIdx];
          const { x, y, rotate, scale, zIndex } = stylesFor(position, CARDS.length);
          const Render = card.Render;
          return (
            <motion.div
              key={card.id}
              className="photo-card"
              style={{ background: card.bg }}
              animate={{ x, y, rotate, scale, zIndex }}
              transition={{ type: 'spring', stiffness: 260, damping: 24 }}
            >
              <div className="photo-card-face">
                <Render />
              </div>
            </motion.div>
          );
        })}
      </button>
      <span className="stack-hint">Click the stack to shuffle through the analysis figures</span>
    </div>
  );
}

export default PhotoStack;

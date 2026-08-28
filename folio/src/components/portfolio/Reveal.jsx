import { motion } from 'framer-motion';

function Reveal({
  children,
  className = '',
  y = 28,
  x = 0,
  delay = 0,
  duration = 0.7,
  once = true,
  amount = 0.3,
  as = 'div',
}) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}

export default Reveal;

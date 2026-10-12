import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const PENDING = (() => {
  try {
    return !sessionStorage.getItem('ga-intro');
  } catch {
    return true;
  }
})();

/** Seconds the hero should wait before animating in (0 if the intro was already seen). */
export const introDelay = PENDING ? 1.9 : 0.1;

export default function Intro() {
  const [show, setShow] = useState(PENDING);

  useEffect(() => {
    if (!show) return undefined;
    document.body.style.overflow = 'hidden';
    const t = setTimeout(() => {
      setShow(false);
      try {
        sessionStorage.setItem('ga-intro', '1');
      } catch {
        /* storage can be blocked; ignore */
      }
      document.body.style.overflow = '';
    }, 1800);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = '';
    };
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="intro"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.span
            className="intro-line"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.1, ease: 'easeInOut' }}
          />
          <motion.p
            className="intro-name"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.9 }}
          >
            Gift Angel
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

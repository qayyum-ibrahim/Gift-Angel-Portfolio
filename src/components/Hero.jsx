import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LoopVideo, Media, useMedia } from './ui';
import { introDelay } from './Intro';
import { BOOK_TEXT, SITE, waLink } from '../config/content';
import { M, img, poster, vid } from '../config/media';

const rise = (delay) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: introDelay + delay, duration: 1, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  const desktop = useMedia('(min-width: 768px)');
  const id = desktop ? M.hero.desktop : M.hero.mobile;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const shift = useTransform(scrollYProgress, [0, 1], ['0%', '14%']);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section id="top" className="hero" ref={ref}>
      <motion.div className="hero-media" style={{ y: shift }}>
        <LoopVideo
          key={id}
          eager
          src={vid(id)}
          poster={poster(id, 1400)}
          className="hero-video"
          label="Gift Angel showreel"
          fallback={<Media src={img(M.fashion.cover, 1600)} alt="Gift Angel" className="hero-video" />}
        />
      </motion.div>
      <div className="hero-shade" />
      <motion.div className="hero-copy" style={{ opacity: fade }}>
        <motion.p className="hero-kicker" {...rise(0)}>
          {SITE.kicker}
        </motion.p>
        <motion.h1 {...rise(0.12)}>
          <span>Gift</span> <span>Angel</span>
        </motion.h1>
        <motion.p className="hero-tag" {...rise(0.24)}>
          {SITE.tagline}
        </motion.p>
        <motion.div className="hero-actions" {...rise(0.36)}>
          <a className="btn gold" href={waLink(BOOK_TEXT)} target="_blank" rel="noopener noreferrer">
            Work with me
          </a>
          <a className="btn" href="#worlds">
            See my work
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

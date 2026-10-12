import { useEffect, useRef, useState } from 'react';

export function useMedia(query) {
  const [matches, setMatches] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(query).matches
  );
  useEffect(() => {
    const mq = window.matchMedia(query);
    const update = () => setMatches(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, [query]);
  return matches;
}

/** Image that fades in when loaded and shows a clear placeholder if it fails. */
export function Media({ src, alt, className = '', ...rest }) {
  const [state, setState] = useState('loading');
  if (!src || state === 'failed') {
    return (
      <div className={`ph ${className}`} role="img" aria-label={alt}>
        <span>Image unavailable</span>
      </div>
    );
  }
  return (
    <img
      className={`${className} fade ${state === 'loaded' ? 'in' : ''}`}
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onLoad={() => setState('loaded')}
      onError={() => setState('failed')}
      {...rest}
    />
  );
}

/** Muted looping video. Plays only while it is on screen, to save data and battery. */
export function LoopVideo({ src, poster, className = '', eager = false, label, fallback }) {
  const ref = useRef(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return undefined;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.3 }
    );
    io.observe(video);
    return () => io.disconnect();
  }, [src]);

  if (failed) {
    return (
      fallback || (
        <div className={`ph ${className}`} role="img" aria-label={label}>
          <span>Video unavailable</span>
        </div>
      )
    );
  }
  return (
    <video
      ref={ref}
      className={className}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload={eager ? 'auto' : 'none'}
      aria-label={label}
      onError={() => setFailed(true)}
    />
  );
}

export function Lightbox({ item, onClose }) {
  useEffect(() => {
    if (!item) return undefined;
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [item, onClose]);

  if (!item) return null;
  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={item.alt} onClick={onClose}>
      <button className="lb-close" aria-label="Close photo">Close</button>
      <img src={item.src} alt={item.alt} />
    </div>
  );
}

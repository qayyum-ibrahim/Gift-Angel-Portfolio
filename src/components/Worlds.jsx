import { useState } from 'react';
import { Media } from './ui';
import { WORLDS } from '../config/content';
import { img } from '../config/media';

/** The main interactive moment: five panels. Hover or focus one on desktop to open it. Swipe on mobile. */
export default function Worlds() {
  const [active, setActive] = useState(0);

  return (
    <section id="worlds" className="worlds">
      <h2>Five ways to work with me</h2>
      <p className="lead">Pick a world to see the work, then book the one that fits your brand.</p>
      <div className="panels">
        {WORLDS.map((w, i) => (
          <a
            key={w.id}
            href={`#${w.id}`}
            className={`panel ${active === i ? 'on' : ''}`}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
          >
            <Media src={img(w.cover, 900)} alt={`${w.title} work by Gift Angel`} className="panel-img" />
            <span className="panel-shade" />
            <span className="panel-copy">
              <h3>{w.title}</h3>
              <span className="panel-line">{w.line}</span>
              <span className="panel-open">See the work</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

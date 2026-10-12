import { LoopVideo, Media } from './ui';
import { waLink } from '../config/content';
import { img, poster, vid } from '../config/media';

export default function WorldSection({ w, onOpen }) {
  const message = `Hi Gift, I'd like to book you for a ${w.title.toLowerCase()} project.`;
  return (
    <section id={w.id} className="world">
      <div className="world-head">
        <h2>{w.title}</h2>
        <p className="world-line">{w.line}</p>
        <p className="lead">{w.blurb}</p>
        <a className="btn gold" href={waLink(message)} target="_blank" rel="noopener noreferrer">
          Book {w.title.toLowerCase()} work
        </a>
      </div>
      <div className="masonry">
        {w.items.map((item, i) => (
          <div className="m-item" key={`${item.id}-${i}`}>
            {item.type === 'img' ? (
              <button
                className="m-photo"
                aria-label={`Open photo: ${item.alt}`}
                onClick={() => onOpen({ src: img(item.id, 1800), alt: item.alt })}
              >
                <Media src={img(item.id, 900)} alt={item.alt} />
              </button>
            ) : (
              <figure className="vid">
                <LoopVideo
                  src={vid(item.id)}
                  poster={poster(item.id, 700)}
                  label={item.label ? `${item.label} video` : `${w.title} video by Gift Angel`}
                />
                {item.label && <figcaption>{item.label}</figcaption>}
              </figure>
            )}
          </div>
        ))}
      </div>
      {w.credit && <p className="credit">{w.credit}</p>}
    </section>
  );
}

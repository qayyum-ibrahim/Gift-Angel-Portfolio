import { LoopVideo } from './ui';
import { RANGE } from '../config/content';
import { poster, vid } from '../config/media';

export default function Range() {
  return (
    <section className="range" aria-labelledby="range-title">
      <h2 id="range-title">{RANGE.title}</h2>
      <p className="lead">{RANGE.text}</p>
      <div className="rail">
        {RANGE.videos.map((v) => (
          <figure className="vid" key={v.id}>
            <LoopVideo src={vid(v.id)} poster={poster(v.id, 600)} label={v.label} />
            <figcaption>{v.label}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

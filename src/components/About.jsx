import { Media } from './ui';
import { BIO, BOOK_TEXT, NICHES, SITE, waLink } from '../config/content';
import { M, img } from '../config/media';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-grid">
        <div className="portrait">
          <Media src={img(M.about.portrait, 1000)} alt="Portrait of Gift Angel" className="portrait-main" />
          <Media src={img(M.about.detail, 600)} alt="Close-up detail from a Gift Angel shoot" className="portrait-detail" />
        </div>
        <div className="about-copy">
          <h2>{SITE.fullName}, also known as Gift Angel</h2>
          {BIO.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <ul className="chips" aria-label="Content niches">
            {NICHES.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
          <a className="btn gold" href={waLink(BOOK_TEXT)} target="_blank" rel="noopener noreferrer">
            Start a project
          </a>
        </div>
      </div>
    </section>
  );
}

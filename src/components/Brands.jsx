import { Media } from './ui';
import { M, img } from '../config/media';

export default function Brands() {
  return (
    <section className="brands" aria-label="Brands worked with">
      <p>Brands I've worked with</p>
      <div className="brand-chip">
        <Media src={img(M.brands.payscribe, 400)} alt="Payscribe logo" className="brand-logo" />
      </div>
      <div className="brand-chip">
        <Media src={img(M.brands.legalParadigms, 400)} alt="Legal Paradigms logo" className="brand-logo" />
      </div>
    </section>
  );
}

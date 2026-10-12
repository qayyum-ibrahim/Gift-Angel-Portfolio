import { BRANDS } from '../config/content';

export default function Brands() {
  return (
    <section className="brands" aria-label="Brands worked with">
      <p>Brands I've worked with</p>
      <ul className="brand-names">
        {BRANDS.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </section>
  );
}
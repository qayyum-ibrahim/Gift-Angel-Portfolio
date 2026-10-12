import { SERVICES } from '../config/content';

export default function Services() {
  return (
    <section id="services" className="services">
      <h2>What I can do for your brand</h2>
      <ul className="svc-list">
        {SERVICES.map((s) => (
          <li className="svc" key={s.t}>
            <h3>{s.t}</h3>
            <p>{s.d}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

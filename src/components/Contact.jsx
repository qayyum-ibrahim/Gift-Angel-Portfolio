import { useEffect, useState } from 'react';
import { BOOK_TEXT, LINKS, SITE, waLink } from '../config/content';

export function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Let's make something people remember</h2>
      <p className="lead">Send a message to book. Rates are shared on request.</p>
      <div className="contact-actions">
        <a className="btn gold" href={waLink(BOOK_TEXT)} target="_blank" rel="noopener noreferrer">
          Message on WhatsApp
        </a>
        <a className="btn" href={LINKS.instagram} target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
        <a className="btn" href={LINKS.email}>
          Email
        </a>
        <a className="btn" href={LINKS.youtube} target="_blank" rel="noopener noreferrer">
          YouTube
        </a>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer>
      <span>
        © {new Date().getFullYear()} {SITE.name} ({SITE.fullName})
      </span>
      <span>{SITE.location}</span>
    </footer>
  );
}

/** Floating button. Appears after the hero and hides near the contact section. */
export function StickyCTA() {
  const [pastHero, setPastHero] = useState(false);
  const [atContact, setAtContact] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    const target = document.getElementById('contact');
    const io = target
      ? new IntersectionObserver(([e]) => setAtContact(e.isIntersecting), { threshold: 0.2 })
      : null;
    if (io && target) io.observe(target);
    return () => {
      window.removeEventListener('scroll', onScroll);
      io?.disconnect();
    };
  }, []);

  const visible = pastHero && !atContact;
  return (
    <a
      className={`sticky ${visible ? 'show' : ''}`}
      href={waLink(BOOK_TEXT)}
      target="_blank"
      rel="noopener noreferrer"
      tabIndex={visible ? 0 : -1}
    >
      Work with me
    </a>
  );
}

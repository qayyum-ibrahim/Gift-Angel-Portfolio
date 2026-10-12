import { useEffect, useState } from 'react';
import { BOOK_TEXT, waLink } from '../config/content';

const ITEMS = [
  ['Work', '#worlds'],
  ['About', '#about'],
  ['Services', '#services'],
  ['Contact', '#contact'],
];

export default function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header className={`nav ${solid || open ? 'solid' : ''}`}>
        <a href="#top" className="logo" onClick={() => setOpen(false)}>
          Gift Angel
        </a>
        <nav className="nav-links" aria-label="Main">
          {ITEMS.map(([label, href]) => (
            <a key={label} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <div className="nav-right">
          <a className="btn small" href={waLink(BOOK_TEXT)} target="_blank" rel="noopener noreferrer">
            Book
          </a>
          <button
            className="burger"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </header>
      {open && (
        <div className="menu" id="mobile-menu">
          {ITEMS.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}

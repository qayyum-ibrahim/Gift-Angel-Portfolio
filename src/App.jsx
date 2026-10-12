import { useState } from 'react';
import Intro from './components/Intro';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Brands from './components/Brands';
import About from './components/About';
import Worlds from './components/Worlds';
import WorldSection from './components/WorldSection';
import Range from './components/Range';
import Services from './components/Services';
import { Contact, Footer, StickyCTA } from './components/Contact';
import { Lightbox } from './components/ui';
import { WORLDS } from './config/content';

export default function App() {
  const [photo, setPhoto] = useState(null);
  return (
    <>
      <Intro />
      <Nav />
      <main>
        <Hero />
        <Brands />
        <About />
        <Worlds />
        {WORLDS.map((w) => (
          <WorldSection key={w.id} w={w} onOpen={setPhoto} />
        ))}
        <Range />
        <Services />
        <Contact />
      </main>
      <Footer />
      <StickyCTA />
      <Lightbox item={photo} onClose={() => setPhoto(null)} />
    </>
  );
}

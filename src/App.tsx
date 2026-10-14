import { useState, useEffect } from 'react';
import EnvelopeIntro from '@/components/EnvelopeIntro';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import Countdown from '@/components/Countdown';
import OurStory from '@/components/OurStory';
import Celebrations from '@/components/Celebrations';
import Gallery from '@/components/Gallery';
import Venue from '@/components/Venue';
import RSVP from '@/components/RSVP';
import Footer from '@/components/Footer';
import MusicPlayer from '@/components/MusicPlayer';
import PetalsCanvas from '@/components/PetalsCanvas';
import { useScrollReveal } from '@/hooks/useAnimations';

function App() {
  const [envelopeOpened, setEnvelopeOpened] = useState(false);
  const revealRef = useScrollReveal<HTMLDivElement>([envelopeOpened]);

  // Lock scroll while envelope is showing
  useEffect(() => {
    document.body.style.overflow = envelopeOpened ? '' : 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [envelopeOpened]);

  return (
    <>
      {!envelopeOpened && <EnvelopeIntro onOpen={() => setEnvelopeOpened(true)} />}

      {envelopeOpened && (
        <div ref={revealRef} className="relative min-h-screen bg-royal-maroon">
          {/* Ambient petals overlay on main content */}
          <div className="pointer-events-none fixed inset-0 z-30">
            <PetalsCanvas />
          </div>

          <NavBar />

          <main className="relative z-10">
            <Hero />
            <Countdown />
            <OurStory />
            <Celebrations />
            <Gallery />
            <Venue />
            <RSVP />
          </main>

          <Footer />
          <MusicPlayer />
        </div>
      )}
    </>
  );
}

export default App;

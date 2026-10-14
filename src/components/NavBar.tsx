import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { weddingConfig } from '@/wedding.config';

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'Story', href: '#story' },
  { label: 'Celebrations', href: '#events' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Venue', href: '#venue' },
  { label: 'RSVP', href: '#rsvp' },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-royal-maroon/95 backdrop-blur-md shadow-lg shadow-royal-gold/10'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Logo / Initials */}
        <button
          onClick={() => handleNav('#hero')}
          className="flex items-center gap-2"
          aria-label="Go to top"
        >
          <span className="font-script text-xl text-royal-gold sm:text-2xl">
            {weddingConfig.initials}
          </span>
        </button>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNav(item.href)}
              className="font-sans text-sm uppercase tracking-wider text-royal-ivory/80 transition-colors hover:text-royal-gold"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="text-royal-gold md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="bg-royal-maroon/98 backdrop-blur-md md:hidden">
          <div className="flex flex-col items-center gap-4 py-6">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNav(item.href)}
                className="font-sans text-sm uppercase tracking-wider text-royal-ivory/80 transition-colors hover:text-royal-gold"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

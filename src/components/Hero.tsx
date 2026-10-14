import { weddingConfig } from '@/wedding.config';
import { GoldDivider } from './Ornaments';
import { useParallax } from '@/hooks/useAnimations';

export default function Hero() {
  const bgRef = useParallax<HTMLDivElement>(0.15);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Parallax palace background */}
      <div
        ref={bgRef}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${weddingConfig.heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          willChange: 'transform',
        }}
      >
        <img
          src={weddingConfig.heroBackground}
          alt=""
          className="hidden"
          aria-hidden="true"
        />
      </div>

      {/* Brighter warm overlay — lighter than before, keeps the palace visible */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            'linear-gradient(180deg, rgba(61,9,20,0.45) 0%, rgba(101,13,27,0.35) 40%, rgba(61,9,20,0.75) 100%)',
        }}
      />

      {/* Localized text scrim — dark gradient concentrated behind the text area */}
      <div
        className="absolute inset-0 z-10 flex items-center justify-center"
        aria-hidden="true"
      >
        <div
          className="h-[70%] w-full max-w-3xl"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(42,8,16,0.55) 0%, rgba(42,8,16,0.3) 50%, transparent 80%)',
          }}
        />
      </div>

      <div className="mughal-pattern absolute inset-0 z-10 opacity-15" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-20 w-full max-w-3xl px-5 py-20 text-center sm:px-6">
        {/* Top flourish */}
        <div className="animate-fade-in-down mb-6 opacity-0">
          <GoldDivider />
        </div>

        <p
          className="animate-fade-in-down font-sans text-xs uppercase tracking-[0.3em] text-royal-gold/95 opacity-0 text-shadow-soft sm:text-sm md:text-base"
          style={{ animationDelay: '0.2s' }}
        >
          {weddingConfig.heroPretext}
        </p>

        {/* Names — both clearly visible together */}
        <div className="animate-fade-in-scale my-5 opacity-0 sm:my-8" style={{ animationDelay: '0.5s' }}>
          <h1 className="font-display font-semibold leading-tight text-royal-ivory text-shadow-strong">
            <span className="block text-gold-gradient text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
              {weddingConfig.brideName}
            </span>
            <span className="my-1 block font-script text-2xl text-royal-gold sm:text-4xl md:text-5xl">
              &amp;
            </span>
            <span className="block text-gold-gradient text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
              {weddingConfig.groomName}
            </span>
          </h1>
        </div>

        <p
          className="animate-fade-in-up font-serif text-base italic text-royal-ivory/95 opacity-0 text-shadow-soft sm:text-lg md:text-xl"
          style={{ animationDelay: '0.9s' }}
        >
          {weddingConfig.heroSubtext}
        </p>

        {/* Date — prominent */}
        <div className="animate-fade-in mt-8 opacity-0 sm:mt-10" style={{ animationDelay: '1.2s' }}>
          <GoldDivider className="mb-5" />
          <div className="inline-block rounded-lg border border-royal-gold/40 bg-royal-maroon/40 px-6 py-3 backdrop-blur-sm sm:px-10 sm:py-4">
            <p className="font-display text-xl font-semibold tracking-wide text-royal-gold sm:text-2xl md:text-3xl">
              {weddingConfig.weddingDateDisplay}
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="animate-fade-in mt-10 opacity-0 sm:mt-14" style={{ animationDelay: '1.6s' }}>
          <div className="mx-auto flex h-10 w-6 items-start justify-center rounded-full border-2 border-royal-gold/50">
            <div className="mt-1.5 h-2 w-1 animate-bounce rounded-full bg-royal-gold" />
          </div>
        </div>
      </div>
    </section>
  );
}

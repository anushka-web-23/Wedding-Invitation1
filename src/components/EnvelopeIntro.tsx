import { useState, useEffect } from 'react';
import { weddingConfig } from '@/wedding.config';
import PetalsCanvas from './PetalsCanvas';

/**
 * Full-screen royal envelope opening scene.
 * On tap/click: wax seal breaks, flap opens, card slides up, then fades
 * into the main site via onOpen callback.
 */
export default function EnvelopeIntro({ onOpen }: { onOpen: () => void }) {
  const [stage, setStage] = useState<'closed' | 'opening' | 'done'>('closed');

  const handleOpen = () => {
    if (stage !== 'closed') return;
    setStage('opening');
    setTimeout(() => setStage('done'), 2200);
    setTimeout(() => onOpen(), 2800);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') handleOpen();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  if (stage === 'done') return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden transition-opacity duration-700 ${
        stage === 'opening' ? 'opacity-0' : 'opacity-100'
      }`}
      style={{
        background:
          'radial-gradient(ellipse at 50% 40%, #6B0F1E 0%, #4A0B16 45%, #2A0810 100%)',
      }}
    >
      {/* Mughal pattern overlay */}
      <div className="mughal-pattern absolute inset-0 opacity-30" aria-hidden="true" />

      {/* Vignette for depth */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 30%, rgba(26,6,12,0.5) 90%)',
        }}
      />

      {/* Floating petals and golden particles */}
      <PetalsCanvas />

      {/* Corner ornaments on the screen itself */}
      <ScreenCorner className="absolute top-4 left-4" />
      <ScreenCorner className="absolute top-4 right-4 scale-x-[-1]" />
      <ScreenCorner className="absolute bottom-4 left-4 scale-y-[-1]" />
      <ScreenCorner className="absolute bottom-4 right-4 scale-x-[-1] scale-y-[-1]" />

      {/* Main content — names, envelope, date */}
      <div
        className="perspective relative z-10 flex cursor-pointer select-none flex-col items-center px-4"
        onClick={handleOpen}
        role="button"
        tabIndex={0}
        aria-label="Tap the envelope to open your invitation"
      >
        {/* ---- Names above envelope ---- */}
        <div className="mb-6 text-center sm:mb-8">
          {/* Small ornament top */}
          <div className="mb-3 flex items-center justify-center gap-2" aria-hidden="true">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-royal-gold/50 sm:w-12" />
            <svg width="14" height="14" viewBox="0 0 14 14" className="text-royal-gold/70">
              <circle cx="7" cy="7" r="2" fill="currentColor" />
              <circle cx="7" cy="7" r="5" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </svg>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-royal-gold/50 sm:w-12" />
          </div>

          <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-royal-gold/70 sm:text-xs">
            {weddingConfig.envelopeTeaser}
          </p>

          <h1 className="mt-3 font-display text-2xl font-semibold leading-tight text-royal-ivory sm:text-4xl md:text-5xl">
            <span className="text-gold-gradient">{weddingConfig.brideName}</span>
            <span className="mx-2 font-script text-xl text-royal-gold sm:text-3xl">&amp;</span>
            <span className="text-gold-gradient">{weddingConfig.groomName}</span>
          </h1>
        </div>

        {/* ---- The Envelope ---- */}
        <div
          className={`relative transition-transform duration-700 ${
            stage === 'opening' ? 'scale-90' : 'scale-100'
          }`}
          style={{ width: 'min(360px, 82vw)', height: 'min(250px, 57vw)' }}
        >
          {/* Envelope drop shadow */}
          <div
            className="absolute inset-0 rounded-lg"
            style={{
              boxShadow: '0 30px 80px rgba(0,0,0,0.7), 0 10px 30px rgba(0,0,0,0.5)',
            }}
            aria-hidden="true"
          />

          {/* Envelope back panel */}
          <div
            className="absolute inset-0 rounded-lg"
            style={{
              background: 'linear-gradient(160deg, #5A0E1A 0%, #3D0914 50%, #4A0B16 100%)',
              border: '2px solid #C8A45D',
            }}
          >
            {/* Outer ornamental gold border */}
            <div
              className="absolute inset-1.5 rounded"
              style={{ border: '1px solid rgba(200,164,93,0.5)' }}
            />
            {/* Inner ornamental gold border */}
            <div
              className="absolute inset-3 rounded"
              style={{
                border: '1px solid rgba(200,164,93,0.35)',
                backgroundImage:
                  'repeating-linear-gradient(90deg, transparent 0, transparent 6px, rgba(200,164,93,0.08) 6px, rgba(200,164,93,0.08) 7px)',
              }}
            />
            {/* Mughal pattern inside */}
            <div className="mughal-pattern absolute inset-4 rounded opacity-25" />

            {/* Decorative corner medallions */}
            <CornerMedallion className="absolute top-2 left-2" />
            <CornerMedallion className="absolute top-2 right-2 scale-x-[-1]" />
            <CornerMedallion className="absolute bottom-2 left-2 scale-y-[-1]" />
            <CornerMedallion className="absolute bottom-2 right-2 scale-x-[-1] scale-y-[-1]" />
          </div>

          {/* Invitation card peeking out on open */}
          <div
            className={`absolute left-1/2 top-1/2 z-20 w-[86%] -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ${
              stage === 'opening'
                ? '-translate-y-[145%] opacity-100'
                : 'translate-y-0 opacity-0'
            }`}
            style={{ pointerEvents: 'none' }}
          >
            <div
              className="rounded-lg p-6 text-center"
              style={{
                background: 'linear-gradient(160deg, #FFF8EB 0%, #F5EBDD 100%)',
                border: '2px solid #C8A45D',
                boxShadow: '0 10px 40px rgba(0,0,0,0.4)',
              }}
            >
              <p className="font-script text-2xl text-royal-burgundy">
                {weddingConfig.brideName.split(' ')[0]} & {weddingConfig.groomName.split(' ')[0]}
              </p>
              <div className="my-2 flex items-center justify-center gap-2">
                <div className="h-px w-8 bg-gradient-to-r from-transparent to-royal-gold" />
                <div className="h-1.5 w-1.5 rotate-45 bg-royal-gold" />
                <div className="h-px w-8 bg-gradient-to-l from-transparent to-royal-gold" />
              </div>
              <p className="font-serif text-sm text-royal-maroon">{weddingConfig.weddingDateDisplay}</p>
            </div>
          </div>

          {/* Envelope flap — top triangle */}
          <div
            className="absolute inset-x-0 top-0 z-30 origin-top preserve-3d"
            style={{
              transformStyle: 'preserve-3d',
              transform: stage === 'opening' ? 'rotateX(-180deg)' : 'rotateX(0deg)',
              transition: 'transform 0.8s ease-in',
            }}
          >
            <div
              className="relative"
              style={{
                width: '100%',
                height: 'min(125px, 28vw)',
                clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                background: 'linear-gradient(160deg, #6B1020 0%, #4A0B16 100%)',
                borderBottom: '2px solid #C8A45D',
                borderLeft: '2px solid #C8A45D',
                borderRight: '2px solid #C8A45D',
                backfaceVisibility: 'hidden',
              }}
            >
              <div className="mughal-pattern absolute inset-0 opacity-20" />
              {/* Gold edge shimmer on the flap */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(200,164,93,0.15) 0%, transparent 30%)',
                }}
              />
            </div>
          </div>

          {/* Envelope front — bottom triangle covering */}
          <div
            className="absolute inset-x-0 bottom-0 z-25"
            style={{
              width: '100%',
              height: '60%',
              clipPath: 'polygon(0 100%, 100% 100%, 50% 0)',
              background: 'linear-gradient(160deg, #4A0B16 0%, #3D0914 100%)',
              opacity: stage === 'opening' ? 0.25 : 1,
              transition: 'opacity 0.5s 0.4s',
            }}
          >
            <div className="mughal-pattern absolute inset-0 opacity-20" />
            {/* Subtle gold border on the bottom flap edges */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(0deg, rgba(200,164,93,0.12) 0%, transparent 40%)',
              }}
            />
          </div>

          {/* ---- Wax Seal ---- */}
          <div
            className={`absolute left-1/2 top-1/2 z-40 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
              stage === 'opening' ? 'scale-150 opacity-0' : 'animate-seal-pulse'
            }`}
          >
            {/* Outer decorative ring */}
            <div
              className="flex items-center justify-center rounded-full"
              style={{
                padding: '5px',
                background:
                  'linear-gradient(135deg, #E0C490 0%, #C8A45D 50%, #A6843F 100%)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.5), 0 0 15px rgba(200,164,93,0.3)',
              }}
            >
              {/* Dashed ornamental ring */}
              <div
                className="flex items-center justify-center rounded-full"
                style={{
                  padding: '2px',
                  border: '1px dashed rgba(101,13,27,0.4)',
                }}
              >
                {/* Inner seal */}
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-full sm:h-16 sm:w-16"
                  style={{
                    background:
                      'radial-gradient(circle at 35% 35%, #D4B06A 0%, #B0883A 60%, #8B6F33 100%)',
                    boxShadow:
                      'inset 0 -4px 10px rgba(0,0,0,0.35), inset 0 3px 8px rgba(255,240,200,0.3)',
                    border: '1.5px solid rgba(224,196,144,0.6)',
                  }}
                >
                  <span className="font-display text-base font-semibold text-royal-deep sm:text-lg">
                    {weddingConfig.initials}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ---- Date below envelope ---- */}
        <div className="mt-6 text-center sm:mt-8">
          <div className="mb-3 flex items-center justify-center gap-2" aria-hidden="true">
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-royal-gold/50 sm:w-16" />
            <div className="h-1.5 w-1.5 rotate-45 bg-royal-gold/70" />
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-royal-gold/50 sm:w-16" />
          </div>
          <p className="font-display text-lg font-medium tracking-wide text-royal-gold sm:text-xl">
            {weddingConfig.weddingDateDisplay}
          </p>
        </div>

        {/* ---- Tap instruction ---- */}
        <div className="mt-8 flex flex-col items-center gap-2 sm:mt-10">
          <div
            className="inline-flex items-center gap-2 rounded-full border border-royal-gold/30 bg-royal-maroon/40 px-5 py-2 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-royal-gold/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-royal-gold" />
            </span>
            <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-royal-gold/80 sm:text-xs">
              Tap the envelope to open your invitation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Decorative screen corner ornament */
function ScreenCorner({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`${className} text-royal-gold/40`}
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 2c16 0 28 12 28 28"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M2 2v18M2 2h18"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <circle cx="2" cy="2" r="2" fill="currentColor" />
      <path
        d="M10 10c8 0 14 6 14 14"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}

/** Small corner medallion for envelope corners */
function CornerMedallion({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`${className} text-royal-gold/50`}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path d="M2 2c6 0 10 4 10 10" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
      <path d="M2 2v6M2 2h6" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
      <circle cx="2" cy="2" r="1.2" fill="currentColor" />
      <path d="M6 6c3 0 5 2 5 5" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

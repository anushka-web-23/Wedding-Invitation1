import { weddingConfig } from '@/wedding.config';

/** Horizontal gold ornament divider with central motif */
export function GoldDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <div className="h-px w-12 bg-gradient-to-r from-transparent to-royal-gold/60 sm:w-20" />
      <svg width="48" height="24" viewBox="0 0 48 24" fill="none" className="text-royal-gold shrink-0">
        <path
          d="M24 2c-3 5-3 15 0 20 3-5 3-15 0-20zM24 22c-5-3-15-3-20 0 5 3 15 3 20 0zM24 22c5-3 15-3 20 0-5 3-15 3-20 0z"
          stroke="currentColor"
          strokeWidth="1"
          fill="currentColor"
          fillOpacity="0.15"
        />
        <circle cx="24" cy="12" r="2.5" fill="currentColor" />
      </svg>
      <div className="h-px w-12 bg-gradient-to-l from-transparent to-royal-gold/60 sm:w-20" />
    </div>
  );
}

/** Small ornamental corner flourish for frames */
export function CornerFlourish({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 2c10 0 18 8 18 18M2 2v12M2 2h12"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <circle cx="2" cy="2" r="1.5" fill="currentColor" />
    </svg>
  );
}

/** Ornamental section heading with decorative flourishes */
export function SectionHeading({
  title,
  subtitle,
  className = '',
}: {
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={`text-center ${className}`}>
      {subtitle && (
        <p className="font-script text-2xl text-royal-gold/80 mb-2 sm:text-3xl">{subtitle}</p>
      )}
      <h2 className="font-display text-3xl font-semibold tracking-wide text-royal-gold sm:text-4xl md:text-5xl">
        {title}
      </h2>
      <GoldDivider className="mt-4" />
    </div>
  );
}

/** Reusable gold-framed image with graceful fallback */
export function GoldFrameImage({
  src,
  alt,
  className = '',
  imgClassName = '',
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden border-2 border-royal-gold/60 shadow-2xl ${className}`}
    >
      <CornerFlourish className="absolute top-0 left-0 z-10 text-royal-gold/70" />
      <CornerFlourish className="absolute top-0 right-0 z-10 rotate-90 text-royal-gold/70" />
      <CornerFlourish className="absolute bottom-0 left-0 z-10 -rotate-90 text-royal-gold/70" />
      <CornerFlourish className="absolute bottom-0 right-0 z-10 rotate-180 text-royal-gold/70" />
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`h-full w-full object-cover ${imgClassName}`}
        onError={(e) => {
          const img = e.currentTarget;
          if (img.src !== fallbackImg) img.src = fallbackImg;
        }}
      />
    </div>
  );
}

const fallbackImg =
  'data:image/svg+xml,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" fill="#3D0914"><rect width="800" height="600" fill="#3D0914"/><text x="400" y="300" font-family="serif" font-size="28" fill="#C8A45D" text-anchor="middle">${weddingConfig.brideName.split(' ')[0]} & ${weddingConfig.groomName.split(' ')[0]}</text></svg>`
  );

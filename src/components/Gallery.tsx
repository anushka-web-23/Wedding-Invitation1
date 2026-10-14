import { useState, useEffect, useCallback } from 'react';
import { weddingConfig } from '@/wedding.config';
import { SectionHeading, CornerFlourish } from './Ornaments';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const images = weddingConfig.galleryImages;

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevImage = useCallback(
    () => setLightboxIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length)),
    [images.length]
  );
  const nextImage = useCallback(
    () => setLightboxIndex((i) => (i === null ? null : (i + 1) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, closeLightbox, prevImage, nextImage]);

  return (
    <section id="gallery" className="relative overflow-hidden bg-royal-burgundy py-20 sm:py-28">
      <div className="mughal-pattern absolute inset-0 opacity-10" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="reveal">
          <SectionHeading title="Cherished Moments" subtitle="Photo Gallery" />
        </div>

        {/* Masonry-style grid */}
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setLightboxIndex(i)}
              className={`reveal group relative overflow-hidden rounded-lg border border-royal-gold/40 shadow-lg transition-all hover:border-royal-gold/70 hover:shadow-xl ${
                i % 5 === 0 ? 'col-span-2 row-span-2' : ''
              }`}
              style={{ transitionDelay: `${(i % 8) * 60}ms` }}
              aria-label={`View image: ${img.alt}`}
            >
              <CornerFlourish className="absolute top-1 left-1 z-10 text-royal-gold/50" />
              <CornerFlourish className="absolute bottom-1 right-1 z-10 rotate-180 text-royal-gold/50" />
              <div className={`overflow-hidden ${i % 5 === 0 ? 'aspect-square' : 'aspect-square'}`}>
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    const img = e.currentTarget;
                    img.src =
                      'data:image/svg+xml,' +
                      encodeURIComponent(
                        `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="#3D0914"><rect width="800" height="800" fill="#3D0914"/><text x="400" y="400" font-family="serif" font-size="24" fill="#C8A45D" text-anchor="middle">Photo</text></svg>`
                      );
                  }}
                />
              </div>
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-royal-maroon/0 transition-colors duration-300 group-hover:bg-royal-maroon/20" />
            </button>
          ))}
        </div>

        <p className="reveal mt-6 text-center font-sans text-xs text-royal-ivory/50">
          Photos shown are placeholders. Replace with your own couple photographs in the configuration.
        </p>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="lightbox-backdrop fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 z-10 text-royal-gold hover:text-royal-ivory transition-colors"
            onClick={closeLightbox}
            aria-label="Close"
          >
            <X size={32} />
          </button>

          <button
            className="absolute left-2 z-10 text-royal-gold hover:text-royal-ivory transition-colors sm:left-6"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            aria-label="Previous image"
          >
            <ChevronLeft size={40} />
          </button>

          <div
            className="relative max-h-[85vh] max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[lightboxIndex].src.replace('w=800', 'w=1400')}
              alt={images[lightboxIndex].alt}
              className="max-h-[85vh] w-auto rounded-lg border-2 border-royal-gold/60 object-contain animate-scale-in"
              onError={(e) => {
                e.currentTarget.src = images[lightboxIndex].src;
              }}
            />
            <p className="mt-3 text-center font-serif text-sm text-royal-ivory/70">
              {images[lightboxIndex].alt}
            </p>
          </div>

          <button
            className="absolute right-2 z-10 text-royal-gold hover:text-royal-ivory transition-colors sm:right-6"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            aria-label="Next image"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </section>
  );
}

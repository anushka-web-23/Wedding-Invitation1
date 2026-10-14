import { weddingConfig } from '@/wedding.config';
import { SectionHeading, GoldDivider } from './Ornaments';
import { MapPin, Navigation, Clock } from 'lucide-react';

export default function Venue() {
  const { venueName, venueAddress, venueMapsLink } = weddingConfig;
  const hasVenue = venueName && venueName.length > 0;
  const hasMapsLink = venueMapsLink && venueMapsLink.length > 0;

  return (
    <section id="venue" className="relative overflow-hidden bg-royal-maroon py-20 sm:py-28">
      <div className="mughal-pattern absolute inset-0 opacity-15" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-4xl px-4">
        <div className="reveal">
          <SectionHeading title={weddingConfig.venueTitle} subtitle="The Venue" />
        </div>

        <div className="reveal-scale mt-12">
          <div className="relative overflow-hidden rounded-xl border-2 border-royal-gold bg-[#F5EBDD] p-8 text-center shadow-2xl sm:p-12">
            {/* Corner flourishes */}
            <div className="absolute top-0 left-0 h-16 w-16 border-l-2 border-t-2 border-royal-gold/50 rounded-tl-xl" />
            <div className="absolute top-0 right-0 h-16 w-16 border-r-2 border-t-2 border-royal-gold/50 rounded-tr-xl" />
            <div className="absolute bottom-0 left-0 h-16 w-16 border-l-2 border-b-2 border-royal-gold/50 rounded-bl-xl" />
            <div className="absolute bottom-0 right-0 h-16 w-16 border-r-2 border-b-2 border-royal-gold/50 rounded-br-xl" />

            <div className="mughal-pattern absolute inset-0 opacity-10" />

            {hasVenue ? (
              <div className="relative space-y-5">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-royal-gold bg-royal-maroon">
                  <MapPin size={28} className="text-royal-gold" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-royal-gold sm:text-3xl">
                  {venueName}
                </h3>
                {venueAddress && (
                  <p className="font-serif text-base text-royal-ivory/85 sm:text-lg">
                    {venueAddress}
                  </p>
                )}
                <div className="flex items-center justify-center gap-2 font-sans text-sm text-royal-ivory/70">
                  <Clock size={16} className="text-royal-gold" />
                  {weddingConfig.weddingDateDisplay} · {weddingConfig.weddingTime}
                </div>
                <GoldDivider className="py-2" />
                {hasMapsLink ? (
                  <a
                    href={venueMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border-2 border-royal-gold bg-royal-gold/10 px-6 py-3 font-sans text-sm uppercase tracking-wider text-royal-gold transition-all hover:bg-royal-gold hover:text-royal-deep"
                  >
                    <Navigation size={16} />
                    Get Directions
                  </a>
                ) : (
                  <p className="font-sans text-xs text-royal-gold/50">
                    Map link will be added once the venue is confirmed.
                  </p>
                )}
              </div>
            ) : (
              <div className="relative space-y-5">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-royal-gold/50 bg-royal-maroon">
                  <MapPin size={28} className="text-royal-gold/60" />
                </div>
                <h3 className="font-display text-xl text-royal-ivory/60 sm:text-2xl">
                  Venue details coming soon
                </h3>
                <p className="font-serif text-sm text-royal-ivory/50">
                  We are finalising the perfect venue for our celebration.
                  Please check back soon for the full address and directions.
                </p>
                <GoldDivider className="py-2" />
                <p className="font-sans text-xs text-royal-gold/50">
                  Update venue name, address, and Google Maps link in the configuration file.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

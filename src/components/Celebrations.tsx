import { weddingConfig, type WeddingEvent } from '@/wedding.config';
import { SectionHeading, GoldFrameImage, CornerFlourish } from './Ornaments';
import { Sun, Hand, Music, Heart } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  sun: Sun,
  hand: Hand,
  music: Music,
  rings: Heart,
};

function formatEventDate(dateStr: string, timeStr: string): string {
  if (!dateStr) return 'Details to be announced';
  const d = new Date(`${dateStr}T00:00:00`);
  const dateDisplay = d.toLocaleDateString('en-US', {
    weekday: 'short',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  if (!timeStr) return dateDisplay;
  const t = new Date(`${dateStr}T${timeStr}:00`);
  const timeDisplay = t.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
  return `${dateDisplay} · ${timeDisplay}`;
}

function EventCard({ event, index }: { event: WeddingEvent; index: number }) {
  const Icon = iconMap[event.icon] ?? Heart;
  const hasVenue = event.venue && event.venue.length > 0;
  const hasSchedule = event.date && event.date.length > 0;

  return (
    <div
      className={`reveal group relative ${
        index % 2 === 0 ? 'reveal-left' : 'reveal-right'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="hover-lift relative overflow-hidden rounded-xl border border-royal-gold/40 bg-royal-burgundy/50 shadow-xl">
        {/* Image */}
        <div className="relative h-52 overflow-hidden sm:h-60">
          <img
            src={event.image}
            alt={event.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            onError={(e) => {
              const img = e.currentTarget;
              img.style.background = '#3D0914';
              img.src =
                'data:image/svg+xml,' +
                encodeURIComponent(
                  `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" fill="#3D0914"><rect width="800" height="500" fill="#3D0914"/><text x="400" y="250" font-family="serif" font-size="28" fill="#C8A45D" text-anchor="middle">${event.title}</text></svg>`
                );
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-royal-burgundy via-royal-burgundy/40 to-transparent" />
          {/* Icon badge */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-royal-gold bg-royal-maroon/80 backdrop-blur-sm">
              <Icon size={20} className="text-royal-gold" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative p-6 text-center">
          <CornerFlourish className="absolute top-2 left-2 text-royal-gold/40" />
          <CornerFlourish className="absolute top-2 right-2 rotate-90 text-royal-gold/40" />
          <CornerFlourish className="absolute bottom-2 left-2 -rotate-90 text-royal-gold/40" />
          <CornerFlourish className="absolute bottom-2 right-2 rotate-180 text-royal-gold/40" />

          <h3 className="font-display text-xl font-semibold text-royal-gold sm:text-2xl">
            {event.title}
          </h3>
          <div className="mx-auto my-3 h-px w-16 bg-gradient-to-r from-transparent via-royal-gold/60 to-transparent" />

          <p className="font-sans text-xs uppercase tracking-wider text-royal-ivory/70">
            {formatEventDate(event.date, event.time)}
          </p>

          {hasVenue ? (
            <p className="mt-2 font-serif text-sm text-royal-ivory/85">
              {event.venue}
              {event.address && <span className="block text-xs text-royal-ivory/60">{event.address}</span>}
            </p>
          ) : (
            <p className="mt-2 font-sans text-xs text-royal-gold/50">Venue details coming soon</p>
          )}

          <p className="mt-4 font-serif text-sm leading-relaxed text-royal-ivory/75">
            {event.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Celebrations() {
  return (
    <section id="events" className="relative overflow-hidden bg-royal-maroon py-20 sm:py-28">
      <div className="mughal-pattern absolute inset-0 opacity-15" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="reveal">
          <SectionHeading
            title="Wedding Celebrations"
            subtitle="Join Us For"
          />
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {weddingConfig.events.map((event, i) => (
            <EventCard key={event.id} event={event} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

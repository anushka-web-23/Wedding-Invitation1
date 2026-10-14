import { useEffect, useState } from 'react';
import { weddingConfig } from '@/wedding.config';
import { GoldDivider } from './Ornaments';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(): TimeLeft {
  // Build the target date in the configured timezone, then compare to now.
  // We create a date string and parse it, then adjust for the timezone offset.
  const { weddingDate, weddingTime, weddingTimezone } = weddingConfig;

  // Construct a local-ish ISO string with the time, then use the timezone
  // to figure out the actual UTC moment.
  const dateTimeStr = `${weddingDate}T${weddingTime}:00`;
  const targetLocal = new Date(dateTimeStr);

  // Get the timezone offset for the configured zone at the target date
  // using Intl.DateTimeFormat to compute the offset.
  try {
    const dtf = new Intl.DateTimeFormat('en-US', {
      timeZone: weddingTimezone,
      timeZoneName: 'shortOffset',
    });
    const parts = dtf.formatToParts(targetLocal);
    const tzPart = parts.find((p) => p.type === 'timeZoneName');
    const offsetMatch = tzPart?.value?.match(/GMT([+-]\d{1,2})(?::(\d{2}))?/);
    if (offsetMatch) {
      const offsetHours = parseInt(offsetMatch[1], 10);
      const offsetMins = offsetMatch[2] ? parseInt(offsetMatch[2], 10) : 0;
      const offsetTotalMinutes = offsetHours * 60 + (offsetHours >= 0 ? offsetMins : -offsetMins);
      // The target as entered is in the configured timezone.
      // UTC = local-as-entered - offset
      const targetUtc = new Date(targetLocal.getTime() - offsetTotalMinutes * 60000);
      const diff = targetUtc.getTime() - Date.now();
      if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
    }
  } catch {
    // Fallback: treat as local time
  }

  // Fallback: treat as local browser time
  const diff = targetLocal.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  const isZero = timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0;

  return (
    <section className="relative overflow-hidden bg-royal-maroon py-20 sm:py-28">
      <div className="mughal-pattern absolute inset-0 opacity-15" aria-hidden="true" />
      <div className="pattern-overlay absolute inset-0" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <div className="reveal">
          <p className="font-script text-2xl text-royal-gold/80 sm:text-3xl">Counting Down To</p>
          <h2 className="mt-1 font-display text-3xl font-semibold text-royal-gold sm:text-4xl">
            {isZero ? 'The Celebration Has Begun!' : 'Our Special Day'}
          </h2>
          <GoldDivider className="mt-4" />
        </div>

        {/* Timer grid */}
        <div className="reveal-scale mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-6">
          {units.map((unit) => (
            <div
              key={unit.label}
              className="group relative rounded-lg border border-royal-gold/40 bg-royal-burgundy/40 p-4 backdrop-blur-sm transition-all hover:border-royal-gold/70 sm:p-6"
            >
              <div className="absolute inset-0 rounded-lg mughal-pattern opacity-10" />
              <div className="relative">
                <div
                  className="font-display text-3xl font-bold text-royal-gold tabular-nums sm:text-5xl md:text-6xl"
                  key={mounted ? `${unit.label}-${unit.value}` : unit.label}
                >
                  {String(unit.value).padStart(2, '0')}
                </div>
                <div className="mt-1 font-sans text-[10px] uppercase tracking-[0.2em] text-royal-ivory/70 sm:text-xs">
                  {unit.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="reveal mt-8 font-serif text-sm text-royal-ivory/60 sm:text-base">
          {weddingConfig.weddingDateDisplay} &middot; {weddingConfig.weddingTime} ({weddingConfig.weddingTimezone})
        </p>
        <p className="mt-1 font-sans text-[10px] text-royal-gold/50">
          Ceremony time shown is a placeholder. Update in wedding.config.ts once confirmed.
        </p>
      </div>
    </section>
  );
}

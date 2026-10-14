```tsx
import { weddingConfig } from '@/wedding.config';
import { SectionHeading, GoldDivider, GoldFrameImage } from './Ornaments';

export default function OurStory() {
  return (
    <section
      id="story"
      className="relative overflow-hidden bg-royal-cream py-20 text-royal-maroon sm:py-28"
    >
      {/* Subtle royal pattern */}
      <div
        className="mughal-pattern pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
      />

      <div className="pointer-events-none absolute left-0 top-0 h-40 w-full bg-gradient-to-b from-royal-gold/10 to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-royal-burgundy/10 to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section heading */}
        <div className="reveal">
          <SectionHeading
            title={weddingConfig.storyTitle}
            subtitle="Our Story"
          />
        </div>

        {/* First story panel */}
        <div className="mt-12 grid items-center gap-8 rounded-2xl border border-royal-gold/40 bg-white/55 p-4 shadow-[0_15px_50px_rgba(61,9,20,0.08)] sm:mt-16 sm:gap-12 sm:p-8 md:grid-cols-2 md:p-10">
          <div className="reveal-left">
            <div className="rounded-xl border border-royal-gold/60 bg-royal-cream-dark/40 p-2 shadow-lg">
              <GoldFrameImage
                src={weddingConfig.storyImage1}
                alt={`${weddingConfig.brideName} and ${weddingConfig.groomName}`}
                className="aspect-[4/5] overflow-hidden rounded-lg"
                imgClassName="transition-transform duration-700 hover:scale-105"
              />
            </div>
            <p className="mt-4 text-center font-script text-2xl text-royal-burgundy sm:text-3xl">
              A beautiful beginning
            </p>
          </div>

          <div className="reveal-right space-y-5 py-3 sm:py-6">
            <p className="font-sans text-xs uppercase tracking-[0.28em] text-royal-gold-dark">
              Two hearts, one journey
            </p>

            <div className="h-px w-20 bg-royal-gold" />

            {weddingConfig.storyParagraphs.map((para, i) => (
              <p
                key={i}
                className="font-serif text-base leading-8 text-royal-maroon/85 sm:text-lg sm:leading-9"
              >
                {para}
              </p>
            ))}

            <GoldDivider className="pt-2" />

            <p className="font-script text-3xl text-royal-burgundy sm:text-4xl">
              Forever &amp; Always
            </p>

            <p className="font-sans text-xs uppercase tracking-[0.18em] text-royal-maroon/65">
              {weddingConfig.brideName} &amp; {weddingConfig.groomName}
            </p>
          </div>
        </div>

        {/* Second story panel */}
        <div className="mt-10 grid items-center gap-8 rounded-2xl border border-royal-gold/40 bg-royal-burgundy p-4 shadow-[0_18px_55px_rgba(61,9,20,0.16)] sm:mt-14 sm:gap-12 sm:p-8 md:grid-cols-2 md:p-10">
          <div className="reveal-right order-2 space-y-5 px-1 py-3 sm:px-4 sm:py-6 md:order-1">
            <p className="font-sans text-xs uppercase tracking-[0.25em] text-royal-gold">
              A promise for forever
            </p>

            <div className="h-px w-20 bg-royal-gold" />

            <p className="font-serif text-base leading-8 text-royal-ivory/90 sm:text-lg sm:leading-9">
              As we embark on this beautiful journey together, we invite you
              to be part of our celebration — a union of two families, two
              hearts, and a lifetime of love and laughter yet to unfold.
            </p>

            <GoldDivider className="pt-2" />

            <p className="font-script text-3xl text-royal-gold sm:text-4xl">
              With love, always
            </p>

            <p className="font-display text-lg text-royal-ivory sm:text-xl">
              — {weddingConfig.brideName} &amp; {weddingConfig.groomName}
            </p>
          </div>

          <div className="reveal-left order-1 md:order-2">
            <div className="rounded-xl border border-royal-gold/60 bg-royal-maroon/50 p-2 shadow-lg">
              <GoldFrameImage
                src={weddingConfig.storyImage2}
                alt={`${weddingConfig.brideName} and ${weddingConfig.groomName}`}
                className="aspect-[4/5] overflow-hidden rounded-lg"
                imgClassName="transition-transform duration-700 hover:scale-105"
              />
            </div>
            <p className="mt-4 text-center font-script text-2xl text-royal-gold sm:text-3xl">
              Together, forever
            </p>
          </div>
        </div>

        {/* Decorative closing detail */}
        <div className="reveal mx-auto mt-14 flex max-w-md items-center justify-center gap-4 sm:mt-16">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-royal-gold" />
          <span className="font-script text-2xl text-royal-burgundy">
            S &amp; T
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-royal-gold" />
        </div>
      </div>
    </section>
  );
}
```

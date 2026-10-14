import { weddingConfig } from '@/wedding.config';
import { SectionHeading, GoldDivider, GoldFrameImage } from './Ornaments';

export default function OurStory() {
  return (
    <section id="story" className="relative overflow-hidden bg-gradient-to-b from-royal-burgundy via-royal-maroon to-royal-burgundy py-20 sm:py-28">
      <div className="mughal-pattern absolute inset-0 opacity-10" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-5xl px-4">
        <div className="reveal">
          <SectionHeading title={weddingConfig.storyTitle} subtitle="Our Story" />
        </div>

        <div className="mt-12 grid items-center gap-8 md:grid-cols-2 md:gap-12">
          {/* Left image */}
          <div className="reveal-left">
            <GoldFrameImage
              src={weddingConfig.storyImage1}
              alt="Srashti and Tanmay — photo placeholder"
              className="aspect-[4/5] rounded-lg"
              imgClassName="transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Text */}
          <div className="reveal-right space-y-5">
            {weddingConfig.storyParagraphs.map((para, i) => (
              <p
                key={i}
                className="font-serif text-base leading-relaxed text-royal-ivory/85 sm:text-lg"
              >
                {para}
              </p>
            ))}
            <GoldDivider className="pt-2" />
            <p className="font-script text-2xl text-royal-gold sm:text-3xl">
              Forever &amp; Always
            </p>
          </div>
        </div>

        {/* Second image — offset for visual interest */}
        <div className="mt-12 grid items-center gap-8 md:grid-cols-2 md:gap-12">
          <div className="reveal-right order-1 space-y-5 md:order-none">
            <GoldDivider className="pb-2" />
            <p className="font-serif text-base leading-relaxed text-royal-ivory/85 sm:text-lg">
              As we embark on this beautiful journey together, we invite you to be part of our
              celebration — a union of two families, two hearts, and a lifetime of love and
              laughter yet to unfold.
            </p>
            <p className="font-display text-xl text-royal-gold sm:text-2xl">
              — Srashti &amp; Tanmay
            </p>
          </div>

          <div className="reveal-left order-2 md:order-none">
            <GoldFrameImage
              src={weddingConfig.storyImage2}
              alt="Srashti and Tanmay — photo placeholder"
              className="aspect-[4/5] rounded-lg"
              imgClassName="transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

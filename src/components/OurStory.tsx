
import { weddingConfig } from '@/wedding.config';
import { SectionHeading, GoldDivider, GoldFrameImage } from './Ornaments';

export default function OurStory() {
  return (
    <section
      id="story"
      className="relative overflow-hidden bg-royal-burgundy py-20 sm:py-28"
    >
      <div
        className="mughal-pattern absolute inset-0 opacity-10"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-5xl px-4">
        <div className="reveal">
          <SectionHeading
            title={weddingConfig.storyTitle}
            subtitle="Our Story"
          />
        </div>

        <div className="mt-12 grid items-center gap-8 md:grid-cols-2 md:gap-12">
          {/* Story image */}
          <div className="reveal-left">
            <GoldFrameImage
              src={weddingConfig.storyImage1}
              alt="Wedding story photo"
              className="aspect-[4/5] rounded-lg"
              imgClassName="transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Single cream story card */}
          <div className="reveal-right space-y-5 rounded-2xl border border-royal-gold/60 bg-[#F5EBDD] p-6 shadow-xl sm:p-8">
            {weddingConfig.storyParagraphs.map((para, i) => (
              <p
                key={i}
                className="font-serif text-base leading-relaxed text-royal-maroon sm:text-lg"
              >
                {para}
              </p>
            ))}

            <GoldDivider className="pt-2" />

            <p className="font-script text-2xl text-royal-maroon sm:text-3xl">
              Forever &amp; Always
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

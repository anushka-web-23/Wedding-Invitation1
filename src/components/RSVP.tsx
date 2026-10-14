import { useState } from 'react';
import { weddingConfig } from '@/wedding.config';
import { SectionHeading, GoldDivider, CornerFlourish } from './Ornaments';
import { MessageCircle, Heart, Check, Send, User } from 'lucide-react';

export default function RSVP() {
  const { whatsappNumber, whatsappMessage } = weddingConfig;
  const hasNumber = whatsappNumber && whatsappNumber.length > 0;

  const [name, setName] = useState('');
  const [guests, setGuests] = useState('1');
  const [attending, setAttending] = useState<'yes' | 'no' | ''>('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const whatsappUrl = hasNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
    : '';

  const composeWhatsAppMessage = () => {
    const text = `Namaste! Here is my RSVP for Srashti & Tanmay's wedding on 30 November 2026:\n\nName: ${name}\nNumber of guests: ${guests}\nAttending: ${attending === 'yes' ? 'Yes' : 'No'}\nMessage: ${message || '—'}`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !attending) return;
    if (hasNumber) {
      window.open(composeWhatsAppMessage(), '_blank', 'noopener,noreferrer');
    }
    setSubmitted(true);
  };

  const isFormValid = name.trim() && attending;

  return (
    <section id="rsvp" className="relative overflow-hidden bg-royal-burgundy py-20 sm:py-28">
      <div className="mughal-pattern absolute inset-0 opacity-10" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-3xl px-4">
        <div className="reveal">
          <SectionHeading title="RSVP" subtitle="Will You Join Us?" />
        </div>

        <div className="reveal-scale mt-10">
          <div className="relative overflow-hidden rounded-xl border-2 border-royal-gold/50 bg-royal-maroon/60 p-8 shadow-2xl sm:p-12">
            <CornerFlourish className="absolute top-2 left-2 text-royal-gold/50" />
            <CornerFlourish className="absolute top-2 right-2 rotate-90 text-royal-gold/50" />
            <CornerFlourish className="absolute bottom-2 left-2 -rotate-90 text-royal-gold/50" />
            <CornerFlourish className="absolute bottom-2 right-2 rotate-180 text-royal-gold/50" />

            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-royal-gold bg-royal-burgundy">
              <Heart size={24} className="text-royal-gold" />
            </div>

            <p className="text-center font-display text-xl font-medium text-royal-ivory sm:text-2xl">
              {weddingConfig.rsvpHeading}
            </p>
            <p className="mt-3 text-center font-serif text-base text-royal-ivory/70 sm:text-lg">
              {weddingConfig.rsvpSubtext}
            </p>

            <GoldDivider className="my-6" />

            {submitted ? (
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-royal-gold bg-royal-burgundy">
                  <Check size={28} className="text-royal-gold" />
                </div>
                <p className="font-display text-xl text-royal-gold sm:text-2xl">
                  Thank you, {name.split(' ')[0]}!
                </p>
                <p className="mt-2 font-serif text-sm text-royal-ivory/70">
                  {attending === 'yes'
                    ? 'We are delighted that you will be joining us. We look forward to celebrating together.'
                    : 'We will miss your presence, but thank you for letting us know.'}
                </p>
                {hasNumber && (
                  <p className="mt-3 font-sans text-xs text-royal-gold/60">
                    A WhatsApp message has been prepared for you to send and confirm your RSVP.
                  </p>
                )}
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setName('');
                    setGuests('1');
                    setAttending('');
                    setMessage('');
                  }}
                  className="mt-5 font-sans text-xs uppercase tracking-wider text-royal-gold/70 underline-offset-4 hover:underline"
                >
                  Submit another response
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-5">
                {/* Guest name */}
                <div>
                  <label
                    htmlFor="rsvp-name"
                    className="mb-2 block text-left font-sans text-xs uppercase tracking-wider text-royal-gold/80"
                  >
                    Your Name
                  </label>
                  <div className="relative">
                    <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-royal-gold/60" />
                    <input
                      id="rsvp-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your full name"
                      className="w-full rounded-lg border border-royal-gold/40 bg-royal-burgundy/50 py-3 pl-10 pr-4 font-serif text-base text-royal-ivory placeholder:text-royal-ivory/40 focus:border-royal-gold focus:outline-none focus:ring-1 focus:ring-royal-gold/50"
                    />
                  </div>
                </div>

                {/* Number of guests */}
                <div>
                  <label
                    htmlFor="rsvp-guests"
                    className="mb-2 block text-left font-sans text-xs uppercase tracking-wider text-royal-gold/80"
                  >
                    Number of Guests
                  </label>
                  <select
                    id="rsvp-guests"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full rounded-lg border border-royal-gold/40 bg-royal-burgundy/50 py-3 px-4 font-serif text-base text-royal-ivory focus:border-royal-gold focus:outline-none focus:ring-1 focus:ring-royal-gold/50"
                  >
                    {['1', '2', '3', '4', '5', '6'].map((n) => (
                      <option key={n} value={n} className="bg-royal-maroon text-royal-ivory">
                        {n} {n === '1' ? 'guest' : 'guests'}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Attending choice */}
                <div>
                  <p className="mb-2 text-left font-sans text-xs uppercase tracking-wider text-royal-gold/80">
                    Will you be attending?
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setAttending('yes')}
                      className={`rounded-lg border-2 py-3 font-sans text-sm uppercase tracking-wider transition-all ${
                        attending === 'yes'
                          ? 'border-royal-gold bg-royal-gold/20 text-royal-gold'
                          : 'border-royal-gold/30 bg-royal-burgundy/30 text-royal-ivory/60 hover:border-royal-gold/50'
                      }`}
                    >
                      Joyfully Accept
                    </button>
                    <button
                      type="button"
                      onClick={() => setAttending('no')}
                      className={`rounded-lg border-2 py-3 font-sans text-sm uppercase tracking-wider transition-all ${
                        attending === 'no'
                          ? 'border-royal-gold bg-royal-gold/20 text-royal-gold'
                          : 'border-royal-gold/30 bg-royal-burgundy/30 text-royal-ivory/60 hover:border-royal-gold/50'
                      }`}
                    >
                      Regretfully Decline
                    </button>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="rsvp-message"
                    className="mb-2 block text-left font-sans text-xs uppercase tracking-wider text-royal-gold/80"
                  >
                    Message for the Couple <span className="text-royal-ivory/40">(optional)</span>
                  </label>
                  <textarea
                    id="rsvp-message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={3}
                    placeholder="Share your wishes or a note for Srashti & Tanmay..."
                    className="w-full resize-none rounded-lg border border-royal-gold/40 bg-royal-burgundy/50 py-3 px-4 font-serif text-base text-royal-ivory placeholder:text-royal-ivory/40 focus:border-royal-gold focus:outline-none focus:ring-1 focus:ring-royal-gold/50"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={!isFormValid}
                  className="flex w-full items-center justify-center gap-2 rounded-lg border-2 border-royal-gold bg-royal-gold/10 py-4 font-sans text-sm uppercase tracking-wider text-royal-gold transition-all hover:bg-royal-gold hover:text-royal-deep disabled:cursor-not-allowed disabled:opacity-40 sm:text-base"
                >
                  <Send size={18} />
                  {hasNumber ? 'Send RSVP via WhatsApp' : 'Submit RSVP'}
                </button>

                {/* Honest limitation notice */}
                <p className="text-center font-sans text-[11px] leading-relaxed text-royal-gold/50">
                  {hasNumber
                    ? 'Submitting will open WhatsApp with your RSVP details pre-filled. Please send the message to complete your response. No data is stored on this website.'
                    : 'This form confirms your response on screen only. To collect responses, add a WhatsApp number in the configuration file — no data is stored on this website.'}
                </p>

                {/* Direct WhatsApp link if number exists */}
                {hasNumber && (
                  <div className="border-t border-royal-gold/20 pt-4 text-center">
                    <p className="mb-2 font-sans text-xs text-royal-ivory/50">Or send a direct message</p>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-wider text-royal-gold/70 transition-colors hover:text-royal-gold"
                    >
                      <MessageCircle size={16} />
                      Open WhatsApp Chat
                    </a>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

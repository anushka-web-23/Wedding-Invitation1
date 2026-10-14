import { weddingConfig } from '@/wedding.config';
import { GoldDivider } from './Ornaments';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-royal-deep py-12">
      <div className="mughal-pattern absolute inset-0 opacity-15" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
        <p className="font-script text-2xl text-royal-gold sm:text-3xl">
          {weddingConfig.brideName.split(' ')[0]} &amp; {weddingConfig.groomName.split(' ')[0]}
        </p>
        <GoldDivider className="my-4" />
        <p className="font-serif text-sm text-royal-ivory/70">
          {weddingConfig.weddingDateDisplay}
        </p>
        <p className="mt-4 flex items-center justify-center gap-1.5 font-sans text-xs text-royal-ivory/50">
          Made with <Heart size={12} className="fill-royal-gold text-royal-gold" /> for our families &amp; friends
        </p>
      </div>
    </footer>
  );
}

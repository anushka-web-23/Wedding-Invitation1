import { useEffect, useRef, useState } from 'react';
import { weddingConfig } from '@/wedding.config';
import { Play, Pause, Volume2, VolumeX, Music } from 'lucide-react';

/**
 * Background music player.
 * Music is DISABLED (controls show disabled state) until a licensed
 * audio file path is set in wedding.config.ts and the visitor interacts.
 * Autoplay is never used — playback starts only on user click.
 */
export default function MusicPlayer() {
  const { musicSrc } = weddingConfig;
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasError, setHasError] = useState(false);

  const musicEnabled = musicSrc && musicSrc.length > 0;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !musicEnabled) return;

    const onEnded = () => setIsPlaying(false);
    const onError = () => {
      setHasError(true);
      setIsPlaying(false);
    };
    audio.addEventListener('ended', onEnded);
    audio.addEventListener('error', onError);
    audio.loop = true;
    return () => {
      audio.removeEventListener('ended', onEnded);
      audio.removeEventListener('error', onError);
    };
  }, [musicEnabled]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio || !musicEnabled || hasError) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => setIsPlaying(true)).catch(() => setHasError(true));
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio || !musicEnabled) return;
    audio.muted = !audio.muted;
    setIsMuted(audio.muted);
  };

  if (!musicEnabled) return null;

  return (
    <div className="fixed bottom-4 right-4 z-40 flex items-center gap-2 rounded-full border border-royal-gold/40 bg-royal-maroon/90 px-3 py-2 backdrop-blur-md shadow-lg">
      {musicEnabled && <audio ref={audioRef} src={musicSrc} preload="none" />}

      <button
        onClick={togglePlay}
        disabled={hasError}
        className="flex h-9 w-9 items-center justify-center rounded-full text-royal-gold transition-colors hover:bg-royal-gold/20 disabled:opacity-40"
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? <Pause size={18} /> : <Play size={18} />}
      </button>

      <button
        onClick={toggleMute}
        disabled={hasError || !isPlaying}
        className="flex h-9 w-9 items-center justify-center rounded-full text-royal-gold transition-colors hover:bg-royal-gold/20 disabled:opacity-40"
        aria-label={isMuted ? 'Unmute music' : 'Mute music'}
      >
        {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
      </button>

      <div className="flex items-center gap-1.5 pr-1">
        <Music size={14} className={`text-royal-gold ${isPlaying ? 'animate-pulse' : ''}`} />
        <span className="hidden font-sans text-[10px] uppercase tracking-wider text-royal-ivory/70 sm:inline">
          {hasError ? 'Unavailable' : isPlaying ? 'Playing' : 'Play Music'}
        </span>
      </div>
    </div>
  );
}

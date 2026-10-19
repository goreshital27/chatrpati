import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export const AudioController: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);
  const lfoRef = useRef<OscillatorNode | null>(null);

  const initAudio = () => {
    if (audioCtxRef.current) return;

    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.0001, ctx.currentTime);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Traditional Indian drone chords (Sa - Pa - Sa' fundamental frequencies: C# / D# ~ 138.59Hz, 207.65Hz, 277.18Hz)
      const droneFreqs = [138.59, 207.65, 277.18, 415.30];

      // Subtle LFO for breathing drone feel
      const lfo = ctx.createOscillator();
      const lfoGain = ctx.createGain();
      lfo.frequency.setValueAtTime(0.2, ctx.currentTime);
      lfoGain.gain.setValueAtTime(1.5, ctx.currentTime);
      lfo.connect(lfoGain);
      lfoRef.current = lfo;

      const oscs: OscillatorNode[] = [];

      droneFreqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();

        // Warm sawtooth & triangle for authentic tambura/horn harmonics
        osc.type = idx % 2 === 0 ? 'triangle' : 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        // Detune slightly for lush warmth
        osc.detune.setValueAtTime((idx - 1.5) * 4, ctx.currentTime);

        // Filter for deep woody warmth
        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(800 + idx * 100, ctx.currentTime);

        oscGain.gain.setValueAtTime(0.04 / (idx + 1), ctx.currentTime);

        lfoGain.connect(osc.detune);

        osc.connect(filter);
        filter.connect(oscGain);
        oscGain.connect(masterGain);

        osc.start();
        oscs.push(osc);
      });

      lfo.start();
      oscillatorsRef.current = oscs;
    } catch {
      // AudioContext fallback if disabled by browser policy
    }
  };

  const toggleSound = () => {
    if (!audioCtxRef.current) {
      initAudio();
    }

    if (!audioCtxRef.current || !gainNodeRef.current) return;

    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }

    const ctx = audioCtxRef.current;
    const gain = gainNodeRef.current;

    if (isPlaying) {
      // Smooth fade out
      gain.gain.linearRampToValueAtTime(0.0001, ctx.currentTime + 0.6);
      setIsPlaying(false);
    } else {
      // Smooth fade in
      gain.gain.linearRampToValueAtTime(0.22, ctx.currentTime + 1.2);
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    return () => {
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
      }
    };
  }, []);

  return (
    <button
      onClick={toggleSound}
      aria-label={isPlaying ? 'Mute ambient tutari drone' : 'Play ambient tutari drone'}
      title={isPlaying ? 'Mute Tutari / Drone' : 'Unmute Traditional Ambience'}
      className={`relative group flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 border ${
        isPlaying
          ? 'bg-saffron/20 border-saffron text-saffron shadow-saffron-glow'
          : 'bg-[#1A1613]/80 border-gold/40 text-ivory/70 hover:border-gold hover:text-gold'
      }`}
    >
      {isPlaying ? (
        <>
          <Volume2 className="w-4 h-4 text-saffron animate-pulse" />
          <span className="hidden sm:inline font-mukta">तुतारी धून ON</span>
        </>
      ) : (
        <>
          <VolumeX className="w-4 h-4 text-ivory/60 group-hover:text-gold" />
          <span className="hidden sm:inline font-mukta">AUDIO</span>
        </>
      )}
      <Music className="w-3 h-3 opacity-60 group-hover:opacity-100" />
    </button>
  );
};


import React, { useMemo } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

export interface AnimatedTextProps {
  text: string;
  lang?: 'mr' | 'en';
  as?: React.ElementType;
  className?: string;
  wordClassName?: string;
  delay?: number; // Base start delay in seconds
  stagger?: number; // Stagger delay between items in seconds
  mobileStackWords?: boolean; // If true, stacks each word as separate line on mobile (block sm:inline-block)
  style?: React.CSSProperties;
}

/**
 * AnimatedText
 *
 * Rules:
 * 1. NEVER split Devanagari text by character or code unit.
 * 2. For Marathi (lang="mr"), strictly WORD-LEVEL REVEAL (fade + rise + slight blur-out).
 * 3. Each word wrapped in inline-block with white-space: nowrap.
 * 4. For English only, grapheme splitting using Intl.Segmenter is supported.
 * 5. Word spans inherit background-clip gradient from parent heading to avoid breaking shaping runs.
 */
export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  lang: propLang,
  as: Component = 'span',
  className = '',
  wordClassName = '',
  delay = 0,
  stagger = 0.12,
  mobileStackWords = false,
  style,
}) => {
  const { language } = useLanguage();
  const activeLang = propLang || language || 'mr';
  const isMarathi = activeLang === 'mr';

  // 1. Always split on spaces into whole words
  const words = useMemo(() => {
    if (!text) return [];
    return text.trim().split(/\s+/);
  }, [text]);

  // 2. Prepare segments according to language rules
  const segments = useMemo(() => {
    if (isMarathi) {
      // Word-level reveal ONLY for Marathi
      return words.map((word, wordIndex) => ({
        type: 'word' as const,
        word,
        wordIndex,
        key: `mr-word-${wordIndex}-${word}`,
        delay: delay + wordIndex * stagger,
      }));
    }

    // English: Grapheme-level reveal using Intl.Segmenter
    let globalGraphemeIndex = 0;
    return words.map((word, wordIndex) => {
      let graphemes: string[] = [];
      if (typeof Intl !== 'undefined' && 'Segmenter' in Intl) {
        const segmenter = new (Intl as any).Segmenter('en', { granularity: 'grapheme' });
        graphemes = Array.from(segmenter.segment(word), (s: any) => s.segment);
      } else {
        // Safe Unicode array spread fallback
        graphemes = [...word];
      }

      const items = graphemes.map((grapheme) => {
        const item = {
          type: 'grapheme' as const,
          grapheme,
          delay: delay + globalGraphemeIndex * (stagger * 0.35),
          key: `en-grapheme-${globalGraphemeIndex}-${grapheme}`,
        };
        globalGraphemeIndex++;
        return item;
      });

      return {
        type: 'english-word' as const,
        word,
        wordIndex,
        items,
      };
    });
  }, [words, isMarathi, delay, stagger]);

  return (
    <Component
      lang={activeLang}
      className={`${className} ${isMarathi ? 'devanagari-text' : ''}`}
      style={style}
    >
      {isMarathi ? (
        segments.map((seg: any, idx) => (
          <React.Fragment key={seg.key}>
            <span
              className={`inline-block whitespace-nowrap animate-word-reveal [background:inherit] [-webkit-background-clip:text] [background-clip:text] [-webkit-text-fill-color:transparent] ${
                mobileStackWords ? 'block sm:inline-block' : ''
              } ${wordClassName}`}
              style={{
                animationDelay: `${seg.delay}s`,
                letterSpacing: 0,
                textTransform: 'none',
              }}
            >
              {seg.word}
            </span>
            {/* Spacing between words on desktop */}
            {idx < segments.length - 1 && (
              <span className={mobileStackWords ? 'hidden sm:inline' : 'inline'}>
                {' '}
              </span>
            )}
          </React.Fragment>
        ))
      ) : (
        segments.map((seg: any, idx) => (
          <React.Fragment key={`en-word-${idx}`}>
            <span
              className={`inline-block whitespace-nowrap [background:inherit] [-webkit-background-clip:text] [background-clip:text] [-webkit-text-fill-color:transparent] ${
                mobileStackWords ? 'block sm:inline-block' : ''
              } ${wordClassName}`}
            >
              {seg.items.map((item: any) => (
                <span
                  key={item.key}
                  className="inline-block animate-grapheme-reveal [background:inherit] [-webkit-background-clip:text] [background-clip:text] [-webkit-text-fill-color:transparent]"
                  style={{ animationDelay: `${item.delay}s` }}
                >
                  {item.grapheme}
                </span>
              ))}
            </span>
            {idx < segments.length - 1 && (
              <span className={mobileStackWords ? 'hidden sm:inline' : 'inline'}>
                {' '}
              </span>
            )}
          </React.Fragment>
        ))
      )}
    </Component>
  );
};

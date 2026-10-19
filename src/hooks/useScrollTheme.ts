import { useEffect, useState } from 'react';

interface SectionColor {
  id: string;
  bgColor: string;
  accent: string;
}

const SECTION_THEMES: SectionColor[] = [
  { id: 'hero', bgColor: '#1A0F0A', accent: '#FF9933' },
  { id: 'itahas', bgColor: '#1A0F0A', accent: '#D4AF37' },
  { id: 'gadkille', bgColor: '#140C08', accent: '#D4AF37' },
  { id: 'mavle', bgColor: '#2E0606', accent: '#8B1A1A' },
  { id: 'ashtapradhan', bgColor: '#140A26', accent: '#9370DB' },
  { id: 'achievements', bgColor: '#0D0A08', accent: '#D4AF37' },
  { id: 'navy', bgColor: '#081726', accent: '#38BDF8' },
  { id: 'quotes', bgColor: '#170E0B', accent: '#FF9933' },
  { id: 'swarajya', bgColor: '#3D0A0A', accent: '#E2552B' },
];

export function useScrollTheme() {
  const [currentTheme, setCurrentTheme] = useState<SectionColor>(SECTION_THEMES[0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.35;

      for (let i = SECTION_THEMES.length - 1; i >= 0; i--) {
        const theme = SECTION_THEMES[i];
        const el = document.getElementById(theme.id);
        if (el && el.offsetTop <= scrollPos) {
          setCurrentTheme(theme);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return currentTheme;
}


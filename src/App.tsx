import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { LanguageProvider } from './i18n/LanguageContext';
import { Navbar } from './components/Navbar';
import { CustomCursor } from './components/CustomCursor';
import { Preloader } from './components/Preloader';
import { HomePage } from './pages/HomePage';
import { FortsPage } from './pages/FortsPage';
import { AshtapradhanPage } from './pages/AshtapradhanPage';
import { TimelinePage } from './pages/TimelinePage';
import { useScrollTheme } from './hooks/useScrollTheme';
import { useReducedMotion } from './hooks/useReducedMotion';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const AppContent: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const theme = useScrollTheme();
  const prefersReducedMotion = useReducedMotion();

  // Initialize Lenis smooth scroll
  useEffect(() => {
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let animationFrameId: number;
    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, [prefersReducedMotion]);

  return (
    <div
      style={{
        backgroundColor: theme.bgColor,
        transition: 'background-color 0.8s ease-out',
      }}
      className="min-h-screen text-[#F5ECD7] overflow-x-hidden selection:bg-[#FF9933] selection:text-[#0D0A08]"
    >
      {/* Rajmudra SVG Preloader on initial load */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Custom Sword / Arrowhead Cursor */}
      <CustomCursor />

      {/* Floating Pill Metallic Navbar */}
      <Navbar />

      <ScrollToTop />

      {/* Page Routing */}
      <main id="main-content" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/forts" element={<FortsPage />} />
          <Route path="/ashtapradhan" element={<AshtapradhanPage />} />
          <Route path="/timeline" element={<TimelinePage />} />
        </Routes>
      </main>
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </LanguageProvider>
  );
};

export default App;


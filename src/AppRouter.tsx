import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import App from './App';
import { BridgingTheGaps } from './pages/BridgingTheGaps';
import { SustainabilityTool } from './pages/SustainabilityTool';
import { Saathi } from './pages/Saathi';
import { RedesigningZodiac } from './pages/RedesigningZodiac';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // If there's a hash, scroll to that element
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Otherwise scroll to top
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export function AppRouter() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/case-study/bridging-the-gaps" element={<BridgingTheGaps />} />
        <Route path="/case-study/sustainability-tool" element={<SustainabilityTool />} />
        <Route path="/case-study/saathi" element={<Saathi />} />
        <Route path="/case-study/redesigning-zodiac" element={<RedesigningZodiac />} />
      </Routes>
    </Router>
  );
}

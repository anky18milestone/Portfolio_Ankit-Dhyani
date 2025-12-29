import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BridgingTheGaps } from './pages/BridgingTheGaps';
import { SustainabilityTool } from './pages/SustainabilityTool';
import { Saathi } from './pages/Saathi';
import { RedesigningZodiac } from './pages/RedesigningZodiac';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function HomePage() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'work', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-neutral-50 text-neutral-900">
      <Navigation activeSection={activeSection} />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/case-study/bridging-the-gaps" element={<BridgingTheGaps />} />
        <Route path="/case-study/sustainability-tool" element={<SustainabilityTool />} />
        <Route path="/case-study/saathi" element={<Saathi />} />
        <Route path="/case-study/redesigning-zodiac" element={<RedesigningZodiac />} />
      </Routes>
    </Router>
  );
}
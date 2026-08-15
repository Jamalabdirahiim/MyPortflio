import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Engineering from './components/Engineering';
import TechStack from './components/TechStack';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetail from './pages/ProjectDetail';
import CustomCursor from './components/CustomCursor';

/* ── Home page ─────────────────────────────────────────────── */
const HomePage: React.FC = () => (
  <main>
    <Hero />
    <Projects />
    <Engineering />
    <TechStack />
    <About />
    <Contact />
  </main>
);

/* ── Scroll to top on route change ─────────────────────────── */
const ScrollReset: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

/* ── App ────────────────────────────────────────────────────── */
const App: React.FC = () => (
  <>
    <CustomCursor />
    <ScrollReset />
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/project/:slug" element={<ProjectDetail />} />
    </Routes>
    <Footer />
  </>
);

export default App;

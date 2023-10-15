import Head from 'next/head';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import SkillSection from './components/SkillSection';
import ProjectSection from './components/ProjectSection';
import AboutSection from './components/AboutSection';
import ScrollToTopButton from './components/ScrollToTopButton';

export default function Home() {
  return (
    <div>
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <SkillSection />
        <ProjectSection />
        <ScrollToTopButton/>
      </main>

      <Footer />
    </div>
  );
}
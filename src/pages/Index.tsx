import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TechMarquee from '@/components/TechMarquee';
import Services from '@/components/Services';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Process from '@/components/Process';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/fx/ScrollProgress';

const Index = () => (
  <LanguageProvider>
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <TechMarquee />
        <Services />
        <About />
        <Portfolio />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  </LanguageProvider>
);
export default Index;

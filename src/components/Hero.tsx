import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const { language, t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero">
        <img
          src={heroImage}
          alt="Hero Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full mb-8 border border-primary/20">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm">{t('hero.title')}</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">{t('hero.subtitle')}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-3xl mx-auto">
            {t('hero.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={() => scrollToSection('services')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg group"
            >
              {t('hero.cta1')}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('portfolio')}
              className="px-8 py-6 text-lg border-primary/50 hover:bg-primary/10"
            >
              {t('hero.cta2')}
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 animate-slide-up">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">10+</div>
            <div className="text-foreground/60">{language === 'fr' ? 'Ans d\'expérience' : 'Years of experience'}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">50+</div>
            <div className="text-foreground/60">{language === 'fr' ? 'Projets réalisés' : 'Projects completed'}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">30+</div>
            <div className="text-foreground/60">{language === 'fr' ? 'Clients satisfaits' : 'Happy clients'}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">98%</div>
            <div className="text-foreground/60">{language === 'fr' ? 'Satisfaction client' : 'Client satisfaction'}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

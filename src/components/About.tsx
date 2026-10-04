import { motion } from 'framer-motion';
import { Target, Eye, Award, Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import SectionTitle from './fx/SectionTitle';
import Counter from './fx/Counter';
import Spot from './fx/Spot';

const About = () => {
  const { t, language } = useLanguage();
  const fr = language === 'fr';
  const stats = [
    { n: 10, suffix: '+', label: fr ? 'ans d’expérience' : 'years of experience' },
    { n: 7, suffix: '', label: fr ? 'produits en production' : 'products in production' },
    { n: 3, suffix: '', label: fr ? 'plateformes : web, mobile, desktop' : 'platforms: web, mobile, desktop' },
  ];
  const cards = [
    { k: 'mission', icon: Target }, { k: 'vision', icon: Eye }, { k: 'expertise', icon: Award }, { k: 'values', icon: Heart },
  ];

  return (
    <section id="about" className="section-padding bg-card/30 border-y border-border">
      <div className="container-custom">
        <SectionTitle title={t('about.title')} />
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16">
          <div className="flex lg:flex-col gap-8 lg:gap-10 justify-between lg:justify-start flex-wrap">
            {stats.map((s) => (
              <div key={s.label} className="border-l-2 border-primary/60 pl-5">
                <div className="font-display text-6xl md:text-7xl font-bold gradient-text"><Counter to={s.n} suffix={s.suffix} /></div>
                <div className="text-muted-foreground mt-1 max-w-[14rem]">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {cards.map((c, i) => (
              <motion.div key={c.k} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ delay: i * 0.1, duration: 0.6 }}>
                <Spot className="h-full rounded-2xl border border-border bg-background/60 p-7">
                  <c.icon className="w-7 h-7 text-secondary mb-5" strokeWidth={1.5} />
                  <h3 className="text-xl font-semibold mb-2">{t(`about.${c.k}.title`)}</h3>
                  <p className="text-muted-foreground leading-relaxed text-[15px]">{t(`about.${c.k}.desc`)}</p>
                </Spot>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;

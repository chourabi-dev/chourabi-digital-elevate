import { motion } from 'framer-motion';
import { Globe, Smartphone, Monitor, Lightbulb, Plug, Wrench, Cloud, Palette } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import SectionTitle from './fx/SectionTitle';
import Spot from './fx/Spot';

const Services = () => {
  const { t } = useLanguage();
  const items = [
    { k: 'web', icon: Globe, span: 'lg:col-span-2' },
    { k: 'mobile', icon: Smartphone, span: '' },
    { k: 'desktop', icon: Monitor, span: '' },
    { k: 'consulting', icon: Lightbulb, span: '' },
    { k: 'api', icon: Plug, span: '' },
    { k: 'custom', icon: Wrench, span: 'lg:col-span-2' },
    { k: 'hosting', icon: Cloud, span: 'lg:col-span-2' },
    { k: 'design', icon: Palette, span: 'lg:col-span-2' },
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        <SectionTitle title={t('services.title')} subtitle={t('services.subtitle')} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((s, i) => (
            <motion.div key={s.k} className={s.span} initial={{ opacity: 0, y: 30, scale: 0.97 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, margin: '-40px' }} transition={{ delay: (i % 4) * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
              <Spot className="group h-full rounded-2xl border border-border bg-card/60 p-7 md:p-8 min-h-[200px] flex flex-col justify-between overflow-hidden">
                <s.icon className="w-9 h-9 text-primary transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110" strokeWidth={1.5} />
                <div className="mt-10">
                  <h3 className="text-xl md:text-2xl font-semibold mb-2">{t(`services.${s.k}.title`)}</h3>
                  <p className="text-muted-foreground leading-relaxed text-[15px]">{t(`services.${s.k}.desc`)}</p>
                </div>
              </Spot>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;

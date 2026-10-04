import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import SectionTitle from './fx/SectionTitle';

const Process = () => {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 60%'] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 30 });
  const steps = [1, 2, 3, 4, 5, 6];

  return (
    <section id="process" className="section-padding bg-card/30 border-y border-border">
      <div className="container-custom">
        <SectionTitle title={t('process.title')} subtitle={t('process.subtitle')} />
        <div ref={ref} className="relative max-w-3xl">
          <div className="absolute left-[23px] top-2 bottom-2 w-px bg-border" />
          <motion.div style={{ scaleY }} className="absolute left-[23px] top-2 bottom-2 w-px origin-top bg-gradient-to-b from-primary to-secondary shadow-[0_0_12px_hsl(var(--primary))]" />
          <ol className="space-y-12">
            {steps.map((n) => (
              <motion.li key={n} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-20% 0px -20% 0px' }} transition={{ duration: 0.6 }} className="relative pl-20">
                <span className="absolute left-0 top-0 grid place-items-center w-12 h-12 rounded-full border border-primary/50 bg-background font-mono text-primary">{n}</span>
                <h3 className="text-2xl font-semibold">{t(`process.step${n}.title`)}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed max-w-xl">{t(`process.step${n}.desc`)}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};
export default Process;

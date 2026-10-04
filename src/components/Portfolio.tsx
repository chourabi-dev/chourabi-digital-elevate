import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import SectionTitle from './fx/SectionTitle';
import eventoo from '@/assets/eventoo.png';
import eventoo2 from '@/assets/eventoo-v2.png';
import eventooMobile from '@/assets/eventoo-mobile-app.png';
import droplinkiLogo from '@/assets/droplinki.png';
import optypro from '@/assets/optypro.png';
import darelhenchir from '@/assets/darelhenchir.png';
import garagelink from '@/assets/garagelink.png';
import dalu from '@/assets/dalu.png';

const host = (u: string) => u.replace(/^https?:\/\//, '').replace(/\/.*$/, '').replace(/^www\./, '');

const Tilt = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const move = (e: React.MouseEvent) => {
    const el = ref.current!; const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5; const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 7}deg) rotateX(${-y * 7}deg) translateZ(0)`;
  };
  const leave = () => { if (ref.current) ref.current.style.transform = ''; };
  return <div ref={ref} onMouseMove={move} onMouseLeave={leave} className="transition-transform duration-300 ease-out will-change-transform h-full">{children}</div>;
};

const Portfolio = () => {
  const { t } = useLanguage();
  const projects = [
    { image: droplinkiLogo, k: 'droplinki', tech: ['NodeJS', 'ReactJS', 'Symfony'], link: 'http://droplinki.com' },
    { image: eventooMobile, k: 'eventoo_mobile_app', tech: ['NodeJS', 'Flutter', 'Android', 'iOS'], link: 'https://play.google.com/store/apps/details?id=app.eventoo.mobile&hl=en' },
    { image: eventoo2, k: 'eventoo', tech: ['Symfony', 'React', 'PostgreSQL'], link: 'https://eventoo.io/' },
    { image: optypro, k: 'optypro', tech: ['Symfony', 'React', 'PostgreSQL'], link: 'https://optypro.net/' },
    { image: darelhenchir, k: 'darelhenchir', tech: ['Symfony', 'React', 'SQL'], link: 'https://darelhenchir.com/' },
    { image: garagelink, k: 'garagelink', tech: ['Symfony', 'React', 'PostgreSQL', 'AI'], link: 'https://garagelink.chourabi-e-business-solutions.com/' },
    { image: dalu, k: 'dalu', tech: ['React'], link: 'https://dalu-de.com/' },
  ];

  return (
    <section id="portfolio" className="section-padding">
      <div className="container-custom">
        <SectionTitle title={t('portfolio.title')} subtitle={t('portfolio.subtitle')} />
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((p, i) => (
            <motion.div key={p.k} className={i === 0 ? 'md:col-span-2' : ''} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
              <Tilt>
                <a href={p.link} target="_blank" rel="noopener noreferrer" className={`group block h-full rounded-2xl border border-border bg-card/60 overflow-hidden hover:border-primary/50 transition-colors ${i === 0 ? 'md:grid md:grid-cols-[1.3fr_1fr]' : ''}`}>
                  <div className="border-b md:border-b-0 border-border">
                    <div className="flex items-center gap-2 px-4 h-10 bg-background/60 border-b border-border">
                      <span className="flex gap-1.5"><i className="w-2.5 h-2.5 rounded-full bg-border" /><i className="w-2.5 h-2.5 rounded-full bg-border" /><i className="w-2.5 h-2.5 rounded-full bg-border" /></span>
                      <span className="ml-2 flex-1 truncate rounded-md bg-background px-3 py-0.5 font-mono text-[11px] text-muted-foreground">{host(p.link)}</span>
                    </div>
                    <div className={`overflow-hidden ${i === 0 ? 'h-64 md:h-full md:min-h-[340px]' : 'h-60'}`}>
                      <img src={p.image} alt={t(`portfolio.${p.k}.title`)} loading="lazy" className="w-full h-full object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-105" />
                    </div>
                  </div>
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-2xl md:text-3xl font-semibold">{t(`portfolio.${p.k}.title`)}</h3>
                      <ArrowUpRight className="w-6 h-6 shrink-0 text-muted-foreground transition-all duration-300 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                    <p className="mt-3 text-muted-foreground leading-relaxed text-[15px]">{t(`portfolio.${p.k}.desc`)}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {p.tech.map((x) => <span key={x} className="rounded-full border border-border px-3 py-1 font-mono text-xs text-foreground/70">{x}</span>)}
                    </div>
                  </div>
                </a>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;

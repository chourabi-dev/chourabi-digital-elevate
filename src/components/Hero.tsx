import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const LINES = (fr: boolean) => [
  { t: 'cmd', s: 'chourabi new project --stack react,symfony,flutter' },
  { t: 'ok', s: fr ? 'architecture & API conçues' : 'architecture & API designed' },
  { t: 'ok', s: fr ? 'base de données migrée (postgresql)' : 'database migrated (postgresql)' },
  { t: 'ok', s: fr ? 'interface web & mobile livrées' : 'web & mobile UI shipped' },
  { t: 'ok', s: fr ? 'CI/CD configuré, tests au vert' : 'CI/CD wired, tests green' },
  { t: 'out', s: fr ? 'en production → votre-projet.com' : 'live in production → your-project.com' },
];

const Terminal = () => {
  const { language } = useLanguage();
  const lines = LINES(language === 'fr');
  const [shown, setShown] = useState(0);
  const [typed, setTyped] = useState(0);
  const cmd = lines[0].s;

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { setTyped(cmd.length); setShown(lines.length); return; }
    let timer: ReturnType<typeof setTimeout>;
    const step = (c: number, n: number) => {
      if (c < cmd.length) { setTyped(c + 1); timer = setTimeout(() => step(c + 1, n), 38); }
      else if (n < lines.length) { setShown(n + 1); timer = setTimeout(() => step(c, n + 1), n === 0 ? 500 : 650); }
      else { timer = setTimeout(() => { setTyped(0); setShown(0); step(0, 0); }, 4500); }
    };
    timer = setTimeout(() => step(0, 0), 900);
    return () => clearTimeout(timer);
  }, [language]);

  return (
    <div className="relative rounded-2xl border border-border bg-card/80 backdrop-blur-xl overflow-hidden shadow-[0_30px_120px_-30px_hsl(var(--primary)/.5)]">
      <div className="flex items-center gap-2 px-4 h-11 border-b border-border bg-background/50">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" /><span className="w-3 h-3 rounded-full bg-[#febc2e]" /><span className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-xs text-muted-foreground">~/chourabi — zsh</span>
      </div>
      <div className="p-5 md:p-6 font-mono text-[13px] md:text-sm leading-7 min-h-[290px]" aria-label="Terminal animation">
        <div><span className="text-primary">➜</span> <span className="text-secondary">~</span> {cmd.slice(0, typed)}{shown === 0 && <span className="inline-block w-2 h-4 bg-primary align-middle animate-blink ml-0.5" />}</div>
        {lines.slice(1, shown + 1).map((l, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} className={l.t === 'out' ? 'text-foreground font-medium' : 'text-muted-foreground'}>
            {l.t === 'ok' && <span className="text-[#28c840]">✔ </span>}
            {l.t === 'out' && <span className="text-primary">▲ </span>}
            {l.s}
          </motion.div>
        ))}
        {shown >= lines.length && <div><span className="text-primary">➜</span> <span className="text-secondary">~</span> <span className="inline-block w-2 h-4 bg-primary align-middle animate-blink" /></div>}
      </div>
    </div>
  );
};

const Hero = () => {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current!.getBoundingClientRect();
    ref.current!.style.setProperty('--mx', `${e.clientX - r.left}px`);
    ref.current!.style.setProperty('--my', `${e.clientY - r.top}px`);
  };
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" ref={ref} onMouseMove={onMove} className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16 noise">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(500px circle at var(--mx,50%) var(--my,30%), hsl(var(--primary)/.14), transparent 60%)' }} />
      <div className="absolute -top-40 -left-32 w-[560px] h-[560px] rounded-full bg-primary/25 blur-[120px] animate-aurora" />
      <div className="absolute bottom-0 -right-32 w-[520px] h-[520px] rounded-full bg-secondary/25 blur-[120px] animate-aurora" style={{ animationDelay: '-8s' }} />

      <div className="relative z-10 container-custom grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
        <div>
          <h1 className="text-[2.6rem] sm:text-6xl xl:text-7xl font-bold leading-[1.02]">
            {t('hero.subtitle').split(' ').map((w, i) => (
              <span key={i} className="inline-block overflow-hidden align-bottom pr-[0.25em]">
                <motion.span className="inline-block" initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ delay: 0.15 + i * 0.06, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>{w}</motion.span>
              </span>
            ))}
          </h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.7 }} className="mt-7 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
            {t('hero.description')}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.7 }} className="mt-10 flex flex-col sm:flex-row gap-4">
            <button onClick={() => go('services')} className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-medium text-white bg-gradient-primary hover:shadow-[0_0_40px_hsl(var(--primary)/.55)] transition-shadow">
              {t('hero.cta1')}<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button onClick={() => go('portfolio')} className="inline-flex items-center justify-center px-7 py-4 rounded-full font-medium border border-border hover:border-primary/60 hover:bg-primary/5 transition-colors">
              {t('hero.cta2')}
            </button>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 40, rotateX: 12 }} animate={{ opacity: 1, y: 0, rotateX: 0 }} transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }} style={{ transformPerspective: 1200 }}>
          <Terminal />
        </motion.div>
      </div>
    </section>
  );
};
export default Hero;

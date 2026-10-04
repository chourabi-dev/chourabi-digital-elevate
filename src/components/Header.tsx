import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Globe, Menu, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo-dark.png';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { label: t('nav.services'), id: 'services' },
    { label: t('nav.about'), id: 'about' },
    { label: t('nav.portfolio'), id: 'portfolio' },
    { label: t('nav.process'), id: 'process' },
    { label: t('nav.contact'), id: 'contact' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    navItems.forEach((n) => { const el = document.getElementById(n.id); if (el) io.observe(el); });
    return () => { window.removeEventListener('scroll', onScroll); io.disconnect(); };
  }, []);

  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; }, [open]);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-3 md:px-6 pt-3">
      <div
        className={`mx-auto max-w-6xl flex items-center justify-between h-16 px-4 md:px-6 rounded-2xl border transition-all duration-500 ${
          scrolled ? 'bg-background/70 backdrop-blur-xl border-border shadow-[0_8px_40px_-12px_hsl(var(--primary)/.35)]' : 'border-transparent'
        }`}
      >
        <button onClick={() => go('hero')} aria-label="Home"><img src={logo} alt="Chourabi" className="w-36 md:w-44" /></button>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((n) => (
            <button key={n.id} onClick={() => go(n.id)} className="relative px-4 py-2 text-sm text-foreground/70 hover:text-foreground transition-colors">
              {active === n.id && <motion.span layoutId="nav-pill" className="absolute inset-0 rounded-full bg-primary/10 border border-primary/30" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />}
              <span className="relative">{n.label}</span>
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')} className="flex items-center gap-1.5 text-sm font-mono text-foreground/70 hover:text-foreground px-2 py-1">
            <Globe className="w-4 h-4" />{language.toUpperCase()}
          </button>
          <button onClick={() => go('contact')} className="px-5 py-2.5 rounded-full text-sm font-medium text-white bg-gradient-primary hover:shadow-[0_0_30px_hsl(var(--primary)/.5)] transition-shadow">
            {t('contact.submit')}
          </button>
        </div>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
            className="md:hidden mx-auto max-w-6xl mt-2 rounded-2xl border border-border bg-background/95 backdrop-blur-xl p-5"
          >
            <nav className="flex flex-col">
              {navItems.map((n, i) => (
                <motion.button key={n.id} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}
                  onClick={() => go(n.id)} className="text-left text-2xl font-display py-3 border-b border-border/60">
                  {n.label}
                </motion.button>
              ))}
              <div className="flex items-center justify-between pt-5">
                <button onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')} className="flex items-center gap-2 font-mono text-sm"><Globe className="w-4 h-4" />{language.toUpperCase()}</button>
                <button onClick={() => go('contact')} className="px-5 py-2.5 rounded-full text-sm font-medium text-white bg-gradient-primary">{t('contact.submit')}</button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
export default Header;

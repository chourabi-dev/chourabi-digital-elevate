import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo-dark.png';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-border bg-card/40 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <img src={logo} className="w-56 mb-5" alt="Chourabi E Business Solutions" />
            <p className="text-muted-foreground">{t('footer.tagline')}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t('nav.services')}</h4>
            <ul className="space-y-2 text-muted-foreground">
              {['web', 'mobile', 'consulting', 'design'].map((k) => (
                <li key={k}><a href="#services" className="hover:text-primary transition-colors">{t(`services.${k}.title`)}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t('contact.info')}</h4>
            <ul className="space-y-2 text-muted-foreground break-words">
              <li>contact@chourabi-e-business-solutions.com</li>
              <li>+216 93 863 732</li>
              <li>IMMEUBLE SAADI BEN SASSI El Menzah Tunis 1004</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row justify-between gap-2 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} CHOURABI E BUSINESS SOLUTIONS. {t('footer.rights')}</p>
          <p className="font-mono">built with React · TypeScript · Tailwind</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

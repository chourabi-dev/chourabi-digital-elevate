import { useLanguage } from '@/contexts/LanguageContext';
import { Linkedin, Github, Twitter, Mail } from 'lucide-react';

import logo from '@/assets/logo-dark.png';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img src={ logo } style={{ width:250, marginBottom:25 }} alt="" />
            <p className="text-foreground/70 mb-4">{t('footer.tagline')}</p>
            <div className="flex gap-4">
              {
                /*
                <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Linkedin className="w-5 h-5 text-primary" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Github className="w-5 h-5 text-primary" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Twitter className="w-5 h-5 text-primary" />
              </a>
              <a href="mailto:contact@ces-agency.com" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </a>
                */
              }
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">{t('nav.services')}</h4>
            <ul className="space-y-2 text-foreground/70">
              <li><a href="#services" className="hover:text-primary transition-colors">{t('services.web.title')}</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">{t('services.mobile.title')}</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">{t('services.consulting.title')}</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">{t('services.design.title')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">{t('contact.info')}</h4>
            <ul className="space-y-2 text-foreground/70">
              <li>contact@chourabi-e-business-solutions.com</li>
              <li>+216 93 863 732</li>
              <li>IMMEUBLE SAADI BEN SASSI El Menzah Tunis 1004</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-foreground/60">
          <p>© {currentYear} CHOURABI E BUSINESS SOLUTIONS. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

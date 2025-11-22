import React, { createContext, useContext, useState } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    // Navigation
    'nav.services': 'Services',
    'nav.about': 'Agence',
    'nav.portfolio': 'Portfolio',
    'nav.process': 'Processus',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'CHOURABI E BUSINESS SOLUTIONS',
    'hero.subtitle': 'Des solutions digitales intelligentes, performantes et sur-mesure.',
    'hero.description': 'Agence de développement logiciel et consulting digital de premier plan. Nous transformons vos idées en solutions technologiques innovantes.',
    'hero.cta1': 'Nos Services',
    'hero.cta2': 'Voir nos Projets',
    
    // Services
    'services.title': 'Nos Services',
    'services.subtitle': 'Excellence technique et solutions sur-mesure',
    'services.web.title': 'Développement Web',
    'services.web.desc': 'Applications web modernes et performantes ont utilisons les technologies les plus récentes',
    'services.mobile.title': 'Développement Mobile',
    'services.mobile.desc': 'Applications iOS et Android natives avec Flutter et React Native',
    'services.desktop.title': 'Solutions Desktop',
    'services.desktop.desc': 'Logiciels desktop robustes et performants pour Windows, Mac et Linux',
    'services.consulting.title': 'Consulting IT',
    'services.consulting.desc': 'Architecture logicielle, audit technique et accompagnement stratégique',
    'services.api.title': 'Intégration API',
    'services.api.desc': 'Automatisation, intégration de services tiers et développement d\'APIs RESTful',
    'services.custom.title': 'Solutions sur Mesure',
    'services.custom.desc': 'Développement de solutions personnalisées adaptées à vos besoins spécifiques',
    'services.hosting.title': 'Hébergement & Maintenance',
    'services.hosting.desc': 'Infrastructure cloud, DevOps, monitoring et maintenance continue',
    'services.design.title': 'UI/UX Design',
    'services.design.desc': 'Design d\'interfaces modernes, intuitives et centrées utilisateur',
    
    // About
    'about.title': 'Notre Agence',
    'about.mission.title': 'Notre Mission',
    'about.mission.desc': 'Transformer les défis digitaux de nos clients en opportunités de croissance grâce à des solutions technologiques innovantes et performantes.',
    'about.vision.title': 'Notre Vision',
    'about.vision.desc': 'Devenir le partenaire technologique de référence pour les entreprises ambitieuses qui souhaitent se démarquer par l\'excellence digitale.',
    'about.expertise.title': 'Notre Expertise',
    'about.expertise.desc': 'Plus de 10 ans d\'expérience collective dans le développement logiciel, avec une équipe d\'experts passionnés maîtrisant les technologies les plus avancées.',
    'about.values.title': 'Nos Valeurs',
    'about.values.desc': 'Excellence, innovation, transparence et engagement sont au cœur de notre approche. Nous bâtissons des relations durables basées sur la confiance et les résultats.',
    
    // Portfolio
    'portfolio.title': 'Nos Réalisations',
    'portfolio.subtitle': 'Projets qui inspirent',

    'portfolio.eventoo.title': 'Eventoo',
    'portfolio.eventoo.desc': 'Eventoo est une plateforme moderne de gestion d’événements qui simplifie l’organisation, la communication et le networking.',
    

    'portfolio.optypro.title': 'Optypro',
    'portfolio.optypro.desc': 'Optypro est une plateforme innovante qui connecte les opticiens à leurs clients et facilite le networking professionnel.',


    'portfolio.darelhenchir.title': 'Dar El Henchir',
    'portfolio.darelhenchir.desc': 'Dar El Henchir est un gîte authentique niché au cœur de la nature, offrant un cadre paisible pour se ressource.',


    'portfolio.garagelink.title': 'GarageLink',
    'portfolio.garagelink.desc': 'GarageLink est une plateforme moderne de gestion pour garages et ateliers automobiles. Elle simplifie le suivi des réparations, la gestion des clients, des véhicules et des rendez-vous.',


    'portfolio.dalu.title': 'Dalu',
    'portfolio.dalu.desc': 'Dalu est un restaurant italien authentique en Allemagne, proposant une cuisine raffinée inspirée des saveurs traditionnelles d’Italie.',
    
    


    

    // Process
    'process.title': 'Notre Processus',
    'process.subtitle': 'Une méthodologie éprouvée',
    'process.step1.title': 'Analyse & Stratégie',
    'process.step1.desc': 'Étude approfondie de vos besoins et définition d\'une stratégie sur-mesure',
    'process.step2.title': 'Conception & UX',
    'process.step2.desc': 'Design d\'interfaces intuitives et prototypage interactif',
    'process.step3.title': 'Développement',
    'process.step3.desc': 'Développement agile avec livraisons itératives et revues régulières',
    'process.step4.title': 'QA & Tests',
    'process.step4.desc': 'Tests rigoureux et assurance qualité à chaque étape',
    'process.step5.title': 'Déploiement',
    'process.step5.desc': 'Mise en production sécurisée et formation de vos équipes',
    'process.step6.title': 'Suivi & Optimisation',
    'process.step6.desc': 'Support continu, maintenance et optimisations régulières',
    
    // Testimonials
    'testimonials.title': 'Ils Nous Font Confiance',
    'testimonials.subtitle': 'Témoignages clients',
    
    // Contact
    'contact.title': 'Démarrons Votre Projet',
    'contact.subtitle': 'Contactez-nous pour discuter de vos besoins',
    'contact.name': 'Nom complet',
    'contact.email': 'Email',
    'contact.phone': 'Téléphone',
    'contact.company': 'Entreprise',
    'contact.message': 'Votre message',
    'contact.submit': 'Demander un Devis',
    'contact.whatsapp': 'Contactez-nous sur WhatsApp',
    'contact.info': 'Informations',
    
    // Footer
    'footer.tagline': 'Solutions digitales d\'excellence',
    'footer.rights': 'Tous droits réservés.',
  },
  en: {
    // Navigation
    'nav.services': 'Services',
    'nav.about': 'Agency',
    'nav.portfolio': 'Portfolio',
    'nav.process': 'Process',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'CHOURABI E BUSINESS SOLUTIONS',
    'hero.subtitle': 'Smart, high-performance and tailor-made digital solutions.',
    'hero.description': 'Leading software development and digital consulting agency. We transform your ideas into innovative technological solutions.',
    'hero.cta1': 'Our Services',
    'hero.cta2': 'View Projects',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Technical excellence and custom solutions',
    'services.web.title': 'Web Development',
    'services.web.desc': 'Modern and high-performance web applications using latest techs',
    'services.mobile.title': 'Mobile Development',
    'services.mobile.desc': 'Native iOS and Android applications with Flutter and React Native',
    'services.desktop.title': 'Desktop Solutions',
    'services.desktop.desc': 'Robust and performant desktop software for Windows, Mac and Linux',
    'services.consulting.title': 'IT Consulting',
    'services.consulting.desc': 'Software architecture, technical audit and strategic guidance',
    'services.api.title': 'API Integration',
    'services.api.desc': 'Automation, third-party service integration and RESTful API development',
    'services.custom.title': 'Custom Solutions',
    'services.custom.desc': 'Development of personalized solutions tailored to your specific needs',
    'services.hosting.title': 'Hosting & Maintenance',
    'services.hosting.desc': 'Cloud infrastructure, DevOps, monitoring and continuous maintenance',
    'services.design.title': 'UI/UX Design',
    'services.design.desc': 'Modern, intuitive and user-centric interface design',
    
    // About
    'about.title': 'Our Agency',
    'about.mission.title': 'Our Mission',
    'about.mission.desc': 'Transform our clients\' digital challenges into growth opportunities through innovative and high-performance technological solutions.',
    'about.vision.title': 'Our Vision',
    'about.vision.desc': 'Become the reference technology partner for ambitious companies looking to stand out through digital excellence.',
    'about.expertise.title': 'Our Expertise',
    'about.expertise.desc': 'Over 10 years of collective experience in software development, with a team of passionate experts mastering the most advanced technologies.',
    'about.values.title': 'Our Values',
    'about.values.desc': 'Excellence, innovation, transparency and commitment are at the heart of our approach. We build lasting relationships based on trust and results.',
    
    // Portfolio
    'portfolio.title': 'Our Work',
    'portfolio.subtitle': 'Projects that inspire',
    'portfolio.project1.title': 'B2B E-commerce Platform',
    'portfolio.project1.desc': 'Complete online sales solution with multi-catalog management and ERP integration',
    'portfolio.project1.impact': '+150% growth in online sales',
    'portfolio.project2.title': 'Mobile Banking App',
    'portfolio.project2.desc': 'Secure mobile app with biometric authentication and instant payments',
    'portfolio.project2.impact': '500K+ active users',
    'portfolio.project3.title': 'Hospital Management System',
    'portfolio.project3.desc': 'Complete software suite for patient, appointment and medical records management',
    'portfolio.project3.impact': '20 facilities equipped',


    'portfolio.eventoo.title': 'Eventoo',
    'portfolio.eventoo.desc': 'Eventoo is a modern event-management platform that streamlines organization, communication, and networking.',

    
    'portfolio.optypro.title': 'Optypro',
    'portfolio.optypro.desc': 'Optypro is an innovative platform that connects opticians with their clients and makes professional networking easier.',


    'portfolio.darelhenchir.title': 'Dar El Henchir',
    'portfolio.darelhenchir.desc': 'Dar El Henchir is a charming guest house nestled in the heart of nature, offering a peaceful setting for a relaxing getaway.',


    
    'portfolio.garagelink.title': 'GarageLink',
    'portfolio.garagelink.desc': 'GarageLink is a modern management platform for car repair shops and automotive workshops. It streamlines repair tracking, customer management, vehicle records, and appointments',
    
    

    'portfolio.dalu.title': 'Dalu',
    'portfolio.dalu.desc': 'Dalu is an authentic Italian restaurant in Germany, offering refined cuisine inspired by traditional Italian flavors.',
    
    


    
    
    // Process
    'process.title': 'Our Process',
    'process.subtitle': 'A proven methodology',
    'process.step1.title': 'Analysis & Strategy',
    'process.step1.desc': 'In-depth study of your needs and definition of a tailored strategy',
    'process.step2.title': 'Design & UX',
    'process.step2.desc': 'Intuitive interface design and interactive prototyping',
    'process.step3.title': 'Development',
    'process.step3.desc': 'Agile development with iterative deliveries and regular reviews',
    'process.step4.title': 'QA & Testing',
    'process.step4.desc': 'Rigorous testing and quality assurance at every stage',
    'process.step5.title': 'Deployment',
    'process.step5.desc': 'Secure production release and team training',
    'process.step6.title': 'Follow-up & Optimization',
    'process.step6.desc': 'Continuous support, maintenance and regular optimizations',
    
    // Testimonials
    'testimonials.title': 'They Trust Us',
    'testimonials.subtitle': 'Client testimonials',
    
    // Contact
    'contact.title': 'Let\'s Start Your Project',
    'contact.subtitle': 'Contact us to discuss your needs',
    'contact.name': 'Full name',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.company': 'Company',
    'contact.message': 'Your message',
    'contact.submit': 'Request a Quote',
    'contact.whatsapp': 'Contact us on WhatsApp',
    'contact.info': 'Information',
    
    // Footer
    'footer.tagline': 'Excellence in digital solutions',
    'footer.rights': 'All rights reserved.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.fr] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

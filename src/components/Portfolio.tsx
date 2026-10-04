import { ExternalLink, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import eventoo from '@/assets/eventoo.png';
import eventoo2 from '@/assets/eventoo-v2.png';
import eventooMobile from '@/assets/eventoo-mobile-app.png';

import droplinkiLogo from '@/assets/droplinki.png';


import optypro from '@/assets/optypro.png';
import darelhenchir from '@/assets/darelhenchir.png';
import garagelink from '@/assets/garagelink.png';
import dalu from '@/assets/dalu.png';


const Portfolio = () => {
  const { t } = useLanguage();

  const projects = [
     {
      image: droplinkiLogo,
      title: t('portfolio.droplinki.title'),
      description: t('portfolio.droplinki.desc'), 
      technologies: ['NodeJS', 'REACTJS', 'SYMFONY'],
      link:'http://droplinki.com'
    },


    {
      image: eventooMobile,
      title: t('portfolio.eventoo_mobile_app.title'),
      description: t('portfolio.eventoo_mobile_app.desc'), 
      technologies: ['NodeJS', 'Flutter','Android', 'IOS'],
      link:'https://play.google.com/store/apps/details?id=app.eventoo.mobile&hl=en'
    },

    {
      image: eventoo2,
      title: t('portfolio.eventoo.title'),
      description: t('portfolio.eventoo.desc'), 
      technologies: ['Symfony', 'React', 'PostgreSQL'],
      link:'https://eventoo.io/'
    },
    {
      image: optypro,
      title: t('portfolio.optypro.title'),
      description: t('portfolio.optypro.desc'), 
      technologies: ['Symfony', 'React', 'PostgreSQL'],
      link:'https://optypro.net/'
    },
    {
      image: darelhenchir,
      title: t('portfolio.darelhenchir.title'),
      description: t('portfolio.darelhenchir.desc'), 
      technologies: ['Symfony', 'React', 'SQL'],
      link:'https://darelhenchir.com/'
    },

    {
      image: garagelink,
      title: t('portfolio.garagelink.title'),
      description: t('portfolio.garagelink.desc'), 
      technologies: ['Symfony', 'React', 'PostgreSQL', 'AI'],
      link:'https://garagelink.chourabi-e-business-solutions.com/'
    },
    
    {
      image: dalu,
      title: t('portfolio.dalu.title'),
      description: t('portfolio.dalu.desc'), 
      technologies: ['React'],
      link:'https://dalu-de.com/'
    },
    



    

    
    


    
  ];

  return (
    <section id="portfolio" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">{t('portfolio.title')}</span>
          </h2>
          <p className="text-xl text-foreground/70">{t('portfolio.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden hover-lift bg-card border-border hover:border-primary/50" >
              <a href={ project.link } target="_blank">
                <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <ExternalLink  className="w-8 h-8 text-primary" />

                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/70 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              </a>
            </Card>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Portfolio;

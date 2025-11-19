import { ExternalLink, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import project1 from '@/assets/project1.jpg';
import project2 from '@/assets/project2.jpg';
import project3 from '@/assets/project3.jpg';

const Portfolio = () => {
  const { t } = useLanguage();

  const projects = [
    {
      image: project1,
      title: t('portfolio.project1.title'),
      description: t('portfolio.project1.desc'),
      impact: t('portfolio.project1.impact'),
      technologies: ['Symfony', 'React', 'PostgreSQL', 'AWS'],
    },
    {
      image: project2,
      title: t('portfolio.project2.title'),
      description: t('portfolio.project2.desc'),
      impact: t('portfolio.project2.impact'),
      technologies: ['Flutter', 'Node.js', 'MongoDB', 'Firebase'],
    },
    {
      image: project3,
      title: t('portfolio.project3.title'),
      description: t('portfolio.project3.desc'),
      impact: t('portfolio.project3.impact'),
      technologies: ['Laravel', 'Vue.js', 'MySQL', 'Docker'],
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
            <Card
              key={index}
              className="group overflow-hidden hover-lift bg-card border-border hover:border-primary/50"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <ExternalLink className="w-8 h-8 text-primary" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/70 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex items-center gap-2 mb-4 text-primary">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm font-semibold">{project.impact}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

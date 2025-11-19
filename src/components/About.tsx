import { Target, Eye, Award, Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Target,
      title: t('about.mission.title'),
      description: t('about.mission.desc'),
    },
    {
      icon: Eye,
      title: t('about.vision.title'),
      description: t('about.vision.desc'),
    },
    {
      icon: Award,
      title: t('about.expertise.title'),
      description: t('about.expertise.desc'),
    },
    {
      icon: Heart,
      title: t('about.values.title'),
      description: t('about.values.desc'),
    },
  ];

  return (
    <section id="about" className="section-padding bg-card/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">{t('about.title')}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                      <p className="text-foreground/70 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;

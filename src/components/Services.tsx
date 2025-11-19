import { Code, Smartphone, Monitor, TrendingUp, Blocks, Wrench, Server, Palette } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Code,
      title: t('services.web.title'),
      description: t('services.web.desc'),
    },
    {
      icon: Smartphone,
      title: t('services.mobile.title'),
      description: t('services.mobile.desc'),
    },
    {
      icon: Monitor,
      title: t('services.desktop.title'),
      description: t('services.desktop.desc'),
    },
    {
      icon: TrendingUp,
      title: t('services.consulting.title'),
      description: t('services.consulting.desc'),
    },
    {
      icon: Blocks,
      title: t('services.api.title'),
      description: t('services.api.desc'),
    },
    {
      icon: Wrench,
      title: t('services.custom.title'),
      description: t('services.custom.desc'),
    },
    {
      icon: Server,
      title: t('services.hosting.title'),
      description: t('services.hosting.desc'),
    },
    {
      icon: Palette,
      title: t('services.design.title'),
      description: t('services.design.desc'),
    },
  ];

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">{t('services.title')}</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group hover-lift bg-card border-border hover:border-primary/50 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

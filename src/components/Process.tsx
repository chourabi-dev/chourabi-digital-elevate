import { Search, Palette, Code2, TestTube2, Rocket, LineChart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Process = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: Search,
      title: t('process.step1.title'),
      description: t('process.step1.desc'),
    },
    {
      icon: Palette,
      title: t('process.step2.title'),
      description: t('process.step2.desc'),
    },
    {
      icon: Code2,
      title: t('process.step3.title'),
      description: t('process.step3.desc'),
    },
    {
      icon: TestTube2,
      title: t('process.step4.title'),
      description: t('process.step4.desc'),
    },
    {
      icon: Rocket,
      title: t('process.step5.title'),
      description: t('process.step5.desc'),
    },
    {
      icon: LineChart,
      title: t('process.step6.title'),
      description: t('process.step6.desc'),
    },
  ];

  return (
    <section id="process" className="section-padding bg-card/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
      
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">{t('process.title')}</span>
          </h2>
          <p className="text-xl text-foreground/70">{t('process.subtitle')}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={index}
                className={`relative flex items-center gap-8 mb-12 ${
                  isEven ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${isEven ? 'text-right' : 'text-left'}`}>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Icon */}
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-primary/10 blur-xl" />
                </div>

                {/* Spacer */}
                <div className="flex-1" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;

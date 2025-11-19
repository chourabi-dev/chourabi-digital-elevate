import { Star, Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const { language, t } = useLanguage();

  const testimonials = language === 'fr' ? [
    {
      name: 'Marie Dubois',
      role: 'Directrice Générale, TechCorp',
      content: 'Une équipe exceptionnelle qui a transformé notre vision en réalité. Le professionnalisme et l\'expertise technique de CHOURABI E BUSINESS SOLUTIONS ont dépassé nos attentes.',
      rating: 5,
    },
    {
      name: 'Ahmed Benali',
      role: 'CTO, FinanceHub',
      content: 'La collaboration avec CES a été fluide et efficace. Ils ont livré une application mobile bancaire robuste et sécurisée en respectant les délais et le budget.',
      rating: 5,
    },
    {
      name: 'Sophie Martin',
      role: 'Chef de Projet, HealthCare Plus',
      content: 'Grâce à leur expertise, nous avons pu moderniser l\'ensemble de notre système de gestion hospitalière. Un partenaire fiable et compétent.',
      rating: 5,
    },
  ] : [
    {
      name: 'Marie Dubois',
      role: 'CEO, TechCorp',
      content: 'An exceptional team that transformed our vision into reality. The professionalism and technical expertise of CHOURABI E BUSINESS SOLUTIONS exceeded our expectations.',
      rating: 5,
    },
    {
      name: 'Ahmed Benali',
      role: 'CTO, FinanceHub',
      content: 'The collaboration with CES was smooth and efficient. They delivered a robust and secure mobile banking application while respecting deadlines and budget.',
      rating: 5,
    },
    {
      name: 'Sophie Martin',
      role: 'Project Manager, HealthCare Plus',
      content: 'Thanks to their expertise, we were able to modernize our entire hospital management system. A reliable and competent partner.',
      rating: 5,
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">{t('testimonials.title')}</span>
          </h2>
          <p className="text-xl text-foreground/70">{t('testimonials.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover-lift"
            >
              <CardContent className="p-8">
                <Quote className="w-10 h-10 text-primary/30 mb-4" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground/80 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-bold text-lg">{testimonial.name}</div>
                  <div className="text-foreground/60 text-sm">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

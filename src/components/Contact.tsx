import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, MapPin, Phone, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

const Contact = () => {
  const { language, t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const contactSchema = z.object({
    name: z.string().trim().min(1, { message: language === 'fr' ? 'Le nom est requis' : 'Name is required' }).max(100),
    email: z.string().trim().email({ message: language === 'fr' ? 'Email invalide' : 'Invalid email' }).max(255),
    phone: z.string().trim().max(20).optional(),
    company: z.string().trim().max(100).optional(),
    message: z.string().trim().min(1, { message: language === 'fr' ? 'Le message est requis' : 'Message is required' }).max(1000),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      contactSchema.parse(formData);
      
      // Create WhatsApp message
      const message = `Nouveau contact depuis le site CES:\n\nNom: ${formData.name}\nEmail: ${formData.email}\nTéléphone: ${formData.phone || 'Non renseigné'}\nEntreprise: ${formData.company || 'Non renseignée'}\n\nMessage:\n${formData.message}`;
      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
      
      window.open(whatsappUrl, '_blank');
      
      toast({
        title: language === 'fr' ? 'Message envoyé!' : 'Message sent!',
        description: language === 'fr' ? 'Nous vous contacterons bientôt.' : 'We will contact you soon.',
      });
      
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: language === 'fr' ? 'Erreur de validation' : 'Validation error',
          description: error.errors[0].message,
          variant: 'destructive',
        });
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'contact@ces-agency.com',
    },
    {
      icon: Phone,
      label: language === 'fr' ? 'Téléphone' : 'Phone',
      value: '+216 XX XXX XXX',
    },
    {
      icon: MapPin,
      label: language === 'fr' ? 'Adresse' : 'Address',
      value: language === 'fr' ? 'Tunis, Tunisie' : 'Tunis, Tunisia',
    },
  ];

  return (
    <section id="contact" className="section-padding bg-card/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">{t('contact.title')}</span>
          </h2>
          <p className="text-xl text-foreground/70">{t('contact.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder={t('contact.name')}
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder={t('contact.email')}
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <Input
                    name="phone"
                    placeholder={t('contact.phone')}
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <Input
                    name="company"
                    placeholder={t('contact.company')}
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder={t('contact.message')}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-background border-border resize-none"
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg">
                  {t('contact.submit')}
                </Button>
              </form>

              <div className="mt-6">
                <Button
                  variant="outline"
                  className="w-full border-primary/50 hover:bg-primary/10"
                  size="lg"
                  onClick={() => window.open('https://wa.me/', '_blank')}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {t('contact.whatsapp')}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">{t('contact.info')}</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-lg mb-1">{info.label}</div>
                        <div className="text-foreground/70">{info.value}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Map placeholder */}
            <Card className="bg-card border-border overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <MapPin className="w-16 h-16 text-primary/50" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

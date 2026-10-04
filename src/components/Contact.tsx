import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, MessageCircle, Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import SectionTitle from './fx/SectionTitle';

const field = 'w-full rounded-xl border border-border bg-background/70 px-4 py-3.5 text-[15px] placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition';

const Contact = () => {
  const { language, t } = useLanguage();
  const [f, setF] = useState({ name: '', email: '', phone: '', company: '', message: '' });
  const change = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setF({ ...f, [e.target.name]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `New Contact Request from ${f.name}`;
    const body = `\nName: ${f.name}\nEmail: ${f.email}\nPhone: ${f.phone || 'N/A'}\nCompany: ${f.company || 'N/A'}\n\nMessage:\n${f.message}\n`;
    window.location.href = `mailto:contact@chourabi-e-business-solutions.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const info = [
    { icon: Mail, label: 'Email', value: 'contact@chourabi-e-business-solutions.com', href: 'mailto:contact@chourabi-e-business-solutions.com' },
    { icon: Phone, label: language === 'fr' ? 'Téléphone' : 'Phone', value: '+216 93 863 732', href: 'tel:+21693863732' },
    { icon: MapPin, label: language === 'fr' ? 'Adresse' : 'Address', value: 'IMMEUBLE SAADI BEN SASSI El Menzah Tunis 1004' },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[400px] bg-primary/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="container-custom relative">
        <SectionTitle title={t('contact.title')} subtitle={t('contact.subtitle')} />
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <motion.form initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} onSubmit={submit} className="rounded-2xl border border-border bg-card/70 backdrop-blur p-6 md:p-8 space-y-4">
            <input name="name" placeholder={t('contact.name')} value={f.name} onChange={change} required className={field} />
            <div className="grid sm:grid-cols-2 gap-4">
              <input name="email" type="email" placeholder={t('contact.email')} value={f.email} onChange={change} required className={field} />
              <input name="phone" placeholder={t('contact.phone')} value={f.phone} onChange={change} className={field} />
            </div>
            <input name="company" placeholder={t('contact.company')} value={f.company} onChange={change} className={field} />
            <textarea name="message" rows={5} placeholder={t('contact.message')} value={f.message} onChange={change} required className={field} />
            <button type="submit" className="group w-full inline-flex items-center justify-center gap-2 rounded-xl py-4 font-medium text-white bg-gradient-primary hover:shadow-[0_0_40px_hsl(var(--primary)/.5)] transition-shadow">
              {t('contact.submit')}<Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
            <button type="button" onClick={() => window.open('https://wa.me/21693863732', '_blank')} className="w-full inline-flex items-center justify-center gap-2 rounded-xl py-4 border border-border hover:border-primary/60 hover:bg-primary/5 transition-colors">
              <MessageCircle className="w-5 h-5" />{t('contact.whatsapp')}
            </button>
          </motion.form>

          <div className="space-y-4 lg:pt-2">
            <h3 className="text-2xl font-semibold mb-6">{t('contact.info')}</h3>
            {info.map((c, i) => (
              <motion.div key={c.label} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <a href={c.href} className="flex items-center gap-5 rounded-2xl border border-border bg-card/50 p-5 hover:border-primary/50 transition-colors">
                  <span className="grid place-items-center w-12 h-12 rounded-xl bg-primary/10 text-primary shrink-0"><c.icon className="w-5 h-5" /></span>
                  <span className="min-w-0"><span className="block text-sm text-muted-foreground">{c.label}</span><span className="block break-words">{c.value}</span></span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;

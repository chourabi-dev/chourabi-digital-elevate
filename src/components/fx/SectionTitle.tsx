import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-14 md:mb-20 max-w-3xl">
    <motion.h2
      initial={{ clipPath: 'inset(0 0 100% 0)', y: 30 }}
      whileInView={{ clipPath: 'inset(0 0 0% 0)', y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="text-4xl md:text-6xl font-bold leading-[1.05]"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-5 text-lg md:text-xl text-muted-foreground"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);
export default SectionTitle;

const TECH = ['React', 'TypeScript', 'Symfony', 'Laravel', 'Node.js', 'Flutter', 'React Native', 'PostgreSQL', 'Docker', 'REST APIs', 'Tailwind', 'AI'];

const TechMarquee = () => (
  <div className="relative border-y border-border bg-card/40 py-6 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]" aria-hidden="true">
    <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
      {[...TECH, ...TECH].map((t, i) => (
        <span key={i} className="mx-8 font-mono text-lg md:text-xl text-foreground/50 hover:text-primary transition-colors whitespace-nowrap">
          <span className="text-primary/70">{'</>'}</span> {t}
        </span>
      ))}
    </div>
  </div>
);
export default TechMarquee;

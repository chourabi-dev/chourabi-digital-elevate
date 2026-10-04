import { useRef, type ReactNode, type MouseEvent } from 'react';

/** Wrapper that feeds cursor position to the .spot CSS spotlight. */
const Spot = ({ children, className = '', as: Tag = 'div', ...rest }: { children: ReactNode; className?: string; as?: any; [k: string]: any }) => {
  const ref = useRef<HTMLElement>(null);
  const onMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - r.left}px`);
    el.style.setProperty('--my', `${e.clientY - r.top}px`);
  };
  return (
    <Tag ref={ref} onMouseMove={onMove} className={`spot ${className}`} {...rest}>
      {children}
    </Tag>
  );
};
export default Spot;

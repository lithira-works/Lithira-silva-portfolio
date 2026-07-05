import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { useRef, type CSSProperties } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: CSSProperties;
}

interface CharacterProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

function Character({ char, progress, range }: CharacterProps) {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline">
      <span className="opacity-20" aria-hidden="true">
        {char}
      </span>
      <motion.span className="absolute left-0" style={{ opacity }}>
        {char}
      </motion.span>
    </span>
  );
}

/**
 * Scroll-driven text reveal: each character brightens from 20% to full
 * opacity as the paragraph moves through the viewport.
 */
export default function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const characters = Array.from(text);

  return (
    <p ref={containerRef} className={className} style={style}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {characters.map((char, index) => {
          const start = index / characters.length;
          const end = (index + 1) / characters.length;
          return (
            <Character
              key={index}
              char={char}
              progress={scrollYProgress}
              range={[start, end]}
            />
          );
        })}
      </span>
    </p>
  );
}

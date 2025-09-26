import React, { useEffect, useRef, useState } from 'react';

interface AnimatedTypewriterProps {
  text: string;
  speed?: number;
  className?: string;
}

export default function AnimatedTypewriter({ text, speed = 40, className }: AnimatedTypewriterProps) {
  const [displayed, setDisplayed] = useState('');
  const idx = useRef(0);

  useEffect(() => {
    setDisplayed('');
    idx.current = 0;
    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text.charAt(idx.current));
      idx.current += 1;
      if (idx.current >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span className={className}>
      {displayed}
      <span className="animate-pulse inline-block w-2 h-6 align-bottom bg-neon-turquoise ml-1 rounded" />
    </span>
  );
}

import React from 'react';
import clsx from 'clsx';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export default function GlassCard({ children, className, ...props }: GlassCardProps) {
  return (
    <div
      className={clsx(
        "glass-card transition-shadow duration-200 hover:shadow-neon",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

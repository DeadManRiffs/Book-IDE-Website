import React from 'react';
import clsx from 'clsx';

export interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'violet' | 'turquoise' | 'amber';
  children?: React.ReactNode; // make optional to support icon-only buttons
  icon?: React.ReactNode;
}

export default function NeonButton({
  variant = 'violet',
  children,
  icon,
  className,
  ...props
}: NeonButtonProps) {
  const colorMap = {
    violet: 'from-violet-blue to-neon-turquoise shadow-violet',
    turquoise: 'from-neon-turquoise to-violet-blue shadow-turquoise',
    amber: 'from-soft-amber to-neon-turquoise shadow-amber',
  };
  return (
    <button
      className={clsx(
        "relative inline-flex items-center justify-center px-6 py-3 rounded-full font-header text-lg font-semibold bg-gradient-to-br transition-all duration-200",
        "focus-visible:ring-2 focus-visible:ring-neon-turquoise",
        "hover:scale-105 hover:shadow-neon",
        colorMap[variant],
        "border-2 border-transparent",
        "before:absolute before:inset-0 before:rounded-full before:blur before:opacity-60 before:-z-10",
        className
      )}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
}

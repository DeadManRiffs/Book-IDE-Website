import { FC } from 'react';

interface BookHologramProps {
  className?: string;
}

const BookHologram: FC<BookHologramProps> = ({ className = '' }) => {
  return (
    <span className={`relative flex items-center justify-center ${className}`}>
      <span className="absolute inset-0 z-0 animate-pulse rounded-full blur-2xl bg-gradient-to-br from-violet-500 to-cyan-400 opacity-60" />
      {/* Replaced <img> (which had no src and could trigger 404s) with an inline SVG */}
      <svg
        className="relative z-10 w-20 h-20 drop-shadow-[0_0_24px_#0FFFC0] animate-bounce text-cyan-200"
        viewBox="0 0 24 24"
        aria-label="Book hologram icon"
        role="img"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Simple "book" outline */}
        <path d="M4 4.5A2.5 2.5 0 0 1 6.5 7H20" />
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 7v10" />
        <path d="M20 7v10" />
        <path d="M6.5 7A2.5 2.5 0 0 0 4 4.5v15A2.5 2.5 0 0 1 6.5 17" />
      </svg>
    </span>
  );
};

export default BookHologram;
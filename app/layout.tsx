import './globals.css';
import { Inter, Sora, Space_Grotesk } from 'next/font/google';
import SiteNav from '@/components/ui/SiteNav';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-header',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
});

export const metadata = {
  title: 'Book IDE — Futuristic AI Book Writing',
  description: 'A writer’s command center. Futuristic, dark, and neon-glowing AI-powered book creation.',
  icons: {
    icon: 'logo.png',
    shortcut: 'logo.png',
    apple: 'logo.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${spaceGrotesk.variable} ${inter.variable} ${sora.variable} bg-gray-950 text-white antialiased`}>
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-blue-600 text-white px-3 py-2 rounded">Skip to content</a>
        <SiteNav />
        <main id="main" tabIndex={-1} className="pt-14">
          {children}
        </main>
      </body>
    </html>
  );
}

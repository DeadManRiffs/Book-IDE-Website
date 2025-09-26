import GlassCard from '@/components/ui/GlassCard';
import StatusGlowRing from '@/components/ui/StatusGlowRing';
import { Book, Library } from 'lucide-react';
import { getSession } from '@/lib/session';

const books = [
  {
    id: 1,
    title: "Neon Shadows",
    status: "published",
    cover: "/covers/neon-shadows.png",
  },
  {
    id: 2,
    title: "AI Dreams",
    status: "editing",
    cover: "/covers/ai-dreams.png",
  },
  {
    id: 3,
    title: "Drafting Tomorrow",
    status: "draft",
    cover: "/covers/drafting-tomorrow.png",
  },
];

export default async function LibraryPage() {
  const session = await getSession();
  const isLifetime = session?.plan === 'lifetime';
  return (
    <div className="min-h-screen flex bg-matte-black">
      <aside className="h-screen w-20 bg-matte-black border-r border-white/10 flex flex-col items-center py-8 transition-all duration-300 group">
        <Library className="text-violet-blue mb-6" size={32} />
        {/* Collapsible logic here */}
      </aside>
      <main className="flex-1 p-8">
        <h2 className="font-header text-2xl mb-6 flex items-center gap-2">
          <Book className="text-neon-turquoise" /> My Library
          {isLifetime && (
            <span className="ml-3 inline-flex items-center rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 px-3 py-1 text-xs">
              Lifetime
            </span>
          )}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {books.map((book) => (
            <GlassCard key={book.id} className="group relative flex flex-col items-center p-6 cursor-pointer hover:scale-105 transition-transform">
              <StatusGlowRing status={book.status as any}>
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-32 h-44 object-cover rounded-xl shadow-neon group-hover:rotate-3 transition-transform duration-300"
                  style={{ transform: 'perspective(600px) rotateY(6deg)' }}
                />
              </StatusGlowRing>
              <div className="mt-4 font-header text-lg text-center">{book.title}</div>
            </GlassCard>
          ))}
        </div>
      </main>
    </div>
  );
}

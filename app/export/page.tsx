import GlassCard from '@/components/ui/GlassCard';
import NeonButton from '@/components/ui/NeonButton';
import { FileText, BookOpen, File, Download } from 'lucide-react';

export default function ExportPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-matte-black">
      <div className="flex flex-col items-center">
        <div className="animate-flip-book mb-6">
          <BookOpen className="text-neon-turquoise" size={88} />
        </div>
        <GlassCard className="p-8 flex flex-col items-center gap-6">
          <h2 className="font-header text-2xl mb-2">Export Your Book</h2>
          <div className="flex gap-4">
            <NeonButton variant="violet" icon={<FileText size={20} />}>PDF</NeonButton>
            <NeonButton variant="turquoise" icon={<File size={20} />}>ePub</NeonButton>
            <NeonButton variant="amber" icon={<Download size={20} />}>TXT</NeonButton>
          </div>
          <p className="text-ghost-white/70 mt-4">Choose a format to download. Your book will glow and close as the file is prepared!</p>
        </GlassCard>
      </div>
    </main>
  );
}

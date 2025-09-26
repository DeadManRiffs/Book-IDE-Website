import GlassCard from '@/components/ui/GlassCard';
import NeonButton from '@/components/ui/NeonButton';

export default function CoverEditorPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-matte-black">
      <h1 className="font-header text-3xl mb-6 flex items-center gap-2">
        <span className="text-violet-blue">🖼️</span> Cover Editor
      </h1>
      <GlassCard className="relative flex flex-col items-center p-12">
        {/* 3D book mockup canvas placeholder */}
        <div className="w-64 h-80 bg-gradient-to-br from-violet-blue to-neon-turquoise rounded-2xl shadow-neon mb-8 flex items-center justify-center">
          <span className="text-5xl">📕</span>
        </div>
        <div className="flex gap-4 mt-4">
          <NeonButton variant="turquoise" icon={<span className="text-current">🖼️</span>}>
            🎨 Generate Cover (AI)
          </NeonButton>
          <NeonButton variant="violet" icon={<span className="text-current">💾</span>}>
            Save
          </NeonButton>
          <NeonButton variant="amber" icon={<span className="text-current">⬇️</span>}>
            Download
          </NeonButton>
        </div>
      </GlassCard>
    </main>
  );
}
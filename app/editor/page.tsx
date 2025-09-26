"use client";
import GlassCard from '@/components/ui/GlassCard';
import NeonButton from '@/components/ui/NeonButton';
import { Bold, Italic, Underline, List, Heading, Save, Undo, Redo, BookOpen, Library, Bot, Image as IconImage, Lightbulb } from 'lucide-react';
import { useState } from 'react';

export default function EditorPage() {
  const [leftPage, setLeftPage] = useState('Once upon a time...');
  const [rightPage, setRightPage] = useState('The story continues...');
  // AI typing simulation, etc.

  return (
    <div className="flex min-h-screen bg-matte-black">
      {/* Left Sidebar */}
      <aside className="w-20 bg-matte-black border-r border-white/10 flex flex-col items-center py-8">
        <Library className="text-violet-blue mb-8" size={32} />
        <BookOpen className="text-neon-turquoise mb-8" size={32} />
        {/* Add book management icons */}
      </aside>
      {/* Main Editor */}
      <main className="flex-1 flex flex-col items-center justify-center px-8 py-12">
        {/* Top Toolbar */}
        <div className="flex gap-4 mb-6">
          <NeonButton variant="turquoise" icon={<Bold size={20} />}>B</NeonButton>
          <NeonButton variant="turquoise" icon={<Italic size={20} />}>I</NeonButton>
          <NeonButton variant="turquoise" icon={<Underline size={20} />}>U</NeonButton>
          <NeonButton variant="turquoise" icon={<List size={20} />} />
          <NeonButton variant="turquoise" icon={<Heading size={20} />} />
          <NeonButton variant="turquoise" icon={<Bot size={20} />}>AI Insert</NeonButton>
        </div>
        {/* Book Spread */}
        <div className="flex gap-12 w-full max-w-5xl justify-center">
          <GlassCard className="relative w-[320px] sm:w-[360px] md:w-[420px] aspect-[210/297] p-8 text-lg font-body overflow-hidden">
            <textarea
              className="w-full h-full bg-transparent resize-none outline-none leading-relaxed"
              value={leftPage}
              onChange={e => setLeftPage(e.target.value)}
              spellCheck
            />
          </GlassCard>
          <GlassCard className="relative w-[320px] sm:w-[360px] md:w-[420px] aspect-[210/297] p-8 text-lg font-body overflow-hidden">
            <textarea
              className="w-full h-full bg-transparent resize-none outline-none leading-relaxed"
              value={rightPage}
              onChange={e => setRightPage(e.target.value)}
              spellCheck
            />
          </GlassCard>
        </div>
        {/* Bottom Toolbar */}
        <div className="flex gap-4 mt-8">
          <NeonButton variant="violet" icon={<Save size={20} />}>Save</NeonButton>
          <NeonButton variant="violet" icon={<Undo size={20} />} />
          <NeonButton variant="violet" icon={<Redo size={20} />} />
          <NeonButton variant="violet" icon={<IconImage size={20} />}>Export</NeonButton>
        </div>
      </main>
      {/* Right Sidebar */}
      <aside className="w-80 bg-matte-black border-l border-white/10 flex flex-col gap-6 py-8 px-4">
        <div className="flex items-center gap-2 font-header text-xl">
          <Bot className="text-neon-turquoise" /> AI Chat
        </div>
        <div className="flex items-center gap-2 font-header text-xl">
          <Lightbulb className="text-soft-amber" /> Suggestions
        </div>
        <div className="flex items-center gap-2 font-header text-xl">
          <IconImage className="text-violet-blue" /> Cover Editor
        </div>
        {/* More panels (prompts, etc.) */}
      </aside>
    </div>
  );
}

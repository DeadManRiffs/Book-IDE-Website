import React from 'react';
import clsx from 'clsx';

const statusMap = {
  published: 'border-status-published shadow-[0_0_8px_0_#00FF7F]',
  editing: 'border-status-editing shadow-[0_0_8px_0_#0099FF]',
  draft: 'border-status-draft shadow-[0_0_8px_0_#A0A0A0]',
};

export default function StatusGlowRing({
  status = 'draft',
  children,
}: {
  status: 'published' | 'editing' | 'draft';
  children: React.ReactNode;
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-center justify-center rounded-full border-4 p-1 transition-shadow duration-200",
        statusMap[status]
      )}
    >
      {children}
    </span>
  );
}

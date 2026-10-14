import type { ReactNode } from 'react';

/** Marco de navegador simple para capturas de proyecto (DESIGN.md §4: radio 4px, borde Tinta). */
export default function BrowserFrame({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded border-2 border-tinta bg-papel">
      <div className="border-b-2 border-tinta px-3 py-2">
        <span className="block truncate rounded bg-niebla px-3 py-1 text-sm text-tinta/75">{label}</span>
      </div>
      {children}
    </div>
  );
}

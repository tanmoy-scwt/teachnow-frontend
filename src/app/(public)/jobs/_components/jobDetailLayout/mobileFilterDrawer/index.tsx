'use client';

import JobsFilter from "../JobsFilter";


type Props = {
    open: boolean;
    setOpen: (v: boolean) => void;
};

export default function MobileFilterDrawer({ open, setOpen }: Props) {
    if (!open) return null;
    return (
        <div style={{ zIndex: 1111111111111111 }} className="fixed inset-0 bg-black/30 flex  lg:hidden border">
            <div className="w-[80vw] max-w-xs bg-white h-full p-6 shadow-lg animate-slideIn">
                <div className="flex items-center justify-between mb-5">
                    <span className="font-bold text-lg">Filters</span>
                    <button onClick={() => setOpen(false)} aria-label="Close" className="p-1">
                        ✕
                    </button>
                </div>
                <aside>
                    <JobsFilter />
                </aside>
            </div>
            <div className="flex-1" onClick={() => setOpen(false)} />
            <style jsx>{`
        @keyframes slideIn {
          from { transform: translateX(-100%); }
          to   { transform: translateX(0); }
        }
        .animate-slideIn { animation: slideIn 0.25s ease; }
      `}</style>
        </div>
    );
}

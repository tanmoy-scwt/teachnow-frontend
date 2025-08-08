'use client';

import { AiOutlineClose } from "react-icons/ai";
import JobsFilter from "../JobsFilter";


type Props = {
    open: boolean;
    setOpen: (v: boolean) => void;
};

export default function MobileFilterDrawer({ open, setOpen }: Props) {
    if (!open) return null;
    return (
        <div className="fixed z-50 inset-0 bg-black/30 flex  lg:hidden border">
            <div className="w-[80vw] max-w-xs bg-white h-full p-6 shadow-lg animate-slideIn">
                <div className="flex items-center justify-end mb-5">
                    <button
                        onClick={() => setOpen(false)}
                        aria-label="Close"
                        className="p-2 rounded bg-red-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 transition"
                    >
                        <AiOutlineClose className="w-5 h-5 text-white hover:text-red-700" />
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

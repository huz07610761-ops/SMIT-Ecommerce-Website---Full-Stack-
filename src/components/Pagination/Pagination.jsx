import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Pagination = () => {
  return (
    <div className="w-full flex items-center justify-between border-t border-black/10 pt-5 mt-8">
      <button className="flex items-center gap-2 px-3.5 py-2 border border-black/10 rounded-xl text-sm font-medium hover:bg-gray-50 cursor-pointer">
        <ArrowLeft className="w-4 h-4" /> Previous
      </button>

      <div className="flex items-center gap-1 text-sm font-medium">
        <button className="w-9 h-9 rounded-lg bg-black/5 text-black font-bold">1</button>
        <button className="w-9 h-9 rounded-lg text-black/50 hover:bg-black/5">2</button>
        <button className="w-9 h-9 rounded-lg text-black/50 hover:bg-black/5">3</button>
        <span className="px-1 text-black/40">...</span>
        <button className="w-9 h-9 rounded-lg text-black/50 hover:bg-black/5">8</button>
        <button className="w-9 h-9 rounded-lg text-black/50 hover:bg-black/5">9</button>
        <button className="w-9 h-9 rounded-lg text-black/50 hover:bg-black/5">10</button>
      </div>

      <button className="flex items-center gap-2 px-3.5 py-2 border border-black/10 rounded-xl text-sm font-medium hover:bg-gray-50 cursor-pointer">
        Next <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export default Pagination;
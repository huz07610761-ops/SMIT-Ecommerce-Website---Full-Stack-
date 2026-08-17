import React from 'react';
import { SlidersHorizontal, ChevronRight, ChevronUp, X } from 'lucide-react';

const SidebarFilter = ({ isOpen, onClose }) => {
  const categories = ['T-shirts', 'Shorts', 'Shirts', 'Hoodie', 'Jeans'];
  const colors = [
    'bg-green-500', 'bg-red-500', 'bg-yellow-400', 
    'bg-orange-500', 'bg-cyan-400', 'bg-blue-600', 
    'bg-purple-600', 'bg-pink-500', 'bg-white border', 'bg-black'
  ];
  const sizes = ['XX-Small', 'X-Small', 'Small', 'Medium', 'Large', 'X-Large', '2X-Large', '3X-Large', '4X-Large'];
  const styles = ['Casual', 'Formal', 'Party', 'Gym'];

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Filter Sidebar / Mobile Drawer */}
      <aside className={`
        fixed md:static inset-x-0 bottom-0 z-50 md:z-auto
        w-full md:w-[295px] max-h-[85vh] md:max-h-none overflow-y-auto md:overflow-visible
        border border-black/10 rounded-t-[30px] md:rounded-3xl p-5 bg-white 
        flex flex-col gap-6 transition-transform duration-300
        ${isOpen ? 'translate-y-0' : 'translate-y-full md:translate-y-0'}
      `}>
        {/* Title */}
        <div className="flex justify-between items-center pb-4 border-b border-black/10 font-[satoshi]">
          <h3 className="text-xl font-bold text-black font-[satoshi]">Filters</h3>
          <SlidersHorizontal className="hidden md:block w-5 h-5 text-black/60" />
          <button onClick={onClose} className="md:hidden p-1 text-black">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Categories */}
        <div className="flex flex-col gap-3 pb-4 border-b border-black/10 text-black/60 text-sm">
          {categories.map((cat, idx) => (
            <div key={idx} className="flex font-[satoshi] justify-between items-center cursor-pointer hover:text-black">
              <span>{cat}</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          ))}
        </div>

        {/* Price */}
        <div className="pb-4 border-b border-black/10">
          <div className="flex justify-between items-center mb-3">
            <h4 className="font-bold text-black">Price</h4>
            <ChevronUp className="w-4 h-4 cursor-pointer" />
          </div>
          <input type="range" min="50" max="200" className="w-full accent-black cursor-pointer" />
          <div className="flex justify-between text-xs font-bold text-black mt-2">
            <span>$50</span>
            <span>$200</span>
          </div>
        </div>

        {/* Colors */}
        <div className="pb-4 border-b border-black/10">
          <div className="flex justify-between items-center mb-3">
            <h4 className="font-bold text-black">Colors</h4>
            <ChevronUp className="w-4 h-4 cursor-pointer" />
          </div>
          <div className="flex flex-wrap gap-2">
            {colors.map((color, idx) => (
              <button key={idx} className={`w-8 h-8 rounded-full ${color} cursor-pointer`} />
            ))}
          </div>
        </div>

        {/* Size */}
        <div className="pb-4 border-b border-black/10">
          <div className="flex justify-between items-center mb-3">
            <h4 className="font-bold text-black">Size</h4>
            <ChevronUp className="w-4 h-4 cursor-pointer" />
          </div>
          <div className="flex flex-wrap gap-1.5">
            {sizes.map((size, idx) => (
              <button
                key={idx}
                className={`px-3 py-1.5 rounded-full text-xs font-medium ${
                  size === 'Large' ? 'bg-black text-white' : 'bg-[#F0F0F0] text-black/60'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Dress Style */}
        <div className="pb-2">
          <div className="flex justify-between items-center mb-3">
            <h4 className="font-bold text-black">Dress Style</h4>
            <ChevronUp className="w-4 h-4 cursor-pointer" />
          </div>
          <div className="flex flex-col gap-3 text-black/60 text-sm">
            {styles.map((style, idx) => (
              <div key={idx} className="flex justify-between items-center cursor-pointer hover:text-black">
                <span>{style}</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            ))}
          </div>
        </div>

        {/* Apply Filter Button */}
        <button className="w-full py-3.5 bg-black text-white text-sm font-medium rounded-full">
          Apply Filter
        </button>
      </aside>
    </>
  );
};

export default SidebarFilter;
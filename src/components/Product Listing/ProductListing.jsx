import React from 'react';
import ProductCard from '../Card/Card';
import Pagination from '../Pagination/Pagination';
import { ChevronDown, SlidersHorizontal } from 'lucide-react';

const ProductListing = ({ products, onOpenFilter }) => {  
  return (
    <div className="flex-1 flex flex-col">
      {/* Header Bar */}
      <div className="flex flex-row items-center justify-between sm:flex-row sm:items-center gap-2 mb-6">
        <div className="flex items-baseline gap-2 sm:gap-3">
          <h1 className="text-2xl sm:text-3xl font-extrabold font-[satoshi] text-black">Casual</h1>
          <span className="text-xs sm:text-sm text-black/60 font-[satoshi]">Showing 1-10 of 100 Products</span>
        </div>
        
        <div className="flex items-center gap-3 text-sm text-black/60 font-[satoshi]">
          <div className="md:flex hidden items-center gap-1 text-black font-medium cursor-pointer">
            <span>Sort by: <strong className="font-bold">Most Popular</strong></span>
            <ChevronDown className="w-4 h-4" />
          </div>

          {/* Filter Button for Mobile */}
          <button 
            onClick={onOpenFilter}
            className="md:hidden w-8 h-8 bg-[#F0F0F0] rounded-full flex items-center justify-center cursor-pointer"
          >
            <SlidersHorizontal className="w-4 h-4 text-black" />
          </button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
        {products.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>

      {/* Pagination */}
      <Pagination />
    </div>
  );
};

export default ProductListing;
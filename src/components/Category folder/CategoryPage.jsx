import React, { useState } from 'react';
import Breadcrumb from '../bread crumb/Bread_Crumb';
import SidebarFilter from '../Sidebar Filter/SidebarFilter';
import ProductListing from '../Product Listing/ProductListing';
import { Product } from '../../utils/data'

const CategoryPage = () => {
  const [products] = useState(Product);
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 pb-16 font-sans">
      <Breadcrumb />
      
      <div className="flex flex-col md:flex-row gap-6 mt-4">
        {/* Sidebar Filter */}
        <SidebarFilter />

        {/* Main Product Section */}
        <ProductListing products={products}
        onOpenFilter={() => setIsFilterOpen(true)}
        />
      </div>
    </div>
  );
};

export default CategoryPage;
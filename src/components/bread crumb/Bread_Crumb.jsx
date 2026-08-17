import React from 'react';

const Breadcrumb = () => {
  return (
    <nav className="text-sm text-black/60 my-4 px-4 md:px-0">
      <span className="hover:text-black cursor-pointer">Home</span>
      <span className="mx-2">&gt;</span>
      <span className="text-black font-medium">Casual</span>
    </nav>
  );
};

export default Breadcrumb;
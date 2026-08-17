import React, { useState } from 'react';
import { Star, Minus, Plus, Check } from 'lucide-react';
import { Product } from '../../utils/data';
import { useParams } from 'react-router-dom';

function Product_Details() {
  // 1. URL se ID read karna
  const { id } = useParams()

  // 2. Data Find karna based on ID
  const product = Product.find((p) => p.id === id) || productsData[0];

  // 3. Local States
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState("Large");
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 font-[satoshi]">
      
      {/* Breadcrumb */}
      <nav className="text-sm text-black/60 mb-6 flex items-center gap-2 font-[satoshi]">
        <span>Home</span> &gt; <span>Shop</span> &gt; <span>Men</span> &gt; <span className="text-black font-medium">T-shirts</span>
      </nav>

      {/* Main Details Section */}
      <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
        
        {/* Left Side: Image Gallery */}
        <div className="w-full md:w-[50%] flex flex-col-reverse md:flex-row gap-4">
          
          {/* Thumbnails List */}
          <div className="flex md:flex-col gap-3 justify-between md:justify-start">
            {product.images.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(img)}
                className={`w-[28%] md:w-[130px] h-[100px] md:h-[140px] bg-[#F0EEED] rounded-2xl overflow-hidden border-2 cursor-pointer transition ${
                  selectedImage === img ? 'border-black' : 'border-transparent'
                }`}
              >
                <img src={img} alt="thumb" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          {/* Main Selected Image */}
          <div className="w-full h-[350px] sm:h-[450px] md:h-[500px] bg-[#F0EEED] rounded-3xl overflow-hidden flex items-center justify-center">
            <img src={selectedImage} alt={product.title} className="w-full h-full object-cover" />
          </div>

        </div>

        {/* Right Side: Product Details */}
        <div className="w-full md:w-[50%] flex flex-col justify-start">
          
          {/* Title */}
          <h1 className="text-2xl font-[Integral_CF] sm:text-3xl md:text-4xl font-extrabold uppercase text-black">
            {product.name}
          </h1>

          {/* Rating */}
          <div className='flex items-center text-yellow-500 mt-3 mb-3'>
            {Array.isArray(product.rating) && product.rating.map((StarIcon, index) => {
              const Component = StarIcon;
              return <Component key={index} className="w-4.5 h-4.5 sm:w-5 sm:h-5" />;
            })}
          </div>

          {/* Price */}
          <div className="flex items-center gap-3 my-1">
            <span className="text-2xl sm:text-3xl font-bold text-black">{product.price}</span>
            {product.originalPrice && (
                <>
              <span className="text-2xl sm:text-3xl font-bold text-black/30 line-through">
                ${product.originalPrice}
              </span>
              </>
            )}
            {product.delPrice && (
                <>
              <span className="text-2xl sm:text-3xl font-bold text-black/30 line-through">
                {product.delPrice}
              </span>
              </>
            )}

            {product.Off_Price && (
              <span className="text-xs sm:text-sm font-medium text-[#FF3333] bg-[#FF3333]/10 px-3 py-1 rounded-full">
                {product.Off_Price}
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-[16px] font-[satoshi] capitalize  text-black/60 leading-relaxed my-4 pb-6 border-b border-black/10">
            {product.description}
          </p>

          {/* Select Colors */}
          <div className="pb-6 border-b border-black/10">
            <p className="text-sm text-black/60 mb-3">Select Colors</p>
            <div className="flex items-center gap-3">
              {product.colors.map((color, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedColor(color)}
                  style={{ backgroundColor: color }}
                  className="w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition hover:scale-105"
                >
                  {selectedColor === color && <Check className="w-4 h-4 text-white" />}
                </button>
              ))}
            </div>
          </div>

          {/* Choose Size */}
          <div className="py-6 border-b border-black/10">
            <p className="text-sm text-black/60 mb-3">Choose Size</p>
            <div className="flex flex-wrap gap-3">
              {product.sizes.map((size, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedSize(size)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition cursor-pointer ${
                    selectedSize === size
                      ? 'bg-black text-white'
                      : 'bg-[#F0F0F0] text-black/60 hover:bg-black/10'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity & Add to Cart */}
          <div className="pt-6 flex gap-4">
            
            {/* Quantity Selector */}
            <div className="w-[120px] sm:w-[150px] bg-[#F0F0F0] rounded-full flex items-center justify-between px-4 py-3">
              <button 
                onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
                className="cursor-pointer text-black hover:opacity-70"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="font-bold text-sm sm:text-base">{quantity}</span>
              <button 
                onClick={() => setQuantity((prev) => prev + 1)}
                className="cursor-pointer text-black hover:opacity-70"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            {/* Add to Cart Button */}
            <button className="flex-1 bg-black hover:bg-black/90 text-white font-medium text-sm sm:text-base py-3.5 rounded-full transition active:scale-95 cursor-pointer">
              Add to Cart
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Product_Details
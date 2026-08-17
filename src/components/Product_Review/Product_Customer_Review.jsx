import React, { useState } from 'react';
import { FaStar, FaCheckCircle, FaSlidersH, FaChevronDown, FaEllipsisH } from 'react-icons/fa';

function Product_Customer_Review() {
    const [activeTab, setActiveTab] = useState('Rating & Reviews');

        const reviewsData = [
    {
        id: 1,
        name: "Samantha D.",
        verified: true,
        rating: 4.5,
        comment: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
        date: "Posted on August 14, 2023"
    },
    {
        id: 2,
        name: "Alex M.",
        verified: true,
        rating: 4.5,
        comment: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
        date: "Posted on August 15, 2023"
    },
    {
        id: 3,
        name: "Ethan R.",
        verified: true,
        rating: 4.5,
        comment: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
        date: "Posted on August 16, 2023"
    },
    {
        id: 4,
        name: "Olivia P.",
        verified: true,
        rating: 4.5,
        comment: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
        date: "Posted on August 17, 2023"
    },
    {
        id: 5,
        name: "Liam K.",
        verified: true,
        rating: 4.5,
        comment: "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
        date: "Posted on August 18, 2023"
    },
    {
        id: 6,
        name: "Ava H.",
        verified: true,
        rating: 4.5,
        comment: "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
        date: "Posted on August 19, 2023"
    }
    ];


  return (
    <div className='w-full py-2'>
      <div className="w-full max-w-[1200px] mx-auto py-2">


    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 mt-12 font-[satoshi]">
      
      {/* 1. Top Navigation Tabs */}
      <div className="flex justify-between items-center border-b border-black/10">
        <button
          onClick={() => setActiveTab('Product Details')}
          className={`flex-1 text-center py-4 text-sm sm:text-base md:text-lg font-medium cursor-pointer transition relative ${
            activeTab === 'Product Details' ? 'text-black border-b-2 border-black font-bold' : 'text-black/60 hover:text-black'
          }`}
        >
          Product Details
        </button>

        <button
          onClick={() => setActiveTab('Rating & Reviews')}
          className={`flex-1 text-center py-4 text-sm sm:text-base md:text-lg font-medium cursor-pointer transition relative ${
            activeTab === 'Rating & Reviews' ? 'text-black border-b-2 border-black font-bold' : 'text-black/60 hover:text-black'
          }`}
        >
          Rating & Reviews
        </button>

        <button
          onClick={() => setActiveTab('FAQs')}
          className={`flex-1 text-center py-4 text-sm sm:text-base md:text-lg font-medium cursor-pointer transition relative ${
            activeTab === 'FAQs' ? 'text-black border-b-2 border-black font-bold' : 'text-black/60 hover:text-black'
          }`}
        >
          FAQs
        </button>
      </div>

      {/* 2. Tab Content */}
      {activeTab === 'Rating & Reviews' && (
        <div className="mt-8">
          
          {/* Header Controls */}
          <div className="flex items-center justify-between gap-2 mb-6">
            <div className="flex items-baseline gap-1.5">
              <h2 className="text-lg sm:text-2xl font-bold text-black">All Reviews</h2>
              <span className="text-xs sm:text-sm text-black/60 font-normal">(451)</span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              {/* Filter Button */}
              <button className="w-10 h-10 bg-[#F0F0F0] rounded-full flex items-center justify-center cursor-pointer hover:bg-black/10 transition">
                <FaSlidersH className="text-black text-sm" />
              </button>

              {/* Sorting Dropdown */}
              <div className="hidden sm:flex items-center gap-2 bg-[#F0F0F0] px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium cursor-pointer">
                <span>Latest</span>
                <FaChevronDown className="text-black text-xs" />
              </div>

              {/* Write a Review Button */}
              <button className="bg-black hover:bg-black/90 text-white text-xs sm:text-sm font-medium px-4 sm:px-5 py-2.5 rounded-full transition cursor-pointer">
                Write a Review
              </button>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {reviewsData.map((review) => (
              <div
                key={review.id}
                className="border border-black/10 rounded-[20px] p-5 sm:p-7 flex flex-col justify-between gap-3 bg-white"
              >
                <div>
                  {/* Rating Stars & More Option */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex text-amber-400 gap-1 text-sm sm:text-base">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                    <button className="text-black/40 hover:text-black cursor-pointer">
                      <FaEllipsisH />
                    </button>
                  </div>

                  {/* User Name & Verified Icon */}
                  <div className="flex items-center gap-1.5 mb-2">
                    <h3 className="font-bold text-base sm:text-lg text-black">{review.name}</h3>
                    {review.verified && (
                      <FaCheckCircle className="text-green-500 text-sm sm:text-base" />
                    )}
                  </div>

                  {/* Comment */}
                  <p className="text-xs sm:text-sm text-black/60 leading-relaxed font-normal">
                    "{review.comment}"
                  </p>
                </div>

                {/* Date */}
                <span className="text-xs sm:text-sm text-black/50 font-medium mt-2">
                  {review.date}
                </span>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="flex justify-center mt-9 mb-12">
            <button className="px-9 py-3 border border-black/10 rounded-full text-xs sm:text-sm font-medium hover:bg-black hover:text-white transition cursor-pointer">
              Load More Reviews
            </button>
          </div>

        </div>
      )}

      {/* Placeholder for other tabs */}
      {activeTab === 'Product Details' && (
        <div className="py-12 text-center text-black/60">
          Product Details content goes here...
        </div>
      )}

      {activeTab === 'FAQs' && (
        <div className="py-12 text-center text-black/60">
          Frequently Asked Questions go here...
        </div>
      )}

    </div>
      </div>
    </div>
  )
}

export default Product_Customer_Review

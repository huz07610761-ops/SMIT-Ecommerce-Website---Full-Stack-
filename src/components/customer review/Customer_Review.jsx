import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight, Check, Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Sarah M.",
    review:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    rating: 5,
  },
  {
    id: 2,
    name: "Alex K.",
    review:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    rating: 5,
  },
  {
    id: 3,
    name: "James L.",
    review:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    rating: 5,
  },
  {
    id: 4,
    name: "Mooen K.",
    review:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point.",
    rating: 5,
  },
];

const TestimonialsSlider = () => {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const { scrollLeft } = sliderRef.current;
      const scrollAmount = 320; // Exact width scroll
      sliderRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="w-full py-12 bg-white overflow-hidden ">
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-6 ">
        
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-4xl font-[Integral_CF] tracking-tight text-black ">
            OUR HAPPY CUSTOMERS
          </h2>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => scroll('left')}
              className="p-1.5 hover:opacity-70 transition cursor-pointer"
              aria-label="Previous Slide"
            >
              <ArrowLeft className="w-5 h-5 text-black" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-1.5 hover:opacity-70 transition cursor-pointer"
              aria-label="Next Slide"
            >
              <ArrowRight className="w-5 h-5 text-black" />
            </button>
          </div>
        </div>

        {/* Cards Container */}
        <div
          ref={sliderRef}
          className="flex space-x-4 overflow-x-auto scrollbar-none scroll-smooth pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {reviews.map((item) => (
            <div
              key={item.id}
              className="min-w-[260px] sm:min-w-[300px] md:min-w-[320px] max-w-[320px] flex-shrink-0 bg-white border border-black/10 rounded-2xl p-5 flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex space-x-1 text-amber-400 mb-2.5">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <div className="flex items-center space-x-1.5 mb-2">
                  <span className="text-base font-bold text-black">{item.name}</span>
                  <span className="bg-[#01ab31] text-white rounded-full p-[2px] flex items-center justify-center">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </span>
                </div>

                <p className="text-black/60 text-xs sm:text-sm leading-relaxed">
                  "{item.review}"
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSlider;
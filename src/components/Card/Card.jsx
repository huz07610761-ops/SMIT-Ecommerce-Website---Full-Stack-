import React from 'react'

function Card({ data }) {
  return (
    <div className='w-full md:w-[260px] h-auto md:h-[330px] rounded-xl flex flex-col'>
      {/* Image Container */}
      <div className='w-full h-[180px] sm:h-[220px] md:h-[70%] bg-[#F0EEED] rounded-xl overflow-hidden flex items-center justify-center'>
        <img 
          src={data.img} 
          alt={data.name || "Product Image"} 
          className='w-full h-full object-cover' 
        />
      </div>

      {/* Content Details */}
      <div className='w-full px-1 sm:px-2 py-2 flex flex-col gap-1 md:gap-1.5'>
        {/* Product Title */}
        <h3 className='font-[satoshi] font-[800] text-[15px] sm:text-[18px] md:text-[20px] tracking-wide truncate'>
          {data.name}
        </h3>

        {/* Rating Stars & Count */}
        <div className='flex items-center gap-1 flex-wrap'>
          <div className='flex items-center text-yellow-500'>
            {Array.isArray(data.rating) && data.rating.map((StarIcon, index) => {
              const Component = StarIcon;
              return <Component key={index} className="w-3.5 h-3.5 sm:w-4 sm:h-4" />;
            })}
          </div>
          
          {data.rating_Count && (
            <p className='font-[satoshi] text-[12px] sm:text-[14px] text-black font-medium ml-1'>
              {data.rating_Count}<span className='text-gray-400'>/5</span>
            </p>
          )}
        </div>

        {/* Price & Discount */}
        <p className='font-[satoshi] font-[800] text-[16px] sm:text-[18px] flex items-center gap-1.5 flex-wrap mt-0.5'>
          {data.price} 
          {data.delPrice && (
            <del className="text-gray-400 font-normal">{data.delPrice}</del>
          )}
          {data.Off_Price && (
            <span className='bg-red-300/40 text-red-600 px-2 py-0.5 rounded-full text-[10px] sm:text-[12px]'>
              {data.Off_Price}
            </span>
          )}
        </p>
      </div>
    </div>
  )
}

export default Card
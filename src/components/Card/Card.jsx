import React from 'react'

function Card({data}) {
  console.log(data.rating)
  return (
    <div className='w-[260px] h-[330px]  rounded-xl'>
      <div className='w-full h-[70%]  rounded-xl overflow-hidden'>
        <img src={data.img} alt="orange Shirt" className='w-full h-full object-cover' />
      </div>
      <div className='w-full h-[30%]  px-2 py-1 flex flex-col gap-1.5'>
        <h3 className='font-[satoshi] font-[800] text-[20px] tracking-wide'>{data.name}</h3>
        <div className='flex  items-center'>
          {data.rating.map((data)=>(
            <span className='text-yellow-500'><data /></span>
          ))}
            <span>
            <p className='font-[satoshi] text-[14px]'>{data.rating_Count}<span className='text-gray-400'>5</span></p>
            </span>
        </div>
        <p className='font-[satoshi] font-[800] text-[18px]'>{data.price} <del className="text-gray-400">{data.delPrice}</del><span className='bg-red-300/40 text-red-600 px-3 py-1 rounded-full text-[12px] ml-2'>{data.Off_Price}</span></p>
      </div>
    </div>
  )
}

export default Card

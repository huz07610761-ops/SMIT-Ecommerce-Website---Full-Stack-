import React from 'react'

function Button({name}) {
  return (
      <button className='font-[satoshi] capitalize border px-6 py-2 cursor-pointer transition-all duration-400 hover:rounded-lg  hover:bg-black hover:text-white active:scale-110'>
        {name}
      </button>
  )
}

export default Button

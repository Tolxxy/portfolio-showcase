import React from 'react'

function Introduction() {
  return (
    <div className='flex justify-center flex-col items-center '>
        <div className='h-[120px] border-r-[1px] mt-[-1px]'/>
        <div className='w-[5px] h-[5px] bg-green-600 rounded-full'></div>
        <h2 className='mt-5 text-black font-medium text-[13px] tracking-widest'>HELLO! MY NAME IS</h2>
        <h2 className='text-[70px] font-bold text-black tracking-widest mt-5'>OGUNTUASE <br></br>TOLUWALOPE</h2>
        <img src='/profile-pic.png' className='w-[160px] h-[165px] bg-gray-200 p-7 rounded-full mt-7'></img>
    </div>
  )
}

export default Introduction
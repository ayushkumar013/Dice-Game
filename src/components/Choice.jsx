import React, { useState } from 'react'

function Choice ({error ,seterror,SelectNumber,SetSelectNumber}
) {
    const Number=[1,2,3,4,5,6];
    const numberhandler =(value)=>{
      SetSelectNumber(value)
      seterror("")
    }
  return (
    <>
    <div className='py-[10vw] relative'>
      
    <p className='font-bold text-red-500 text-xl flex absolute right-[5rem]  top-[1rem]'>{error}</p>
      <div className="flex absolute gap-2 right-20 top-[3vw]">
    {
        Number.map((value,i) => (
   <div 
   onClick={()=> numberhandler(value) }
   className={`border-2 border-black w-[72px] h-[72px] cursor-pointer flex items-center justify-center font-extrabold text-3xl ${
    value === SelectNumber ? 'bg-black text-white' : 'bg-white text-black'
  }`}>{value}</div>
         
        ))
    }
    </div>
    <p className="font-bold text-2xl flex absolute right-[5rem] underline underline-offset-1 top-[7.5rem]">Select Number</p>
   
    </div> </>
  )
}

export default Choice
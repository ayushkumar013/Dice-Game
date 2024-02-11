import React from 'react';

function Start({ toggle }) {
  return (
    <>
      <div className='overflow-hidden relative flex items-center '>
        <img src="dices.png" alt="" />
        <span className="px-[5rem] flex items-center  gap-2 tracking-tight font-bold text-8xl">
          Dice Game
        </span>
        <button
          onClick={toggle}
          className="absolute top-[22.5rem] 
          flex items-center justify-center
          left-[55.5rem]
          bg-white
          hover:bg-black
          hover:text-white 
          hover:font-semibold 
          font-semibold
          text-black
          text-xl
          gap-5
          border-2 border-zinc-900
          w-[8rem]
          h-12 rounded-[20px]
          px-1 py-2">
          Start
        </button>
      </div>
    </>
  );
}

export default Start;


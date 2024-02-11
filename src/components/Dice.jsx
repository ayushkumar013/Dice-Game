
import React, { useState } from 'react';
import Rules from './rules';

function Dice({ reset, currentDice, roll }) {
  const [rule, setRule] = useState(false);

  return (
    <div className='relative'>
      <div
        onClick={roll}
        className='absolute top-[1rem] flex items-center left-[30rem] justify-center cursor-pointer'
      >
        <img src={`/Roll/dice_${currentDice}.png`} alt={`Dice ${currentDice}`} />
      </div>
      <p className="absolute top-[16.5rem] font-semibold flex items-center left-[33.5rem] justify-center">
        Click on Dice to roll
      </p>
      <button
        onClick={reset}
        className="absolute top-[9.5rem] 
          flex items-center justify-center
          left-[48.5rem] 
          bg-white
          hover:bg-black
          hover:text-white 
          hover:font-semibold 
          font-semibold
          text-black
          border-2 border-zinc-900
          w-[8rem]
          h-12  rounded-[20px]
          px-1 py-2"
      >
        Reset Score
      </button>
      <button
        onClick={() => setRule((prev) => !prev)}
        className="absolute top-[12.75rem] 
          flex items-center justify-center
          left-[48.5rem] 
          bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 
          font-semibold
          border-2 border-zinc-900
          w-[8rem]
          h-12 rounded-[20px]
          px-1 py-2"
      >
        {rule ? 'Hide' : 'Rule Book'}
      </button>
      {rule && <Rules/>}
    </div>
  );
}

export default Dice;
